import React from 'react';
import './NavbarLink.css';

export const NavLink = ({ to, label }) => {
  return (
    <li className="navItem">
      <a href={to} className="link">
        {label}
      </a>
    </li>
  );
};


