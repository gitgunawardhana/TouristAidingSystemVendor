import React from "react";
import "../HouseRulesFormCompo/FormCompo.css";

const FormCompo = () => {
    return <div><div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="card mb-4 body-radius">
                    <div className="card-body">
                        {/* <form>                    <div className="mb-3">
                            <label
                                className=" mb-7 fw-normal fs-5 label-color"
                                htmlFor="currentPassword"
                            >
                                Name your property name{" "}
                            </label>
                            <br />
                            <label
                                className="small mb-2 fw-light"
                                htmlFor="currentPassword"
                            >
                                Make it count, and make it sound inviting!
                            </label></div></form> */}
                        <div className="mb-3">
                            <label
                                className=" mb-7 fw-normal fs-5 label-color"
                                htmlFor="currentPassword"
                            >
                                Check-in/check-out time
                                {" "}
                            </label>
                            <br />
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
                                <input type="time" class="form-control" id="firstName" placeholder="" value="" required="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Check-In-Between</h6>
                                <input type="time" class="form-control" id="firstName" placeholder="" value="" required="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>What time will guests have to checkout by?</h6>
                                {/* <label for="firstName">First name</label> */}
                                <input type="time" class="form-control" id="firstName" placeholder="" value="" required="" />
                            </div>
                        </div>
                        {/* <form>
                            <div className="mb-3">
                                <label
                                    className=" mb-7 fw-normal fs-5 label-color"
                                    htmlFor="currentPassword"
                                >
                                    Check-in/check-out time
                                    {" "}
                                </label>
                                <br />
                                <label
                                    className="small mb-2 fw-light"
                                    htmlFor="currentPassword"
                                >
                                    When can guests check in?
                                </label>
                                <input
                                    className="form-control"
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Property name"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className=" mb-7 fw-normal fs-5 label-color"
                                    htmlFor="currentPassword"
                                >
                                    Describe your place{" "}
                                </label>
                                <br />
                                <label
                                    className="small mb-2 fw-light"
                                    htmlFor="currentPassword"
                                >
                                    Why should a traveler choose to stay at your property?
                                </label>
                                <textarea
                                    class="form-control"
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Example:
                    &#10;
                    •	5- minite walk to/ from public transportation
                    &#10;
                    •	family - friendly
                    &#10;
                    •	Big open space, with amazing views and natural light
                    &#10;
                    "
                                    rows="10"
                                />
                            </div>
                        </form> */}
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
    </div>;
};

export default FormCompo;
