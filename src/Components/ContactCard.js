// ContactCard.js
import React, { useState } from 'react';
import './ContactCard.css'; // Make sure to create this CSS file for styling

const ContactCard = ({ contact }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    switch (contact.actionType) {
      case 'phone':
        window.location.href = `tel:${contact.actionValue}`;
        break;
      case 'text':
        window.location.href = `sms:${contact.actionValue}`;
        break;
      case 'link':
        window.open(contact.actionValue, '_blank');
        break;
      default:
        console.log('Unknown action type');
    }
  };

  return (
    <div
      className={`contact-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h2>{contact.name}</h2>
      <p>{contact.description}</p>
      <p className="contact-number">{contact.number}</p>
    </div>
  );
};

export default ContactCard;
