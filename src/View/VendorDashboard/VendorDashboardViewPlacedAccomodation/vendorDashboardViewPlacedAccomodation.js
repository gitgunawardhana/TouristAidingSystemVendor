import React from "react";
import AllAccomodation from "../../../Component/PlacedDataViewTables/accmodationPlacedDataViewTable";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";

function Accomodationes() {

    return (
        <>
            <NavigationPanel />
            <div className="lower-nav-bar">
                <p className="title">Accomodationes</p>
                <p className="sub-title">Accomodationes</p>
            </div>
            <div className='main-section-view'>
                <div className="card">
                    <AllAccomodation />
                </div>
            </div>
        </>
    )
}

export default Accomodationes;