import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    function navigateToHome() {
      navigate('/');
    }

    function navigateToAbout() {
      navigate('/About');
    }

    function navigateToCareer() {
        navigate('/Career');
    }

    function navigateToMental() {
        navigate('/Mental');
    }

    function navigateToEmergency() {
        navigate('/ER');
    }
  
    return (
        <div className="header">
            <img src="Logo.png" className="Logo" onClick={navigateToHome} alt="Logo Image"></img>
            <p className="About" onClick={navigateToAbout}>About</p>
            <p className="Career" onClick={navigateToCareer}>Career<br/>Development</p>
            <p className="Mental" onClick={navigateToMental}>Mental<br/>Health</p>
            <p className="Emergency" onClick={navigateToEmergency}>Emergency<br/>Contacts</p>
        </div>
    )
}

export default Header;