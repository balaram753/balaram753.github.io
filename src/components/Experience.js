import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Cisco Networking Academy',
      description: 'Completed CCNA fundamentals and network security modules. Gained hands-on experience with routing, switching, and network security best practices.',
      highlights: ['CCNA Fundamentals', 'Network Security', 'Packet Tracer'],
      status: 'ongoing',
    },
    {
      title: 'IoT Security Research Projects',
      description: 'Led multiple research initiatives focused on IoT device security. Documented vulnerabilities and proposed mitigation strategies.',
      highlights: ['Firmware Analysis', 'Protocol Testing'],
      status: 'completed',
    },
    {
      title: 'Capture The Flag (CTF) Competitions',
      description: 'Active participant in online CTF competitions. Solved challenges in categories including IoT, networking, and cryptography.',
      highlights: ['IoT Security', 'Cryptography', 'Network Analysis'],
      status: 'ongoing',
    },
    {
      title: 'Open Source Security Projects',
      description: 'Contributing to open source security tools and frameworks. Focus on IoT security auditing and vulnerability scanning tools.',
      highlights: ['Security Tools', 'Code Contribution', 'Community Learning'],
      status: 'ongoing',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Learning</h2>
          <p className="section-subtitle">Journey through security and IoT</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className={`status-badge ${exp.status}`}>
                    {exp.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="highlight-item">
                      <FiCheckCircle size={18} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
