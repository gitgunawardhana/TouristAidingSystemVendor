import React from "react";
import './VehicleInfoForm.css'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module


const VehicleInfoForm = () => {
    return <div><div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="card mb-4 body-radius">
                    <div className="card-body">
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
                                <h6>Vehicle Model</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Ex:Toyota Corolla" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Payload</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Number of Passengers" />
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

                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Vehicle Revenue License Valid From</h6>

                                <input type="date" class="form-control" id="firstName" placeholder="Number of Passengers" />
                            </div>
                            <div class="col-md-6 mb-3">


                                <input type="date" class="form-control" id="firstName" placeholder="To" style={{ marginTop: "27px" }} />
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

export default VehicleInfoForm;
