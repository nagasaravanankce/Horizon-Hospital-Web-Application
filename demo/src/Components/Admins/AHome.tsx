import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./AHomeStyle.css";
import { Link } from "react-router-dom";

Chart.register(...registerables);

const Dashboard = () => {
  const [data, setData] = useState({
    department: 8,
    doctor: 15,
    patient: 120,
    appointment: 25,
    caseStudies: 10,
    invoice: 40,
    prescription: 35,
    payment: 20,
    earnings: 50000,
    monthlyUsers: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        patient: prevData.patient + Math.floor(Math.random() * 5),
        earnings: prevData.earnings + Math.floor(Math.random() * 500),
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Registered Users",
        data: data.monthlyUsers,
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6366f1"],
      },
    ],
  };

  const doughnutData = {
    labels: ["1st 15 days", "Last 15 days"],
    datasets: [
      {
        data: [data.earnings * 0.6, data.earnings * 0.4],
        backgroundColor: ["#6366f1", "#10b981"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>HealthEase</h2>
        <ul>
          <li className="active">Dashboard</li>
       <li><Link to="/admin/ADoctorFormHome">Doctors</Link></li>
<li><Link to="/admin/ADept">Department</Link></li>
<li><Link to="/admin/AService">Services</Link></li>
<li><Link to="/admin/ASchedule">Schedule</Link></li>
<li><Link to="/admin/AAppointmentForm">Appointment</Link></li>
<li><Link to="/admin/APatientDetails">Patient</Link></li>  
<li><Link to="/admin/APateintsHome">Prescription</Link></li>                               
          <li>Prescription</li>
          <li>Login</li>
        </ul>
      </aside>

      <main className="dashboard">
        <h2>Dashboard</h2>
        <div className="cards">
          <div className="card">Department: {data.department}</div>
          <div className="card">Doctor: {data.doctor}</div>
          <div className="card">Patient: {data.patient}</div>
          <div className="card">Appointments: {data.appointment}</div>
          <div className="card">Case Studies: {data.caseStudies}</div>
          <div className="card">Invoice: {data.invoice}</div>
          <div className="card">Prescription: {data.prescription}</div>
          <div className="card">Payment: {data.payment}</div>
        </div>

        <div className="charts">
          <div className="bar-chart">
            <h3>Monthly Registered Users</h3>
            <Bar data={barData} />
          </div>
          <div className="doughnut-chart">
            <h3>Monthly Earnings</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
