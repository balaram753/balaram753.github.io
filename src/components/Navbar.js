import React, { useState, useEffect } from 'react';
import { FiTerminal, FiCpu, FiLayout, FiMail, FiFileText } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPos >= absoluteTop && scrollPos <= absoluteBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FiTerminal />, label: 'SYS_INIT' },
    { id: 'skills', icon: <FiCpu />, label: 'LOGIC' },
    { id: 'projects', icon: <FiLayout />, label: 'REPORTS' },
    { id: 'writeups', icon: <FiFileText />, label: 'WRITEUPS', href: 'https://balaram.me/CTF-WriteUps/' },
    { id: 'contact', icon: <FiMail />, label: 'COMMS' },
  ];

  return (
    <nav className={`dock-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="dock-container glass-panel">
        <div className="dock-logo mono">
          <span className="accent">&gt;</span> root
        </div>
        
        <ul className="dock-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href || `#${item.id}`}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
                title={item.label}
              >
                <span className="dock-icon">{item.icon}</span>
                <span className="dock-label mono">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
