import React from "react";
import CheckboxSection from "./CheckboxSection/CheckboxSection";

const access = [
  "A/C",
  "Pets allowed",
  "Breakfast [free]",
  "Daily cleaning",
  "Security [24-hour]",
  "Free Wi-Fi",
  "Contactless check-in/out",
  "Cleaning products",
  "Smoking Room",
];

function RoomFacilities() {
  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center mrgin-btm">
          <div className="col-lg-8">
            <div className="card mb-4 body-radius">
              <div className="card-body">
                {/* <form> */}
                <div className="mb-3">
                  <label
                    className=" mb-7 fw-normal fs-5 label-color"
                    htmlFor="currentPassword"
                  >
                    Room Facilities
                  </label>
                  <br />
                  <label
                    className="small mb-2 fw-light"
                    htmlFor="currentPassword"
                  >
                    These are how guests get into your property.
                  </label>
                  <div className="form-section-facilities">
                    {/* <FormGroup> */}
                    <div>
                      <div className="sub-heading-section">
                        {/* <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Access</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>
                                These are how guests get into your property.
                              </div>
                            </label> */}
                      </div>
                      <div className="content-file-upload content-check-div text-center">
                        <div
                          className="checkbox-section checkbox-section-acc-reg"
                          style={{
                            display: "flex",
                            marginTop: "20px",
                          }}
                        >
                          <CheckboxSection
                            dataList={access}
                            startP={0}
                            endP={3}
                          ></CheckboxSection>
                          <CheckboxSection
                            dataList={access}
                            startP={3}
                            endP={6}
                          ></CheckboxSection>
                          <CheckboxSection
                            dataList={access}
                            startP={6}
                            endP={9}
                          ></CheckboxSection>
                        </div>
                      </div>
                    </div>
                    {/* </FormGroup> */}
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomFacilities;
