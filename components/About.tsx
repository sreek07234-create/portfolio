
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: "Experience", value: "7+ Years" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Key Technologies", value: "React/Angular" },
    { label: "Agile Proficient", value: "Scrum" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gray-900">
              Transforming Complex Visions into <span className="text-cyan-600">Digital Reality</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
              <p>
                With over 7 years of deep-rooted experience in UI development, I specialize in crafting 
                high-performance, scalable single-page applications that prioritize user experience and usability.
              </p>
              <p>
                My expertise spans across modern ecosystems like React and Angular, where I bridge the gap between 
                complex backend architectures and intuitive, pixel-perfect interfaces.
              </p>
              <ul className="space-y-4">
                {[
                  "Expertise in React JS, Angular 5/6, and Modern JavaScript",
                  "Strong architectural understanding of SPAs and Usability",
                  "Agile methodology advocate with extensive Scrum team experience",
                  "Adept problem-solver with a passion for continuous learning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-8 rounded-3xl border border-black/[0.03] flex flex-col justify-center text-center shadow-sm"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{stat.value}</span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
            <div className="col-span-2 glass p-1 rounded-3xl overflow-hidden mt-4 border border-black/[0.03]">
              <img 
                src="https://picsum.photos/800/400?grayscale" 
                alt="Workspace" 
                className="w-full h-64 object-cover rounded-[1.4rem] opacity-70 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
