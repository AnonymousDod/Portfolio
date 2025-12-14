import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__copy">
          <p>&copy; {currentYear} Rod Kent M. Ito. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
