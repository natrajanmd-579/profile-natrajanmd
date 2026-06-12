import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function About() {
  return (
    <section 
      id="about"
      data-aos="fade-right" 
      style={{ 
        padding: '4rem 2rem',   // ✅ fixed for mobile
        scrollMarginTop: '80px' 
      }}
    >
      <h2 className="section-title">
        About <span style={{ color: 'var(--primary)' }}>Me</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // ✅ responsive
        gap: '2rem',
        alignItems: 'center'
      }}>

        {/* LEFT SIDE */}
        <div>
          <h3>Hi, I'm Natrajan MD!</h3>

          <p style={{ color: 'var(--primary)' }}>
            Full Stack Developer & AI/ML Enthusiast
          </p>

          <p style={{ color: 'var(--text)', opacity: 0.7, lineHeight: 1.8 }}>
            I'm a passionate Full Stack Developer and AI/ML enthusiast with a strong foundation in building scalable web applications and intelligent systems. I enjoy solving real-world problems through innovative solutions.
          </p>

          <p style={{ color: 'var(--text)', opacity: 0.7, lineHeight: 1.8 }}>
            I have worked on projects like Online Voting System, Laptop Price Predictor and Plant Disease Detection.
          </p>

          {/* STATS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', // ✅ responsive
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {[
              { num: '5+', label: 'Projects' },
              { num: '2+', label: 'Event Coordination' },
              { num: '150+', label: 'DSA Problems' }
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'var(--card)',
                padding: '1rem',
                textAlign: 'center',
                borderRadius: '10px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{ color: 'var(--primary)' }}>{stat.num}</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* INFO */}
          <div style={{ marginTop: '1rem' }}>
            <p>Email: <span style={{ color: 'var(--text)' }}>natrajanmd529@email.com</span></p>
            <p>Location: <span style={{ color: 'var(--text)' }}>Chennai, Chrompet</span></p>
            <p>Status: <span style={{ color: '#22c55e' }}>Open to Work</span></p>
          </div>
        </div>

        {/* RIGHT SIDE - QR */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'var(--card)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            textAlign: 'center',
            boxShadow: '0 0 15px rgba(124,58,237,0.3)'
          }}>
            <p style={{ marginBottom: '10px' }}>
              Scan to View Resume
            </p>

            <QRCodeCanvas
              value="/resume.pdf"   // ✅ works after deploy
              size={150}
            />

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                marginTop: '10px',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              View Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}