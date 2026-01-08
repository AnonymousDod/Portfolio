import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', level: 85 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', level: 75 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'SQL', level: 80},
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'Typescript', level: 85},
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', level: 80},
      ]
    },
    {
      category: 'Frameworks & Tools',
      skills: [
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js', level: 82 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase', level: 78 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', name: 'Supabase', level: 75 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', level: 85 },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', name: 'Vercel', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section__header">
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
                    <img src={skill.logo} alt={skill.name} className="skills__logo" />
                    <span className="skills__name">{skill.name}</span>
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

