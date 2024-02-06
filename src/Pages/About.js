import React from "react";
import Header from "../Components/Header";
import './About.css';

const About = () => {
    return (
        <div>
            <Header/>
            <h1>About Safe Space</h1>
            <section>

            <h2 id="mission">Our Mission</h2>
            <p>example paragraph </p>

            <h2 id="items">Our Board Members</h2>
            <p>list of members
            </p>

            </section>
            
            <Footer/>
        </div>
    )
} 

export default About;