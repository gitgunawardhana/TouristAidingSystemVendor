import React from "react";
import './VehicleRegistrationInfo.css';
import { useNavigate } from "react-router";


const VehicleVendorRegistrationInfo = () => {
    const navigate = useNavigate();
    const navigateToVehicleRegistration = () => {
        navigate('/vender-vehicle-reg-vehicle');
    };
    return <><div className="container card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded vender-type-rounded">
        <div className="row g-0">
            <div className="container-sm text-center vender-container">
                <div className="vender-type-header-section">
                    <h2 className="vender-page-heading">
                        Vehicle Vendor Registration Info
                    </h2>
                    <p>
                        Before Registration please take a quick look on our terms and conditions
                    </p>
                </div>
                <div className="info-wrapper-vehicle">
                    <p id="conditionsvehicle">ALL VENDOR VEHICLES MUST BE SCREENED AND PRE-APPROVED BEFORE REGISTRATION CAN BE FULLY COMPLETED (Excludes Panda Junction).</p>
                    <p id="conditionsvehicle">We will evaluate the quality of your booth vehicles and then notify you via email of your approval or denial. Your credit/debit card will not be charged unless your vehicles are approved. Due to the overwhelming amount of applications, it may take several weeks for you to be notified.</p>
                    <p id="conditionsvehicle"><span style={{ color: "red" }}>If you do not receive an email updating you on the status of your application, you can check the status by logging into your account.</span></p>
                    <p id="conditionsvehicle">If you fail to complete all of the steps, your registration will not be honored. </p>
                    <p id="conditionsvehicle">Please take your time and verify that all of your information is correct before submitting! If you encounter any errors or have any questions during the registration process, do not proceed any further and please feel free to contact us.</p>
                    <p id="conditionsvehicle"><span style={{ color: "red" }}>When submitting vehicle images, please do not submit instagram pictures or phone screen shots!</span></p>
                    <p id="conditionsvehicle"><b>Pricing: </b>Please contact us for prices and booth options.</p>
                </div>
                <div className="vehicle-info-button">
                    <button onClick={navigateToVehicleRegistration} type="button" className="btn  btn-lg ">I Understand and I Wish to Continue
                    </button>
                </div>
                {/* <div className="vender-page-btns">
                    <div className="vender-btn vender-btn-hotel">
                        <img src={Hotel} alt="Hotel" />
                    </div>
                    <div className="vender-btn vender-btn-vehicle">
                        <img src={Vehicle} alt="Vehicle" />
                    </div>
                </div> */}
            </div>
        </div>
    </div></>
};

export default VehicleVendorRegistrationInfo;
