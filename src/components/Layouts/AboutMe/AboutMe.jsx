// AboutMe.jsx
import React from 'react';
import './AboutMe.css';
import { NavLink } from '../../UI/NavbarLink/NavbarLink';

export const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <h2>About Me</h2>
      <p>Soy Yoimar Vargas Restrepo, Analista y Desarrollador de Software. Estudio Ingeniería en Sistemas y Computación en la Universidad del Quindío, además de Análisis y Desarrollo de Software en el SENA.</p>

      {/* Redirige al componente CVPage con estilo de botón */}
      <NavLink to="/cv" label="Ver CV" className="cv-button" />
    </div>
  );
};
