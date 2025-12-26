
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';

const ProjectCard: React.FC<{ project: typeof PROJECTS_DATA[0]; index: number }> = ({ project, index }) => {
  // Select an icon based on the project category/index for variety
  const getProjectIcon = () => {
    if (project.title.toLowerCase().includes('enterprise') || project.title.toLowerCase().includes('datamart')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    }
    if (project.title.toLowerCase().includes('healthy') || project.title.toLowerCase().includes('science')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#0d0d0d] rounded-[2rem] p-8 border border-white/5 flex flex-col h-full transition-all duration-300 hover:border-purple-500/30"
    >
      {/* Top Section: Icon and External Link */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
          {getProjectIcon()}
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
          {project.description}
        </p>
      </div>

      {/* Bottom Section: Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-300 tracking-wider uppercase"
          >
            {tool}
          </span>
        ))}
        {project.tools.length > 4 && (
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-500 tracking-wider uppercase">
            +{project.tools.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-gray-900 tracking-tighter"
          >
            Personal <span className="text-gradient">Creations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            A collection of high-impact enterprise solutions and medical platforms developed with a focus on usability, scalability, and modern architectural standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
