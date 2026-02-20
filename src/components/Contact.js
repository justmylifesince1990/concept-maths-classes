import React, { useState } from 'react';

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
  formCard: {
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #f0e0e0',
    padding: '40px',
    maxWidth: '680px',
    margin: '0 auto',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  formTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '6px',
  },
  formSub: {
    color: '#777',
    fontSize: '14px',
    marginBottom: '28px',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    background: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#333',
    outline: 'none',
    resize: 'vertical',
    minHeight: '140px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    background: '#fff',
  },
  submitBtn: {
    width: '100%',
    background: '#8b1a1a',
    color: '#fff',
    border: 'none',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'background 0.2s',
    letterSpacing: '0.3px',
  },
  successMsg: {
    background: '#e8f5e9',
    border: '1px solid #4caf50',
    color: '#2e7d32',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: '16px',
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>
        <h2 style={s.h2}>Get in <span style={s.h2Accent}>Touch</span></h2>
        <p style={s.subtitle}>Have questions? Want to enroll? Send us your inquiry and we'll get back to you promptly.</p>

        <div style={s.formCard}>
          <div style={s.formTitle}>Enquire Now</div>
          <div style={s.formSub}>Fill out the form below and we'll respond within 24 hours</div>

          <form onSubmit={handleSubmit}>
            <div style={s.fieldGroup}>
              <label style={s.label}>
                <span>👤</span> Full Name *
              </label>
              <input
                style={s.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                onFocus={e => e.target.style.borderColor = '#c0392b'}
                onBlur={e => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={s.fieldGroup}>
              <label style={s.label}>
                <span>✉️</span> Email Address *
              </label>
              <input
                style={s.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                onFocus={e => e.target.style.borderColor = '#c0392b'}
                onBlur={e => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={s.fieldGroup}>
              <label style={s.label}>Phone Number</label>
              <input
                style={s.input}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                onFocus={e => e.target.style.borderColor = '#c0392b'}
                onBlur={e => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <div style={s.fieldGroup}>
              <label style={s.label}>
                <span>💬</span> Your Message *
              </label>
              <textarea
                style={s.textarea}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements, class preferences, or any questions you have..."
                required
                onFocus={e => e.target.style.borderColor = '#c0392b'}
                onBlur={e => e.target.style.borderColor = '#ddd'}
              />
            </div>

            <button
              type="submit"
              style={s.submitBtn}
              onMouseEnter={e => e.target.style.background = '#6e1414'}
              onMouseLeave={e => e.target.style.background = '#8b1a1a'}
            >
              Submit Inquiry
            </button>
          </form>

          {submitted && (
            <div style={s.successMsg}>
              Thank you! Your inquiry has been submitted. We'll respond within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
