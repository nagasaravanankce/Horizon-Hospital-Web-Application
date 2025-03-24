import React from "react";
import "./dDoctorsListStyle.css";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Peter Parker",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Dr. Hooman Azmi",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Dr. Dhuruvaan",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const DoctorsList = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Doctors</h2>
        <div className="input-container">
          <label>Department's Name</label>
          <input type="text" />
          <button className="submit-button">Submit</button>
        </div>
      </div>

      <div className="doctors-section">
        <h3>Doctors</h3>
        <hr />
        <div className="doctor-list">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
