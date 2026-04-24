import React from 'react';
import { FiDatabase, FiLock, FiCode, FiTool } from 'react-icons/fi';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      id: 'embedded',
      icon: <FiDatabase />,
      label: 'SYS_CORE',
      title: 'Embedded Systems',
      size: 'large',
      skills: [
        { name: 'ESP32 / ESP8266', level: 88 },
        { name: 'Arduino / RPi', level: 85 },
        { name: 'Firmware Analysis', level: 50 },
      ],
    },
    {
      id: 'security',
      icon: <FiLock />,
      label: 'SEC_OPS',
      title: 'Security & Pentesting',
      size: 'large',
      skills: [
        { name: 'Network Security', level: 86 },
        { name: 'WiFi Pentesting', level: 75 },
        { name: 'IoT Pentesting', level: 50 },
        { name: 'Vuln Analysis', level: 80 },
      ],
    },
    {
      id: 'programming',
      icon: <FiCode />,
      label: 'LANG_ENV',
      title: 'Languages',
      size: 'small',
      skills: [
        { name: 'C/C++', level: 50 },
        { name: 'Python', level: 75 },
        { name: 'Bash', level: 50 },
        { name: 'Assembly', level: 25 },
      ],
    },
    {
      id: 'tools',
      icon: <FiTool />,
      label: 'TOOLCHAIN',
      title: 'Tools & Platforms',
      size: 'small',
      skills: [
        { name: 'Kali Linux', level: 88 },
        { name: 'Wireshark', level: 86 },
        { name: 'NMap / Burp', level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>TECHNICAL_SKILLS</h2>
          <div className="section-subtitle">> IOT_COMPETENCIES_LOADED</div>
        </div>

        <div className="bento-grid skills-bento">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`glass-panel bento-item ${category.size === 'large' ? 'col-span-8' : 'col-span-4'}`}
            >
              <div className="bento-header">
                <div className="bento-icon">{category.icon}</div>
                <div className="bento-label mono">{category.label}</div>
              </div>

              <h3 className="bento-title">{category.title}</h3>

              <div className="bento-content">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-meter-wrap">
                    <div className="skill-meter-header mono">
                      <span>{skill.name}</span>
                      <span className="accent-cyan">{skill.level}%</span>
                    </div>
                    <div className="skill-meter-track">
                      <div
                        className="skill-meter-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Decorative Terminal Block in Grid */}
          <div className="glass-panel bento-item col-span-12 decorative-terminal">
            <div className="mono text-sm text-dimmed">
              > STATUS: OPERATIONAL<br />
              > MODULES: 4<br />
              > ALL SYSTEMS OPTIMAL.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
