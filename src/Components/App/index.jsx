// src/Components/App/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";


import LandingPage from "../LandingPage";     
import Signup from "../Signup";               
import Dashboard from "../Dashboard";         
import Onboarding from "../Onboarding";      
// import Login from "../Login";                

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
