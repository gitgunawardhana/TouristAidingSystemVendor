import React from "react";
import Map from "../../Assets/AccommodationRegistration/map 1.png";
import Footer from "../../Component/Footer/Footer";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import StepsButton from "../../Component/VenderRegister/StepsButton/StepsButton";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import FormCompo from '../../Component/VenderRegister/StepPages/HouseRulesFormCompo/FormCompo.js'

const AccomodationRegistrationHouseRules = () => {
    return <><RegPageNavbar />
        <StepsButton />
        <DescriptionCompo icon={Map}
            altText={"Map1"}
            descriptionHeadText={"House Rules"}
            descriptionSubText={"Where will your guests be staying?"} />
        <FormCompo></FormCompo>

    </>
};

export default AccomodationRegistrationHouseRules;
