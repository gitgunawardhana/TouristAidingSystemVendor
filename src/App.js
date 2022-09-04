import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import VehicleRegInfo from "../src/View/VehicleRegistrationInfo/VehicleRegistrationInfo.js";
import VehicleRegPhotos from "../src/View/VehicleRegistrationPhoto/VehicleRegistrationPhoto.js";
import VehicleRegVehicle from "../src/View/VehicleRegistrationVehicleDetails/VehicleDetails.js";
import "./App.css";
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import RegPageNavbar from "./Component/RegistrationPageNavbar/RegPageNavbar";
import AccommodationRegistrationBasicDetails from "./View/AccommodationRegistrationBasicDetails/AccommodationRegistrationBasicDetails";
import AccommodationRegistrationFacilities from "./View/AccommodationRegistrationFacilities/AccommodationRegistrationFacilities";
import AccommodationRegistrationHouseRules from "./View/AccommodationRegistrationHouseRules/AccomodationRegistrationHouseRules";
import AccommodationRegistrationPhotos from "./View/AccommodationRegistrationPhotos/AccommodationRegistrationPhotos";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import Main from "./View/Main/Main";
import SignIn from "./View/SignIn/SignIn";
import DashboardMain from "./View/VendorDashboard/Dashboard";
import VendorDashboardAccomodationView from "./View/VendorDashboard/vendorDashboardAccomodationView";
// import VehicleRegOwnerInfo from '../src/View/VehicleRegistrationOwnerInfo/VehicleRegOwnerInfo.js'
import VehicleRegDriverInfo from "../src/View/VehicleRegDriverDetails/VehicleRegDriverDetails.js";
import AddRoom from "./Component/VendorDashboard/AddRoom/AddRoom";
import AccommodationRegistrationLocation from "./View/AccommodationRegistrationLocation/AccommodationRegistrationLocation";
import VendorType from "./View/VenderType/VenderType";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/vendorDashBoardMain" element={<DashboardMain />} />
          <Route
            path="/vendorDashboardAccomodationView"
            element={<VendorDashboardAccomodationView />}
          />
          <Route
            path="//configurations/add-accommodation"
            element={<AddRoom />}
          />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/vendor-type" element={<VendorType />} />
          <Route
            path="/basicDetails"
            element={<AccommodationRegistrationBasicDetails />}
          />
          <Route path="/vender-vehicle-reg-info" element={<VehicleRegInfo />} />
          <Route
            path="/vender-vehicle-reg-vehicle"
            element={<VehicleRegVehicle />}
          />
          <Route
            path="/vender-vehicle-reg-photo"
            element={<VehicleRegPhotos />}
          />
          {/* <Route path="/vender-vehicle-owner-info" element={< VehicleRegOwnerInfo />} /> */}
          <Route
            path="/vender-vehicle-driver-info"
            element={<VehicleRegDriverInfo />}
          />
          <Route
            path="/basicDetails"
            element={<AccommodationRegistrationBasicDetails />}
          />
          <Route path="/photos" element={<AccommodationRegistrationPhotos />} />
          <Route
            path="/facilities"
            element={<AccommodationRegistrationFacilities />}
          />
          <Route
            path="/location"
            element={<AccommodationRegistrationLocation />}
          />
          <Route
            path="/facilities"
            element={<AccommodationRegistrationFacilities />}
          />
          <Route
            path="/houseRules"
            element={<AccommodationRegistrationHouseRules />}
          />
          <Route path="/regPageNavbar" element={<RegPageNavbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
