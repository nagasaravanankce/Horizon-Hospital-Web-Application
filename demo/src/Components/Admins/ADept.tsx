// Hospital.js
import React from "react";
import "./ADeptStyle.css";
import { Link } from "react-router-dom";

const departments = [
  { name: "Cardiology", image: "/images/cardiology.jpg" },
  { name: "Dentist", image: "/images/dentist.jpg" },
  { name: "Neurologist", image: "/images/neurologist.jpg" },
  { name: "Pediatric", image: "/images/pediatric.jpg" },
  { name: "Pulmonary", image: "/images/pulmonary.jpg" },
  { name: "Traumatology", image: "/images/traumatology.jpg" },
  { name: "Dermatologist", image: "/images/dermatologist.jpg" },
];

const Hospital = () => {
  return (  
    <div className="hospital-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Horizon Hospital</div>
        <nav>
          <ul>
            <Link to="/admin/AHome">Home</Link>
                               
                       
                       <Link to="/admin/ADoctors">Doctors</Link>
                       <Link to="/admin/ADept">Department</Link>
                       <Link to="/admin/AService">Services</Link>
                       <Link to="/admin/ASchedule">Schedule</Link>
                       <Link to="/admin/AAppointmentForm">Appointment</Link>
          </ul>
        </nav>
      </header>

      {/* Department Section */}
      <div className="departments-banner">Departments</div>

      <div className="departments-container">
        <h2>Our Departments</h2>
        <div className="department-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-box">
              <img src={dept.image} alt={dept.name} />
              <h3>{dept.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
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
        </div>
      </footer>
    </div>
  );
};

export default Hospital;
