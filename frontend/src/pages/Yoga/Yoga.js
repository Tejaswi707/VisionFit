import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import React, { useRef, useState, useEffect } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import Webcam from 'react-webcam';
import { count } from '../../utils/music';

import Instructions from '../../components/Instrctions/Instructions';
import DropDown from '../../components/DropDown/DropDown';
import { poseImages } from '../../utils/pose_images';
import { POINTS, keypointConnections } from '../../utils/data';
import { drawPoint, drawSegment } from '../../utils/helper';

import './Yoga.css';

let skeletonColor = 'rgb(255,255,255)';
let poseList = [
  'Tree', 'Chair', 'Cobra', 'Warrior', 'Dog',
  'Shoulderstand', 'Traingle'
];
let interval;
let flag = false;

function Yoga() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [startingTime, setStartingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [poseTime, setPoseTime] = useState(0);
  const [bestPerform, setBestPerform] = useState(0);
  const [currentPose, setCurrentPose] = useState('Tree');
  const [isStartPose, setIsStartPose] = useState(false);

  useEffect(() => {
    const timeDiff = (currentTime - startingTime) / 1000;
    if (flag) setPoseTime(timeDiff);
    if (timeDiff > bestPerform) setBestPerform(timeDiff);
  }, [currentTime]);

  useEffect(() => {
    setCurrentTime(0);
    setPoseTime(0);
    setBestPerform(0);
  }, [currentPose]);

  const CLASS_NO = {
    Chair: 0, Cobra: 1, Dog: 2, No_Pose: 3,
    Shoulderstand: 4, Traingle: 5, Tree: 6, Warrior: 7,
  };

  function get_center_point(landmarks, left, right) {
    let l = tf.gather(landmarks, left, 1);
    let r = tf.gather(landmarks, right, 1);
    return tf.add(tf.mul(l, 0.5), tf.mul(r, 0.5));
  }

  function get_pose_size(landmarks, mult = 2.5) {
    let hips = get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP);
    let shoulders = get_center_point(landmarks, POINTS.LEFT_SHOULDER, POINTS.RIGHT_SHOULDER);
    let torso = tf.norm(tf.sub(shoulders, hips));
    let center = tf.expandDims(get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP), 1);
    center = tf.broadcastTo(center, [1, 17, 2]);
    let d = tf.gather(tf.sub(landmarks, center), 0, 0);
    let max_dist = tf.max(tf.norm(d, 'euclidean', 0));
    return tf.maximum(tf.mul(torso, mult), max_dist);
  }

  function normalize_pose_landmarks(landmarks) {
    let center = tf.expandDims(get_center_point(landmarks, POINTS.LEFT_HIP, POINTS.RIGHT_HIP), 1);
    center = tf.broadcastTo(center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, center);
    let size = get_pose_size(landmarks);
    return tf.div(landmarks, size);
  }

  function landmarks_to_embedding(landmarks) {
    landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    return tf.reshape(landmarks, [1, 34]);
  }

  const runMovenet = async () => {
    const detectorConfig = { modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER };
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
    const poseClassifier = await tf.loadLayersModel('https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json');
    const countAudio = new Audio(count);
    countAudio.loop = true;

    interval = setInterval(() => {
      detectPose(detector, poseClassifier, countAudio);
    }, 100);
  };

  const detectPose = async (detector, poseClassifier, countAudio) => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      try {
        const keypoints = pose[0].keypoints;
        let input = keypoints.map((keypoint) => {
          if (keypoint.score > 0.4) {
            if (keypoint.name !== 'left_eye' && keypoint.name !== 'right_eye') {
              drawPoint(ctx, keypoint.x, keypoint.y, 8, 'rgb(255,255,255)');
              keypointConnections[keypoint.name]?.forEach((conn) => {
                const conName = conn.toUpperCase();
                drawSegment(ctx, [keypoint.x, keypoint.y],
                  [keypoints[POINTS[conName]].x, keypoints[POINTS[conName]].y], skeletonColor);
              });
            }
          }
          return [keypoint.x, keypoint.y];
        });

        const processedInput = landmarks_to_embedding(input);
        const classification = poseClassifier.predict(processedInput);
        classification.array().then((data) => {
          const classNo = CLASS_NO[currentPose];
          if (data[0][classNo] > 0.97) {
            if (!flag) {
              countAudio.play();
              setStartingTime(Date.now());
              flag = true;
            }
            setCurrentTime(Date.now());
            skeletonColor = 'rgb(0,255,0)';
          } else {
            flag = false;
            skeletonColor = 'rgb(255,255,255)';
            countAudio.pause();
            countAudio.currentTime = 0;
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  function startYoga() {
    setIsStartPose(true);
    runMovenet();
  }

  function stopPose() {
    setIsStartPose(false);
    clearInterval(interval);
  }

  if (isStartPose) {
    return (
      <div className="yoga-container">
        <div className="video-canvas-container">
          <div className="video-box">
            <div style={{ position: 'relative' }}>
              <Webcam
                ref={webcamRef}
                id="webcam"
                width="640"
                height="480"
              />
              <canvas
                ref={canvasRef}
                id="my-canvas"
                width="640"
                height="480"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>

          <div className="pose-box">
  <div className="pose-performance">
    <h4>Pose Time: {poseTime.toFixed(1)} s</h4>
    <h4>Best: {bestPerform.toFixed(1)} s</h4>
  </div>

  <img src={poseImages[currentPose]} className="pose-img" alt={currentPose} />

  <button onClick={stopPose} className="secondary-btn">Stop Pose</button>

  <h2 className="exercise-name">Currently Performing: <strong>{currentPose}</strong></h2>
</div>

        </div>
      </div>
    );
  }

  return (
    <div className="yoga-container">
      <DropDown poseList={poseList} currentPose={currentPose} setCurrentPose={setCurrentPose} />
      <Instructions currentPose={currentPose} />
      <button onClick={startYoga} className="secondary-btn" color='purple'>Start Pose</button>
    </div>
  );
}

export default Yoga;
