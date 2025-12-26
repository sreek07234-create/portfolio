
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-display font-bold tracking-tighter text-gray-900"
          whileHover={{ scale: 1.05 }}
        >
          SRI<span className="text-cyan-600">KANTH</span>.
        </motion.div>

        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-bold shadow-lg shadow-black/10"
            >
              Let's Talk
            </motion.a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
