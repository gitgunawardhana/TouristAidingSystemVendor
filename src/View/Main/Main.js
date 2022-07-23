import React from "react";
import MainNavbar from "../../Component/Main/Navbar/MainNavbar";
// import sk from "../../Assets/Home/hotel-topaz-welcome.jpg"
import Footer from "../../Component/Footer/Footer";
import Heading from "../../Component/Main/Heading/Heading";
import Provide from "../../Component/Main/Provide/Provide";
import SlideShow from "../../Component/Main/SlideShow/SlideShow";
import ToDo from "../../Component/Main/ToDo/ToDo";

function Main() {
  return (
    <>
      <MainNavbar />
      <Heading />
      <SlideShow />
      <Provide />
      <ToDo />
      <Footer />
    </>
  );
}

export default Main;
