import React from "react";
import "./newAccomodation.css";
import NewForm from "../../../Component/AccomodationAddNewForm/RoomPackageAddNewForm";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";

function NewRoomPackageAdd() {

    return (

        <>
            <NavigationPanel />
            <div className="lower-nav-bar">
                <p className="title">Add New Room Package</p>
                <p className="sub-title">Room Package / Create Room Package</p>
            </div>
            <div className="main-section-view">
                <NewForm />
            </div>
        </>
    );
}

export default NewRoomPackageAdd;