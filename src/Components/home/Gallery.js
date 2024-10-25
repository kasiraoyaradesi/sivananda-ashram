import React from 'react';
import './Gallery.css';

const images = [
    '/images/10.jpeg',
    '/images/13.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
];

const Gallery = () => {
  return (
    <div className='main'>
      <div>
        <h2>Our Gallery</h2>
      </div>

      <div className="gallery-container1">
        {images.map((src, index) => (
          <div key={index} className="gallery-item1">
            <img src={`${process.env.PUBLIC_URL}${src}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
