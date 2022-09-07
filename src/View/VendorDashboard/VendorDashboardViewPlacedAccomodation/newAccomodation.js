import React from "react";
import "./newAccomodation.css";
import RoomForm from "../../../Component/AccomodationAddNewForm/accomodationNewForm";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";

function NewRoomAdd() {

    return (

        <>
            <NavigationPanel />
            <div className="lower-nav-bar">
                <p className="title">Add New Accomodation</p>
                <p className="sub-title">Accomodation / Create Accomodation</p>
            </div>
            <div className="main-section-view">
                <RoomForm />
            </div>
        </>
    );
}

export default NewRoomAdd;