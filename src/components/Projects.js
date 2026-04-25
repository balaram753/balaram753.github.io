import React from 'react';
import { FiGithub, FiFileText, FiActivity } from 'react-icons/fi';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 'OP-01',
      title: 'CTF Write-ups',
      type: 'DOCUMENTATION',
      description: 'Collection of detailed write-ups from IoT and embedded systems CTF challenges.',
      tags: ['CTF', 'Security'],
      status: 'Completed',
      github: 'https://github.com/balaram753/CTF-WriteUps',
    },
    {
      id: 'OP-02',
      title: 'IoT Intrusion Detection',
      type: 'IDS_SYSTEM',
      description: 'ESP32 based IDS for IoT networks. Monitors traffic, detects anomalies, alerts on suspicious ML patterns.',
      tags: ['ESP32', 'Python', 'ML'],
      status: 'ACTIVE',
      github: 'https://github.com/balaram753',
    },
    {
      id: 'OP-02',
      title: 'Evil Twin Simulator',
      type: 'PENTEST_TOOL',
      description: 'Educational tool using ESP8266. Packet injection, deauth attacks, and MITM capabilities.',
      tags: ['ESP8266', 'WiFi Sec', 'C++'],
      status: 'ACTIVE',
      github: 'https://github.com/balaram753',
    },
    {
      id: 'OP-03',
      title: 'RF Signal Analysis',
      type: 'SIGINT_TOOL',
      description: 'Python tool for sniffing and injecting packets to analyze IoT communication protocols.',
      tags: ['Python', 'SDR', 'RF'],
      status: 'DEVELOPMENT',
      github: 'https://github.com/balaram753',
    },
    {
      id: 'OP-04',
      title: 'Smart Home Scanner',
      type: 'VULN_SCANNER',
      description: 'Automated scanner identifying vulnerabilities in smart lights, thermostats, and cameras.',
      tags: ['Python', 'Burp Suite'],
      status: 'BETA',
      github: 'https://github.com/balaram753',
    },
    {
      id: 'OP-05',
      title: 'Firmware Extraction',
      type: 'REVERSE_ENG',
      description: 'Toolkit for binary analysis, string extraction, and security risk identification in firmware.',
      tags: ['Ghidra', 'Binwalk', 'C'],
      status: 'ACTIVE',
      github: 'https://github.com/balaram753',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>FIELD_REPORTS</h2>
          <div className="section-subtitle">&gt; ACCESSING_PROJECT_DATABASE...</div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel project-card group">
              <div className="project-top-bar mono">
                <span className="project-id">{project.id}</span>
                <span className={`project-status status-${project.status.toLowerCase()}`}>
                  <span className="status-dot"></span> {project.status}
                </span>
              </div>
              
              <div className="project-type mono">
                <FiFileText /> {project.type}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-body">
                <p className="project-desc">{project.description}</p>
                <div className="project-tags mono">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link mono">
                  <FiGithub /> EXTRACT_DATA
                </a>
                <FiActivity className="activity-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
