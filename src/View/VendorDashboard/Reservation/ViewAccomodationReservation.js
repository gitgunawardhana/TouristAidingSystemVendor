import React from "react";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import Widget from "../../../Component/Widget/Widget";
import TextField from "@mui/material/TextField";
import AccomodationReservationDataTable from "../../../Component/ReservationTables/accomodationReservationTable"
import "../VendorDashboardViewPlacedAccomodation/commonPlaced.css"

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
                    <AccomodationReservationDataTable />
                </div>

            </div>
        </div>


    </>;
};

export default vendorDashboardAccomodationView;
