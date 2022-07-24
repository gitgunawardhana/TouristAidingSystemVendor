import React from "react";
import "react-phone-number-input/style.css";

import "./DescriptionCompo.css";

function BasicDetailsCompo(props) {
  return (
    <>
      <div className="container-xl px-4 mt-4 ">
        <div className="heading-div text-center crd-shadow-rg">
          <div className="sec para-head">
            <p className="font-weight-bold heading-basic d-flex  justify-content-center">
              {props.descriptionHeadText}
            </p>
            <p className="para d-flex  justify-content-center">
              {props.descriptionSubText}
            </p>
          </div>
          <div className="sec image-icon">
            <img src={props.icon} alt={props.altText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicDetailsCompo;
