import React from 'react';
import {NavLink} from '../NavbarLink/NavbarLink.jsx';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <NavLink to="#home" label="Home" />
        <NavLink to="#aboutme" label="About me" />
        <NavLink to="#stack-tools" label="Stack" />
        <NavLink to="#stack-tools" label="Tools" />
        <NavLink to="#contact" label="Contact" />
      </ul>
    </nav>
  );
};


