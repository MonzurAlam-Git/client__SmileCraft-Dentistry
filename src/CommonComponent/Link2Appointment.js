import React from "react";
import { Link } from "react-router-dom";

const Link2Appointment = () => {
  return (
    <div>
      <Link to="/appointment">
        <button className="btn btn-primary text-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-800">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Link2Appointment;
