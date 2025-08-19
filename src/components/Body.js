import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
import './Body.css'; // etc.
 // Replace with your own image

function Body() {
  return (
    <section className="body">
      <img className="avatar" src={avatar} alt="profile" />
      <h1 className="intro-name">SHIRLEEN KOSGEI</h1>
      <h2 className="job-title">Software Architect</h2>
      <div className="social-links">
        <a href="https://github.com/yourusername"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
      </div>
    </section>
  );
}

export default Body;

