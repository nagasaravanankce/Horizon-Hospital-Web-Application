import React from "react";
import "./dDiagnosisFormUpdateStyle.css";
import { Link } from "react-router-dom";

const DiagnosisForm = () => {
  return (
    <div className="diagnosis-container">
      {/* Header Section */}
      <div className="header">
        <button className="back-button">◄</button>
      </div>

      {/* Diagnosis Form */}
      <div className="form-container">
        <button className="diagnosis-list-button">Diagnosis List</button>
        
        <div className="form-grid">
          <div className="form-group">
            <label>Diagnosis ID</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Patient ID</label>
            <select>
              <option value="">▼</option>
            </select>
          </div>

          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Symptoms</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Diagnosis</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Medicine</label>
            <input type="text" />
          </div>
        </div>

        <button className="update-button">UPDATE</button>
      </div>
    </div>
  );
};

export default DiagnosisForm;
