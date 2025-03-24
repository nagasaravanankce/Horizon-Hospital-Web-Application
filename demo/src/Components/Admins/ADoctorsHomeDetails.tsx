import React, { useState } from "react";
import "./ADoctorsHomeDetailsStyle.css";
import { Link } from "react-router-dom";

const DoctorsHome = () => {
  const [doctors, setDoctors] = useState([
    { name: "Dr. Nishantha Fernando", id: "D002", hours: "5", password: "012345" },
    { name: "Dr. Priyantha Silva", id: "D003", hours: "6", password: "123456" },
    { name: "Dr. Anusha Jayawardena", id: "D004", hours: "4", password: "258798" },
    { name: "Dr. Sunil Perera", id: "D001", hours: "1", password: "1234abc" },
  ]);

  return (
    <div className="doctor-container">
      {/* Header */}
      <div className="header">
        
        <button className="home-btn"><Link to="/admin/AHome" style={{ textDecoration: "none", color: "white" }}>
                              Home
                              </Link></button>
      </div>

      {/* Doctor Details */}
      <div className="doctor-details">
        <div className="title">DOCTOR’S DETAILS</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Available Hours</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={index}>
                  <td>{doctor.name}</td>
                  <td>{doctor.id}</td>
                  <td><input type="text" value={doctor.hours} readOnly /></td>
                  <td><input type="text" value={doctor.password} readOnly /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <button className="add-btn">
          <Link to="/admin/ADoctorFormHome" style={{ textDecoration: "none", color: "white" }}>
                              ADD
                              </Link></button>
          <button className="update-btn">
          <Link to="/admin/ADoctorFormUpdateHome" style={{ textDecoration: "none", color: "white" }}>
                            UPDATE
                              </Link></button>
          <button className="delete-btn">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsHome;
