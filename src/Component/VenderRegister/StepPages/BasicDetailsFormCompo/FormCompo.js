import React from "react";
import "./FormCompo";
import {Link} from "react-router-dom";

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
                      Name your property name{" "}
                    </label>
                    <br />
                    <label
                      className="small mb-2 fw-light"
                      htmlFor="currentPassword"
                    >
                      Make it count, and make it sound inviting!
                    </label>
                    <input
                      className="form-control"
                      id="currentPassword"
                      type="password"
                      placeholder="Property name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className=" mb-7 fw-normal fs-5 label-color"
                      htmlFor="currentPassword"
                    >
                      Describe your place{" "}
                    </label>
                    <br />
                    <label
                      className="small mb-2 fw-light"
                      htmlFor="currentPassword"
                    >
                      Why should a traveler choose to stay at your property?
                    </label>
                    <textarea
                      class="form-control"
                      id="currentPassword"
                      type="password"
                      placeholder="Example:
                          &#10;
                          •	5- minite walk to/ from public transportation
                          &#10;
                          •	family - friendly
                          &#10;
                          •	Big open space, with amazing views and natural light
                          &#10;
                          "
                      rows="10"
                    />
                  </div>
                </form>
              </div>
            </div>
            <Link to="/location">
            <button type="button" className=" next-pre-btn next-btn">
              NEXT
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCompo;
