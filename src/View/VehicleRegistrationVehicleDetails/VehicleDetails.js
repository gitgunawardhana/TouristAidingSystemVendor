import React from "react";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import Footer from "../../Component/Footer/Footer";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import StepsButton from "../../Component/VehicleReg/StepsButton/StepButtonVehicle.js";
import Vehiclepng from "../../Assets/VehicleRegistration/car.png";
import FormComponent from "../../Component/VehicleReg/FormComponents/VehicleInfoFormCompo/VehicleInfoForm.js"

const VehicleDetails = () => {
    return <><RegPageNavbar />
        <StepsButton></StepsButton>
        <DescriptionCompo
            icon={Vehiclepng}
            altText={"ShoppingBags"}
            descriptionHeadText={"Please Enter Your Vehicle Details"}
            descriptionSubText={
                "All information is required unless marked optional."
            }
        />
        <FormComponent />
        <Footer /></>
};

export default VehicleDetails;
