import React from 'react';
import './Skills.css';

function Skills() {
  // Google Material Icons for skills
  const skillIcons = {
    'ESP32': 'memory',
    'ESP8266': 'router',
    'Arduino': 'build',
    'Raspberry Pi': 'computer',
    'Firmware Analysis': 'security',
    'RTOS': 'schedule',
    'Network Security': 'vpn_lock',
    'WiFi Pentesting': 'signal_cellular_alt',
    'IoT Pentesting': 'radar',
    'General Attacks': 'gpp_bad',
    'C/C++': 'data_object',
    'Python': 'language',
    'JavaScript': 'javascript',
    'Bash/Shell': 'terminal',
    'Assembly': 'microservices',
    'Arduino IDE': 'edit_note',
    'Kali Linux': 'settings_applications',
    'Wireshark': 'cloud_sync',
    'NMap': 'lan',
    'Cisco Packet Tracer': 'schema',
  };

  const categoryIcons = {
    'IoT & Embedded Systems': 'hub',
    'Cybersecurity': 'lock_outline',
    'Programming Languages': 'code',
    'Tools & Platforms': 'build_circle',
  };

  const skillCategories = [
    {
      title: 'IoT & Embedded Systems',
      skills: ['ESP32', 'ESP8266', 'Arduino', 'Raspberry Pi', 'Firmware Analysis', 'RTOS'],
    },
    {
      title: 'Cybersecurity',
      skills: [
        'Network Security',
        'WiFi Pentesting',
        'IoT Pentesting',
        'General Attacks',
      ],
    },
    {
      title: 'Programming Languages',
      skills: ['C/C++', 'Python', 'JavaScript', 'Bash/Shell', 'Assembly', 'Arduino IDE'],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Kali Linux',
        'Wireshark',
        'NMap',
        'Cisco Packet Tracer',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and domains I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="category-header">
                <span className="material-icons category-icon">{categoryIcons[category.title]}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    <span className="material-icons skill-icon">{skillIcons[skill]}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
