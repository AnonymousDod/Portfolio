import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About</h2>
      <div className="about__container">
        <div className="about__data">
          <p className="about__description">
          I am an aspiring Software Engineer based in the Philippines, driven by a relentless curiosity for how things work and a dedication to mastering the art of Full-Stack Development. For me, software engineering is not just about writing syntax; it is about crafting seamless digital experiences that bridge the gap between complex server-side logic and intuitive user interfaces.

My development philosophy is grounded in a 'quality-first' mindset. I strive to build high-performance applications where clean, maintainable, and semantic code is the standard, not an afterthought. I believe that great software must be scalable and easy to read, ensuring that the solutions I build today can grow with the needs of tomorrow.

Currently, I am actively expanding my technical arsenal by deep-diving into the modern JavaScript ecosystem (including TypeScript), designing robust APIs, and exploring cloud technologies. I am applying these skills in real-time by architecting comprehensive web platforms—transforming abstract ideas into functional, user-centric marketplaces. My goal is to leverage technology to solve tangible real-world problems, blending technical precision with a strong understanding of product management and user experience.
          </p>

          <div className="about__info">
            <div className="about__info-item">
              <span className="about__info-title">Years of Experience</span>
              <span className="about__info-name">3+ Years</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-title">Projects Completed</span>
              <span className="about__info-name">6 Projects</span>
            </div>
            <div className="about__info-item">
              <span className="about__info-title">Education</span>
              <span className="about__info-name">A 4th-year University of Cebu student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

