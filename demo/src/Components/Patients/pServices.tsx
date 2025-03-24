import React from "react";
import "./pServicesStyle.css";
import { Link } from "react-router-dom";

const services = [
  { name: "Eye Care", img: "eye-care.jpg" },
  { name: "Medical Counseling", img: "medical-counseling.jpg" },
  { name: "Nephrologist Care", img: "nephrologist-care.jpg" },
  { name: "Pediatrician Clinic", img: "pediatrician-clinic.jpg" },
  { name: "Eldery Care", img: "elderly-care.jpg" },
  { name: "Rehabilitation Center", img: "rehabilitation-center.jpg" },
  { name: "Prenatal Care", img: "prenatal-care.jpg" },
];

const Services = () => {
  return (
    <div>
      <header className="header">
        <h1>Horizon Hospital</h1>
        <nav>
         <Link to="/patient/pHome">Home</Link>
                               <Link to="/patient/pDoctor">Doctors</Link>
                               <Link to="/patient/pDept">Department</Link>
                               <Link to="/patient/pServices">Services</Link>
                               <Link to="/patient/pAppointment">Appointment</Link>
          <a href="#about">Contacts</a>
        </nav>
      </header>

      <div className="services-banner">Services</div>

      <div className="services-container">
        <h2>Services</h2>
        <hr />
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-section" id="  about">
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

export default Services;
