import React from "react";
import './VehicleInfoForm.css'
import { useNavigate } from "react-router";


const VehicleInfoForm = () => {
    const navigate = useNavigate();
    const navigateToVehiclePhoto = () => {
        navigate('/vender-vehicle-reg-photo');
    };
    const navigateToVehicleInfo = () => {
        navigate('/vender-vehicle-reg-info');
    };
    return <div><div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="card mb-4 body-radius">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Tourism Registration No.</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Vehicle Registration Number" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Kind</h6>
                                <select class="form-control" id="selectform">
                                    <option>Car</option>
                                    <option>Van</option>
                                    <option>Bus</option>


                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Registration No.</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Vehicle Registration Number" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Make</h6>
                                <select class="form-control" id="selectform">
                                    <option>Toyota</option>
                                    <option>Nissan</option>
                                    <option>Suzuki</option>
                                    <option>BMW</option>
                                    <option>Benz</option>
                                    <option>Volvo</option>


                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Location</h6>
                                <select class="form-control" id="selectform">
                                    <option>Kandy</option>
                                    <option>Kurunegala</option>
                                    <option>Mathara</option>


                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Model</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Ex:Toyota Corolla" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Number of Sheets</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Number of Sheets" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Type</h6>
                                <select class="form-control" id="selectform">
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Estate</option>
                                    <option>Premium</option>
                                    <option>Suv</option>
                                    <option>People Carrier</option>

                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Gear Type</h6>
                                <select class="form-control" id="selectform">
                                    <option>Auto</option>
                                    <option>Manual</option>

                                </select>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Child Seat Availiability</h6>
                                <select class="form-control" id="selectform">
                                    <option>Yes</option>
                                    <option>No</option>


                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Air Condition Availability</h6>
                                <select class="form-control" id="selectform">
                                    <option>Yes</option>
                                    <option>No</option>

                                </select>
                            </div>

                        </div>

                    </div>
                </div>

                <button type="button" className=" next-pre-btn pre-btn  " onClick={navigateToVehicleInfo}>
                    PREVIOUS
                </button>
                <button type="button" className=" next-pre-btn next-btn" onClick={navigateToVehiclePhoto}>
                    NEXT
                </button>
            </div>
        </div>
    </div>
    </div>
};

export default VehicleInfoForm;
