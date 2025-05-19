import React from 'react';
import './Menu.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaDumbbell, FaUtensils, FaChartLine, FaCalendarAlt, FaCog } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className="assessment">
      <div className="sidebar">
        <h2 className="logo">VisionFit</h2>
        <ul className="menu-list">
        <li>
            <NavLink to="/menu/assessment" activeClassName="active">
              <FaChartLine /> Assessment
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/dashboard" activeClassName="active">
              <FaHome /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu/workouts" activeClassName="active">
              <FaDumbbell /> Workouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/nutrition" activeClassName="active">
              <FaUtensils /> Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/fitpicks" activeClassName="active">
              <FaCalendarAlt /> Fit Picks
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/settings" activeClassName="active">
              <FaCog /> TermsAndConditions
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Outlet /> {/* Render the corresponding route */}
      </div>
    </div>
  );
}
