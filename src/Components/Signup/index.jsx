// src/pages/Signup.jsx
import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";


const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // тут потім підключиш бекенд або навігацію
    console.log("signup form submitted");
  };

  return (
    <div className="signup-screen">
      {/* фонові штуки */}
      <div className="signup-stars" />
      <div className="signup-glow" />
      <div className="signup-glow second" />

      <div className="signup-panel">
        {/* logo */}
        <div className="signup-logo-row">
          <div className="signup-logo-circle">H</div>
          <div className="signup-logo-text">FitAI</div>
        </div>

        <h1 className="signup-title">Sign up for free</h1>
        <p className="signup-sub">Start your free trial. No credit card required.</p>
        <p className="signup-info">
          Join 10,000+ people transforming their fitness with AI.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email address"
            className="signup-input"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="signup-input"
          />
          <input
            type="password"
            required
            placeholder="Confirm password"
            className="signup-input"
          />
          <button type="submit" className="signup-btn">
              <Link to="/onboarding" className="hover:underline">      
               Create account
              </Link>
             <span className="arrow">›</span>
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <span className="signup-link">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
