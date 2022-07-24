import React from "react";
import "./FormCompo.css"
import {Link} from "react-router-dom";

function FormCompo() {

    return (
        <div>
            <div className="container-xl px-4 mt-4 ">
                <div className="row row-margin d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="card mb-4 body-radius">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label
                                            className=" mb-7 fw-normal fs-5 label-color"
                                            htmlFor="currentPassword"
                                        >
                                            Location{" "}
                                        </label>
                                        <br/>
                                        <label
                                            className="small mb-2 fw-light"
                                            htmlFor="currentPassword"
                                        >
                                            Guests will only receive your exact address once they’ve confirmed a
                                            booking.
                                        </label>

                                        <br/>

                                        <label className="font-weight-bold opacity-50">Street address</label>
                                        <input
                                            className="form-control"
                                            id="streetAddress"
                                            type="text"
                                            placeholder="Street address"
                                        />
                                    </div>
                                    <div className="mb-3">

                                        <label className="font-weight-bold opacity-50">Building, floor and unit number
                                            (optional)</label>
                                        <input
                                            className="form-control"
                                            id="floorNumber"
                                            type="text"
                                            placeholder="Building, floor and unit number"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="font-weight-bold opacity-50"
                                                           htmlFor="form3Example1m">State / Province</label>
                                                    <input type="text" id="form3Example1m"
                                                           className="form-control form-control-lg"
                                                           placeholder="State / Province"/>

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="font-weight-bold opacity-50"
                                                           htmlFor="form3Example1n">City</label>
                                                    <input type="text" id="form3Example1n"
                                                           className="form-control form-control-lg" placeholder="City"/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="font-weight-bold opacity-50"
                                                           htmlFor="form3Example1m">ZIP
                                                        / Postal code (optional)</label>
                                                    <input type="text" id="form3Example1m"
                                                           className="form-control form-control-lg"
                                                           placeholder="ZIP Code"/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            className=" mb-7 fw-normal fs-5 label-color"
                                            htmlFor="currentPassword"
                                        >
                                            Useful information{" "}
                                        </label>
                                        <br/>
                                        <label
                                            className="small mb-2 fw-light"
                                            htmlFor="currentPassword"
                                        >
                                            Travelers often look for these when booking homes.
                                        </label>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="font-weight-bold opacity-50"
                                                               htmlFor="form3Example1m">Distance from city (Km)</label>
                                                        <input type="number" id="form3Example1m"
                                                               className="form-control form-control-lg" min="0"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="font-weight-bold opacity-50"
                                                               htmlFor="form3Example1n">Distance from airport
                                                            (Km)</label>
                                                        <input type="number" id="form3Example1n"
                                                               className="form-control form-control-lg" min="0"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className=" mb-7 fw-normal fs-5 label-color"
                                            htmlFor="currentPassword"
                                        >
                                            Map location{" "}
                                        </label>
                                        <br/>
                                        <label
                                            className="small mb-2 fw-light"
                                            htmlFor="currentPassword"
                                        >
                                            Guests will only receive your exact address once they’ve confirmed a
                                            booking.
                                        </label>


                                    </div>

                                </form>
                            </div>
                        </div>
                        <Link to="/basicDetails">
                            <button type="button" className=" next-pre-btn pre-btn  ">
                                PREVIOUS
                            </button>
                        </Link>
                        <Link to="/houseRules">
                            <button type="button" className=" next-pre-btn next-btn">
                                NEXT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCompo;


