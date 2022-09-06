import React from "react";

function BedOptions() {
  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center mrgin-btm">
          <div className="col-lg-8">
            <div className="card mb-4 body-radius">
              <div className="sec para-head">
                <p className=" mb-7 fw-normal fs-5 label-color">Bed Options</p>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>Available Beds</span>
                  </label>
                  <select
                    className="form-control"
                    name="room-type"
                    id="room-type"
                    style={{ height: "50px" }}
                  >
                    <option value="single">Twin Beds</option>
                    <option value="double">Full Beds</option>
                  </select>
                  <br />
                  <input
                    className="form-control"
                    id="numberOfBeds"
                    type="number"
                    placeholder="Number of beds"
                  />
                  <br />
                  <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                    <span>How many guest can stay in this room?</span>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    id="currentPassword"
                    type="number"
                    placeholder="Number of guest"
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

export default BedOptions;
