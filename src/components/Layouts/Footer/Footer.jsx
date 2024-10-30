
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desarrollador apasionado por la tecnología y el aprendizaje continuo.</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yoimar Vargas Restrepo.</p>
      </div>
    </footer>
  );
};
