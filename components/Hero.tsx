
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full glass text-cyan-700 text-xs font-bold tracking-widest uppercase border border-cyan-500/20">
            Available for Senior Roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-tight mb-6 text-gray-900"
        >
          SRIKANTH <span className="text-gradient">K</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light"
        >
          <div className="flex flex-wrap justify-center gap-x-3 items-center">
            <span>Senior Consultant</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>Senior UI Developer</span>
          </div>
          <div className="mt-2 text-cyan-600 font-mono text-lg font-medium">
            React | Angular | JavaScript | UI Engineering
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(6, 182, 212, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-10 py-4 rounded-full bg-gray-900 text-white font-bold text-lg"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-10 py-4 rounded-full glass border border-gray-200 text-gray-900 font-bold text-lg"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
