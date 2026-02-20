import React from 'react';

const s = {
  section: {
    background: 'linear-gradient(135deg, #1a0a00 0%, #2d0f0f 30%, #1a1a2e 70%, #0d0d1a 100%)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mathBg: {
    position: 'absolute',
    inset: 0,
    opacity: 0.15,
    background: `radial-gradient(ellipse at 20% 50%, rgba(255,100,50,0.3) 0%, transparent 60%),
                 radial-gradient(ellipse at 80% 20%, rgba(100,50,200,0.2) 0%, transparent 50%)`,
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '80px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },
  left: {
    flex: 1,
    minWidth: 0,
  },
  badge: {
    display: 'inline-block',
    background: '#c0392b',
    color: '#fff',
    fontSize: '13px',
    fontWeight: '600',
    padding: '6px 18px',
    borderRadius: '999px',
    marginBottom: '28px',
  },
  h1: {
    fontSize: 'clamp(36px, 5vw, 58px)',
    fontWeight: '900',
    color: '#fff',
    lineHeight: 1.15,
    marginBottom: '24px',
  },
  highlight: {
    color: '#e74c3c',
  },
  desc: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '16px',
    lineHeight: 1.7,
    marginBottom: '28px',
    maxWidth: '560px',
  },
  philosophy: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '18px',
    marginBottom: '12px',
  },
  philosophyDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '15px',
    lineHeight: 1.7,
    marginBottom: '16px',
  },
  list: {
    listStyle: 'none',
    marginBottom: '20px',
  },
  listItem: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '15px',
    padding: '3px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  bullet: {
    color: '#e74c3c',
    fontSize: '18px',
  },
  closingText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '15px',
    lineHeight: 1.7,
    marginBottom: '32px',
  },
  enrollBtn: {
    background: '#c0392b',
    color: '#fff',
    border: 'none',
    padding: '14px 36px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'background 0.2s, transform 0.2s',
  },
  right: {
    flex: '0 0 420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  circleImg: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    border: '4px solid #fff',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #2c3e50, #3d5a7a)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
  },
  circleInner: {
    background: 'linear-gradient(135deg, #2c5364, #203a43)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    textAlign: 'center',
  },
  circleTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: '18px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: 1.3,
    marginBottom: '8px',
  },
  circleSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '12px',
  },
  statsRow: {
    display: 'flex',
    gap: '16px',
  },
  statCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px 24px',
    textAlign: 'center',
    minWidth: '110px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  },
  statIcon: {
    fontSize: '28px',
    marginBottom: '8px',
    color: '#c0392b',
  },
  statNumber: {
    color: '#c0392b',
    fontWeight: '800',
    fontSize: '22px',
    display: 'block',
  },
  statLabel: {
    color: '#555',
    fontSize: '12px',
    marginTop: '2px',
  },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" style={s.section}>
      <div style={s.mathBg}></div>

      {/* SVG math background overlay */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.08, pointerEvents:'none' }}
           viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <text x="50" y="120" fill="white" fontSize="80" fontFamily="serif" opacity="0.6">∑</text>
        <text x="200" y="200" fill="white" fontSize="50" fontFamily="serif" opacity="0.4">∫</text>
        <text x="400" y="80" fill="white" fontSize="60" fontFamily="serif" opacity="0.5">π</text>
        <text x="600" y="180" fill="white" fontSize="45" fontFamily="serif" opacity="0.3">∞</text>
        <text x="800" y="120" fill="white" fontSize="55" fontFamily="serif" opacity="0.4">√x</text>
        <text x="1000" y="200" fill="white" fontSize="40" fontFamily="serif" opacity="0.3">dx</text>
        <text x="100" y="400" fill="white" fontSize="40" fontFamily="serif" opacity="0.3">y=mx+c</text>
        <text x="350" y="500" fill="white" fontSize="35" fontFamily="serif" opacity="0.25">a²+b²=c²</text>
        <circle cx="700" cy="350" r="200" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
        <circle cx="700" cy="350" r="150" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1"/>
        <line x1="0" y1="350" x2="1200" y2="350" stroke="white" strokeWidth="0.5" opacity="0.1"/>
        <line x1="700" y1="0" x2="700" y2="700" stroke="white" strokeWidth="0.5" opacity="0.1"/>
      </svg>

      <div style={s.inner} className="hero-inner">
        <div style={s.left}>
          <span style={s.badge}>Honours in Mathematics</span>
          <h1 style={s.h1}>
            Master Mathematics<br />
            with <span style={s.highlight}>Er. Roshan Kumar</span>
          </h1>
          <p style={s.desc}>
            Roshan Kumar is a highly dedicated Mathematics educator with an Honours degree in Mathematics.
            With a deep conceptual understanding and strong practical teaching experience, he has been
            guiding students from Classes 9–12 and competitive exams with excellent results.
          </p>

          <p style={s.philosophy}>Teaching Philosophy</p>
          <p style={s.philosophyDesc}>
            He believes that Mathematics is not about memorizing formulas, but about understanding logic
            and developing strong problem-solving skills. His teaching methodology focuses on:
          </p>
          <ul style={s.list}>
            {[
              'Strong conceptual clarity',
              'Step-by-step problem solving',
              'Regular doubt-solving sessions',
              'Exam-oriented preparation',
              'Personal attention to every student',
            ].map((item) => (
              <li key={item} style={s.listItem}>
                <span style={s.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={s.closingText}>
            Students appreciate his ability to simplify even the most challenging topics and explain
            them in an easy, relatable way. His classes are interactive, engaging, and result-driven.
          </p>
          <button style={s.enrollBtn} onClick={() => scrollTo('contact')}
            onMouseEnter={e => { e.target.style.background='#a93226'; e.target.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background='#c0392b'; e.target.style.transform='translateY(0)'; }}>
            Enroll Now
          </button>
        </div>

        <div style={s.right} className="hero-right">
          <div style={s.circleImg}>
            <div style={s.circleInner}>
              <div style={{ fontSize:'48px', marginBottom:'12px' }}>👩‍🏫</div>
              <div style={s.circleTitle}>EMPOWERING MINDS,<br />SHAPING FUTURES</div>
              <div style={s.circleSub}>Meet Our Dedicated Educators</div>
            </div>
          </div>

          <div style={s.statsRow}>
            <div style={s.statCard}>
              <div style={s.statIcon}>👥</div>
              <span style={s.statNumber}>1000+</span>
              <div style={s.statLabel}>Students Taught</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statIcon}>🏆</div>
              <span style={s.statNumber}>95%</span>
              <div style={s.statLabel}>Success Rate</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statIcon}>🎯</div>
              <span style={s.statNumber}>9-12</span>
              <div style={s.statLabel}>Classes Covered</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column !important; padding: 40px 20px !important; }
          .hero-right { flex: none !important; width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
