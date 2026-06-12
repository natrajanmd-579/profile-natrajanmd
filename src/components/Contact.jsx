import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact"  data-aos="fade-in" style={{
      padding: '4rem 2rem',   // ✅ fixed for mobile
      background: 'var(--card)',
      textAlign: 'center'
    }}>

      <h2 style={{ marginBottom: '1rem' }}>
        Contact <span style={{ color: 'var(--primary)' }}>Me</span>
      </h2>

      <p style={{
        color: 'var(--text)',
        opacity: 0.7,
        maxWidth: '600px',
        margin: '0 auto 2rem'
      }}>
        I'm always open to opportunities, collaborations, or just a friendly chat.
        Feel free to reach out!
      </p>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <p>
          📧{' '}
          <a 
            href="mailto:natrajanmd529@gmail.com"   // ✅ better than gmail link
            style={{ color: 'var(--primary)', textDecoration: 'none' }}
          >
            natrajanmd529@gmail.com
          </a>
        </p>

        <p>📱 +91 9043830579</p>
      </div>

      {/* Social Icons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',   // ✅ mobile fix
        gap: '1.5rem',
        fontSize: '1.5rem',
        marginTop: '1.5rem'
      }}>
        
        <a href="https://github.com/natrajanmd-579" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/natrajan-md-ba8166291/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/natrajan_md" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaInstagram />
        </a>

        <a href="mailto:natrajanmd529@gmail.com" style={iconStyle}>
          <FaEnvelope />
        </a>

      </div>

      {/* Footer */}
      <p style={{
        marginTop: '2rem',
        fontSize: '0.8rem',
        opacity: 0.5
      }}>
        © {new Date().getFullYear()} Natrajan MD. All rights reserved.
      </p>

    </section>
  );
}

const iconStyle = {
  color: 'var(--text)',
  transition: '0.3s',
  cursor: 'pointer'
};