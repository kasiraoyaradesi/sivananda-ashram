import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming the CSS is in a separate file

const Header = () => {
  // State to toggle the active class
  const [isActive, setIsActive] = useState(false);

  // Function to handle the toggle
  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <div>
      {/* Hamburger icon */}
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Navbar links, toggling the 'active' class based on state */}
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/ashram">Ashram</Link>
        <Link to="/news">News</Link>
        <Link to="/photogallery">Photo gallery</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/scriptures">Scriptures</Link>
        <Link to="/Yogaday">Yoga day</Link>
      </div>
    </div>
  );
};

export default Header;
