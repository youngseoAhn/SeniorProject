// ERNumber.js or wherever your main component is defined
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactCard from '../Components/ContactCard';
import TableauReport from "../Components/TableauReport";
//import StyledHeader from "../Components/StyledHeader";
//import StyledParagraph from "../Components/StyledParagraph";
import "./ERNumber.css";

const emergencyContacts = [
  // ... existing contacts ...
  {
    name: "Police",
    number: "911",
    description: "For immediate police assistance.",
    actionType: 'link',
    actionValue: 'https://www.cityoftacoma.org/government/city_departments/police'
  },
  // ... other existing contacts ...
  {
    name: "Fire Department",
    description: "In case of fire emergencies.",
    number: "911",
    actionType: 'link',
    actionValue: 'https://www.cityoftacoma.org/government/city_departments/fire'
  },
  // ... add more new contacts here ...
  {
    name: "Medical Emergency",
    description: "For urgent medical help.",
    number: "911",
    actionType: 'link',
    actionValue: 'https://www.piercecountywa.gov/930/Emergency-Medical-Services-EMS'
  },
  {
    name: "National Suicide Prevention Lifeline",
    description: "24/7, free and confidential support for people in distress.",
    number: "1-800-273-TALK (8255)",
    actionType: 'link',
    actionValue: 'https://988lifeline.org'
  },
  {
    name: "Crisis Text Line",
    description: "Free, 24/7 support for those in crisis.",
    number: "Text HOME to 741741",
    actionType: 'link',
    actionValue: 'https://www.crisistextline.org'
  },
  {
    name: "Veterans Crisis Line",
    description: "Support for Veterans and their loved ones.",
    number: "1-800-273-8255 and Press 1",
    actionType: 'link',
    actionValue: 'https://www.veteranscrisisline.net'
  },
  {
    name: "Poison Control",
    description: "Immediate assistance with poisoning emergencies.",
    number: "1-800-222-1222",
    actionType: 'link',
    actionValue: 'https://www.poison.org'
  },
  {
    name: "Animal Rescue",
    description: "Help for injured or endangered animals.",
    number: "(253) 383-2733",
    actionType: 'link',
    actionValue: 'https://www.thehumanesociety.org'
  },
  {
    name: "Roadside Assistance",
    description: "24/7 help for stranded motorists",
    number: "1-800-AAA-HELP (1-800-222-4357)",
    actionType: 'link',
    actionValue: 'https://wa.aaa.com/membership/terms-and-conditions.html#:~:text=When%20you%20need%20assistance%20from,with%20you%20at%20all%20times.'
  },
];

const ERNumber = () => {
  return (
    <div className="er-container">
      <Header />
      <div className="er-content">
        <div className="intro">
        <p>What Is the State of Homelessness ?</p>
        <TableauReport url="https://public.tableau.com/views/dataset2_17073842155310/Map?:language=en-US&:display_count=n&:origin=viz_share_link"/>
        </div>
        <div className="intro-midtext">
          <p>Emergency? We're here to help. Here's how you can reach us...</p>
        </div>
        <div className="er-sections">
          {emergencyContacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
        <TableauReport url="https://public.tableau.com/views/dataset3_17073846581140/pitBars?:language=en-US&:display_count=n&:origin=viz_share_link" />
        <TableauReport url="https://public.tableau.com/views/dataset1_17073819404780/RaceData?:language=en-US&:display_count=n&:origin=viz_share_link" />
      </div>
      <Footer/>
    </div>
  );
};

export default ERNumber;
