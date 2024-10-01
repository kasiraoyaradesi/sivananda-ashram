import React from 'react';
import './AshramServices.css'; // Assuming you will write the CSS here
import img from '../assets/food.jpg';
import img1 from '../assets/yoga.jpg';
import img2 from '../assets/school.jpg';
import img3 from '../assets/india.jpg';

const AshramServices = () => {
  return (
    <section className="ashram-services">
      <h2>Brief Overview of Ashram's Service Departments</h2>
      <p className="ashram-description">
        Through the planning of several services, the revered Swamiji and his committed followers hope to inspire and enlighten everyone.
      </p> <br></br>
      <div className="service-cards">
        {/* First Service Card */}
        <div className="service-card">
          <img src={img} alt="Ashram Logo" />
          <h3>ANNADANAM</h3>
          <pre>
            "Feeding those in need through Annadanam is one of the simplest yet most profound ways to serve. In every meal we give, we offer hope, compassion, and belonging to those who may feel forgotten."
          </pre>
        </div>

        {/* Second Service Card */}
        <div className="service-card">
          <img src={img1} alt="Ashram Logo" />
          <h3>YOGA</h3>
          <pre>
            "Yoga is a practice that goes beyond the mat. It teaches us mindfulness, compassion, and self-awareness that can transform our daily lives."
          </pre>
        </div>

        {/* Third Service Card */}
        <div className="service-card">
          <img src={img2} alt="Ashram Logo" />
          <h3>GURUKULAM</h3>
          <pre>
            In the heart of the Gurukulam, students learn not just from books, but from life itself, absorbing lessons of discipline, respect, and the timeless wisdom that shapes their character.
          </pre>
        </div>

        {/* Fourth Service Card */}
        <div className="service-card">
          <img src={img3} alt="Ashram Logo" />
          <h3>YUVA SEVA SANGH</h3>
          <pre>
            This organization works to cultivate leadership, spirituality, and yoga community service in the lives of youth.
          </pre>
        </div>
      </div>
    </section>
  );
};

export default AshramServices;
