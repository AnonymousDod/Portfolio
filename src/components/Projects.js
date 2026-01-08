import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Fabriqly E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and admin dashboard.',
      tags: ['React', 'Node.js','Typescript','Javascript'],
      github: 'https://github.com/Fabriqly/Fabriqly',
      image: '/images/Fabriqly.png' // Add your image to public/images/ folder
    },
    {
      id: 2,
      title: 'CCS Sit-in Management System',
      description: 'Sit-in management system for a School Laboratory.',
      tags: ['HTML', 'CSS', 'JavaScript','Phyton'],
      github: 'https://github.com/AnonymousDod/Sit--In-System-Backup-',
      image: '/images/Sit-In.png' 
    },
    {
      id: 3,
      title: 'Build Rest API',
      description: 'Build Rest API for a project.',
      tags: ['Typescript','Rest API'],
      github: 'https://github.com/AnonymousDod/act4_build_rest_api',
      image: '/images/RestApi.png' // Add your image to public/images/ folder
    },
    {
      id: 4,
      title: 'CRUD-Management System',
      description: 'CRUD-Management System for a project.',
      tags: ['Javascript', 'HTML', 'CSS'],
      github:'https://github.com/AnonymousDod/JS-REVIEW-PROJECT---2',
      image: '/images/Todo.png' // Add your image to public/images/ folder
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="projects section">
      <div className="section__header">
        <h2 className="section__title">Recent Projects</h2> 
      </div>
      <div className="projects__carousel">
        <button className="projects__nav projects__nav--prev" onClick={prevProject}>
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="projects__container">
          <div key={currentProject.id} className="projects__card projects__card--active">
            {currentProject.image && (
              <div className="projects__image">
                <img src={currentProject.image} alt={currentProject.title} />
              </div>
            )}
            <div className="projects__content">
              <h3 className="projects__title">{currentProject.title}</h3>
              <p className="projects__description">{currentProject.description}</p>
              <div className="projects__tags">
                {currentProject.tags.map((tag, index) => (
                  <span key={index} className="projects__tag">{tag}</span>
                ))}
              </div>
              <div className="projects__buttons">
                <a 
                  href={currentProject.github} 
                  className="projects__button projects__button--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <button className="projects__nav projects__nav--next" onClick={nextProject}>
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="projects__indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`projects__indicator ${index === currentIndex ? 'projects__indicator--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

