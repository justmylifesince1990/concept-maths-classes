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
  cardsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '40px',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #f0e0e0',
    padding: '28px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  iconBox: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: '#fdf0ee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#c0392b',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  flexibleLabel: {
    color: '#c0392b',
    fontWeight: '700',
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '4px',
  },
  noFixed: {
    color: '#555',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '16px',
  },
  scheduleNote: {
    color: '#c0392b',
    fontSize: '13px',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #f0e0e0',
    margin: '14px 0',
  },
  classLabel: {
    fontWeight: '700',
    fontSize: '14px',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  price: {
    color: '#c0392b',
    fontWeight: '700',
    fontSize: '15px',
    display: 'block',
  },
  formatTitle: {
    fontWeight: '700',
    fontSize: '14px',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  formatDesc: {
    color: '#c0392b',
    fontSize: '13px',
    marginBottom: '16px',
  },
  methodBox: {
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #f0e0e0',
    padding: '40px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  methodTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '32px',
  },
  methodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  methodItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  checkIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '2px solid #c0392b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c0392b',
    flexShrink: 0,
    marginTop: '2px',
    fontSize: '14px',
    fontWeight: '700',
  },
  methodName: {
    fontWeight: '700',
    fontSize: '15px',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  methodDesc: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.6,
  },
};

const methodology = [
  { name: 'Conceptual Clarity First', desc: 'We focus on building strong fundamentals and deep understanding of mathematical concepts rather than memorization of formulas.' },
  { name: 'Individual Attention', desc: 'Small batch sizes ensure every student receives personalized guidance and their doubts are addressed promptly.' },
  { name: 'Unique Study Material', desc: 'Handwritten notes, practice worksheets, and comprehensive test series designed specifically for conceptual learning.' },
  { name: 'Problem-Solving Techniques', desc: 'Simplified methods and shortcuts for solving complex problems efficiently, especially useful for competitive exams.' },
  { name: 'Regular Assessments', desc: 'Weekly tests and monthly evaluations to track progress and identify areas needing additional focus.' },
  { name: 'Doubt Clearing Sessions', desc: 'Dedicated time for resolving student queries and ensuring no concept remains unclear.' },
];

export default function ClassInfo() {
  return (
    <section id="classinfo" style={s.section}>
      <div style={s.inner}>
        <h2 style={s.h2}>What Makes Us <span style={s.h2Accent}>Different</span></h2>
        <p style={s.subtitle}>Comprehensive information about our classes, timings, and teaching approach</p>

        <div style={s.cardsRow} className="info-cards">
          {/* Timings */}
          <div style={s.card}>
            <div style={s.iconBox}>⏰</div>
            <div style={s.cardTitle}>Class Timings</div>
            <div style={s.flexibleLabel}>Flexible Time</div>
            <div style={s.noFixed}>No Fixed Schedule</div>
            <div style={s.scheduleNote}>Classes are scheduled based on student convenience and availability</div>
          </div>

          {/* Fee Structure */}
          <div style={s.card}>
            <div style={s.iconBox}>₹</div>
            <div style={s.cardTitle}>Fee Structure</div>
            <div style={s.classLabel}>Class 11</div>
            <span style={s.price}>₹1500/hr (Online)</span>
            <span style={s.price}>₹1200/hr (Offline)</span>
            <hr style={s.divider} />
            <div style={s.classLabel}>Class 12</div>
            <span style={s.price}>₹2000/hr (Online)</span>
            <span style={s.price}>₹1800/hr (Offline)</span>
          </div>

          {/* Class Formats */}
          <div style={s.card}>
            <div style={s.iconBox}>📖</div>
            <div style={s.cardTitle}>Class Formats</div>
            <div style={s.formatTitle}>Online Classes</div>
            <div style={s.formatDesc}>Live interactive sessions via Zoom with recorded lectures</div>
            <div style={s.formatTitle}>Offline Classes</div>
            <div style={s.formatDesc}>In-person classes with personalized attention</div>
            <div style={s.formatTitle}>Home Tuition</div>
            <div style={{ color:'#555', fontSize:'13px' }}>Personalized teaching at your home with flexible timings</div>
          </div>
        </div>

        {/* Teaching Methodology */}
        <div style={s.methodBox}>
          <div style={s.methodTitle}>Our Teaching Methodology</div>
          <div style={s.methodGrid} className="method-grid">
            {methodology.map((m) => (
              <div key={m.name} style={s.methodItem}>
                <div style={s.checkIcon}>✓</div>
                <div>
                  <div style={s.methodName}>{m.name}</div>
                  <div style={s.methodDesc}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .info-cards { grid-template-columns: 1fr !important; }
          .method-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .info-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
