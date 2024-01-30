import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            
            <img src="HomeFirst.png" className="firstImage"></img>

            <Footer/>
        </div>
    )
}

export default Home;