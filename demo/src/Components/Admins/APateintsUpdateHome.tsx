import React from "react";
import "./APateintsUpdateHomeStyle.css";
import { Link } from "react-router-dom";

const PatientForm = () => {
  return (
    <div className="patient-container">
      {/* Top Navigation */}
      <div className="top-bar">
        <button className="nav-btn">
        <Link to="/admin/APateintsHome" style={{ textDecoration: "none", color: "white" }}>
        ◀ </Link> </button>
        <div className="nav-buttons">
         
          <button className="nav-action">
            <Link to="/admin/AHome" style={{ textDecoration: "none", color: "white" }}>
                                          Home
                                        </Link></button>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-box">
        <div className="tabs">
          <button className="tab active-tab">ADD PERSONAL DETAILS</button>
          <button className="tab">PATIENTS’ DETAILS</button>
        </div>

        <div className="form-content">
          <div className="form-row">
            <div className="input-group">
              <label>Patient ID</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Age</label>
              <input type="number" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Patient Name</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Patient Phone</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Blood Type</label>
              <select>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Patient Address</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Major Disease</label>
              <input type="text" />
            </div>
          </div>

          <button className="update-btn">
            <Link to="/admin/APatientDetails" style={{ textDecoration: "none", color: "white" }}>
                                          UPDATE
                                        </Link></button>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;