import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiLock, FiUnlock } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, encrypting, sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('encrypting');
    
    // Simulate encryption and sending
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const contactLinks = [
    { icon: FiMail, label: 'EMAIL_SECURE', href: 'mailto:hello@balaram.me', text: 'hello@balaram.me' },
    { icon: FiGithub, label: 'GITHUB_REPO', href: 'https://github.com/balaram753', text: 'balaram753' },
    { icon: FiLinkedin, label: 'LINKEDIN_PRO', href: 'https://linkedin.com/in/chbalaram', text: 'chbalaram' },
    { icon: FiTwitter, label: 'TWITTER_NET', href: 'https://twitter.com/balaram753', text: '@balaram753' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>SECURE_COMMS</h2>
          <div className="section-subtitle">> INITIATING_ENCRYPTED_HANDSHAKE...</div>
        </div>

        <div className="contact-grid">
          <div className="glass-panel contact-form-panel">
            <div className="panel-header mono">
              <span className="accent-magenta">
                {status === 'idle' ? <FiUnlock /> : <FiLock />}
              </span>
              <span>TRANSMISSION_PROTOCOL: P2P_ENCRYPTED</span>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="mono">ID_ALIAS</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mono input-glass"
                    placeholder="Enter your alias..."
                    disabled={status !== 'idle'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="mono">RETURN_ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mono input-glass"
                    placeholder="Enter email address..."
                    disabled={status !== 'idle'}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="mono">PAYLOAD_DATA</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mono input-glass textarea"
                  placeholder="Enter message content..."
                  disabled={status !== 'idle'}
                />
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary mono w-full submit-btn ${status !== 'idle' ? 'processing' : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && <><FiSend /> ENCRYPT_AND_TRANSMIT</>}
                {status === 'encrypting' && <span className="glitch-text" data-text="ENCRYPTING...">ENCRYPTING...</span>}
                {status === 'sent' && <><FiLock /> PAYLOAD_DELIVERED</>}
              </button>
            </form>
          </div>

          <div className="contact-links-grid">
            {contactLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-panel comm-link group"
              >
                <div className="comm-icon">
                  <link.icon size={24} />
                </div>
                <div className="comm-info">
                  <div className="comm-label mono text-xs">{link.label}</div>
                  <div className="comm-text mono">{link.text}</div>
                </div>
                <div className="comm-status mono text-xs">
                  [CONNECTED]
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
