import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 opacity-30 -z-10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 md:p-20 glass-card bg-gradient-to-br from-white/10 to-transparent border-white/5 relative overflow-hidden text-center group"
        >
          {/* Neon Borders Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
          
          <span className="text-primary text-sm font-bold uppercase tracking-[0.5em] block mb-6">Ready to start?</span>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
            Dominate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Streets</span> Today
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed leading-7">
            Stop grinding and start playing. Get exclusive access to everything GTA Online has to offer with our premium services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
                href="https://discord.gg/apWhvGtgxF"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center space-x-3 shadow-[0_0_30px_rgba(123,63,228,0.5)] hover:shadow-[0_0_50px_rgba(123,63,228,0.7)] transition-all text-xl"
            >
              <span>Join Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </motion.a>
            <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all text-xl backdrop-blur-sm"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
