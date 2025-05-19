import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';
import ageImg from '../../assets/age.png';
import heightImg from '../../assets/height.png';
import weightImg from '../../assets/weight.png';
import genderImg from '../../assets/gender.png';
import sleepImg from '../../assets/sleep.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const location = useLocation();
  const formData = location.state || {};

  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [sleep, setSleep] = useState('');

  useEffect(() => {
    if (formData) {
      setAge(formData.age);
      setHeight(formData.height);
      setWeight(formData.weight);
      setGender(formData.gender);
      setSleep(formData.sleep);
    }
  }, [formData]);

  const calculateBMI = (weight, height) => {
    if (!weight || !height) return '—';
    return (weight / (height / 100) ** 2).toFixed(2);
  };

  const waterIntake = [2.5, 3, 2.8, 2.7, 2.9, 3.1, 3.2];

  const waterData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water Intake (L)',
        data: waterIntake,
        backgroundColor: '#6c63ff',
        borderColor: '#1cc88a',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Health Dashboard</h1>

      <div className="card-row">
        <div className="info-card"><strong>Age:</strong> {age ? `${age} years` : '—'}</div>
        <div className="info-card"><strong>Height:</strong> {height ? `${height} cm` : '—'}</div>
        <div className="info-card"><strong>Weight:</strong> {weight ? `${weight} kg` : '—'}</div>
        <div className="info-card"><strong>BMI:</strong> {calculateBMI(weight, height)}</div>
        <div className="info-card"><strong>Gender:</strong> {gender || '—'}</div>
        <div className="info-card"><strong>Sleep Time:</strong> {sleep ? `${sleep} hours` : '—'}</div>
      </div>

      <div className="chart-box">
        <h2>Water Intake (7 days)</h2>
        <Bar data={waterData} />
      </div>
    </div>
  );
};

export default Dashboard;
