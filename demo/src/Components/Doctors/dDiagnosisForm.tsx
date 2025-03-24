import React from "react";
import "./dDiagnosisFromStyle.css"; // Import CSS file
import { Link } from "react-router-dom";


const PatientForm = () => {
  return (
    <div className="patient-form-container">
      <h2 className="patient-form-title">Add Patient Details</h2>
      <form className="patient-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Enter First Name" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="Enter Last Name" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Age *</label>
            <select className="patient-input">
              <option>Select Age</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <div className="gender-group">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Create ID *</label>
            <input type="text" placeholder="Create Unique ID" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Email ID *</label>
            <input type="email" placeholder="Enter Email ID" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="text" placeholder="Enter Mobile Number" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select className="patient-input">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Occupation</label>
            <select className="patient-input">
              <option>Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blood Group *</label>
            <select className="patient-input">
              <option>Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blood Pressure</label>
            <input type="text" placeholder="Enter Blood Pressure" className="patient-input" />
          </div>
          <div className="form-group">
            <label>Sugar</label>
            <input type="text" placeholder="Enter Sugar Levels" className="patient-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Enter Address" className="patient-input" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter City" className="patient-input" />
          </div>
          <div className="form-group">
            <label>State</label>
            <select className="patient-input">
              <option>Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="Enter Postal Code" className="patient-input" />
          </div>
        </div>

        <div className="file-upload">
          <p>Click here to upload or Drop your reports here.</p>
          <strong>Upload your health reports.</strong>
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Create Patient Profile</button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
