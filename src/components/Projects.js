import React from 'react';
import Slider from 'react-slick';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 projects at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // For small screens
        }
      }
    ]
  };

  return (
    <section id="projects" className="projects">
      <h2 className="heading">Projects</h2>
      <Slider {...settings} className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="content">
              <img src={project.image} alt={project.name} />
              <h3 className="name">{project.name}</h3>
              <p className="description-min">{project.description}</p>
              <a
                href={project.link}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
