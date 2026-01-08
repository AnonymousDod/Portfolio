import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav__logo">
          <span>PORTFOLIO</span>
        </div>
        
        <div className={`nav__menu ${isMobileMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                Skills & Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="nav__actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <div className="nav__toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

