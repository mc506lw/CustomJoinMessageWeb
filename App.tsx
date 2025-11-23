import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ValueProp from './components/ValueProp';
import QuickGlance from './components/QuickGlance';
import TechSpecs from './components/TechSpecs';
import ConfigShowcase from './components/ConfigShowcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <FeatureGrid />
        <ValueProp />
        <QuickGlance />
        <ConfigShowcase />
        <TechSpecs />
      </main>

      <Footer />
    </div>
  );
};

export default App;