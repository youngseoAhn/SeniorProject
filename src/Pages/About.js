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
            <p>Safe Space is a homeless shelter open to individuals of all genders and ages,
                providing a secure and warm haven. 
                <br></br>Beyond offering temporary accommodation, it supports personalized
                future planning, helping each person lay the foundation for rebuilding their lives.</p>

            <h2 id="items">Our Board Members</h2>
            <p><div>
                    <h3>Board Chair - One Example</h3>
                    <br></br>
                    <img src="default_image_board.jpg" className="boardchairimg"></img>
                </div><div>
                    <h3>Board Vice-Chair - Two Example</h3>
                    <br></br>
                    <img src="default_image_board.jpg" className="boardviceimg"></img>
                </div><div>
                    <h3>Board Treasurer - Three Example</h3>
                    <br></br>
                    <img src="default_image_board.jpg" className="boardtreasimg"></img>
                </div><div>
                    <h3>Board Secretary - Four Example</h3>
                    <br></br>
                    <img src="default_image_board.jpg" className="boardsecimg"></img>
                </div>
            </p>
            </section>
            
            <Footer/>
        </div>
    )
} 

export default About;