import React from "react";
import "react-phone-number-input/style.css";
import ShoppingBags from "../../../../Assets/BasicDetails/ShoppingBags.png";
import "./DescriptionCompo.css";

function BasicDetailsCompo() {
  return (
    <>
      <div className="container-xl px-4 mt-4 ">
        <div className="heading-div text-center crd-shadow-rg">
          <div className="sec para-head">
            <p className="font-weight-bold heading-basic d-flex  justify-content-center">
              Match your property to the right travelers.
            </p>
            <p className="para d-flex  justify-content-center">
              All information is required unless marked optional.
            </p>
          </div>
          <div className="sec image-icon">
            <img src={ShoppingBags} alt="ShoppingBags" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicDetailsCompo;
