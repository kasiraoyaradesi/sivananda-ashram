import React from 'react';
import './Scriptures.css'; // Import the CSS file for styling

const Scriptures = () => {
  // Define an array of image sources and their corresponding content
  const items = [
    {
      src: process.env.PUBLIC_URL + '/images/24.png',
      content: "God sees things by the whole. Man sees things by parts. God sees happenings over the three periods of time. Man sees events only in the present, isolated from the past and the future. That is why man sees discord where God sees harmony. Man sees lack of logic where God finds perfect logic. Put yourself in the place of God. Feel you are God. Feel that the entire universe is your creation and operates by your will. At once you will feel tremendous peace and strength surging within you."
    },
    {
      src: process.env.PUBLIC_URL + '/images/23.png',
      content: "focused on spirituality, life wisdom, and national pride. It emphasizes devotion, the unity of the country, and the importance of spiritual growth."
    }
  ];

  return (
    <div className="gallery-container">
      {items.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.src} alt={`Image ${index + 1}`} className="gallery-image" />
          <div className="gallery-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scriptures;
