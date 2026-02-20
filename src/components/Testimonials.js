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
  h2: {
    textAlign: 'center',
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  h2Accent: { color: '#c0392b' },
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
    padding: '32px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  quoteIcon: {
    color: '#c0392b',
    fontSize: '32px',
    fontWeight: '900',
    lineHeight: 1,
    marginBottom: '16px',
    display: 'block',
  },
  quote: {
    color: '#333',
    fontSize: '15px',
    lineHeight: 1.7,
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #f0e0e0',
    marginBottom: '16px',
  },
  name: {
    fontWeight: '700',
    fontSize: '15px',
    color: '#1a1a1a',
  },
  role: {
    color: '#555',
    fontSize: '13px',
  },
  roleAccent: {
    color: '#c0392b',
  },
};

const testimonials = [
  {
    quote: '"Sir explains difficult topics like Trigonometry and Calculus in such a simple way. I used to fear Maths, but now it is my favorite subject."',
    name: 'Rahul Verma',
    role: 'Class',
    classNum: '11',
    suffix: 'Student',
  },
  {
    quote: '"His shortcuts and problem-solving techniques helped me score 92% in board exams. He gives personal attention to every student."',
    name: 'Sneha Gupta',
    role: 'Class',
    classNum: '12',
    suffix: 'Student',
  },
  {
    quote: '"Concept clarity is amazing. Sir focuses more on understanding rather than just solving questions."',
    name: 'Arjun Singh',
    role: 'Class',
    classNum: '11',
    suffix: 'Student',
  },
  {
    quote: '"The way he teaches Algebra and Coordinate Geometry is very easy to understand. My confidence in Maths improved a lot."',
    name: 'Priya Sharma',
    role: 'Class',
    classNum: '12',
    suffix: 'Student',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={s.section}>
      <div style={s.inner}>
        <h2 style={s.h2}>What Our <span style={s.h2Accent}>Students Say</span></h2>
        <p style={s.subtitle}>Real feedback from students who have experienced our teaching methodology</p>

        <div style={s.grid} className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.name} style={s.card}>
              <span style={s.quoteIcon}>"</span>
              <p style={s.quote}>{t.quote}</p>
              <hr style={s.divider} />
              <div style={s.name}>{t.name}</div>
              <div style={s.role}>
                {t.role} <span style={s.roleAccent}>{t.classNum}</span> {t.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
