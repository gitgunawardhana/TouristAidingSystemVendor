import React from "react";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import Widget from "../../../Component/Widget/Widget";
import TextField from "@mui/material/TextField";
import AccmodationPlacedDataTable from "../../../Component/PlacedDataViewTables/accmodationPlacedDataViewTable"
import "./commonPlaced.css"

const vendorDashboardAccomodationView = () => {
    return <>
        <NavigationPanel />
        <div className='main-section-placed'>
            <div className="card dashboard-card">
                <TextField
                    className="vendor-search-field"
                    margin="normal"
                    id="vendor-search"
                    label="Search Vendors"
                    variant="outlined"
                />
                <div className="Accomodation-view-table">
                    <AccmodationPlacedDataTable />
                </div>

            </div>
        </div>


    </>;
};

export default vendorDashboardAccomodationView;
