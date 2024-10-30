import React from 'react';
import {Navbar} from '../../UI/Navbar/Navbar';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">&lt;YoimarDev /&gt;</h2>
      <Navbar />
    </header>
  );
};


