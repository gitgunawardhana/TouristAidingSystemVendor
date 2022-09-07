import React from "react";
import "../UpperNavBar/upperNavbar.css";
import ProfileComponent from "../profileComponent/profileComponent";

const upperNavbar = () => {
    return <>
        <div className="upper-nav-bar-alone">
            <div className="profile-component "><ProfileComponent /></div>

            <span className="upper-heading">
                ROADSIGN
            </span>



        </div></>;
};

export default upperNavbar;
