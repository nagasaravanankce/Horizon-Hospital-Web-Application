import React from "react";
import "./ADoctorFormHomeStyle.css";
import { Link } from "react-router-dom";

const DoctorForm = () => {
  return (
    <div className="doctor-home">
      <div className="top-bar">
        <button className="logout-btn">Logout</button>
        <button className="home-btn">Home</button>
      </div>

      <div className="back-arrow">&#9664;</div>

      <div className="tabs">
        <button className="tab">ADD DOCTOR DETAILS</button>
        <button className="tab active">DOCTOR’S DETAILS</button>
      </div>

      <div className="form-container">
        <div className="form-row">
          <div className="input-box">
            <label>Doctor ID</label>
            <input type="text" />
          </div>
          <div className="input-box">
            <label>Available hours per Day</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="input-box">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>

        <button className="update-btn">UPDATE</button>
      </div>
    </div>
  );
};

export default DoctorForm;
