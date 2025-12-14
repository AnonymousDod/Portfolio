import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fabriqly E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and admin dashboard.',
      tags: ['React', 'Node.js','Typescript','Javascript'],
      github: 'https://github.com/Fabriqly/Fabriqly'
    },
    {
      id: 2,
      title: 'CCS Sit-in Management System',
      description: 'Sit-in management system for a School Laboratory.',
      tags: ['HTML', 'CSS', 'JavaScript','Phyton'],
      github: 'https://github.com/AnonymousDod/Sit--In-System-Backup-'
    },
    {
      id: 3,
      title: 'Build Rest API',
      description: 'Build Rest API for a project.',
      tags: ['Typescript','Rest API'],
      github: 'https://github.com/AnonymousDod/act4_build_rest_api'
    },
    {
      id: 4,
      title: 'CRUD-Management System',
      description: 'CRUD-Management System for a project.',
      tags: ['Javascript', 'HTML', 'CSS'],
      github:'https://github.com/AnonymousDod/JS-REVIEW-PROJECT---2'
    },
    {
      id: 5,
      title: 'IPT Project',
      description: 'IPT Project for a project.',
      tags: ['Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/AnonymousDod/IPT-FINAL'
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="projects__header">
        <h2 className="section__title">Recent Projects</h2> 
      </div>
      <div className="projects__container">
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <div className="projects__content">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__description">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="projects__tag">{tag}</span>
                ))}
              </div>
              <div className="projects__buttons">
                <a 
                  href={project.github} 
                  className="projects__button projects__button--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

