import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import './Footer.css'; // Import the CSS file for styling
import img from '../assets/yoga3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section social-media">
        <h4>Follow Us</h4>
        <ul className="social-icons">
          <li>
            <a href="https://twitter.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="social-icon" /> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/AsharamjiBapu" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </li>
        </ul>
      </div>
      
      <div className="footer-logo">
        <img src={img} alt="Ashram Logo" />
      </div>

      <div className="footer-section contact-info">
        <h4>Contact Us</h4>
        <p>(079) 27505010 / 11</p>
        <p>support@ashram.org</p>
        <p>10,Padmarao Nagar Main Rd, Bapuji Nagar</p>
        <p>Secunderabad, Hyderabad, Telangana 500025</p>
      </div>
    </footer>
  );
};

export default Footer;
