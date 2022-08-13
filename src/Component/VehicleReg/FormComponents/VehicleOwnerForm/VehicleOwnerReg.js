import React from "react";
import '../VehicleInfoFormCompo/VehicleInfoForm.css'

const VehicleOwnerReg = () => {
    return <div><div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="card mb-4 body-radius">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Full Name</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Name with Initials</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Date of Birth</h6>
                                <input type="date" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Mobile Number</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Email</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Current Occupation</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Address</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>City</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Province</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Postal Code</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Passport Size Photo</h6>
                                <input class="form-control" type="file" id="formFile" />
                            </div>


                        </div>
                    </div>
                </div>

                <button type="button" className=" next-pre-btn pre-btn  ">
                    PREVIOUS
                </button>
                <button type="button" className=" next-pre-btn next-btn">
                    NEXT
                </button>
            </div>
        </div>
    </div>
    </div>
};

export default VehicleOwnerReg;
