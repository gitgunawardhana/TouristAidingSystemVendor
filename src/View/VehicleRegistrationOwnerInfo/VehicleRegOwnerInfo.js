import React from "react";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import Footer from "../../Component/Footer/Footer";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import StepsButton from "../../Component/VehicleReg/StepsButton/StepButtonVehicle.js";
import Ownerpng from "../../Assets/VehicleRegistration/owner.png";
import FormComponent from "../../Component/VehicleReg/FormComponents/VehicleOwnerForm/VehicleOwnerReg.js"

const VehicleRegOwnerInfo = () => {
    return <><RegPageNavbar />
        <StepsButton></StepsButton>
        <DescriptionCompo
            icon={Ownerpng}
            altText={"ShoppingBags"}
            descriptionHeadText={"Owner Details"}
            descriptionSubText={
                "All information is required unless marked optional."
            }
        />
        <FormComponent />
        <Footer /></>
};

export default VehicleRegOwnerInfo;
