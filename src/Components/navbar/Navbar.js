import React from 'react';
import img from '../assets/logo1.png';
import img1 from '../assets/yoga1.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Ashram Logo" />
      </div>
      
      <div className="navbar-title">
        <h1>Sri Sivananda Ashram</h1>
       
         <h4>'SERVICE OF MAN IS THE WORSHIP OF GOD'</h4>
        
      </div>
      <div className="navbar-logo1">
        <img src={img1} alt="Ashram Logo" />
      </div>
    </div>
  );
}

export default Navbar;
