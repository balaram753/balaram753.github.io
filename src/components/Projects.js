import React from 'react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';
import ElectricBorder from './ElectricBorder';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'IoT Intrusion Detection System',
      description:
        'Developed an IDS for IoT networks using ESP32. Monitors network traffic, detects anomalies, and alerts on suspicious activities using machine learning-based pattern recognition.',
      tags: ['ESP32', 'Python', 'ML', 'Network Security'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
      featured: true,
    },
    {
      id: 2,
      title: 'Evil Twin Attack Simulator',
      description:
        'Built an educational tool using ESP8266 to demonstrate WiFi security vulnerabilities. Includes packet injection, deauthentication attacks, and MITM capabilities for learning purposes.',
      tags: ['ESP8266', 'WiFi Security', 'C++', 'Kali Linux'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
      featured: true,
    },
    {
      id: 3,
      title: 'RF Signal Analysis Tool',
      description:
        'Python-based tool for analyzing RF signals and wireless communication protocols. Capable of sniffing and injecting packets for security research on IoT communication.',
      tags: ['Python', 'RF Analysis', 'SDR', 'Network Protocol'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
    },
    {
      id: 4,
      title: 'Smart Home Vulnerability Scanner',
      description:
        'Automated scanner for identifying common vulnerabilities in IoT devices like smart lights, thermostats, and cameras. Generates detailed vulnerability reports.',
      tags: ['Python', 'IoT', 'Burp Suite', 'Vulnerability Assessment'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
    },
    {
      id: 5,
      title: 'Firmware Extraction & Analysis',
      description:
        'Toolkit for extracting and analyzing firmware from embedded IoT devices. Includes binary analysis, string extraction, and security risk identification.',
      tags: ['Reverse Engineering', 'Ghidra', 'Binwalk', 'C'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
    },
    {
      id: 6,
      title: 'CTF Write-ups & Challenges',
      description:
        'Collection of detailed write-ups from Capture The Flag competitions focusing on IoT, embedded systems, and network security challenges.',
      tags: ['CTF', 'Security Research', 'Documentation'],
      status: 'In Progress',
      github: 'https://github.com/balaram753',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p className="section-subtitle">Security research and development work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ElectricBorder
              key={project.id}
              color="#ff6b35"
              speed={0.6}
              chaos={project.featured ? 0.15 : 0.10}
              borderRadius={12}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ border: 'none', flex: 1 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-badges">
                    <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
