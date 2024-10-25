import React from 'react';
import './AboutAshram.css'; // Importing the CSS for styling
import img from '../assets/a1.jpg'
import { IoLocationOutline } from "react-icons/io5";

const AboutAshram = () => {
  return (
    <section className="about-ashram">
      <h2>About Ashram</h2>
      <div className="about-container">
        <div className="ashram-image-container">
          <img src={img} alt="Ahmedabad Ashram" />
          <div className="ashram-caption"><IoLocationOutline />Secunderabad Ashram</div>
        </div>
        <div className="ashram-info">
             <h3>Our Numbers </h3>
             <p>Experience the spiritual and social Activities performed at these ashram's. 
              From save to spiritual growth, these numbers represent our legacy.</p>         
              <ul>
            <li>
              <span className="icon">🏛️<span className='about'>5+</span> </span>
              <p> Ashrams</p>
            </li>
            <li>
              <span className="icon">🪔<span className='about'>15+</span> </span>
              <p> Seva Activities</p>
            </li>
            <li>
              <span className="icon">👥<span className='about'>17+</span></span>
              <p>  Youth Centers</p>
            </li>
            <li>
              <span className="icon">📚<span className='about'>4+</span></span>
              <p> Gurukuls </p> 
            </li>
          </ul>
          
        </div>

      </div>
    </section>
  );
};

export default AboutAshram;