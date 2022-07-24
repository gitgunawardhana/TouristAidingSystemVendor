import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./StepsButton.css";

function StepsButton() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className="container">
        <div className="steps-nav">
          <nav className="nav nav-borders nav-border  nav-fill  border w-75 p-3  ">

            <Link
                to="/basicDetails" onClick={e => e.preventDefault()}
                className={
                  currentPath.includes("basicDetails" )
                      ? "nav-link  ms-0 nav-bar-link active"
                      : "nav-link  ms-0 nav-bar-link"
                }
            >
              Basics details
            </Link>
            <Link
              to="/location" onClick={e => e.preventDefault()}
              className={
                currentPath.includes("location" )
                  ? "nav-link  ms-0 nav-bar-link active"
                  : "nav-link  ms-0 nav-bar-link"
              }
            >
              Location
            </Link>
            <Link onClick={e => e.preventDefault()}
              to="/houserules"
              className={
                currentPath.includes("houserules")
                  ? "nav-link  ms-0 nav-bar-link active"
                  : "nav-link  ms-0 nav-bar-link"
              }
            >
              House Rules
            </Link>
            <Link onClick={e => e.preventDefault()}
              to="/facilities"
              className={
                currentPath.includes("facilities")
                  ? "nav-link  ms-0 nav-bar-link active"
                  : "nav-link  ms-0 nav-bar-link"
              }
            >
              Facilities
            </Link>
            <Link onClick={e => e.preventDefault()}
              to="/photos"
              className={
                currentPath.includes("photos")
                  ? "nav-link  ms-0 nav-bar-link active"
                  : "nav-link  ms-0 nav-bar-link cursor-na "
              }
            >
              Photos
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default StepsButton;
