import React from "react";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import Widget from "../../../Component/Widget/Widget";
import TextField from "@mui/material/TextField";
import AccomodationViewTable from "../../../Component/AccomodationViewTable/AccomodationViewTable.js"

const VendorAccommodationView = () => {
    return <>
        <NavigationPanel />
        <div className="widgets-dash">
            <Widget />
        </div>
        <div className='main-section'>
            <div className="card dashboard-card">
                <TextField
                    className="vendor-search-field"
                    margin="normal"
                    id="vendor-search"
                    label="Search Vendors"
                    variant="outlined"
                />
                <div className="Accomodation-view-table">
                    <AccomodationViewTable />
                </div>

            </div>
        </div>


    </>;
};

export default VendorAccommodationView;
