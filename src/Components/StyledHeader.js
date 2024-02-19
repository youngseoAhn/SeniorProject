import React from 'react';
import './StyledHeader.css'; // Assuming you have a CSS file for styling

const StyledHeader = ({ children }) => {
  return <h1 className="styledHeader">{children}</h1>;
};

export default StyledHeader;
