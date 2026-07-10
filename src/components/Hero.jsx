import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section  data-aos="fade-up" id="home" style={{
      display: 'flex',
      flexWrap: 'wrap',   // ✅ IMPORTANT
      justifyContent: 'space-between',
      alignItems: 'center',
      scrollMarginTop: '80px',
      padding: '4rem 2rem',   // ✅ mobile fix
      minHeight: '90vh'
    }}>
      
      {/* LEFT SIDE */}
      <div style={{ flex: '1 1 300px', zIndex: 10 }}>
        
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',   // ✅ responsive text
          color: 'var(--text)'
        }}>
          Hi, I'm <span style={{ color: 'var(--primary)' }}>Natrajan MD</span>
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          color: 'var(--text)',
          opacity: 0.7,
          margin: '0.5rem 0 1.5rem'
        }}>
          B.Tech Artificial Intelligence & Data Science Student
        </h2>

        <p style={{
          maxWidth: '500px',
          color: 'var(--text)',
          opacity: 0.7,
          lineHeight: 1.7
        }}>
          Passionate Full Stack Developer & AI/ML Enthusiast.
          Building scalable web applications and intelligent systems using modern technologies.
          Driven to solve real-world problems through innovation and continuous learning.
        </p>

        {/* BUTTONS */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',   // ✅ mobile fix
          gap: '1rem',
          marginTop: '2rem'
        }}>
          
          <a 
            href="/resume__1_.pdf"
            download
            style={btnStyle}
          >
            Download CV
          </a>

          <a 
            href="#projects"
            style={btnOutline}
          >
            View Work
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1.5rem',
          fontSize: '1.4rem',
          flexWrap: 'wrap'   // ✅ mobile fix
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

          {/* ✅ FIXED EMAIL */}
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=natrajanmd529@gmail.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FaEnvelope />
          </a>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div style={{
        flex: '1 1 300px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem'   // ✅ spacing for mobile
      }}>
        <img
          src="/PROFILE.jpg"
          alt="Natrajan"
          style={{
            width: '250px',   // ✅ smaller for mobile
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid var(--primary)'
          }}
        />
      </div>

    </section>
  );
}

/* BUTTON STYLES */
const btnStyle = {
  background: 'var(--primary)',
  color: '#fff',
  padding: '0.7rem 1.5rem',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 600
};

const btnOutline = {
  background: 'transparent',
  color: 'var(--text)',
  border: '1px solid var(--primary)',
  padding: '0.7rem 1.5rem',
  borderRadius: '25px',
  textDecoration: 'none'
};

/* ICON STYLE */
const iconStyle = {
  color: 'var(--text)',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s'
};