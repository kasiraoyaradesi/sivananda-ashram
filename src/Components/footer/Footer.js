import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import './Footer.css'; // Import the CSS file for styling
import img from '../assets/yoga3.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Contact Section */}
      <div className="footer-logo-section">
        <img src={img} alt="Ashram Logo" />
        <div className="footer-contact-info">
          <h4 >Contact Us</h4>
          <p >(079) 27505010 / 11</p>
          <p >support@ashram.org</p>
          <p>10, Padmarao Nagar Main Rd, Bapuji Nagar</p>
          <p >Secunderabad, Hyderabad, Telangana 500025</p>
          <div className='soc-id'>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
              <FaInstagram /> 
            </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" >
              <FaXTwitter  /> 
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
              <FaFacebook />
            </a> 
            </div>   
        </div>
      </div>
      
      {/* Social Media Section */}
      <div className="footer-social-media">
        <h4 >Follow Us</h4>
        <ul >
          <li >
            <a href="https://twitter.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer" >
              <FaXTwitter  /> Twitter
            </a>
          </li>
          <li >
            <a href="https://www.facebook.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer" >
              <FaFacebook /> Facebook
            </a>
          </li>
          <li >
            <a href="https://www.instagram.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer" >
              <FaInstagram /> Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Sri Sivananda Ashram. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
      </div>
      
    </footer>
  );
};

export default Footer;
