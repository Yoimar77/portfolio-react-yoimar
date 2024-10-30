import React from 'react';
import './Contact.css'; // Asegúrate de importar los estilos
import { NavLink } from '../../UI/NavbarLink/NavbarLink'; // Asegúrate de importar el componente NavLink
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importa los iconos necesarios

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3>Contact Me</h3>
      <ul className="contact-links">
        <li>    
          <NavLink 
            to="https://github.com/Yoimar77" 
            label="GitHub" 
            icon={<FaGithub />} 
          />
        </li>
        <li>
          <NavLink 
            to="https://linkedin.com" 
            label="LinkedIn" 
            icon={<FaLinkedin />} 
          />
        </li>
        <li>
          <NavLink 
            to="mailto:yoimarnova123@gmail.com" 
            label="Email" 
            icon={<FaEnvelope />} 
          />
        </li>
        <li>
          <NavLink 
            to="https://facebook.com" 
            label="Facebook" 
            icon={<FaFacebook />} 
          />
        </li>
        <li>
          <NavLink 
            to="https://instagram.com" 
            label="Instagram" 
            icon={<FaInstagram />} 
          />
        </li>
      </ul>
    </div>
  );
};
