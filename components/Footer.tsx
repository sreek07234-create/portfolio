
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/5 to-transparent mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-xl font-display font-bold tracking-tighter mb-2 text-gray-900">
              SRI<span className="text-cyan-600">KANTH</span>.
            </div>
            <p className="text-gray-400 text-sm font-light">
              Senior Consultant & UI Developer based in India.
            </p>
          </div>

          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs md:text-right">
            Designed & Built with React, Next.js & Modern Web Technologies.<br />
            <span className="text-gray-300 mt-2 block">© {new Date().getFullYear()} Srikanth K. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
