import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KnowMore.css'; // Import the CSS file for styling

const KnowMore = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click
  const handleKnowMoreClick = () => {
    navigate('/swami-sivananda'); // Navigate to the "swami-sivananda" page
  };

  return (
    <div className="know-more-container">
      <div className="know-more-content">
        <h2>Shri Swami Sivananda Saraswati</h2>
        <p>
          Swami Sivananda Saraswati (8 September 1887 – 14 July 1963), also called Swami Sivananda, was a yoga guru, a Hindu spiritual teacher, and a proponent of Vedanta. He was born in Pattamadai, in the Tirunelveli district of modern Tamil Nadu, and studied medicine, serving as a physician before becoming a monk.
        </p>
        <p>
          He was the founder of the Divine Life Society (DLS) in 1936, Yoga-Vedanta Forest Academy (1948), and author of over 200 books. Sivananda established the Sivananda Ashram in Rishikesh, where he lived most of his life.
        </p>
        <p>
          His teachings promoted the "Yoga of Synthesis," which combines the Four Yogas of Hinduism: Karma Yoga, Bhakti Yoga, Jnana Yoga, and Raja Yoga, focusing on action, devotion, knowledge, and meditation respectively. His work made yoga accessible to the general public worldwide.
        </p>
        
        <br></br>
        <button className="know-more-button" onClick={handleKnowMoreClick}>KNOW MORE</button>
      </div>
      <div className="know-more-image">
        <img src="https://m.media-amazon.com/images/I/61Y1WFTCnmL._AC_UF1000,1000_QL80_.jpg" alt="Swami Sivananda" />
      </div>
    </div>
  );
};

export default KnowMore;
