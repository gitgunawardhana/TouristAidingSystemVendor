import React from "react";
import "./Heading.css"
import sigiriya from "../../../Assets/Navbar/Sigiriya.png"
import {Link} from "react-router-dom";

function Heading() {
    return (
        <div className="heading-main-div">
            <img src={sigiriya} alt="heading-img" className="heading-img"/>
            <div className="heading-description">
                <p className="heading-h1">Connect with ROADSIGN</p>
                <p className="sub-heading-dis">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo.</p>
                <p className="discription">Give your property the best value</p>
                <Link to="/createAccount">
                    <button className="heading-register-btn shadow p-3 mb-5 bg-white rounded">Register Now</button>


                </Link>
            </div>
        </div>
    );
}

export default Heading;