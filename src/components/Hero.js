import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container container">
        <div className="hero__image">
          <div className="hero__image-wrapper">
            <img 
              src="/images/profile.png" 
              alt="Rod Kent M. Ito" 
              className="hero__img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero__img-placeholder" style={{ display: 'none' }}>
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
        <div className="hero__content">
          <div className="hero__header">
            <h1 className="hero__title">
              Rod Kent M. Ito
              <i className="fas fa-check-circle hero__verified"></i>
            </h1>
            <p className="hero__location">
              <i className="fas fa-map-marker-alt"></i> Philippines
            </p>
            <h2 className="hero__subtitle">IT Student | Web Developer</h2>
          </div>
          <div className="hero__buttons">
            <a href="#contact" className="btn btn--primary">
              <i className="fas fa-envelope"></i> Send Email
            </a>
            <a href="https://www.linkedin.com/in/rod-kent-ito/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <i className="fab fa-linkedin"></i> Connect
            </a>
            <a href="https://github.com/AnonymousDod" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <i className="fab fa-github"></i> View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

