import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './About.css';

const About = () => {
    return (
        <div>
            <Header/>
            <br></br>
            <h1>About Safe Space</h1>
            <section>

            <h2 id="mission">Our Mission</h2>
            <p>Safe Space is a homeless shelter open to individuals of all genders and ages,<br/> 
                providing a secure and warm haven. Beyond offering temporary accommodation, it supports personalized<br/>
                future planning, helping each person lay the foundation for rebuilding their lives.</p>

            <h2 id="items">Our Board Members</h2>
            <p>list of members
            </p>

            </section>
            
            <Footer/>
        </div>
    )
} 

export default About;