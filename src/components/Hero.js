import React, { useState, useEffect } from 'react';
import { FiGithub, FiTerminal, FiShield, FiCpu } from 'react-icons/fi';
import { SiC, SiCplusplus, SiPython, SiJavascript, SiLinux, SiArduino } from 'react-icons/si';
import LogoLoop from './LogoLoop';
import './Hero.css';

function Hero() {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "./analyze_iot_systems.sh --verbose";
  
  const techLogos = React.useMemo(() => [
    { node: <SiC />, title: 'C' },
    { node: <SiCplusplus />, title: 'C++' },
    { node: <SiPython />, title: 'Python' },
    { node: <SiJavascript />, title: 'JavaScript' },
    { node: <SiLinux />, title: 'Linux' },
    { node: <SiArduino />, title: 'Arduino' }
  ], []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span className="mono">SYSTEM_ONLINE :: SEC_LEVEL_1</span>
          </div>

          <h1 className="hero-title">
            <span className="title-glitch" data-text="CYBERSECURITY">CYBERSECURITY</span>
            <br />
            <span className="title-accent">& IOT ENG</span>
          </h1>

          <p className="hero-description mono">
            &gt; INITIALIZING...<br/>
            &gt; SPECIALIZATION: IOT SECURITY & EMBEDDED SYSTEMS.<br/>
            &gt; FOCUS: WIRELESS PROTOCOLS, HARDWARE PENTESTING.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary mono">
              <FiTerminal /> DEPLOY_REPORTS
            </a>
            <a href="https://github.com/balaram753" target="_blank" rel="noopener noreferrer" className="btn btn-secondary mono">
              <FiGithub /> SOURCE_CODE
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-panel terminal-window">
            <div className="terminal-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control expand"></span>
              </div>
              <div className="terminal-title mono">root@iot-terminal:~</div>
            </div>
            <div className="terminal-body mono">
              <div className="term-line">
                <span className="prompt">root@iot:~#</span> 
                <span className="command">{terminalText}</span>
                <span className={`cursor ${cursorVisible ? 'visible' : 'hidden'}`}>█</span>
              </div>
              {terminalText.length === fullText.length && (
                <div className="term-output animate-fade-in">
                  <div className="log success">[OK] Firmware extracted...</div>
                  <div className="log success">[OK] Analyzing binary structure...</div>
                  <div className="log warning">[WARN] Vulnerability detected in offset 0x4B2C</div>
                  <div className="log info">[INFO] Commencing deeper scan...</div>
                  <br/>
                  <div className="log stats">
                    SYSTEM SPECS:<br/>
                    - CPU: ESP32 / ARDUINO<br/>
                    - KERNEL: LINUX<br/>
                    - EXPERTISE: OFFENSIVE SECURITY
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Abstract floating hardware modules */}
          <div className="hw-module module-1 glass-panel">
            <FiShield size={24} className="accent-magenta" />
            <span className="mono text-xs">SEC_MODULE_A</span>
          </div>
          <div className="hw-module module-2 glass-panel">
            <FiCpu size={24} className="accent-matrix" />
            <span className="mono text-xs">LOGIC_GATE</span>
          </div>
        </div>
      </div>

      <div className="hero-ticker-wrap">
        <div className="ticker-label mono">ACTIVE_DEPENDENCIES</div>
        <LogoLoop logos={techLogos} speed={50} scaleOnHover={true} fadeOut={true} fadeOutColor="#050505" />
      </div>
    </section>
  );
}

export default Hero;
