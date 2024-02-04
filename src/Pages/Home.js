import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {

    let navigate = useNavigate();

    function navigateToDonation() {
        navigate('/Donation');
    }

    function navigateToAbout() {
        navigate('/About')
    }

    return (
        <div>
            <Header/>
            <img src="HomeFirst.png" className="firstImage"></img>
            <div className="firstFill">Safe Space is a homeless shelter open to individuals of all genders and ages,<br/> 
                providing a secure and warm haven. Beyond offering temporary accommodation, it supports personalized<br/>
                future planning, helping each person lay the foundation for rebuilding their lives.</div>
            <div className="secondFill">
                <img src="HomeSecond.jpg" className="secondImage"></img>
                <div className="secondDescription">
                    <p className="description1">In life, failure is inevitable, but what truly matters is how we stand back up. We're<br/>
                       here to assist you in overcoming these challenges and moving forward with renewed strength.</p>
                    <p className="aboutUsButton" onClick={navigateToAbout}>About Us</p>
                </div>
            </div>
            <div className="thirdFill">
                <p className="thirdTitle">Small Gifts are a Big Help</p>
                <p className="thirdDescription">
                   Our shelter is committed to providing support to those facing hardship, reinforcing the idea that meaningful<br/>
                   help doesn't require grand gestures. Even the smallest acts of kindness can profoundly impact lives,<br/>
                   offering hope, and reinforcing the sense of belonging within our community. We are devoted to making<br/>
                   a positive difference, one individual at a time, by offering practical assistance and emotional support.<br/>
                </p>
                <p className="donationButton" onClick={navigateToDonation}>Donate</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;