// DonatePage.js
import React from 'react';
import './DonatePage.css';
import donation from '../assets/donation.jpg';

const DonatePage = () => {
  return (
    <div className="donate-container">
      <div className="donate-form-container">
        <h2>Donate</h2>
        <form className="donate-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="amount">Donation Amount:</label>
          <input type="number" id="amount" name="amount" min="1" required />

          <button type="submit">Submit Donation</button>
        </form>
      </div>
      
      <div className="donate-image-container">
        <img src={donation} alt="Donate" />
      </div>
    </div>
  );
};

export default DonatePage;
