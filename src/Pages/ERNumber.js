import React from "react";
import Header from "../Components/Header";
import "./ERNumber.css"; // Ensure the path to the CSS file is correct
import Footer from "../Components/Footer";


const emergencyContacts = [
  { name: "Police", number: "911", description: "For immediate police assistance." },
  { name: "Fire Department", number: "911", description: "In case of fire emergencies." },
  { name: "Medical Emergency", number: "911", description: "For urgent medical help." },
  { name: "National Suicide Prevention Lifeline", number: "1-800-273-TALK (8255)", description: "24/7, free and confidential support for people in distress." },
  { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Free, 24/7 support for those in crisis." },
  { name: "Veterans Crisis Line", number: "1-800-273-8255 and Press 1", description: "Support for Veterans and their loved ones." }
  // Add more contacts as necessary
];

const ERNumber = () => {
    return (
        <div className="er-container">
            <Header />
            <div className="er-content">
                <h1>Get in touch</h1>
                <p>Emergency? We're here to help. Here's how you can reach us...</p>
                <div className="er-sections">
                    {emergencyContacts.map((contact, index) => (
                        <div key={index} className="er-section">
                            <h2>{contact.name}</h2>
                            <p>{contact.description}</p>
                            <p className="er-number">{contact.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ERNumber;
