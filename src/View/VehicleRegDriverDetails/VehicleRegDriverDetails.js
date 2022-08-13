import React from "react";
import RegPageNavbar from "../../Component/RegistrationPageNavbar/RegPageNavbar";
import Footer from "../../Component/Footer/Footer";
import DescriptionCompo from "../../Component/VenderRegister/DescriptionCompo/DescriptionCompo";
import StepsButton from "../../Component/VehicleReg/StepsButton/StepButtonVehicle.js";
import Driverpng from "../../Assets/VehicleRegistration/driver.png";
import FormComponent from "../../Component/VehicleReg/FormComponents/VehicleDriverForm/VehicleDriverForm.js"

const VehicleRegDriverDetails = () => {
    return <><RegPageNavbar />
        <StepsButton></StepsButton>
        <DescriptionCompo
            icon={Driverpng}
            altText={"ShoppingBags"}
            descriptionHeadText={"Driver Details"}
            descriptionSubText={
                "All information is required unless marked optional."
            }
        />
        <FormComponent />
        <Footer /></>
};

export default VehicleRegDriverDetails;
