import React from 'react';
import wave from '../assets/images/wave.svg';
import '../styles/header.css';

function Header() {
  return (
    <div className="wave-container">
      <nav className="navbar">
        <ul id="menulist">
          <li><a href="/">Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
