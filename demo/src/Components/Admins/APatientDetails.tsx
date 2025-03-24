import React from "react";
import "./APatientDetailsStyle.css";
import { Link } from "react-router-dom";

const PatientDetails = () => {
  const patients = [
    { name: "XYZ Silva", id: "P002", phone: "+94 77 123 4567", address: "Main Street, Colombo", age: 35, gender: "Male" },
    { name: "DEF Fernando", id: "P003", phone: "+94 91 333 9999", address: "Beach Road, Galle", age: 42, gender: "Male" },
    { name: "LM Jayawardena", id: "P004", phone: "+9452444 8888", address: "Hill Street, Nuwara Eliya", age: 55, gender: "Female" },
    { name: "GHI Rajapaksa", id: "P005", phone: "+94 25 777 2222", address: "Lake Road, Anuradhapura", age: 48, gender: "Male" },
  ];

  return (
    <div className="patient-container">
      <div className="header">
        <button className="btn back">
        <Link to="/admin/APateintsHome" style={{ textDecoration: "none", color: "white" }}>
                      &larr;
                      </Link></button>
        
        <button className="btn home">
          <Link to="/admin/AHome" style={{ textDecoration: "none", color: "white" }}>
                      Home
                      </Link></button>
      </div>

      <div className="content">
        <button className="tab">PATIENTS’ DETAILS</button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.name}</td>
                  <td>{patient.id}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.address}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="buttons">
          <button className="add">
          <Link to="/admin/APateintsHome" style={{ textDecoration: "none", color: "white" }}>
                      ADD
                      </Link></button>
          <button className="update">
          <Link to="/admin/APateintsUpdateHome" style={{ textDecoration: "none", color: "white" }}>
                      UPDATE
                      </Link></button>
          <button className="delete">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
