import React from 'react';
import './StyledParagraph.css'; // Assuming you have a CSS file for styling

const StyledParagraph = ({ children }) => {
  return <p className="styledParagraph">{children}</p>;
};

export default StyledParagraph;
