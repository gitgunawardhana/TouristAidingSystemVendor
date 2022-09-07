import { Link, useLocation } from "react-router-dom";
import profile from "../../Assets/Profile/Squa1.png";
import ROADSIGN from "../../Assets/ROADSIGNnavbar.png";
import "./profileNavbar.css";
import { useNavigate } from "react-router";

import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();
    const navigateToMainDashboard = () => {
        navigate('/vendorDashBoardMain');
    };

    return (
        <div className="navigationBar">
            <div className="customize-navbar bg-color">
                <div className="nav-logo">
                    <div className="logo">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src={ROADSIGN} height="15" alt="RoadSign Logo" loading="lazy" />
                        </Link>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light nav-custom">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>

                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                {/*<Link className="navbar-brand mt-2 mt-lg-0" to="/">*/}
                                {/*  <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />*/}
                                {/*</a>*/}
                                {/* <!-- Left links --> */}

                                {/* <!-- Left links --> */}
                            </div>
                            {/* <!-- Collapsible wrapper --> */}
                        </div>
                    </nav>
                </div>
                <div className="notify">
                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- Icon --> */}
                        {/*<Link className="text-reset me-3" to="#">*/}
                        {/*  <i className="fas fa-shopping-cart"></i>*/}
                        {/*</a>*/}

                        {/* <!-- Avatar --> */}
                        <div className="dropdown mr-3 col-lg-6">
                            <img
                                src={profile}
                                className=" profile-pic profile-icon"
                                height="50"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            <div className="dropdown-div ">
                                <NavDropdown id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/profile" className="nav-item-link">
                                            Profile
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/paymentDetails" className="nav-item-link">
                                            Payment Methods
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/security" className="nav-item-link">
                                            Security
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/notificationSettings" className="nav-item-link">
                                            Notifications
                                        </Link>
                                    </NavDropdown.Item>
                                    {/*<NavDropdown.Divider/>*/}
                                </NavDropdown>
                            </div>

                            {/*<ul*/}
                            {/*  className="dropdown-menu dropdown-menu-end"*/}
                            {/*  aria-labelledby="navbarDropdownMenuAvatar"*/}
                            {/*>*/}
                            {/*  <li>*/}
                            {/*    <Link className="dropdown-item" to="#">*/}
                            {/*      My profile*/}
                            {/*    </Link>*/}
                            {/*  </li>*/}
                            {/*  <li>*/}
                            {/*    <Link className="dropdown-item" to="/accountSettings">*/}
                            {/*      Settings*/}
                            {/*    </Link>*/}
                            {/*  </li>*/}
                            {/*  <li>*/}
                            {/*    <Link className="dropdown-item" to="#">*/}
                            {/*      Logout*/}
                            {/*    </Link>*/}
                            {/*  </li>*/}
                            {/*</ul>*/}
                        </div>
                        {/* <!-- Notifications --> */}
                        <div className="notification-bel">
                            <div className="dropdown">
                                <Link
                                    className="text-reset me-3 dropdown-toggle align-items-center hidden-arrow"
                                    to=""
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-expanded="x"
                                >
                                    <i className="fas fa-bell"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">
                                        1
                                    </span>
                                </Link>

                                {/*<ul*/}
                                {/*  className="dropdown-menu dropdown-menu-end"*/}
                                {/*  aria-labelledby="navbarDropdownMenuLink"*/}
                                {/*>*/}
                                {/*  <li>*/}
                                {/*    <Link className="dropdown-item" to="#">*/}
                                {/*      Some news*/}
                                {/*    </Link>*/}
                                {/*  </li>*/}
                                {/*  <li>*/}
                                {/*    <Link className="dropdown-item" to="#">*/}
                                {/*      Another news*/}
                                {/*    </Link>*/}
                                {/*  </li>*/}
                                {/*  <li>*/}
                                {/*    <Link className="dropdown-item" to="#">*/}
                                {/*      Something else here*/}
                                {/*    </Link>*/}
                                {/*  </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right elements --> */}
                    <div className="text-center sign-out-pc-view">
                        <button onClick={navigateToMainDashboard} type="button" class="text-center btn-sign-out">
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
