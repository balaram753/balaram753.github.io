import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 style={{fontFamily: 'monospace', color: 'var(--primary-color)', fontWeight: 700, fontSize: '1.1rem'}}>[balaram]</h4>
            <p style={{fontFamily: 'monospace'}}>Cybersecurity in IoT & Embedded Systems</p>
          </div>

          <div className="footer-section">
            <h4 style={{fontFamily: 'monospace', color: 'var(--secondary-color)', fontWeight: 700, fontSize: '1.1rem'}}>[links]</h4>
            <ul>
              <li><a href="#skills" style={{fontFamily: 'monospace'}}>Skills</a></li>
              <li><a href="#projects" style={{fontFamily: 'monospace'}}>Projects</a></li>
              <li><a href="#contact" style={{fontFamily: 'monospace'}}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{fontFamily: 'monospace', color: 'var(--accent-color)', fontWeight: 700, fontSize: '1.1rem'}}>[connect]</h4>
            <ul>
              <li>
                <a href="https://github.com/balaram753" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'monospace'}}>GitHub</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/chbalaram" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'monospace'}}>LinkedIn</a>
              </li>
              <li>
                <a href="https://instagram.com/_.roc_ram._" target="_blank" rel="noopener noreferrer" style={{fontFamily: 'monospace'}}>Instagram</a>
              </li>
              <li>
                <a href="mailto:balaram777.ch@gmail.com" style={{fontFamily: 'monospace'}}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{fontFamily: 'monospace', color: 'var(--primary-color)', fontWeight: 600}}>&copy; {currentYear} Balaram. All rights reserved.</p>
          <p className="tagline" style={{fontFamily: 'monospace'}}>Building secure systems, one line at a time</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
