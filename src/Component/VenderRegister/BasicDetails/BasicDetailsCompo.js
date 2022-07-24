import React from "react";
import {Link} from "react-router-dom";
import "./BasicDetailsCompo.css"
import 'react-phone-number-input/style.css'


function BasicDetailsCompo() {
    return (
        <>
            <div className="container-xl px-4 mt-4 ">
                {/*// <!-- Account page navigation-->*/}
                <div className="">


                <nav className="nav nav-borders nav-border  nav-fill  border w-75 p-3  ">
                    <Link to="/basicdetails" className="nav-link  ms-0 nav-bar-link active"
                    >Basics details</Link>
                    <Link to="/basicdetails" className="nav-link nav-bar-link"
                    >Location</Link>
                    <Link to="/basicdetails" className="nav-link nav-bar-link "
                    >House Rules</Link>
                    <Link to="/basicdetails" className="nav-link nav-bar-link"
                    >Facilities
                    </Link><Link to="/basicdetails" className="nav-link nav-bar-link"
                >Photos</Link>
                </nav>
                </div>
                <div className="heading-div ">
                    <p className="font-weight-bold heading-basic d-flex  justify-content-center">
                        Match your property to the right travelers.
                    </p>
                    <p className="para d-flex  justify-content-center">
                        All information is required unless marked optional.
                    </p>
                </div>



                <div className="mt-0 mb-4"></div>
                <div className="row row-margin">
                    <div className="col-lg-8">
                        {/*// <!-- Change password card-->*/}
                        <div className="card mb-4">
                            <div className="card-header">Change Password</div>
                            <div className="card-body">
                                <form>
                                    {/*// <!-- Form Group (current password)-->*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="currentPassword">Current Password</label>
                                        <input className="form-control" id="currentPassword" type="password"
                                               placeholder="Enter current password"/>
                                    </div>
                                    {/*// <!-- Form Group (new password)-->*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="newPassword">New Password</label>
                                        <input className="form-control" id="newPassword" type="password"
                                               placeholder="Enter new password"/>
                                    </div>
                                    {/*// <!-- Form Group (confirm password)-->*/}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="confirmPassword">Confirm Password</label>
                                        <input className="form-control" id="confirmPassword" type="password"
                                               placeholder="Confirm new password"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </>
    );
}

export default BasicDetailsCompo;
