import React from 'react';
import Detective from '../assets/Detective.png';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <img src={Detective} alt="Profile" className="about-avatar" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m Shirleen Kosgei, a passionate and detail-oriented Software Architect dedicated to building efficient, user-focused solutions.
          With a strong foundation in system design, full-stack development, and clean coding principles, I strive to create technology
          that not only works flawlessly but also improves lives. I thrive in collaborative environments and enjoy turning complex problems
          into innovative, elegant software.
        </p>
      </div>
    </section>
  );
}

export default About;
