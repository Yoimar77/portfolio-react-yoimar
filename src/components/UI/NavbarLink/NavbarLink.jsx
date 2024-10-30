// NavbarLink.jsx
import React from 'react';
import './NavbarLink.css';
import { Link } from 'react-router-dom';

export const NavLink = ({ to, label, icon, download, className }) => {
  const handleScroll = (e) => {
    if (to.startsWith('#')) { // Verifica si es un enlace anclado
      e.preventDefault(); // Evita el comportamiento predeterminado
      const targetElement = document.querySelector(to); // Busca el elemento objetivo
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
      }
    }
  };

  return (
    <li className="navItem">
      <Link to={to} className={`link ${className}`} onClick={handleScroll} download={download ? true : false}>
        {icon && <span className="icon">{icon}</span>}
        {label}
      </Link>
    </li>
  );
};
