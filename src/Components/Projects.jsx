import React, { useState } from "react";
import "../App.css";

const Projects = () => {
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

  return (
    <section className="projects container py-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-12 mb-4"> {/* Changed to col-12 for one per row */}
            <div className="card h-100 project-item">
              <div className="card-body project-wrapper">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-details">
                  <h5 className="card-title">{project.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedVideo(project.video)}
                  >
                    ▶ Play Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay className="video-player">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;