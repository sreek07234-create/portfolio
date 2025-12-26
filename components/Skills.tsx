
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">Technical <span className="text-cyan-600">Toolkit</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">A comprehensive view of my technical expertise acquired over 7+ years in the industry.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-6 text-gray-900 group-hover:text-cyan-600 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-black/[0.02] border border-black/[0.05] text-xs font-semibold text-gray-500 group-hover:border-cyan-500/30 group-hover:text-cyan-700 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
