
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xzdbbyva', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Failed to submit form');
        // Optionally handle error state here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-black/[0.05] shadow-2xl shadow-black/5 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/30 blur-[100px] -mr-32 -mt-32 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter text-gray-900">
                Let's Build Something <span className="text-gradient">Iconic</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 font-light">
                Available for freelance opportunities and full-time positions. Let's discuss how we can work together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email me</div>
                    <a href="mailto:ksrikanth.komati@gmail.com" className="text-xl font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                      ksrikanth.komati@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Call me</div>
                    <a href="tel:+919618408014" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                      +91-9618408014
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-gray-50 border border-black/[0.05] rounded-2xl p-4 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-50 border border-black/[0.05] rounded-2xl p-4 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-gray-50 border border-black/[0.05] rounded-2xl p-4 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-gray-900 resize-none"
                  placeholder="I have a project idea..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gray-900 text-white font-display font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl max-w-md w-full text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-purple-500" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccess(false)}
                  className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
