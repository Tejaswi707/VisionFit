import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Intro from './pages/Intro/Intro';
import Login from './pages/Login/Logins';
import Menu from './pages/Menu/Menu';
import Dashboard from './pages/Dashboard/Dashboard';
import Assessment from './pages/Assessment/Assessment';
import Yoga from './pages/Yoga/Yoga';
import About from './pages/About/About';
import Tutorials from './pages/Tutorials/Tutorials';
import FitPicks from './pages/FitPicks/FitPicks';
import Settings from './pages/Settings/Settings'; 
import Nutrition from './pages/Nutrition/Nutrition';

import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes (Under Menu layout) */}
        <Route path="/menu" element={<Menu />}>
          <Route index element={<Assessment />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="start" element={<Yoga />} />
          <Route path="workouts" element={<Yoga />} />
          <Route path="about" element={<About />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="nutrition" element={<Nutrition/>}/>
          <Route path="fitpicks" element={<FitPicks />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
