import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import RegPageNavbar from "./Component/RegistrationPageNavbar/RegPageNavbar";
import AccommodationRegistrationBasicDetails from "./View/AccommodationRegistrationBasicDetails/AccommodationRegistrationBasicDetails";
import AccommodationRegistrationFacilities from "./View/AccommodationRegistrationFacilities/AccommodationRegistrationFacilities";
import AccommodationRegistrationPhotos from "./View/AccommodationRegistrationPhotos/AccommodationRegistrationPhotos";
import AccommodationRegistrationHouseRules from "./View/AccommodationRegistrationHouseRules/AccomodationRegistrationHouseRules";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import Main from "./View/Main/Main";
import SignIn from "./View/SignIn/SignIn";
import VendorType from "./View/VenderType/VenderType";
import AccommodationRegistrationLocation
  from "./View/AccommodationRegistrationLocation/AccommodationRegistrationLocation";
import ScrollToTop from "./Component/ScrollToTop";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/vendor-type" element={<VendorType />} />
          <Route path="/basicDetails" element={<AccommodationRegistrationBasicDetails />}/>
          <Route path="/photos" element={<AccommodationRegistrationPhotos />} />
          <Route path="/facilities" element={<AccommodationRegistrationFacilities />}/>
          <Route path="/location" element={<AccommodationRegistrationLocation />} />
          <Route path="/facilities" element={<AccommodationRegistrationFacilities />}/>
          <Route path="/houseRules" element={<AccommodationRegistrationHouseRules />}/>
          <Route path="/regPageNavbar" element={<RegPageNavbar />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
