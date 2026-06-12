import React, { useState } from 'react';

export default function Navbar({ toggleTheme, theme }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)'
    }}>
      
      <h2 style={{ color: 'var(--primary)' }}>PROFILE</h2>

      {/* RIGHT SIDE */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>

        {/* THEME BUTTON (always visible ✅) */}
        <button 
          onClick={toggleTheme} 
          style={{
            background: 'var(--card)',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            padding: '6px 10px',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {/* HAMBURGER */}
        <div 
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn"
          style={{
            display: 'none',
            fontSize: '1.8rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links" style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none'
        }}>
          {['Home','About','Skills','Projects','Contact'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                style={{ color: 'var(--text)', textDecoration: 'none' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          width: '100%',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '1rem'
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center'
          }}>
            {['Home','About','Skills','Projects','Contact'].map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: 'var(--text)', textDecoration: 'none' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}