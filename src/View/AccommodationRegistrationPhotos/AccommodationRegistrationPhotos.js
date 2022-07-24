import React from "react";
import Map from "../../Assets/BasicDetails/Map.png";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import FormCompo from "../../Component/VenderRegister/Photos/FormCompo/FormCompo";
import StepsButton from "../../Component/VenderRegister/StepsButton/StepsButton";

function AccommodationRegistrationPhotos() {
  return (
    <>
      <RegPageNavbar />
      <StepsButton></StepsButton>
      <DescriptionCompo
        icon={Map}
        altText={"Map"}
        descriptionHeadText={"Show them what they’re missing."}
        descriptionSubText={"Pictures matter to travelers."}
      />
      <FormCompo></FormCompo>
      <Footer />
    </>
  );
}

export default AccommodationRegistrationPhotos;
