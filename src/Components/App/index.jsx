// src/Components/App/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// імпортуєш свої сторінки
import LandingPage from "../LandingPage";     // твій лендінг (ти можеш назвати інакше)
import Signup from "../Signup";               // ти вже імпортувала його в index.js
import Dashboard from "../Dashboard";         // твій дашборд
import Onboarding from "../Onboarding";       // якщо вже є онбординг
// import Login from "../Login";                 // якщо є окремо

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
