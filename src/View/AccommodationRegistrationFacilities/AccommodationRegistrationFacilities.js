import React from "react";
import Facilities from "../../Assets/AccommodationRegistration/Facilities.png";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import FormCompo from "../../Component/VenderRegister/StepPages/FacilitiesFormCompo/FormCompo";
import StepsButton from "../../Component/VenderRegister/StepsButton/StepsButton";

function AccommodationRegistrationFacilities() {
  return (
    <>
      <RegPageNavbar />
      <StepsButton></StepsButton>
      <DescriptionCompo
        icon={Facilities}
        altText={"Map"}
        descriptionHeadText={"What’s unique and wonderful about your property?"}
        descriptionSubText={
          "Every room and home is unique. Tell us why yours stands out."
        }
      />
      <FormCompo></FormCompo>
      <Footer />
    </>
  );
}

export default AccommodationRegistrationFacilities;
