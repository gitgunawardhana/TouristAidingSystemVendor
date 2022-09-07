import React from "react";
import "./profileComponent.css";
import profile from "../../Assets/Profile/Squa1.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const profileComponent = () => {
    return <>
        <div className="notify-dashboard">
            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center" >
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
                        <NavDropdown id="collasible-nav-dropdown-dash">
                            <NavDropdown.Item>
                                <Link to="/profile" className="nav-item-link">
                                    Profile
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/paymentMethod" className="nav-item-link">
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

            </div>

            {/* <!-- Right elements --> */}
            {/* <div className="text-center sign-out-pc-view">
                        <button type="button" class="text-center btn-sign-out">
                            Sign out
                        </button>
                    </div> */}
        </div>
    </>;
};

export default profileComponent;
