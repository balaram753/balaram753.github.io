import React from 'react';
import { FiTarget, FiBook, FiCode } from 'react-icons/fi';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Who am I and what drives me</p>
        </div>

        <div className="cyber-iot-banner">
          <div className="banner-content">
            <h3>🔒 Cybersecurity in IoT</h3>
            <p>
              B.Tech ECE student specializing in embedded systems vulnerabilities, wireless protocol analysis, 
              and secure IoT architecture design. From firmware extraction to network pentesting.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">
                <FiTarget size={32} />
              </div>
              <h3>Offensive Security</h3>
              <p>
                IoT device pentesting, firmware analysis, wireless protocol exploitation
              </p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <FiBook size={32} />
              </div>
              <h3>Security Research</h3>
              <p>
                CTF competitions, vulnerability research, security documentation
              </p>
            </div>
            <div className="highlight">
              <div className="highlight-icon">
                <FiCode size={32} />
              </div>
              <h3>Embedded Development</h3>
              <p>
                Secure system design, firmware programming, network protocols
              </p>
              <p>
                Building secure applications and contributing to open 
                source security projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
