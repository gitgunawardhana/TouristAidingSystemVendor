import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import VehicleRegInfo from "../src/View/VehicleRegistrationInfo/VehicleRegistrationInfo.js";
import VehicleRegPhotos from "../src/View/VehicleRegistrationPhoto/VehicleRegistrationPhoto.js";
import VehicleRegVehicle from "../src/View/VehicleRegistrationVehicleDetails/VehicleDetails.js";
import "./App.css";
import DashboardMain from "./View/VendorDashboard/Dashboard";
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import RegPageNavbar from "./Component/RegistrationPageNavbar/RegPageNavbar";
import AccommodationRegistrationBasicDetails from "./View/AccommodationRegistrationBasicDetails/AccommodationRegistrationBasicDetails";
import AccommodationRegistrationFacilities from "./View/AccommodationRegistrationFacilities/AccommodationRegistrationFacilities";
import AccommodationRegistrationHouseRules from "./View/AccommodationRegistrationHouseRules/AccomodationRegistrationHouseRules";
import AccommodationRegistrationPhotos from "./View/AccommodationRegistrationPhotos/AccommodationRegistrationPhotos";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import Main from "./View/Main/Main";
import SignIn from "./View/SignIn/SignIn";
import VendorDashboardAccomodationView from "../src/View/VendorDashboard/vendorDashboardAccomodationView/vendorDashboardAccomodationView";
// import VehicleRegOwnerInfo from '../src/View/VehicleRegistrationOwnerInfo/VehicleRegOwnerInfo.js'
import VehicleRegDriverInfo from "../src/View/VehicleRegDriverDetails/VehicleRegDriverDetails.js";
import AddRoom from "../src/Component/VendorDashboard/AddRoom/AddRoom";
import AccommodationRegistrationLocation from "./View/AccommodationRegistrationLocation/AccommodationRegistrationLocation";
import VendorType from "./View/VenderType/VenderType";
import VendorDashboardVehicleBookingsView from "./View/VendorDashboard/vendorDashboardVehicleBookingsView.js";
import Profie from "../src/View/profile/profile"
import Paymentmethods from "../src/View/profile/paymentDetails"
import Security from "../src/View/profile/security"
import NotificationSettings from "../src/View/profile/notificationes"
import AddNewVehicle from "./View/VendorDashboard/AddNewVehicle/addNewVehicle.js";
import VendorDashboardAccomodationViewPage from "./View/VendorDashboard/VendorDashboardViewPlacedAccomodation/vendorDashboardViewPlacedAccomodation.js";
import VendorDashboardVehicleViewPage from "./View/VendorDashboard/VendorDashboardViewPlacedVehicles/vendorDashboardViewPlacedVehicles";
import VendorDashboardAccomodationReserveViewPage from "./View/VendorDashboard/Reservation/ViewAccomodationReservation";
import VendorDashboardVehicleReserveViewPage from "./View/VendorDashboard/Reservation/viewVehicleReservation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/vendorDashBoardMain" element={<DashboardMain />} />
          <Route path="/vendorDashboardAccomodationView" element={<VendorDashboardAccomodationView />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/VendorDashboardVehicleBookingsView" element={<VendorDashboardVehicleBookingsView />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/vendor-type" element={<VendorType />} />
          <Route
            path="/configurations/add-accommodation"
            element={<AddRoom />}
          />
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
          <Route path="/profile" element={<Profie />} />
          <Route path="/paymentDetails" element={<Paymentmethods />} />
          <Route path="/security" element={<Security />} />
          <Route path="/notificationSettings" element={<NotificationSettings />} />
          <Route path="/addNewVehicle" element={<AddNewVehicle />} />
          <Route path="/viewPlacedAccomodations" element={<VendorDashboardAccomodationViewPage />} />
          <Route path="/viewPlacedVehicles" element={<VendorDashboardVehicleViewPage />} />
          <Route path="/accomodationReservationView" element={<VendorDashboardAccomodationReserveViewPage />} />
          <Route path="/vehicleReservationView" element={<VendorDashboardVehicleReserveViewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
