import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-navbar">
      <div className="header-links">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/ashram" className="header-link">Ashram</Link>
        <Link to="/news" className="header-link">News</Link>
        <Link to="/photogallery" className="header-link">Photo-gallery</Link>
        <Link to="/videos" className="header-link">Videos</Link>
        <Link to="/scriptures" className="header-link">Scriptures</Link>
        <Link to="/Yogaday" className="header-link">Yoga day</Link>
        <Link to="/donate" className="header-donate">Donate</Link>
      </div>
    </div>
  );
};

export default Header;
