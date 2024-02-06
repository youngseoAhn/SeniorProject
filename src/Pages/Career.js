import React from "react";
import Header from "../Components/Header";
import './Career.css';

const Career = () => {
    return (
        <div>
            <Header/>
            <h1>Career Resources</h1>
            <ul>
                <li>
                    <a href="https://www.valeovocation.org/" target="_blank" rel="noopener noreferrer">
                       Valeo Vocation
                    </a>
                    <p className="description">Connect with professionals and access resources for skill development.</p>
                </li>
                <li>
                    <a href="https://www.piercecountywa.gov/4118/Resources" target="_blank" rel="noopener noreferrer">
                       Pierce County Resources
                    </a>
                    <p className="description">Explore job opportunities and find career resources tailored for those seeking employment.</p>
                </li>
                <li>
                    <a href="https://www.cityoftacoma.org/government/city_departments/neighborhood_and_community_services/homelessness_services" target="_blank" rel="noopener noreferrer">
                        City of Tacoma - Homelessness Services
                    </a>
                    <p className="description">Access company reviews, job listings, and resources to support individuals experiencing homelessness in their job search.</p>
                </li>
                {/* Add more links and descriptions as needed */}
            </ul>
        </div>
    );
};

export default Career;