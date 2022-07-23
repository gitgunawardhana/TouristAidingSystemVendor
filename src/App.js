import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Main from "./View/Main/Main";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import SignIn from "./View/SignIn/SignIn";



function App() {
    return (
        <>
            <Router>


                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/createAccount" element={<CreateAccount/>}/>
                    <Route path="/emailVerification" element={<EmailVerification/>}/>
                    <Route path="/signIn" element={<SignIn/>}/>


                </Routes>


            </Router>

        </>

    );
}

export default App;
