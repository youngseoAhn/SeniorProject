import React from 'react';
import Header from "../Components/Header";
import './Career.css'; // Make sure this path is correct
import Footer from '../Components/Footer';

const Career = () => {
    return (
        
        <div className='Career'>
        <Header/>
  
        <div className="secFill">
                <div className="secDescription">
                <div className="firstDescriptionHeader">
                    <h1>Why is Career development important?</h1>
                    </div>
                    <p className="description11">
                    In the journey of life, setbacks and failures are inevitable, but what truly defines us is our ability to rise above adversity.
                    <br/>
                    At SafeSpace, we understand the challenges you may face, and we're committed to standing by your side, offering guidance 
                    and support as you navigate through difficult times.</p>
                </div>
                <img src="career4.png" className="careerFirstImage"></img>

        </div>
        <br></br>
        
        <div className="rectangle-box1">
                <p>Homelessness in 2022</p>
        </div>

        <p className='AfterHomelessnessInfo'>
        According to the January 2022 PIT Count, 582,462 people were experiencing homelessness across America. This amounts to roughly 18 out of every 10,000 people1.
        The vast majority (72 percent) were individual adults, but a notable share (28 percent) were people living in families with children.
        </p>

            <div className="career-container"> {/* Changed from "career" to "career-container" to match CSS */}

                <div className="career-content">
                    <h1 className="career-title">Our Mission</h1> {/* Changed from "title" to "career-title" */}
                    <p className="intro-description">
                    Accessing career resources is a crucial step towards empowerment and stability, especially for those facing homelessness. Here are valuable resources that can make a significant impact on your journey to a successful career:
                    </p>
                    <div className="resource-list">
                    <ResourceCard
                        title="Valeo Vocation"
                        description="Connect with professionals and access resources for skill development. Unlock your potential and build a path towards a fulfilling career."
                        link="https://www.valeovocation.org/"
                        image="career1.jpg"
                    />
                    <ResourceCard
                        title="Pierce County Resources"
                        description="Explore job opportunities and find career resources tailored for those seeking employment. Empower yourself with the tools and knowledge needed to secure meaningful work."
                        link="https://www.piercecountywa.gov/4118/Resources"
                        image="career2.jpg"
                    />
                    <ResourceCard
                        title="City of Tacoma - Homelessness Services"
                        description="Access company reviews, job listings, and resources to support individuals experiencing homelessness in their job search. Overcome challenges and work towards a brighter future."
                        link="https://www.cityoftacoma.org/government/city_departments/neighborhood_and_community_services/homelessness_services"
                        image="career3.jpg"
                    />
                    {/* ResourceCard components */}
                    </div>
                    <br></br>
                    <p className="importance-description">
                    Career resource pages play a vital role in providing a pathway for homeless individuals to regain stability and independence. By offering access to job opportunities, skill development, and support services, these resources empower individuals to break the cycle of homelessness and build a sustainable future. Investing in career development is not just about finding a job; it's about restoring dignity, self-worth, and creating a foundation for lasting positive change.
                    </p>
                </div>
            </div>


            <Footer/>
        </div>
    );
};

const ResourceCard = ({ title, description, link, image }) => {
    return (
        <div className="resource-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`${title} Image`} className="card-image" />
                <h3>{title}</h3>
            </a>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Career;
