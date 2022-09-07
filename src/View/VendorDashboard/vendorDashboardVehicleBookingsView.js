import React from "react";
import NavigationPanel from "../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import Widget from "../../Component/Widget/Widget";
import TextField from "@mui/material/TextField";
import VehicleBookingsTable from "../../Component/VehicleBookingsViewTable/VehicleBookingsViewTable"

const vendorDashboardVehicleBookingsView = () => {
    return <><NavigationPanel />
        <div className="widgets-dash">
            <Widget />
        </div>
        <div className='main-section-table'>
            <div className="card dashboard-card">
                <TextField
                    className="vendor-search-field"
                    margin="normal"
                    id="vendor-search"
                    label="Search Vendors"
                    variant="outlined"
                />
                <div className="Accomodation-view-table">
                    <VehicleBookingsTable />
                </div>

            </div>
        </div>
    </>;
};

export default vendorDashboardVehicleBookingsView;
