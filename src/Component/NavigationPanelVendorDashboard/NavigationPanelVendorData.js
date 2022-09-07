import React from "react";
import Addicon from "../../Assets/NavigationPanel/add.png";
import Dashboard from "../../Assets/NavigationPanel/dashboard.png";

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
    path: "",
    icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
    subItems: [
      { title: "Accomodation", path: "/configurations/add-accommodation" },
      { title: 'Vehicle', path: '/addNewVehicle' },
    ]
  },
  {
    title: 'View',
    path: '',
    icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
    subItems: [
      { title: 'Accomodation', path: '/configurations/driver-fare' },
      { title: 'Vehicle', path: '/configurations/vehicle-types' },
    ]
  },
  {
    title: 'Reservations',
    path: '',
    icon: <img src={Addicon} alt="Locations Icon" className="nav-bar-icon" />,
    subItems: [
      { title: 'Accomodation', path: '/configurations/driver-fare' },
      { title: 'Vehicle', path: '/configurations/vehicle-types' },
    ]
  },

]