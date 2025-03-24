import React from "react";
import "./APateintsHomeStyle.css";
import { Link } from "react-router-dom";

const PatientForm = () => {
    return (
        <div className="container">
            {/* Back Button */}
            <div className="back-btn">
                <Link to="/admin/AHome" style={{ textDecoration: "none", color: "black" }}>
                      <span>&#x25C0;</span>  </Link>
                
            </div>

            {/* Tabs */}
            <div className="tabs">
                
                <button className="tab"><Link to="/admin/APatientDetails" style={{ textDecoration: "none", color: "white" }}>
                              PATIENT'S DETAILS
                            </Link></button>
            </div>

            {/* Form Section */}
            <div className="form-container">
                <div className="form-row">
                    <div className="input-box">
                        <label>Patient ID</label>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <label>Age</label>
                        <input type="number" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-box">
                        <label>Patient Name</label>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <label>Gender</label>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-box">
                        <label>Patient Address</label>
                        <input type="text" />
                    </div>
                    <div className="input-box">
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
                    <div className="input-box">
                        <label>Patient Phone</label>
                        <input type="tel" />
                    </div>
                    <div className="input-box">
                        <label>Major Disease</label>
                        <input type="text" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="button-container">
                    <button className="submit-btn">
                    <Link to="/admin/APatientDetails" style={{ textDecoration: "none", color: "white" }}>
                              ADD
                            </Link></button>
                    <button className="submit-btn">
                    <Link to="/admin/APateintsUpdateHome" style={{ textDecoration: "none", color: "white" }}>
                              UPDATE
                            </Link></button>
          <button className="submit-btn">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default PatientForm;
