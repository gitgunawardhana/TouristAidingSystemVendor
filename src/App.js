import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Footer from "./Component/Footer/Footer";
import LoginForm from "./View/LoginForm/LoginForm";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./View/Home/Home";

;


function App() {
    return (
        <>
            <Router>


                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/loginForm" element={<LoginForm/>}/>

                </Routes>
                <Footer/>
            </Router>

        </>

    );
}

export default App;
