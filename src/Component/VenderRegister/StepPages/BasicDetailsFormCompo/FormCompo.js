import React, {useState} from "react";
import "./FormCompo";
import {createSearchParams, Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import axios from "axios";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";

function FormCompo() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const navigate = useNavigate();


    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleDescriptionChange = event => {
        setName(event.target.value);
    }
    const handleEmailChange = event => {
        setName(event.target.value);
    }
    const handleTelephoneChange = event => {
        setName(event.target.value);
    }

    const handleSubmit = event => {

        const Details = {
            name: name,
            description: description,
            email: email,
            telephone: telephone,
        }

        axios.post("http://localhost:8080/accommodation-register", Details)
            .then(res => {
                if (res.data.success) {
                    // window.location = "/emailVerification"
                    // navigate("/emailVerification"))
                    navigate({
                        pathname: "/location",
                        search: createSearchParams({
                            email: email
                        }).toString()
                    });


                } else {
                    Swal.fire(
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }

            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })
    }
    const [value, setValue] = useState()


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
                                            htmlFor="currentPassword">
                                            Name your property name{" "}
                                        </label>
                                        <br/>
                                        <label
                                            className="small mb-2 fw-light"
                                            htmlFor="currentPassword">
                                            Make it count, and make it sound inviting!
                                        </label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Property name"
                                            onChange={handleNameChange}
                                            required={1}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className=" mb-7 fw-normal fs-5 label-color"
                                            htmlFor="currentPassword">
                                            Describe your place{""}
                                        </label>
                                        <br/>
                                        <label
                                            className="small mb-2 fw-light"
                                            htmlFor="currentPassword">
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
                                            onChange={handleDescriptionChange}
                                        />


                                    </div>
                                    <div className="mb-3">
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Item>
                                                    <label
                                                        className=" mb-7 fw-normal fs-5 label-color"
                                                        htmlFor="currentPassword">
                                                        Email
                                                    </label>
                                                    <br/>
                                                    <input
                                                        className="form-control"
                                                        id="Email"
                                                        type="email"
                                                        placeholder="Email"
                                                        onChange={handleEmailChange}
                                                    />

                                                </Item>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Item>
                                                    <label
                                                        className=" mb-7 fw-normal fs-5 label-color"
                                                        htmlFor="currentPassword">
                                                        Contact No
                                                    </label>
                                                    <br/>
                                                    <input
                                                        className="form-control"
                                                        id="Mobile"
                                                        type="tel"
                                                        placeholder="Contact"
                                                        onChange={handleTelephoneChange}
                                                        required={1}
                                                    />

                                                </Item>
                                            </Grid>
                                        </Grid>

                                    </div>

                                </form>
                            </div>
                        </div>
                        <Link to="/location">
                            <button type="button" className=" next-pre-btn next-btn" onClick={handleSubmit}>
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
