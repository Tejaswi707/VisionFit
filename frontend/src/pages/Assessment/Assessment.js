import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assessment.css';
import ageImg from '../../assets/age.png';
import heightImg from '../../assets/height.png';
import weightImg from '../../assets/weight.png';
import sleepImg from '../../assets/sleep.png';
import genderImg from '../../assets/gender.png';

const Assessment = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    sleep: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/menu/dashboard', { state: formData }); // ✅ send data to dashboard route
  };

  return (
        <div className="assessment-wrapper">
      <h2 className="assessment-title">Fill Your Details</h2>
      <form className="assessment-grid" onSubmit={handleSubmit}>
        <div className="input-card">
          <img src={ageImg} alt="Age" />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="input-card">
          <img src={heightImg} alt="Height" />
          <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} required />
        </div>
        <div className="input-card">
          <img src={weightImg} alt="Weight" />
          <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
        </div>
        <div className="input-card">
          <img src={sleepImg} alt="Sleep" />
          <input type="number" name="sleep" placeholder="Sleep (hrs)" value={formData.sleep} onChange={handleChange} required />
        </div>
        <div className="input-card">
          <img src={genderImg} alt="Gender" />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Assessment;
