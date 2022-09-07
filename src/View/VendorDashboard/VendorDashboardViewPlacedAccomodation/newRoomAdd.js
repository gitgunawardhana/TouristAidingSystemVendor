import React from "react";
import "./newAccomodation.css";
import NewForm from "../../../Component/AccomodationAddNewForm/RoomAddNewForm";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";

function NewAccomodation() {

    return (

        <>
            <NavigationPanel />
            <div className="lower-nav-bar">
                <p className="title">Add New Room</p>
                <p className="sub-title">Room / Create Room</p>
            </div>
            <div className="main-section-view">
                <NewForm />
            </div>
        </>
    );
}

export default NewAccomodation;