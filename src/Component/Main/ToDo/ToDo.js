import React from "react";
import "./ToDo.css"
import Grid from "@mui/material/Grid";
import registration from "../../../Assets/Main/registration.png"
import delivery from "../../../Assets/Main/delivery.png"
import bestPrice from "../../../Assets/Main/best-price.png"
import success from "../../../Assets/Main/success.png"

function ToDo() {
    return (
        <div className="todo-div">
            <p className="todo-heading">
                ALL YOU HAVE TO DO
            </p>
            <div className="todo-sub-div">
                <Grid container spacing={4}>
                    <Grid item xs={2.5}>
                        <div className="registration-div img-div">
                            <img src={registration} alt="registration-img" className=" registration-img img-sub"/>
                            <p className="img-des">REGISTER WITH US</p>
                        </div>
                    </Grid>
                    <Grid item xs={2.5}>
                        <div className="delivery-div img-div">
                            <img src={delivery} alt="delivery-img" className=" delivery-img img-sub"/>
                            <p className="img-des">UPLOAD YOUR PROPERTY AND VEHICLE DETAILS</p>
                        </div>
                    </Grid>
                    <Grid item xs={2.5}>
                        <div className="bestPrice-div img-div ">
                            <img src={bestPrice} alt="bestPrice-img" className="bestPrice-img img-sub"/>
                            <p className="img-des">SET YOUR PRICES</p>
                        </div>
                    </Grid>
                    <Grid item xs={2.5}>
                        <div className="success-div img-div">
                            <img src={success} alt="success-img" className=" success-img img-sub"/>
                            <p className="img-des">SEE THOUSANDS OF TRAVELERS RESERVE YOUR PROPERTIES</p>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </div>

    );
}

export default ToDo;