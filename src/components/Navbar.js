import React, { useState } from 'react';

const styles = {
  nav: {
    background: '#c0392b',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '36px',
    height: '36px',
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '800',
    border: '2px solid rgba(255,255,255,0.4)',
  },
  logoText: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: '18px',
    lineHeight: 1.1,
  },
  logoSub: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '11px',
    fontWeight: '400',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    opacity: 0.9,
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px',
  },
  bar: {
    width: '24px',
    height: '2px',
    background: '#fff',
    borderRadius: '2px',
  },
  mobileMenu: {
    background: '#a93226',
    padding: '12px 24px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mobileLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.logoArea}>
          <div style={styles.logoIcon}>M</div>
          <div style={styles.logoText}>
            <span style={styles.logoTitle}>Concept Maths Classes</span>
            <span style={styles.logoSub}>Excellence in Mathematics Education</span>
          </div>
        </div>

        <ul style={styles.navLinks} className="nav-desktop">
          {['about','topics','classinfo','testimonials','contact'].map((id, i) => (
            <li key={id}>
              <span style={styles.navLink} onClick={() => scrollTo(id)}>
                {['About','Topics','Class Info','Testimonials','Contact'][i]}
              </span>
            </li>
          ))}
        </ul>

        <button style={styles.hamburger} className="hamburger" onClick={() => setOpen(!open)}>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </button>
      </div>

      {open && (
        <div style={styles.mobileMenu}>
          {['about','topics','classinfo','testimonials','contact'].map((id, i) => (
            <span key={id} style={styles.mobileLink} onClick={() => scrollTo(id)}>
              {['About','Topics','Class Info','Testimonials','Contact'][i]}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
