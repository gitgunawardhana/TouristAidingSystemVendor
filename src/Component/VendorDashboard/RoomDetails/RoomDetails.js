import React from "react";

function RoomDetails() {
  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center mrgin-btm">
          <div className="col-lg-8">
            <div className="card mb-4 body-radius">
              <div className="sec para-head">
                <p className=" mb-7 fw-normal fs-5 label-color">Room Details</p>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>Room Type</span>
                  </label>
                  <br />
                  {/* <label
                        className="small mb-2 fw-light"
                        htmlFor="currentPassword"
                      >
                        Make it count, and make it sound inviting!
                      </label> */}
                  {/* <input
                        className="form-control"
                        id="currentPassword"
                        type="text"
                        placeholder="Property name"
                      /> */}
                  <select
                    className="form-control"
                    name="room-type"
                    id="room-type"
                    style={{ height: "50px" }}
                  >
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="family">Family</option>
                  </select>
                  <br />
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>Room Name</span>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    id="currentPassword"
                    type="text"
                    placeholder="Room name"
                  />
                  <br />
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>Smoking Policy</span>
                  </label>
                  <br />
                  <select
                    className="form-control"
                    name="room-type"
                    id="room-type"
                    style={{ height: "50px" }}
                  >
                    <option value="single">No Smoking</option>
                    <option value="double">Smoking</option>
                  </select>
                  <br />
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>No Of Rooms Of This Type</span>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    id="numberOfRooms"
                    type="number"
                    placeholder="Number of rooms"
                  />
                  <br />
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>Room Size</span>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    id="roomSize"
                    type="number"
                    placeholder="Number of rooms"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
