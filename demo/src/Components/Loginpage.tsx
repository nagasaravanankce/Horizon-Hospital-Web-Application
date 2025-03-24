import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginpageStyle.css";

const Login = () => {
  const [role, setRole] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "patient") {
      navigate("/patient");
    } else if (role === "doctor") {
      navigate("/doctor"); 
    } else if (role === "admin") {
      navigate("/admin");
    } else {
      alert("Please select a valid role");
    }
  };

  return (
    <div className="login-container5">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Email or MobileNumber" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot-password">Forgot Password?</a>
        
        {/* Role Selection and Login */}
        <div className="button-group">
        <button className="btn" onClick={() => setRole("patient")}>Patient</button>
          <button className="btn" onClick={() => setRole("doctor")}>Doctor</button>
          <button className="btn" onClick={handleLogin}>Login</button>
          <button className="btn" onClick={() => setRole("admin")}>Admin</button>
        </div>

        <p className="signup-text">
          Don’t have an account? <Link to="/Siginpage">Sigin</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
