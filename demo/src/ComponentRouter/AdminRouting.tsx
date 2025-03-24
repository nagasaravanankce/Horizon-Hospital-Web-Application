import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Admins/AHome.tsx";
import Doctor from "../Components/Admins/ADoctorFormHome.tsx";
import Department from "../Components/Admins/ADept.tsx";
import Services from "../Components/Admins/AService.tsx";
import AppointmentForm from "../Components/Admins/AAppointmentForm.tsx";
import  DOCTORSDETAILSENTRY from "../Components/Admins/ADoctorsHomeDetails.tsx"
import Schedule from "../Components/Admins/ASchedule.tsx"
import PATIENTDETAILSENTRY from "../Components/Admins/APateintsHome.tsx"
import PatientDetails from "../Components/Admins/APatientDetails.tsx"
import PateintsUpdateHome from "../Components/Admins/APateintsUpdateHome.tsx"
import DoctorFormHome from "../Components/Admins/ADoctorFormHome.tsx"
import DoctorFormUpdateHome from "../Components/Admins/ADoctorFormUpdateHome.tsx"

const AdminRouting = () => {
    return (
      <Routes>
        {/* Redirect /doctor to /doctor/dHome */}
        <Route path="/" element={<Navigate to="AHome" replace />} />
  
        
        <Route path="AHome" element={<Home />} />
        <Route path="ADoctorFormHome" element={<Doctor />} />
        <Route path="ADept" element={<Department />} />
        <Route path="AService" element={<Services />} />
        <Route path="AAppointmentForm" element={<AppointmentForm />} />
        <Route path="ASchedule" element={<Schedule />} />
        <Route path="ADoctorsHomeDetails" element={<DOCTORSDETAILSENTRY  />} />
        <Route path="APateintsHome" element={<PATIENTDETAILSENTRY  />} />
        <Route path="APatientDetails" element={<PatientDetails  />} />
        <Route path="APateintsUpdateHome" element={<PateintsUpdateHome  />} />
        <Route path="ADoctorFormHome" element={<DoctorFormHome  />} />
        <Route path="ADoctorFormUpdateHome" element={<DoctorFormUpdateHome  />} />

        
        
      
      </Routes>
    );
  };
  
  export default AdminRouting;
  
