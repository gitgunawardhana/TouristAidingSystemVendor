import React from "react";
import {Link} from "react-router-dom";
import "./BasicDetailsCompo.css"
import 'react-phone-number-input/style.css'


function BasicDetailsCompo() {
    return (
        <>
            <div className="container-xl px-4 mt-4 ">
                {/*// <!-- Account page navigation-->*/}

                <div className="heading-div ">
                    <p className="font-weight-bold heading-basic d-flex  justify-content-center">
                        Match your property to the right travelers.
                    </p>
                    <p className="para d-flex  justify-content-center">
                        All information is required unless marked optional.
                    </p>
                </div>

                <div className="mt-0 mb-4"></div>
                <div className="row row-margin d-flex justify-content-center">
                    <div className="col-lg-8">

                        <div className="card mb-4">

                            <div className="card-body">
                                <form>

                                    <div className="mb-3">
                                        <label className=" mb-7 fw-normal fs-5 label-color" htmlFor="currentPassword">Name
                                            your property name </label><br/>
                                        <label className="small mb-2 fw-light" htmlFor="currentPassword">Make it count,
                                            and make it sound inviting!</label>
                                        <input className="form-control" id="currentPassword" type="password"
                                               placeholder="Property name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className=" mb-7 fw-normal fs-5 label-color" htmlFor="currentPassword">Describe
                                            your place </label><br/>
                                        <label className="small mb-2 fw-light" htmlFor="currentPassword">Why should a
                                            traveler choose to stay at your property?</label>
                                        <textarea class="form-control" id="currentPassword" type="password"
                                                  placeholder="Example:
                                                                    &#10;
                                                                    •	5- minite walk to/ from public transportation
                                                                    &#10;
                                                                    •	family - friendly
                                                                    &#10;
                                                                    •	Big open space, with amazing views and natural light
                                                                    &#10;
                                                                    " rows="4"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <button type="button" className=" next-pre-btn pre-btn  ">PREVIOUS</button>
                        <button type="button" className=" next-pre-btn next-btn">NEXT</button>
                    </div>


                </div>


            </div>

        </>
    );
}

export default BasicDetailsCompo;
