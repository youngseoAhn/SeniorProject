import React, { useState } from "react";
import Header from "../Components/Header";
import './Career.css';
const Career = () => {
    return (
        <div className="career-container">
            <Header />
            <div className="career-content">
                <h1 className="title">Our Mission</h1>
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
                    {/* Add more ResourceCard components for additional links and descriptions */}
                </div>
                <p className="importance-description">
                    Career resource pages play a vital role in providing a pathway for homeless individuals to regain stability and independence. By offering access to job opportunities, skill development, and support services, these resources empower individuals to break the cycle of homelessness and build a sustainable future. Investing in career development is not just about finding a job; it's about restoring dignity, self-worth, and creating a foundation for lasting positive change.
                </p>
            </div>
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