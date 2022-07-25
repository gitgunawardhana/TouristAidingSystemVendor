import React from "react";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import StepsButton from "../../Component/VenderRegister/StepsButton/StepsButton";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import ShoppingBags from "../../Assets/AccommodationRegistration/googl.png";
import FormCompo from "../../Component/VenderRegister/StepPages/LocationFromCompo/FormCompo";
import Footer from "../../Component/Footer/Footer";

function AccommodationRegistrationLocation() {
    return (
        <>
            <RegPageNavbar />
            <StepsButton/>
            <DescriptionCompo
                icon={ShoppingBags}
                altText={"Map"}
                descriptionHeadText={"Put yourself on the map."}
                descriptionSubText={
                    "Where will your guests be staying?."
                }
            />
            <FormCompo/>
            <Footer/>
        </>
    );
}
export default AccommodationRegistrationLocation;