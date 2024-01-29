import React from "react";
import Header from "../Components/Header";
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <p className="Title">Safe Space Homeless Shelter</p>
            <img src="HomeFirst.jpg" className="firstImage"></img>
        </div>
    )
}

export default Home;