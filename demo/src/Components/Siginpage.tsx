import React from "react";
import "./SigninpageStyle.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Signin</h2>
        <input type="text" placeholder="Name" className="input-field" />
        <input type="text" placeholder="Email or MobileNumber" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />
        <button className="signin-button">Signin</button>
      </div>
    </div>
  );
};

export default Signin;
