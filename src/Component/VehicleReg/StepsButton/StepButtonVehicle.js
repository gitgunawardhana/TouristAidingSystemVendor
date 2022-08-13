import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../VenderRegister/StepsButton/StepsButton.css";

const StepButtonVehicle = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return <div>
        <div className="container">
            <div className="steps-nav">
                <nav className="nav nav-borders nav-border  nav-fill  border w-75 p-3  ">
                    <Link
                        to="/vender-vehicle-reg-vehicle"
                        className={
                            currentPath.includes("vender-vehicle-reg-vehicle")
                                ? "nav-link  ms-0 nav-bar-link active"
                                : "nav-link  ms-0 nav-bar-link"
                        }
                    >
                        Vehicle Details
                    </Link>
                    <Link
                        to="/vender-vehicle-reg-photo"
                        className={
                            currentPath.includes("vender-vehicle-reg-photo")
                                ? "nav-link  ms-0 nav-bar-link active"
                                : "nav-link  ms-0 nav-bar-link"
                        }
                    >
                        Photos
                    </Link>
                    <Link
                        to="/vender-vehicle-owner-info"
                        className={
                            currentPath.includes("vender-vehicle-owner-info")
                                ? "nav-link  ms-0 nav-bar-link active"
                                : "nav-link  ms-0 nav-bar-link"
                        }
                    >
                        Owner Details
                    </Link>
                    <Link
                        to="/vender-vehicle-driver-info"
                        className={
                            currentPath.includes("vender-vehicle-driver-info")
                                ? "nav-link  ms-0 nav-bar-link active"
                                : "nav-link  ms-0 nav-bar-link"
                        }
                    >
                        Driver Details
                    </Link>
                    {/* <Link
                        to="/photos"
                        className={
                            currentPath.includes("photos")
                                ? "nav-link  ms-0 nav-bar-link active"
                                : "nav-link  ms-0 nav-bar-link"
                        }
                    >
                        Photos
                    </Link> */}
                </nav>
            </div>
        </div>
    </div>
};

export default StepButtonVehicle;
