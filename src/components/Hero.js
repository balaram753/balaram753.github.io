import React from 'react';
import { FiArrowRight, FiGithub, FiMail } from 'react-icons/fi';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiLinux,
  SiArduino,
  SiRaspberrypi,
  SiWireshark,
} from 'react-icons/si';
import { MdSecurity, MdRouter, MdTerminal } from 'react-icons/md';
import './Hero.css';
import DotField from './DotField';
import TrueFocus from './TrueFocus';
import LogoLoop from './LogoLoop';

const techLogos = [
  { node: <SiC />,          title: 'C',             href: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { node: <SiCplusplus />,  title: 'C++',           href: 'https://isocpp.org' },
  { node: <SiPython />,     title: 'Python',        href: 'https://python.org' },
  { node: <SiJavascript />, title: 'JavaScript',    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiArduino />,    title: 'Arduino',       href: 'https://arduino.cc' },
  { node: <SiRaspberrypi />,title: 'Raspberry Pi',  href: 'https://raspberrypi.org' },
  { node: <SiLinux />,      title: 'Linux / Kali',  href: 'https://kali.org' },
  { node: <SiWireshark />,  title: 'Wireshark',     href: 'https://wireshark.org' },
  { node: <MdSecurity />,   title: 'IoT Security',  href: '#skills' },
  { node: <MdRouter />,     title: 'Network Pentesting', href: '#skills' },
  { node: <MdTerminal />,   title: 'Shell / Bash',  href: '#skills' },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid"></div>
        <div className="noise-overlay"></div>
        <div className="scanlines"></div>
        <DotField
          dotRadius={1.5}
          dotSpacing={20}
          bulgeStrength={120}
          glowRadius={250}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(8, 145, 178, 0.6)"
          gradientTo="rgba(247, 147, 30, 0.4)"
          glowColor="rgba(8, 145, 178, 0.15)"
          style={{ position: 'absolute', inset: 0, opacity: 0.5 }}
        />
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            B.Tech ECE · IoT Security
          </div>

          {/* TrueFocus animated main title */}
          <div className="hero-truefocus-wrap">
            <TrueFocus
              sentence="Hi I'm Balaram"
              manualMode={false}
              blurAmount={4}
              borderColor="var(--secondary-color)"
              glowColor="rgba(8, 145, 178, 0.55)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.2}
            />
          </div>

          <h2 className="hero-subtitle">Cybersecurity in IoT</h2>

          <p className="hero-description">
            B.Tech ECE Student specializing in IoT security &amp; embedded systems.
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

      {/* LogoLoop tech ticker */}
      <div className="hero-logoloop-wrap" aria-label="Technology stack">
        <p className="hero-logoloop-label">Tech Stack &amp; Tools</p>
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          logoHeight={34}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0d0a12"
          ariaLabel="Technologies I work with"
        />
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}

export default Hero;
