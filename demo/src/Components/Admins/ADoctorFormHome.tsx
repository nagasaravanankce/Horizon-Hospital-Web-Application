import React, { useState } from "react";
import "./ADoctorFormHomeStyle.css"; // Import CSS file
import { Link } from "react-router-dom";

const DoctorForm = () => {
  return (
    <div className="container1">
      {/* Header Buttons */}
      <div className="header1">
        <button className="logout-btn">Logout</button>
        <button className="home-btn">
        <Link to="/admin/AHome" style={{ textDecoration: "none", color: "white" }}>
                                          Home
                                          </Link></button>
      </div>

      {/* Back Button */}
      <div className="back-btn">
      <Link to="/admin/ADoctorsHomeDetails" style={{ textDecoration: "none", color: "white" }}>
                                          ◀
                                          </Link></div>

      {/* Form Container */}
      <div className="form-container1">
        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">ADD DOCTOR DETAILS</button>
          <button className="tab">DOCTOR'S DETAILS</button>
        </div>

        {/* Form Fields */}
        <div className="form-fields1">
          <div className="field-row1">
            <div className="field1">
              <label>Name</label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="field1">
              <label>Available hours per Day</label>
              <input type="number" placeholder="Hours" />
            </div>
          </div>

          <div className="field-row1">
            <div className="field1">
              <label>Doctor ID</label>
              <input type="text" placeholder="Enter ID" />
            </div>
            <div className="field1">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="btn-container1">
            <button className="submit-btn"><Link to="/admin/ADoctorsHomeDetails" style={{ textDecoration: "none", color: "white" }}>
                                          ADD
                                          </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;