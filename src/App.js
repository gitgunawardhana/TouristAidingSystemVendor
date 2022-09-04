import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import DashboardMain from "./View/VendorDashboard/Dashboard";
import Profile from "./View/profile/profile";
import PaymentDetails from "./View/profile/paymentDetails";
import Security from "./View/profile/security";
import Notificationes from "./View/profile/notificationes";
import VendorDashboardAccomodationView from "../src/View/VendorDashboard/vendorDashboardAccomodationView/vendorDashboardAccomodationView";
import VendorDashboardVehicleBookingsView from "../src/View/VendorDashboard/vendorDashboardVehicleBookingsView"
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import RegPageNavbar from "./Component/RegistrationPageNavbar/RegPageNavbar";
import AccommodationRegistrationBasicDetails from "./View/AccommodationRegistrationBasicDetails/AccommodationRegistrationBasicDetails";
import AccommodationRegistrationFacilities from "./View/AccommodationRegistrationFacilities/AccommodationRegistrationFacilities";
import AccommodationRegistrationPhotos from "./View/AccommodationRegistrationPhotos/AccommodationRegistrationPhotos";
import AccomodationRegistrationHouseRules from "./View/AccomodationRegistrationHouseRules/AccomodationRegistrationHouseRules";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import Main from "./View/Main/Main";
import SignIn from "./View/SignIn/SignIn";
import VenderType from "./View/VenderType/VenderType";
import VehicleRegInfo from '../src/View/VehicleRegistrationInfo/VehicleRegistrationInfo.js'
import VehicleRegVehicle from '../src/View/VehicleRegistrationVehicleDetails/VehicleDetails.js'
import VehicleRegPhotos from '../src/View/VehicleRegistrationPhoto/VehicleRegistrationPhoto.js'
// import VehicleRegOwnerInfo from '../src/View/VehicleRegistrationOwnerInfo/VehicleRegOwnerInfo.js'
import VehicleRegDriverInfo from '../src/View/VehicleRegDriverDetails/VehicleRegDriverDetails.js'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/vendorDashBoardMain" element={<DashboardMain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/security" element={<Security />} />
          <Route path="/notificationSettings" element={<Notificationes />} />
          <Route path="/vendorDashboardAccomodationView" element={<VendorDashboardAccomodationView />} />
          <Route path="/VendorDashboardVehicleBookingsView" element={<VendorDashboardVehicleBookingsView />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/vender-type" element={<VenderType />} />
          <Route path="/vender-vehicle-reg-info" element={<VehicleRegInfo />} />
          <Route path="/vender-vehicle-reg-vehicle" element={< VehicleRegVehicle />} />
          <Route path="/vender-vehicle-reg-photo" element={< VehicleRegPhotos />} />
          {/* <Route path="/vender-vehicle-owner-info" element={< VehicleRegOwnerInfo />} /> */}
          <Route path="/vender-vehicle-driver-info" element={< VehicleRegDriverInfo />} />
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
            path="/houserules"
            element={<AccomodationRegistrationHouseRules />}
          />
          <Route path="/regPageNavbar" element={<RegPageNavbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
