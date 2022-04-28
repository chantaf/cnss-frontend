import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPatient from '../../Screens/patient/AuthPatient'
import Dashboard from "../../Screens/patient/Dashboard";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<AuthPatient />} />
        <Route path="/inscription" element={<AuthPatient />} />
        
      </Routes>
    </BrowserRouter>
  );
}
