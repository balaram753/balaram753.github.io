import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import ReflectiveCard from './ReflectiveCard';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:hello@balaram.me',
      text: 'hello@balaram.me',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/balaram753',
      text: 'github.com/balaram753',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/balaram753',
      text: 'linkedin.com/in/balaram753',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/balaram753',
      text: '@balaram753',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and collaborate on security projects
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or collaboration idea..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FiSend size={18} />
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <ReflectiveCard 
                metalness={0.8}
                roughness={0.5}
                blurStrength={10}
                image="https://github.com/balaram753.png"
              />
            </div>

            <h3>Contact Information</h3>
            <p>
              Feel free to reach out with any questions about IoT security, 
              collaboration opportunities, or just to say hello!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-item"
                  >
                    <Icon size={24} />
                    <div>
                      <div className="contact-link-label">{link.label}</div>
                      <div className="contact-link-text">{link.text}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
