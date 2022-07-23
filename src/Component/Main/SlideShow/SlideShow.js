import React from "react";
import "./SlideShow.css"
import slide1 from "../../../Assets/Main/slide-1.png"
import Grid from "@mui/material/Grid";


function SlideShow() {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="first-slide shadow p-3 mb-5 bg-white rounded">
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <img src={slide1} alt="slide1-img" className="slide1-img"/>
                            </Grid>
                            <Grid item xs={8}>
                                <div className="heading-title">
                                    <p className="first-slide-heading">All the great stuff you want from a platform.</p>
                                    <p className="first-slide-des">We let you communicate with guests, manage bookings from
                                        your mobile device, and sync calendars across platforms. Plus live help in multiple
                                        languages. </p>
                                </div>


                            </Grid>
                        </Grid>


                    </div>
                </div>
                <div className="carousel-item">
                    <div className="first-slide shadow p-3 mb-5 bg-white rounded"></div>
                </div>
                <div className="carousel-item">
                    <div className="first-slide shadow p-3 mb-5 bg-white rounded"></div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>


    );
}

export default SlideShow;