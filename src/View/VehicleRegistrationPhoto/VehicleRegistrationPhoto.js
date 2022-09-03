import React from "react";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import Footer from "../../Component/Footer/Footer";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import StepsButton from "../../Component/VehicleReg/StepsButton/StepButtonVehicle.js";
import Photo from "../../Assets/AccommodationRegistration/Map.png";
import FormComponent from "../../Component/VehicleReg/FormComponents/VehiclePhotoForm/VehiclePhotoForm.js"

const VehicleRegistrationPhoto = () => {
    return <><RegPageNavbar />
        <StepsButton></StepsButton>
        <DescriptionCompo
            icon={Photo}
            altText={"ShoppingBags"}
            descriptionHeadText={"Upload photos"}

        />
        <FormComponent />
        <Footer /></>
};

export default VehicleRegistrationPhoto;
