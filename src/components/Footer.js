import React from 'react';

const s = {
  footer: {
    background: '#1a0a00',
    color: '#fff',
    padding: '40px 24px',
    textAlign: 'center',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  logoIcon: {
    width: '36px',
    height: '36px',
    background: '#c0392b',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '800',
  },
  logoTitle: {
    fontWeight: '800',
    fontSize: '18px',
  },
  tagline: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  link: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  copy: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '13px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '20px',
    marginTop: '8px',
  },
};

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.logoRow}>
          <div style={s.logoIcon}>M</div>
          <span style={s.logoTitle}>Concept Maths Classes</span>
        </div>
        <p style={s.tagline}>Excellence in Mathematics Education</p>
        <div style={s.links}>
          {['about','topics','classinfo','testimonials','contact'].map((id, i) => (
            <span key={id} style={s.link} onClick={() => scrollTo(id)}>
              {['About','Topics','Class Info','Testimonials','Contact'][i]}
            </span>
          ))}
        </div>
        <div style={s.copy}>
          &copy; {new Date().getFullYear()} Concept Maths Classes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
