import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/HorizonHospital.tsx";
import Doctors from "../Components/LandingDoctorspage.tsx";
import Department from "../Components/LandingDept.tsx";
import Services from "../Components/Landingservice.tsx";
import Login from "../Components/Loginpage.tsx";
import Sigin from "../Components/Siginpage.tsx";
import DoctorRoutes from "./DoctorRouting.tsx";
import PatientRouting from "./PatientRouting.tsx";
import AdminRouting from "./AdminRouting.tsx";

const Routing = () => {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/HorizonHospital" replace />} />

      <Route path="/HorizonHospital" element={<Home />} />
      <Route path="/LandingDoctorspage" element={<Doctors />} />
      <Route path="/LandingDept" element={<Department />} />
      <Route path="/Landingservice" element={<Services />} />
      <Route path="/Loginpage" element={<Login />} />
      <Route path="/Siginpage" element={<Sigin />} />

      {/* Nested Doctor Routes */}
      <Route path="/doctor/*" element={<DoctorRoutes />} />
      <Route path="/patient/*" element={<PatientRouting />} />
      <Route path="/admin/*" element={<AdminRouting />} />
    </Routes>
  );
};

export default Routing;
