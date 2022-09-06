import React from "react";
import DashboardImg from "../../Assets/dashboard.jpg";
import NavigationPanel from "../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";

const Dashboard = () => {
  return (
    <>
      <NavigationPanel />
      <div className="main-section">
        <img src={DashboardImg} alt="Dashboard" />
      </div>
    </>
  );
};

export default Dashboard;
