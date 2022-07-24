import FormGroup from "@mui/material/FormGroup";
import React from "react";
import CheckboxSection from "./CheckboxSection/CheckboxSection";
import "./FormCompo.css";

const access = [
  "Check-in/out [private]",
  "Check-in/out [private]",
  "Front desk [24-hour]",
  "Check-in [24-hour]",
  "Car park",
];

const importantInfo = [
  "A/C",
  "Pets allowed",
  "Transport to airport",
  "Dishwasher",
  "Breakfast [free]",
  "Shared kitchen",
  "Laundry service",
  "Kitchen basics (cookware, oils, condiments)",
];

const kitchen = [
  "Kitchenware",
  "Freezer",
  "Refrigerator",
  "Complimentary WIFi in all rooms",
  "Microwave",
  "Stove",
  "Daily cleaning",
  "Oven",
];

const safetyAndCleanliness = [
  "Security [24-hour]",
  "Free face masks",
  "Contactless check-in/out",
  "Individual air conditioning",
  "Cleaning products",
  "Cleaned by professional cleaning company",
  "Cleaning supplies provided for guests",
  "Hand sanitizer",
];

const otherFacilities = [
  "Parking",
  "Restaurant",
  "Swimming Pool",
  "Bar",
  "Gym",
  "Smoking Room",
  "Pet Allowed",
];

function FormCompo() {
  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="card mb-4 body-radius">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className=" mb-7 fw-normal fs-5 label-color"
                      htmlFor="currentPassword"
                    >
                      Facilities
                    </label>
                    <br />
                    <label
                      className="small mb-2 fw-light"
                      htmlFor="currentPassword"
                    >
                      These are how guests get into your property.
                    </label>
                    <div className="form-section-facilities">
                      <FormGroup>
                        <div>
                          <div className="sub-heading-section">
                            <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Access</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>
                                These are how guests get into your property.
                              </div>
                            </label>
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
                                endP={2}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={access}
                                startP={2}
                                endP={4}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={access}
                                startP={4}
                                endP={5}
                              ></CheckboxSection>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="sub-heading-section">
                            <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Important information</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>
                                These offerings are found in most of our
                                successful properties.
                              </div>
                            </label>
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
                                dataList={importantInfo}
                                startP={0}
                                endP={3}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={importantInfo}
                                startP={3}
                                endP={6}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={importantInfo}
                                startP={6}
                                endP={8}
                              ></CheckboxSection>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="sub-heading-section">
                            <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Kitchen</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>
                                Facilities and amenities that allow travelers to
                                eat and drink comfortably.
                              </div>
                            </label>
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
                                dataList={kitchen}
                                startP={0}
                                endP={3}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={kitchen}
                                startP={3}
                                endP={6}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={kitchen}
                                startP={6}
                                endP={8}
                              ></CheckboxSection>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="sub-heading-section">
                            <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Safety and Cleanliness</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>
                                Show guests that you take their safety and
                                health seriously with these amenities.
                              </div>
                            </label>
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
                                dataList={safetyAndCleanliness}
                                startP={0}
                                endP={3}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={safetyAndCleanliness}
                                startP={3}
                                endP={6}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={safetyAndCleanliness}
                                startP={6}
                                endP={8}
                              ></CheckboxSection>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="sub-heading-section">
                            <label className=" mb-7 fw-normal fs-9 label-color sub-label">
                              <span>Other Facilities</span>
                            </label>
                            <br />
                            <label className="small mb-2 fw-light">
                              <div>Show guests that you other facilities.</div>
                            </label>
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
                                dataList={otherFacilities}
                                startP={0}
                                endP={3}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={otherFacilities}
                                startP={3}
                                endP={5}
                              ></CheckboxSection>
                              <CheckboxSection
                                dataList={otherFacilities}
                                startP={5}
                                endP={7}
                              ></CheckboxSection>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <button type="button" className=" next-pre-btn pre-btn  ">
              PREVIOUS
            </button>
            <button type="button" className=" next-pre-btn next-btn">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCompo;
