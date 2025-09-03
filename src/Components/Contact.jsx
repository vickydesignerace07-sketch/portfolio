import React from 'react';
import '../App.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Contact content */}
      <div className="contact-us">
        <h2>To Get In Contact</h2>
        <p>
          I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
          or simply want to chat, feel free to reach out.
        </p>
        <ul>
          <li><strong><i className="fas fa-envelope"></i> Email:</strong> vickydesignerace07@gmail.com</li>
          <li><strong><i className="fab fa-linkedin"></i> LinkedIn:</strong> Vicky 3D Artist </li>
          <li><strong><i className="fab fa-instagram"></i> Instagram:</strong> specter___zero</li>
          <li><strong><i className="fas fa-phone"></i> Phone:</strong> 8973336891</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
