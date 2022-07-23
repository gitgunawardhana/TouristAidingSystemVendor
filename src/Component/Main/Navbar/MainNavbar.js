import * as React from 'react';
import {useState} from "react";
import "./MainNavbar.css"
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Rodesign from "../../../Assets/ROADSIGN.png"
import {Link} from "react-router-dom";

export default function Navbar() {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY > 40) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "nav-bar nav-bar-changed " : "nav-bar"}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed">
                    <Toolbar className="tool-bar-nav">

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <img src={Rodesign} alt="Rodesign-Logo" className="rodesign-img-nav"/>
                        </Typography>

                        <Link to="/createAccount">
                            <button type="button" className="btn-primary  px-3 me-2 login-btn sign-up-btn-nav">
                                Register
                            </button>
                        </Link>

                        <Link to="/signIn">
                            <button type="button" className="btn-primary px-3 me-2 login-btn sign-up-btn-nav">
                                Login
                            </button>
                        </Link>





                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
