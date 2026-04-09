import React from 'react';
import { FiArrowRight, FiGithub, FiMail } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Balaram</h1>
          <p className="hero-subtitle">Cybersecurity in IoT</p>
          <p className="hero-description">
            B.Tech ECE Student specializing in IoT security & embedded systems. 
            I analyze vulnerabilities in connected devices and design secure architectures 
            for IoT systems. Passionate about pentesting, firmware analysis, and wireless security.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <FiArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/balaram753"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="mailto:hello@balaram.me"
              className="social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-text"> ./analyze_iot.sh</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">Scanning IoT vulnerabilities...</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">✓ Firmware Analysis</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">✓ Wireless Security</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">✓ Embedded Pentesting</span>
              </div>
              <div className="terminal-line cursor">
                <span className="terminal-prompt">$</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}

export default Hero;
