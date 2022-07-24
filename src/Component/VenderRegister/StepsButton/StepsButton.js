import React from "react";
import { Link } from "react-router-dom";
import "./StepsButton.css";

function StepsButton() {
  return (
    <div>
      <div className="container">
        <div className="steps-nav">
          <nav className="nav nav-borders nav-border  nav-fill  border w-75 p-3  ">
            <Link
              to="/basicdetails"
              className="nav-link  ms-0 nav-bar-link active"
            >
              Basics details
            </Link>
            <Link to="/basicdetails" className="nav-link nav-bar-link">
              Location
            </Link>
            <Link to="/basicdetails" className="nav-link nav-bar-link ">
              House Rules
            </Link>
            <Link to="/basicdetails" className="nav-link nav-bar-link">
              Facilities
            </Link>
            <Link to="/basicdetails" className="nav-link nav-bar-link">
              Photos
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default StepsButton;
