import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import './AshramServices.css';
import img from '../assets/food.jpg';
import img1 from '../assets/yoga.jpg';
import img2 from '../assets/school.jpg';
import img3 from '../assets/india.jpg';

const AshramServices = () => {
  return (
    <section className="ashram-services">
      <h2 className="section-title">Overview of Ashram's Service Departments</h2>
      
      <div class="section-description">
        <p>Through the planning of several services, the revered Swamiji and his <br/> committed  followers hope to inspire and enlighten everyone.</p>
    </div>
      
      <div className="service-cards">
        <div className="service-card">
          {/* <img src={img} alt="Annadanam" /> */}
          <h3>ANNADANAM</h3>
          <hr />
          <p className="service-description">
            "Feeding those in need through Annadanam is one of the simplest yet most profound ways to serve. In every meal we give, we offer hope, compassion, and belonging to those who may feel forgotten."
          </p>
        </div>

        {/* Second Service Card */}
        <div className="service-card">
          {/* <img src={img1} alt="Yoga" /> */}
          <h3>YOGA</h3>
          <hr />
          <p className="service-description">
            "Yoga is a practice that goes beyond the mat. It teaches us mindfulness, compassion, and self-awareness that can transform our daily lives."
          </p>
        </div>

        {/* Third Service Card */}
        <div className="service-card">
          {/* <img src={img2} alt="Gurukulam" /> */}
          <h3>GURUKULAM</h3>
          <hr />
          <p className="service-description">
            "In the heart of the Gurukulam, students learn not just from books, but from life itself, absorbing lessons of discipline, respect, and the timeless wisdom that shapes their character."
          </p>
        </div>

        {/* Fourth Service Card */}
        <div className="service-card">
          {/* <img src={img3} alt="Yuva Seva Sangh" /> */}
          <h3>YUVA SEVA SANGH</h3>
          <hr />
          <p className="service-description">
            "This organization works to cultivate leadership, spirituality, and yoga community service in the lives of youth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AshramServices;
