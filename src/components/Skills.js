import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 80 },
        { name: 'Typescript', level: 80 },
      ]
    },
    {
      category: 'Frameworks & Tools',
      skills: [
        { name: 'Next.js', level: 82 },
        { name: 'Firebase', level: 78 },
        { name: 'Supabase', level: 75 },
        { name: 'Git', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills__header">
        <h2 className="section__title">Tech Stack</h2>
      </div>
      <div className="skills__container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skills__category">
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skills__item">
                  <div className="skills__item-header">
                    <span className="skills__name">{skill.name}</span>
                    <span className="skills__level">{skill.level}%</span>
                  </div>
                  <div className="skills__bar">
                    <div 
                      className="skills__percentage" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

