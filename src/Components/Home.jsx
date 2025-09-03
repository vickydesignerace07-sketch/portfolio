import React, { useEffect, useRef } from 'react';
import '../App.css';
import Achievements from './Achievements';
import ContactUs from './Contact';

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const text = "I'm vikram R..."; // Fixed text
    let index = 0;

    function type() {
      if (!typingRef.current) return; // Ensure ref exists

      if (index < text.length) {
        typingRef.current.textContent = text.substring(0, index + 1); // Correctly update the text
        index++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          if (typingRef.current) {
            typingRef.current.textContent = ""; // Clear before restarting
            index = 0;
            type();
          }
        }, 2000); // Delay before restarting
      }
    }

    if (typingRef.current) {
      typingRef.current.textContent = ""; // Ensure reset before start
      type();
    }
  }, []);

  return (
    <div className="home container text-left">
      <img src="./images/image.jpg" className="profile-image img-fluid rounded-circle shadow-lg" alt="Profile" />
      <div className="intro-text-container">
        <h1 className="fixed-text">Hello there!</h1>
        <h1 className="typing-animation" ref={typingRef}></h1>
      </div>
      <p className="intro-text lead mt-3">
        "A passionate and imaginative 3D artist and animator, bringing ideas to life through stunning visuals and dynamic animations. Explore my projects and achievements, and let's collaborate to create immersive experiences!"
      </p>
      <div className="buttons mt-4">
        <a href="/projects" className="btn btn-outline-primary mx-2">View Projects</a>
        <a href="/contact" className="btn btn-primary mx-2">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
