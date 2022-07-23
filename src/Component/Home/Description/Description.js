import React from "react";
import "./Description.css"
import accoImg from "../../../Assets/Home/home-accomo.jpg"



function Description() {
    return (
        <div className="home-main-div">
            {/*<img src={accoImg} className="home-img" alt="AccoIMG"/>*/}
           <h2 className="vend-des">Hi, John!</h2>
            <h3 className="acco-desc">Today accommodation reservations </h3>
        </div>
    );
}

export default Description;