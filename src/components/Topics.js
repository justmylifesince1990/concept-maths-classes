import React from 'react';

const s = {
  section: {
    background: '#fdf5f5',
    padding: '80px 24px',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '12px',
  },
  h2: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: '900',
    color: '#1a1a1a',
  },
  h2Accent: {
    color: '#c0392b',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    fontSize: '16px',
    maxWidth: '600px',
    margin: '0 auto 56px',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #f0e0e0',
    padding: '28px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
  },
  iconBox: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    background: '#fdf0ee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  cardDesc: {
    color: '#666',
    fontSize: '14px',
    lineHeight: 1.5,
  },
  keyLabel: {
    color: '#c0392b',
    fontWeight: '700',
    fontSize: '14px',
    marginBottom: '12px',
  },
  topicList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  topicItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#333',
    fontSize: '14px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#c0392b',
    flexShrink: 0,
  },
};

const topics = [
  {
    icon: '✖️',
    title: 'Algebra',
    desc: 'Master equations, inequalities, polynomials, and algebraic expressions with our systematic approach.',
    items: ['Linear and Quadratic Equations', 'Polynomials and Factorization', 'Sequences and Series', 'Matrices and Determinants'],
  },
  {
    icon: '📈',
    title: 'Calculus',
    desc: 'Understand limits, derivatives, and integrals through intuitive explanations and practical applications.',
    items: ['Limits and Continuity', 'Differentiation Techniques', 'Integration Methods', 'Applications of Calculus'],
  },
  {
    icon: '📐',
    title: 'Geometry',
    desc: 'Explore shapes, angles, theorems, and spatial reasoning with visual and logical approaches.',
    items: ['Euclidean Geometry', 'Coordinate Geometry', 'Trigonometric Applications', '3D Geometry and Vectors'],
  },
  {
    icon: '△',
    title: 'Trigonometry',
    desc: 'Learn trigonometric ratios, identities, and equations with real-world problem-solving techniques.',
    items: ['Trigonometric Ratios and Identities', 'Inverse Trigonometric Functions', 'Trigonometric Equations', 'Heights and Distances'],
  },
];

export default function Topics() {
  return (
    <section id="topics" style={s.section}>
      <div style={s.inner}>
        <div style={s.heading}>
          <h2 style={s.h2}>Our <span style={s.h2Accent}>Mathematics Topics</span></h2>
        </div>
        <p style={s.subtitle}>
          Comprehensive coverage of all major mathematics topics for Classes 11, 12, and competitive exam preparation
        </p>

        <div style={s.grid} className="topics-grid">
          {topics.map((t) => (
            <div key={t.title} style={s.card}>
              <div style={s.cardTop}>
                <div style={s.iconBox}>{t.icon}</div>
                <div>
                  <div style={s.cardTitle}>{t.title}</div>
                  <div style={s.cardDesc}>{t.desc}</div>
                </div>
              </div>
              <div style={s.keyLabel}>Key Topics Covered:</div>
              <ul style={s.topicList}>
                {t.items.map((item) => (
                  <li key={item} style={s.topicItem}>
                    <span style={s.dot}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .topics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
