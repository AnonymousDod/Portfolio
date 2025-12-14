import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <div className="main-content">
          <div className="main-grid">
            <About />
            <Skills />
            <Projects />
          </div>
        </div>
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;

