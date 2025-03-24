import React from "react";
import "./AScheduleStyle.css";
import { Link } from "react-router-dom";

const ScheduleForm = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h2>CHECK SCHEDULES</h2>
        <div className="form-container">
          <div className="input-group">
            <label>Department's Name</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Doctor's Name</label>
            <input type="text" />
          </div> <button className="submit-button12">Submit</button>
        </div>
       
      </div>

      {/* Schedule Section */}
      <div className="schedule-section">
        <h3>SCHEDULES</h3>
        <hr />
      </div>
    </div>
  );
};

export default ScheduleForm;
