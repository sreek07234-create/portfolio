
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-gray-900">Career <span className="text-purple-600">Journey</span></h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-20" />

          <div className="space-y-24">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10" />

                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="glass p-8 rounded-3xl border border-black/[0.05] hover:border-cyan-500/30 transition-colors shadow-sm">
                    <span className="text-xs font-mono text-cyan-600 mb-2 block tracking-widest font-bold">{exp.period}</span>
                    <h3 className="text-2xl font-display font-bold mb-1 text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg text-gray-500 font-medium mb-4">{exp.company}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      Leading development of enterprise-grade UI systems with a focus on performance, 
                      accessibility, and modern design standards.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Sub-section */}
        <div className="mt-32">
          <h3 className="text-xl font-display font-bold mb-8 text-center text-gray-400 uppercase tracking-widest">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "M.Tech – Power Electronics", sub: "PRRM College of Engineering, JNTUH (2012–2014)" },
              { title: "B.Tech – EEE", sub: "Kamala Institute of Technology and Science, JNTUH" }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-black/[0.03] shadow-sm"
              >
                <div className="text-cyan-700 font-bold mb-1">{edu.title}</div>
                <div className="text-gray-500 text-sm font-light">{edu.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
