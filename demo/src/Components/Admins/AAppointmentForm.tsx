import React, { useState, useEffect } from "react";
import "./AAppointmentFormStyle.css"; // Import CSS file
import { Link } from "react-router-dom";

interface Appointment {
  id: number;
  name: string;
  department: string;
  date: string;
}

const AppointmentForm = () => {
  // Dummy appointment data (to be replaced with MongoDB fetch)
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Simulated data fetching (Replace with MongoDB fetch)
    setTimeout(() => {
      setAppointments([
        { id: 1, name: "John Doe", department: "Cardiology", date: "2025-02-24" },
        { id: 2, name: "Jane Smith", department: "Neurology", date: "2025-02-25" },
      ]);
    }, 1000); // Simulate API delay
  }, []);

  return (
    <div className="appointment-container">
      {/* Book Appointment Section */}
      <div className="book-appointment">
        <h2>BOOK APPOINTMENT</h2>
        <div className="form-grid">
          <div className="input-field">
            <label>Patient Name</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Phone number</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Choose Date</label>
            <input type="date" />
          </div>
          <div className="input-field">
            <label>Department</label>
            <input type="text" />
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>

      {/* Today's Appointment Section */}
      <div className="today-appointment">
        <h3>TODAY’S APPOINTMENT</h3>
        <hr className="divider" />

        {/* Display Fetched Appointments */}
        <div className="appointment-list">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Department:</strong> {appointment.department}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
              </div>
            ))
          ) : (
            <p className="loading-text">Loading appointments...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
