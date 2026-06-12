import React from 'react';

const projects = [
  {
    title: 'Online Voting System',
    desc: 'Secure voting platform with admin panel and real-time result visualization.',
    tags: ['Django', 'MySQL'],
    img: '/Gemini_Generated_Image_71u3tx71u3tx71u3.png'
  },
  {
    title: 'Laptop Price Predictor',
    desc: 'ML model to predict laptop prices based on specs like RAM, GPU, and brand.',
    tags: ['Scikit-learn', 'Streamlit'],
    img: '/Screenshot 2026-06-11 162352.png'
  },
  {
    title: 'Plant Disease Detector',
    desc: 'CNN-based model to detect plant diseases from leaf images in real-time.',
    tags: ['TensorFlow', 'Keras', 'Streamlit'],
    img: '/Screenshot 2026-05-30 192925.png'
  },
  {
    title: 'To-Do List Web App',
    desc: 'Task manager with add, delete, and complete features using local storage.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/Screenshot 2026-06-11 163248.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up" style={{
      padding: '4rem 2rem',   // ✅ mobile fix
      scrollMarginTop: '80px'
    }}>
      
      <h2 style={{ marginBottom: '2rem', textAlign: 'left' }}>
        My <span style={{ color: 'var(--primary)' }}>Projects</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // ✅ responsive grid
        gap: '1.5rem'
      }}>
        
        {projects.map(p => (
          <div 
            key={p.title} 
            style={{
              background: 'var(--card)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              transition: '0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >

            {/* IMAGE */}
            <img 
              src={p.img} 
              alt={p.title}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover'
              }} 
            />

            <div style={{ padding: '1rem' }}>
              
              <h3 style={{
                marginBottom: '0.5rem',
                color: 'var(--text)'
              }}>
                {p.title}
              </h3>

              <p style={{
                color: 'var(--text)',
                opacity: 0.7,
                fontSize: '0.95rem'
              }}>
                {p.desc}
              </p>

              {/* TAGS */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginTop: '0.8rem'
              }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'var(--text)',
                    opacity: 0.8
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINKS + AI */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',   // ✅ mobile fix
                gap: '0.7rem',
                marginTop: '1rem',
                alignItems: 'center'
              }}>
                
                {/* Code */}
                <a 
                  href="https://github.com/natrajanmd-579?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Code
                </a>

                {/* AI BUTTON */}
                <button
                  onClick={() => {
                    const query = `Explain the project ${p.title} in simple terms: ${p.desc}`;
                    window.open(
                      `https://chat.openai.com/?q=${encodeURIComponent(query)}`,
                      "_blank"
                    );
                  }}
                  style={aiBtnStyle}
                >
                  Ask AI 🤖
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

/* STYLES */
const linkStyle = {
  color: 'var(--primary)',
  textDecoration: 'none',
  fontSize: '0.9rem'
};

const aiBtnStyle = {
  padding: '5px 10px',
  borderRadius: '10px',
  border: 'none',
  background: 'var(--primary)',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '0.8rem'
};