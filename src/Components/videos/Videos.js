import React from 'react';
import './Videos.css'; // Import CSS file for styling

const Videos = () => {
  const videos = [
    {
      src: '/videos/video1.mp4', // Replace with your video paths
      title: 'Yoga Session 1',
    },
    {
      src: '/videos/video2.mp4', // Replace with your video paths
      title: 'Yoga Session 2',
    },
    {
      src: '/videos/video3.mp4', // Replace with your video paths
      title: 'Meditation Practice',
    },
  ];

  return (
    <div className="video-container">
      <h2>Our Videos</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <div className="video-wrapper">
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
