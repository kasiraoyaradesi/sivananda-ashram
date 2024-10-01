import React from 'react';
import './Photo.css'; // Import the CSS file for styling

// Define the paths for the images located in the public folder
const images = [
  '/images/10.jpeg',

  '/images/13.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/8.jpeg',
  '/images/9.jpeg',
  '/images/12.jpeg',
  '/images/19.jpeg',
  '/images/20.jpeg',
  '/images/22.jpeg'
];

// Use an arrow function for the Photo component
const Photo = () => {
  return (
    <div className="gallery-container1">
      {images.map((src, index) => (
        <div key={index} className="gallery-item1">
          <img src={process.env.PUBLIC_URL + src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Photo;
