
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Background floating elements animation
    gsap.to(".bg-circle-1", {
      x: 100,
      y: 100,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(".bg-circle-2", {
      x: -150,
      y: -50,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background elements - softer for light mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-circle-1 absolute -top-20 -left-20 w-[600px] h-[600px] bg-cyan-500/[0.07] blur-[120px] rounded-full" />
        <div className="bg-circle-2 absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-500/[0.07] blur-[120px] rounded-full" />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
