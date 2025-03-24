import React from "react";
import "./dHomeStyle.css";
import { FaUserMd, FaLungs, FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";

const MedicalDashboard = () => {
  // Generate random data for charts
  const generateRandomData = () => Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Patients",
        data: generateRandomData(),
        borderColor: "#2264D1",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "Return Patients",
        data: generateRandomData(),
        borderColor: "#0DC34F",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Appointments",
        data: generateRandomData(),
        backgroundColor: "#2264D1",
      },
    ],
  };

  return (
    <div className="med-dashboard-container6">
      {/* Sidebar */}
      <div className="med-dashboard-sidebar">
        <div className="med-dashboard-profile">
          <img src="https://via.placeholder.com/50" alt="profile" className="med-dashboard-profile-img" />
          <div>
            <h4>Nick Gonzalez</h4>
            <p>Dept Admin</p>
          </div>
        </div>
        <ul className="med-dashboard-menu">
          <li className="active">🏥 Doctors</li>
          <li><Link to="/doctor/dDiagnosisForm">📋 Patients</Link></li>
          <li><Link to="/doctor/dDoctorsList">👨‍⚕️ Doctors List</Link></li>
          <li><Link to="/doctor/dScheduleForm">📅 Appointments</Link></li>
          <li><Link to="/doctor/dDiagnosisList">🗒️DiagnosisList</Link></li>
          
        </ul>
        <div className="med-dashboard-emergency">
          <FaPhoneAlt /> <span>0987654321</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="med-dashboard-content">
        <div className="med-dashboard-header-card">
          <h2>Good Morning,</h2>
          <h1>Dr. Jessika Linda</h1>
          <p>Gynecologist, MS, MD, MBBS</p>
          <span className="med-dashboard-appointments-badge">18 appointments today</span>
        </div>

        {/* Stats Section */}
        <div className="med-dashboard-stats">
          <div className="med-dashboard-stat-card">
            <FaUserMd className="med-dashboard-icon blue" />
            <h2>3809</h2>
            <p>Patients</p>
          </div>
          <div className="med-dashboard-stat-card">
            <FaLungs className="med-dashboard-icon red" />
            <h2>906</h2>
            <p>Surgeries</p>
          </div>
          <div className="med-dashboard-stat-card">
            <FaDollarSign className="med-dashboard-icon green" />
            <h2>$986K</h2>
            <p>Earnings</p>
          </div>
        </div>

        {/* Charts */}
        <div className="med-dashboard-charts">
          <div className="med-dashboard-chart">
            <h3>Patients</h3>
            <Line data={lineData} />
          </div>
          <div className="med-dashboard-chart">
            <h3>Appointments</h3>
            <Bar data={barData} />
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="med-dashboard-appointments">
          <h3>Upcoming Appointments</h3>
          <div className="med-dashboard-appointment-card">
            <img src="https://via.placeholder.com/50" alt="user" />
            <p>Need an appointment urgent.</p>
            <button className="med-dashboard-accept">Accept</button>
            <button className="med-dashboard-decline">Decline</button>
          </div>
          <div className="med-dashboard-appointment-card">
            <img src="https://via.placeholder.com/50" alt="user" />
            <p>Need an appointment urgent.</p>
            <button className="med-dashboard-accept">Accept</button>
            <button className="med-dashboard-decline">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDashboard;
