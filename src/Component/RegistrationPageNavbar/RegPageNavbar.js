import { Link, useLocation } from "react-router-dom";
import profile from "../../Assets/Profile/Squa1.png";
import ROADSIGN from "../../Assets/ROADSIGNnavbar.png";
import "./RegPageNavbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function RegPageNavbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="navigationBar">
            <div className="customize-navbar bg-color">
                <div className="nav-logo">
                    <div className="logo">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src={ROADSIGN} height="15" alt="RoadSign Logo" loading="lazy" />
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default RegPageNavbar;
