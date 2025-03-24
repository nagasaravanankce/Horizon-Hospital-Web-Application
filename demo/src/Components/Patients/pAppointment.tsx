import React from "react";
import "./pAppointmentStyle.css";
import { Link } from "react-router-dom";

const AppointmentForm = () => {
  return (
    <div className="container2">
      <div className="appointment-section2">
        <h2>BOOK APPOINTMENT</h2>
        <form className="appointment-form2">
          <div className="form-row2">
            <div className="form-group2">
              <label>Patient Name</label>
              <input type="text" placeholder="Enter Patient Name" />
            </div>
            <div className="form-group2">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <div className="form-group2">
              <label>Email Address</label>
              <input type="email" placeholder="Enter Email Address" />
            </div>
          </div>
          <div className="form-row2">
            <div className="form-group2">
              <label>Choose Date</label>
              <input type="date" />
            </div>
            <div className="form-group2">
              <label>Department</label>
              <select>
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Dermatology</option>
                <option>Dental Care</option>
              </select>
            </div>
            <div className="form-group submit-container2">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section" id="about">
      <h2>Horizon Hospital</h2>
      <p>
        Completely e-enable covalent functionalities and medical positioning
        infomediaries interactively.
      </p>
      <p>17/B New Division Road, NY 10003 - USA</p>
      <p>+123 (4567) 890</p>
      <p>example@gmail.com</p>
    </div>
    <div className="footer-section">
      <h3>Service Links</h3>
      <ul>
        <li>Cardiology</li>
        <li>Orthopedics</li>
        <li>Neurology</li>
        <li>Dermatology</li>
        <li>Dental Care</li>
        <li>Surgery</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Subscribe Newsletter</h3>
      <p>Signup for our latest updates from our medical team anytime.</p>
      <button className="subscribe-button2">Subscribe</button>
    </div>
  </div>
</footer>

    </div>
  );
};

export default AppointmentForm;
