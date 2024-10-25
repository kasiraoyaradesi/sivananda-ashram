import React from "react";
import './Videos.css';

const videos = [
  { id: 1, title: "Title 1", videoLink: "#" },
  { id: 2, title: "Title 2", videoLink: "#" },
  { id: 3, title: "Title 3", videoLink: "#" },
  { id: 4, title: "Title 4", videoLink: "#" },
  { id: 5, title: "Title 5", videoLink: "#" },
  { id: 6, title: "Title 6", videoLink: "#" }
];

const VideoGrid = () => {
  return (
    <div className="video-section">
      <h2>Videos</h2>
      <h4>Watch our Ashram Videos</h4>
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className="video-thumbnail">
              <a href={video.videoLink}>
                <div className="logo-wrapper">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZUkfDjFgdfs6NFdA0UQ8WDZYCIfb3bhdCw&s"
                    alt={video.title}
                  />
                </div>
              </a>
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;