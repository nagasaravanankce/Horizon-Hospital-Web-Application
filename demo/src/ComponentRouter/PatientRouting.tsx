import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Patients/pHome.tsx";
import Doctor from "../Components/Patients/pDoctor.tsx";
import Department from "../Components/Patients/pDept.tsx";
import Services from "../Components/Patients/pServices.tsx";
import AppointmentForm from "../Components/Patients/pAppointment.tsx";

const PatientRouting = () => {
    return (
      <Routes>
        {/* Redirect /doctor to /doctor/dHome */}
        <Route path="/" element={<Navigate to="pHome" replace />} />
  
        
        <Route path="pHome" element={<Home />} />
        <Route path="pDoctor" element={<Doctor />} />
        <Route path="pDept" element={<Department />} />
        <Route path="pServices" element={<Services />} />
        <Route path="pAppointment" element={<AppointmentForm />} />
        
      </Routes>
    );
  };
  
  export default  PatientRouting ;