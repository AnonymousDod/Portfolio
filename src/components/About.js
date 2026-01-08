import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About Me</h2>
      <div className="about__container">
        <div className="about__data">
          <p className="about__description">
          I am a student in the Philippines learning to bridge the gap between Software and Hardware.
          I am currently exploring the intersection of Full-Stack Development and IoT integration. 
          My goal is to grow my skills by building practical, real-world solutions.</p>
          </div>
        </div>
    </section>
  );
};

export default About;

