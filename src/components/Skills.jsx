import React from 'react';

const technicalSkills = [
  'C/C++', 'Python', 'HTML/CSS','JavaScript','React/Node.Js', 'Streamlit',
  'MySQL/MongoDB', 'Pandas/Numpy/Seaborn/Scikit-learn',
  'OpenCV/TensorFlow & Keras/Matplotlib'
];

const softSkills = [
  'Critical Thinking', 'Presentation Skills',
  'Collaboration', 'Adaptability',
  'Creative Approaches', 'Problem Solving',
  'Communication'
];

const courseworks = [
  'Data Structures and Algorithms',
  'Object-Oriented Programming',
  'Operating Systems',
  'Database Management Systems',
  'Machine Learning & Deep Learning',
  'Computer Vision',
  'Natural Language Processing'
];

export default function Skills() {
  return (
    <section id="skills" data-aos="zoom-in" style={{
      padding: '4rem 2rem',   // ✅ mobile fix
      scrollMarginTop: '80px'
    }}>

      <h2 style={{
        marginBottom: '2rem',
        textAlign: 'left'   // ✅ better UI
      }}>
        My <span style={{ color: 'var(--primary)' }}>Skills</span>
      </h2>

      {/* TECHNICAL */}
      <h3 style={headingStyle}>TECHNICAL SKILLS</h3>
      <div style={lineStyle}></div>

      <div style={tagContainer}>
        {technicalSkills.map(skill => (
          <span key={skill} style={tagStyle}>{skill}</span>
        ))}
      </div>

      {/* SOFT */}
      <h3 style={headingStyle}>SOFT SKILLS</h3>
      <div style={lineStyle}></div>

      <div style={tagContainer}>
        {softSkills.map(skill => (
          <span key={skill} style={tagStyle}>{skill}</span>
        ))}
      </div>

      {/* COURSEWORK */}
      <h3 style={headingStyle}>COURSEWORKS</h3>
      <div style={lineStyle}></div>

      <ul style={{
        marginTop: '1rem',
        lineHeight: 1.8,
        fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',  // ✅ responsive text
        paddingLeft: '1.2rem'
      }}>
        {courseworks.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>

    </section>
  );
}

/* STYLES */

const headingStyle = {
  color: 'var(--primary)',   // ✅ theme fix
  marginTop: '2rem'
};

const lineStyle = {
  height: '4px',
  width: '100%',             // ✅ full width (better UI)
  maxWidth: '300px',
  background: 'var(--primary)',
  marginTop: '5px',
  marginBottom: '1rem'
};

const tagContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
};

const tagStyle = {
  border: '1px solid var(--border)',   // ✅ theme fix
  padding: '6px 12px',
  borderRadius: '10px',
  fontSize: 'clamp(0.8rem, 2vw, 1rem)', // ✅ responsive
  color: 'var(--text)',
  background: 'var(--card)'
};