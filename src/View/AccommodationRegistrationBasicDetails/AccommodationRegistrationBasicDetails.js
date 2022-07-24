import React from "react";
import ShoppingBags from "../../Assets/BasicDetails/ShoppingBags.png";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import FormCompo from "../../Component/VenderRegister/StepPages/BasicDetailsFormCompo/FormCompo";
import StepsButton from "../../Component/VenderRegister/StepsButton/StepsButton";

function AccommodationRegistrationBasicDetails() {
  return (
    <>
      <RegPageNavbar />
      <StepsButton></StepsButton>
      <DescriptionCompo
        icon={ShoppingBags}
        altText={"ShoppingBags"}
        descriptionHeadText={"Match your property to the right travelers."}
        descriptionSubText={
          "All information is required unless marked optional."
        }
      />
      <FormCompo></FormCompo>
      <Footer />
    </>
  );
}

export default AccommodationRegistrationBasicDetails;
