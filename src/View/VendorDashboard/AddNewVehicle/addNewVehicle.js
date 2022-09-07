import React from "react";
import NavigationPanel from "../../../Component/NavigationPanelVendorDashboard/NavigationPanelVendor";
import VehicleAdd from "../../../Component/VendorDashboard/Vehicle/VehicleAdd/vehicleAdd";
import PhotosAdd from "../../../Component/VendorDashboard/Vehicle/PhotosAdd/photosAdd"
import DriverInfoAdd from "../../../Component/VendorDashboard/Vehicle/DriverInfoAdd/driverInfoAdd"
import "./addNewVehicle.css";

function addNewVehicle() {
    return (
        <>
            <NavigationPanel />
            <form>
                <div className="main-section">
                    <VehicleAdd />
                    <PhotosAdd />
                    <DriverInfoAdd />
                    <div
                        className="container-xl px-4"
                        style={{ marginTop: "-34px !important" }}
                    >
                        <div className="row row-margin d-flex justify-content-center mrgin-btm">
                            <div className="col-lg-8">
                                <div className="card-body p-0">
                                    <button
                                        className="rounded mb-5 p-2"
                                        type="submit"
                                        style={{
                                            width: "-webkit-fill-available",
                                            backgroundColor: "#1E3D3E",
                                            border: "0px",
                                            color: "white",
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default addNewVehicle;
