import React from 'react';
import './pDoctorStyle.css'; // Make sure to create a CSS file for styles
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    { name: "Dr. Peter Parker", specialty: "Neurologist", image: "path/to/image1.jpg" },
    { name: "Dr. Tom Holland", specialty: "Dentist", image: "path/to/image2.jpg" },
    { name: "Dr. Kathryn Wood", specialty: "Cardiologist", image: "path/to/image3.jpg" },
    { name: "Dr. Veranda", specialty: "Pulmonary", image: "path/to/image4.jpg" },
    { name: "Dr. William Campbell", specialty: "Pediatric", image: "path/to/image5.jpg" },
    { name: "Dr. Adaline Becka", specialty: "Traumatology", image: "path/to/image6.jpg" },
    { name: "Dr. Nancy Lewis", specialty: "Dermatologist", image: "path/to/image7.jpg" },
  ];

  return (
    
    <div className="doctors-container">
        <header className="header">
        <div className="logo">Horizon Hospital</div>
        <nav>
          <ul>
            <Link to="/patient/pHome">Home</Link>
                                  <Link to="/patient/pDoctor">Doctors</Link>
                                  <Link to="/patient/pDept">Department</Link>
                                  <Link to="/patient/pServices">Services</Link>
                                  <Link to="/patient/pAppointment">Appointment</Link>
            <a href="#about">Contacts</a>
          </ul>
        </nav>
      </header>
      <div className="departments-banner">Our Specialized Doctors</div> 
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </div>
        ))}
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
}

export default Doctors;