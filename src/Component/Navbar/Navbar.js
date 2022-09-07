import {Link} from "react-router-dom";
import ROADSIGN from "../../Assets/ROADSIGN.png";
import "./Navbar.css";
import {Grid} from "@mui/material";
import React, {useState} from "react";


function Navbar() {
    // const [color, setColor] = useState(false);
    // const changeColor = () => {
    //     if (window.scrollY > 40) {
    //         setColor(true);
    //     } else {
    //         setColor(false);
    //     }
    // }
    // window.addEventListener("scroll", changeColor);
    return (
        // <div className={color ? "nav-bar nav-bar-changed" : "nav-bar"}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={8}>
        //             ROADSIGN
        //         </Grid>
        //         <Grid item xs={2}>
        //             Register
        //         </Grid>
        //         <Grid item xs={2}>
        //             Login
        //         </Grid>
        //     </Grid>
        // </div>
        <div className="main-navbar">
            <div className="customize-navbar ">
                <nav className="navbar navbar-expand-lg navbar-light bg-color">
                    <div className="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy"/>
                        </Link>
                        <br/>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link item-color" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link item-color" to="/tripplanners">
                                        Trip Planner
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link item-color" to="/locations">
                                        Location
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link item-color" to="/accommodations">
                                        Accommodation
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link item-color" to="/vehicles">
                                        Vehicle
                                    </Link>
                                </li>
                            </ul>
                            {/* <!-- Left links --> */}
                        </div>


                        <div className="d-flex align-items-center sign-btn-set">
                            <Link to="/login">
                                <button type="button" className="btn btn-primary  sign-up-btn">
                                    Sign up for free
                                </button>
                            </Link>

                            <Link to="/signIn">
                                <button type="button" className="btn btn-primary  px-3 me-2 login-btn">
                                    Login
                                </button>
                            </Link>




                        </div>


                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
            </div>


        </div>
    );
}

export default Navbar;