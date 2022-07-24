import React from "react";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import DescriptionCompo from "../../Component/VenderRegister/BasicDetails/DescriptionCompo/DescriptionCompo";
import FormCompo from "../../Component/VenderRegister/BasicDetails/FormCompo/FormCompo";
import StepsButton from "../../Component/VenderRegister/BasicDetails/StepsButton/StepsButton";

function AccommodationRegistrationBasicDetails() {
  return (
    <>
      <RegPageNavbar />
      <StepsButton></StepsButton>
      <DescriptionCompo />
      <FormCompo></FormCompo>
      <Footer />
    </>
  );
}

export default AccommodationRegistrationBasicDetails;
