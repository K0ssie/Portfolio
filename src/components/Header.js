import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Shirleen Kosgei
      </h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

