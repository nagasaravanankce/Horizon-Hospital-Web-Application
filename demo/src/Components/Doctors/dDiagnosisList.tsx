import React from "react";
import "./dDiagnosisListStyle.css";
import { Link } from "react-router-dom";

const DiagnosisList = () => {
  const data = [
    {
      diagnosisId: "D001",
      patientId: "P002",
      patientName: "XYZ Silva",
      symptoms: "Fatigue, Sore Throat, Body Aches",
      diagnosis: "Common Cold",
      medicines: "Vitamin C, Throat Lozenges, Rest"
    },
    {
      diagnosisId: "D002",
      patientId: "P001",
      patientName: "ABC Perera",
      symptoms: "Fever, Cough, Headache",
      diagnosis: "Influenza",
      medicines: "Paracetamol, Cough Syrup, Ibuprofen"
    }
  ];

  return (
    <div className="diagnosis-container">
      <div className="header-bar">
        <button className="home-button"><Link to="/doctor/dHome">Home</Link></button>
      </div>
      <div className="title">Diagnosis List</div>
      <table>
        <thead>
          <tr>
            <th>Diagnosis ID</th>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Symptoms</th>
            <th>Diagnosis</th>
            <th>Medicines</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.diagnosisId}</td>
              <td>{item.patientId}</td>
              <td>{item.patientName}</td>
              <td>{item.symptoms}</td>
              <td>{item.diagnosis}</td>
              <td>{item.medicines}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="update-button">UPDATE</button>
    </div>
  );
};

export default DiagnosisList;
