import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import introbg from '../../assets/introbg.jpg';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${introbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right-down',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        // margin: 15,
        // filter: 'blur(4px)', /* or 6px or 10px depending on your vibe */
        padding :100,
        width: '100vw',
      }}
    >
    {/* // <div className="intro-container" style={{ backgroundImage: `url(${introbg})` }}> */}
      {/* <h1>VisionFit.</h1> */}
      <h1 style={{ color: 'white', 
                   marginTop: '-2rem', 
                   textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
                   fontSize:'5rem' }}>VisionFit.</h1>


      <center>
      <p style={{
          textAlign: 'center',
          fontSize: '1.5rem', // increase this if you want bigger, like 2rem
          fontWeight: 'bold',
          marginTop: '-0.4rem', 
          color: 'white',
          textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
          }}> Smart Virtual Fitness Trainer</p>
      </center>

      <div className="intro-buttons">
        <button className="get-started"  onClick={() => navigate('/Login')}>Get Started</button>
        {/* <button className="login" onClick={() => navigate('/Login')}>Login</button> */}
      </div>

      <div className="features">
        <div className="feature-card">
          <i className="icon">🧠</i>
          <h3>Smart Analysis</h3>
          <p>Uses AI to analyze your fitness profile and recommend the perfect routine</p>
        </div>
        <div className="feature-card">
          <i className="icon">🔗</i>
          <h3>Custom Workouts</h3>
          <p>Personalized exercise plans tailored to your fitness level and goals</p>
        </div>
        <div className="feature-card">
          <i className="icon">💜</i>
          <h3>Nutrition Guide</h3>
          <p>Get diet recommendations based on your body metrics and health goals</p>
        </div>
        <div className="feature-card">
          <i className="icon">📷</i>
          <h3>Real-time Tracking</h3>
          <p>Webcam-based exercise feedback to ensure proper form and technique</p>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Intro.css';

// export default function Intro() {
//   const navigate = useNavigate();

//   return (
//     <div className="intro-container">
//       <h1>VisionFit.</h1>
//       <p aligntext="center">Your personal AI-powered fitness companion that adapts to your unique needs</p>

//       <div className="intro-buttons">
//         <button className="get-started" onClick={() => navigate('/Login')}>Get Started</button>
//       </div>

//       <div className="features">
//         <div className="feature-card">
//           <i className="icon">🧠</i>
//           <h3>Smart Analysis</h3>
//           <p>Uses AI to analyze your fitness profile and recommend the perfect routine</p>
//         </div>
//         <div className="feature-card">
//           <i className="icon">🔗</i>
//           <h3>Custom Workouts</h3>
//           <p>Personalized exercise plans tailored to your fitness level and goals</p>
//         </div>
//         <div className="feature-card">
//           <i className="icon">💜</i>
//           <h3>Nutrition Guide</h3>
//           <p>Get diet recommendations based on your body metrics and health goals</p>
//         </div>
//         <div className="feature-card">
//           <i className="icon">📷</i>
//           <h3>Real-time Tracking</h3>
//           <p>Webcam-based exercise feedback to ensure proper form and technique</p>
//         </div>
//       </div>
//     </div>
//   );
// }
