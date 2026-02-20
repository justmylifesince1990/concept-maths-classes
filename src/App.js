import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Topics from './components/Topics';
import ClassInfo from './components/ClassInfo';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Topics />
      <ClassInfo />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
