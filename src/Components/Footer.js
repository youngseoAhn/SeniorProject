import React from "react";
import { useNavigate } from "react-router-dom";
import './Footer.css';


const Footer = () => {

    let navigate = useNavigate();

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

    function navigateToDonation() {
        navigate('/Donation');
    }


    return (
        <div className="container"> 
            <div className="row1">
                <div className="title">Address</div>
                <div className="content">1900 Commerce St, Tacoma, WA 98402</div>
                <div className="title">Phone</div>
                <div className="content">(253)692-4000</div>
                <div className="title">Email</div>
                <div className="content">Husky@uw.edu</div>
            </div>
            <div className="row2">
                <div className="Links" onClick={navigateToAbout}>About Us</div>
                <div className="Links" onClick={navigateToCareer}>Career Development</div>
                <div className="Links" onClick={navigateToMental}>Mental Health</div>
                <div className="Links" onClick={navigateToEmergency}>Emergency Contacts</div>
                <div className="Links" onClick={navigateToDonation}>Donations</div>
                <div className="Links">Admin Login</div>
            </div>
        </div>
    )
}

export default Footer;