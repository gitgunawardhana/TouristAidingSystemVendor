import React from "react";
import Map from "../../Assets/BasicDetails/Map.png";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import FormCompo from "../../Component/VenderRegister/BasicDetails/FormCompo/FormCompo";
import StepsButton from "../../Component/VenderRegister/BasicDetails/StepsButton/StepsButton";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";

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
