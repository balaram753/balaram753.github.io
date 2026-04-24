import React from 'react';
import './SkillsNew.css';

function Skills() {
  const skillCategories = [
    {
      id: 'embedded',
      label: '[embedded_systems]',
      title: 'Embedded Systems',
      skills: [
        { name: 'ESP32', level: 85 },
        { name: 'ESP8266', level: 80 },
        { name: 'Arduino', level: 88 },
        { name: 'Raspberry Pi', level: 82 },
        { name: 'Firmware Analysis', level: 75 },
        { name: 'RTOS', level: 70 },
      ],
    },
    {
      id: 'security',
      label: '[security_ops]',
      title: 'Security & Pentesting',
      skills: [
        { name: 'Network Security', level: 86 },
        { name: 'WiFi Pentesting', level: 84 },
        { name: 'IoT Pentesting', level: 88 },
        { name: 'Vulnerability Analysis', level: 80 },
      ],
    },
    {
      id: 'programming',
      label: '[languages]',
      title: 'Languages',
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'Python', level: 87 },
        { name: 'JavaScript', level: 75 },
        { name: 'Bash/Shell', level: 85 },
        { name: 'Assembly', level: 72 },
      ],
    },
    {
      id: 'tools',
      label: '[toolchain]',
      title: 'Tools & Platforms',
      skills: [
        { name: 'Kali Linux', level: 88 },
        { name: 'Wireshark', level: 86 },
        { name: 'NMap', level: 84 },
        { name: 'Burp Suite', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <div className="terminal-header">
            <span className="term-prompt">$</span>
            <span className="term-text">skills --verbose</span>
            <span className="cursor" />
          </div>
          <p className="section-subtitle">Core competencies in IoT security & embedded systems</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <div className="card-header">
                <span className="card-label">{category.label}</span>
              </div>
              <h3 className="card-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-container">
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="skill-level">{skill.level}%</div>
                    </div>
                  </div>
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
