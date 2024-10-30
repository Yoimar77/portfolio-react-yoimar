import React from 'react';
import {NavLink} from '../NavbarLink/NavbarLink.jsx';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <NavLink to="#home" label="Home" />
        <NavLink to="#about" label="About me" />
        <NavLink to="#home" label="Stack" />
        <NavLink to="#home" label="Tools" />
        <NavLink to="#contact" label="Contact" />
      </ul>
    </nav>
  );
};


