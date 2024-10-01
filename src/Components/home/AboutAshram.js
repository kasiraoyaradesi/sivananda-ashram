import React from 'react';
import './AboutAshram.css'; // Importing the CSS for styling
import img from '../assets/a1.jpg'

const AboutAshram = () => {
  return (
    <section className="about-ashram">
      <h2>About Ashram</h2>
      <div className="about-container">
        <div className="ashram-image-container">
          <img src={img} alt="Ahmedabad Ashram" />
          <div className="ashram-caption">Secunderabad Ashram</div>
        </div>
        <div className="ashram-info">
          <h3>Information in Numbers</h3>
          <ul>
            <li>
              <span className="icon">🏛️</span>
              <span className="info-text">5+ <br /> Ashrams</span>
            </li>
            <li>
              <span className="icon">🪔</span>
              <span className="info-text">15+ <br /> Seva Activities</span>
            </li>
            <li>
              <span className="icon">👥</span>
              <span className="info-text">17+ <br /> Youth Centers</span>
            </li>
            <li>
              <span className="icon">📚</span>
              <span className="info-text">4+ <br /> Gurukuls</span>
            </li>
          </ul>
          <p>
            Experience the spiritual and social activities performed at these ashrams. From seva to spiritual growth, these numbers represent our legacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAshram;