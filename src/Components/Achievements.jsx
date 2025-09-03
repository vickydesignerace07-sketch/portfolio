import React, { useState } from "react";
import "../App.css";

const Achievements = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CYBERPUNK CITY",
      image: "/images/image1.jpg",
      video: "/videos/car1.mp4",
    },
    {
      id: 2,
      title: "RUBIK'S CUBE",
      image: "/images/image2.png",
      video: "/videos/cube.mp4",
    },
    {
      id: 3,
      title: "YELLOW MUSTANG CAR",
      image: "/images/yellocar.jpg",
      video: "/videos/yellowmustang.mp4",
    },
    {
      id: 4,
      title: "ARC REACTOR",
      image: "/images/arc.png",
      video: "/videos/arc.mp4",
    },
    {
      id: 5,
      title: "BLACKPEARL SHIP",
      image: "/images/ship.jpg",
      video: "/videos/black.mp4",
    },
  ];

  // ✅ Photos section (no video)
  const photos = [
    { id: 1, title: "CHESSBOARD", image: "/images/chess.jpg" },
    { id: 2, title: "EARTH", image: "/images/earth1.jpg" },
    { id: 3, title: "BLACKPEARL SHIP", image: "/images/ship1.jpg" },
    { id: 4, title: "HOME BAR", image: "/images/wine.jpg" },
    { id: 5, title: "ARC REACTOR", image: "/images/ut.png" },
    { id: 6, title: " VICTUS LAPTOP", image: "/images/victus4.png" },
    
  ];

  return (
    <div className="achievements container py-5">
      <h2 className="text-center mb-4">My Achievements</h2>
      <ol>
        {/* ✅ Section 1: Top Projects */}
        <li>
          <strong>1) Top Projects:</strong>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="project-wrapper">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                />
                <div className="project-details">
                  <p className="project-title">{project.title}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedVideo(project.video)}
                  >
                    ▶ Play Video
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>

        {/* ✅ Section 2: Add Photos */}
        <li>
          <strong>2) Photos:</strong>
          <ul className="photos-grid">
            {photos.map((photo) => (
              <li key={photo.id} className="photo-item">
                <img
                  src={photo.image}
                  className="photo-image"
                  alt={photo.title}
                />
                <p className="photo-title">{photo.title}</p>
              </li>
            ))}
          </ul>
        </li>
      </ol>

      {/* ✅ Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay className="video-player">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
