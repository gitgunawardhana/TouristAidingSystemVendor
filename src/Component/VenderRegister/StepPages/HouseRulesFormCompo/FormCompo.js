import React from "react";
import "../HouseRulesFormCompo/FormCompo.css";
import {Link} from "react-router-dom";
import Footer from "../../../Footer/Footer";


const FormCompo = () => {
    return <div>
        <div className="container-xl px-4 mt-4 ">
            <div className="row row-margin d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="card mb-4 body-radius">
                        <div className="card-body">

                            <div className="mb-3">
                                <label
                                    className=" mb-7 fw-normal fs-5 label-color"
                                    htmlFor="currentPassword"
                                >
                                    Check-in/check-out time
                                    {" "}
                                </label>
                                <br/>
                                <label
                                    className="small mb-2 fw-light"
                                    htmlFor="currentPassword"
                                >
                                    When can guests check in?
                                </label></div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <h6>Check-In-Between</h6>
                                    {/* <label for="firstName">First name</label> */}
                                    <input type="time" class="form-control" id="firstName" placeholder="" value=""
                                           required=""/>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <h6></h6>
                                    <input type="time" class="form-control margin-form" id="firstName" placeholder="" value=""
                                           required=""/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <h6>What time will guests have to checkout by?</h6>
                                    {/* <label for="firstName">First name</label> */}
                                    <input type="time" class="form-control" id="firstName" placeholder="" value=""
                                           required=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link to="/location">
                        <button type="button" className=" next-pre-btn pre-btn  ">
                            PREVIOUS
                        </button>
                    </Link>

                    <Link to="/facilities">
                        <button type="button" className=" next-pre-btn next-btn">
                            NEXT
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>;
};

export default FormCompo;
