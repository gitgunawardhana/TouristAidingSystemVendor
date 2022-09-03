import React from "react";
import NavigationPanel from "../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import DashboardImg from "../../Assets/dashboard.jpg";

const Dashboard = () => {
    return <>
        <NavigationPanel />
        <div className="main-section">
            <img src={DashboardImg} alt="Dashboard" />
        </div></>;
};

export default Dashboard;
