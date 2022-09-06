import React from "react";
import NavigationPanel from "../../NavigationPanelVendorDashboard/NavigationPanelVendor";
import BedOptions from "../BedOptions/BedOptions";
import RoomDetails from "../RoomDetails/RoomDetails";
import RoomFacilities from "../RoomFacilities/RoomFacilities";
import UploadPhotos from "../UploadPhotos/UploadPhotos";
import "./AddRoom.css";

function AddRoom() {
  return (
    <>
      <NavigationPanel />
      <form>
        <div className="main-section">
          <RoomDetails></RoomDetails>
          <BedOptions></BedOptions>
          <RoomFacilities></RoomFacilities>
          <UploadPhotos></UploadPhotos>
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

export default AddRoom;
