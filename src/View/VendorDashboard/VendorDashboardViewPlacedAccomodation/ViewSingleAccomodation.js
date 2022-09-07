import React from "react";
import "./newAccomodation.css";
import ViewForm from "../../../Component/AccomodationAddNewForm/accomodationViewForm";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import AllLocationAttractions
    from "../../../Component/PlacedDataViewTables/RoomPlacedDataViewTable";
import RoomPackagesDataView
    from "../../../Component/PlacedDataViewTables/RoomPackagesDataViewTable";
import { useParams } from "react-router";

function ViewSingleLocation() {
    let id = useParams().id;
    return (
        <>
            <NavigationPanel />
            <div className="lower-nav-bar">
                <p className="title">Single Accomodation Details</p>
                <p className="sub-title">Accomodation / View Accomodation</p>
            </div>
            <div className="main-section-view">
                <ViewForm id={id} />
                <AllLocationAttractions locationId={id} />
                <RoomPackagesDataView locationId={id} />
            </div>
        </>
    );
}

export default ViewSingleLocation;