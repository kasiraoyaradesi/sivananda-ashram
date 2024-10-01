import React from 'react';
import './Ashram.css'; // Make sure you create and use this CSS file

const SivanandaExperience = () => {
  return (
    <div className="experience-container">
      <h2>The Sivananda Experience</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <img 
            src="https://sivananda.org.in/wp-content/uploads/2021/05/KA5A1990-1-400x267.jpeg" 
            alt="Yoga Vacation" 
          />
          <h3>Yoga Vacation</h3>
          <p>
          Join our Yoga Vacation programme, designed  by Swami Vishnudevananda and offered in our beautiful Ashrams around the world. Daily yoga and meditation sessions, healthy vegetarian food, inspiring spiritual teachings with like-minded people in an idyllic setting bring mental and physical relaxation and spiritual growth. We are open year-round and we welcome all.

          </p>
        </div>
        
        <div className="experience-card">
          <img 
            src="https://sivananda.org.in/wp-content/uploads/2021/04/Prog-Outline-1-1-400x267.jpg" 
            alt="Yoga Teachers Training" 
          />
          <h3>Yoga Teachers Training</h3>
          <p>
            Gain a solid foundation in the classical yoga tradition in our life-transforming residential courses held at our Ashrams worldwide. You will awaken and strengthen your own yoga practice as well as build a firm foundation in classical yoga from which to teach others instinctively and confidently connecting to a tradition and lineage passed down through millennia.
          </p>
        </div>
        
        <div className="experience-card">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVi75Ag0onlLgFLsKEyLDzuiVqbAs1UL0pkw&s" 
            alt="Ayurveda" 
          />
          <h3>Ayurveda</h3>
          <p>
            Personalised therapies and detoxification programmes that are based on the understanding of each individual’s constitution using herbal medicines and oils, diet, exercise, and lifestyle regimens, to bring health and harmony to body and mind. Our Ashrams offer an extensive range of workshops, retreats, training programmes and certification courses on the science of Ayurveda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SivanandaExperience;
