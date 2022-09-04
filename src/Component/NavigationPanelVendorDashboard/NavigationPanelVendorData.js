import React from "react";
import Dashboard from "../../Assets/NavigationPanel/dashboard.png";
import Vendors from "../../Assets/NavigationPanel/vendors.png";
import Users from "../../Assets/NavigationPanel/users.png";
import Configurations from "../../Assets/NavigationPanel/configurations.png";
import Addicon from "../../Assets/NavigationPanel/add.png";

export const NavigationPanelVendorData = [
    {
        title: 'Dashboard',
        path: '/vendorDashBoardMain',
        icon: <img src={Dashboard} alt="Dashboard Icon" className="nav-bar-icon" />,
        subItems: [{ title: 'Accomodation', path: '/vendorDashboardAccomodationView' },
        { title: 'Vehicle', path: '/VendorDashboardVehicleBookingsView' },]
    },
    {
        title: 'Add New',
        path: '/locations',
        icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
        subItems: [
            { title: 'Accomodation', path: '/configurations/driver-fare' },
            { title: 'Vehicle', path: '/configurations/vehicle-types' },
        ]
    },
    {
        title: 'View',
        path: '/locations',
        icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
        subItems: [
            { title: 'Accomodation', path: '/configurations/driver-fare' },
            { title: 'Vehicle', path: '/configurations/vehicle-types' },
        ]
    },
    {
        title: 'Reservations',
        path: '/locations',
        icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
        subItems: [
            { title: 'Accomodation', path: '/configurations/driver-fare' },
            { title: 'Vehicle', path: '/configurations/vehicle-types' },
        ]
    },

]