import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Doctors/dHome.tsx";
import Doctor from "../Components/Doctors/dDoctors.tsx";
import Department from "../Components/Doctors/dDept.tsx";
import Services from "../Components/Doctors/dServices.tsx";
import Schedule from "../Components/Doctors/dScheduleForm.tsx";
import DiagnosisForm from "../Components/Doctors/dDiagnosisForm.tsx"; 
import DiagnosisList from "../Components/Doctors/dDiagnosisList.tsx";
import DoctorsList from "../Components/Doctors/dDoctorsList.tsx";


const DoctorRouting = () => {
  return (
    <Routes>
      {/* Redirect /doctor to /doctor/dHome */}
      <Route path="/" element={<Navigate to="dHome" replace />} />

      
      <Route path="dHome" element={<Home />} />
      <Route path="dDoctors" element={<Doctor />} />
      <Route path="dDept" element={<Department />} />
      <Route path="dServices" element={<Services />} />
      <Route path="dScheduleForm" element={<Schedule />} />
      <Route path="dDiagnosisForm" element={<DiagnosisForm />} /> 
      <Route path="dDiagnosisList" element={<DiagnosisList />} />
      <Route path="dDoctorsList" element={<DoctorsList />} />
    </Routes>
  );
};

export default DoctorRouting;
