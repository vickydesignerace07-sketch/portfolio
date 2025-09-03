import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-left">&copy; 2025 Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="mailto:vickydesignerace07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-3d-artist-0b7b52381/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/specter___zero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
