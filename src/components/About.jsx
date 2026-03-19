import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-4">Who we are</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Exclusive <span className="text-primary italic">GTA Online</span> Support
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
            Providing high-end GTA Online services including modded accounts and in-game money support. 
            We're not just a service; we're your partner in game progression.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center space-x-4 group p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 shadow-[0_0_10px_rgba(123,63,228,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4-4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-tight">Fast Delivery</h4>
                <p className="text-white/50 text-sm">Most services completed within hours.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 shadow-[0_0_10px_rgba(0,255,178,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-tight">Active Support</h4>
                <p className="text-white/50 text-sm">Dedicated Discord mod team to help you.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative"
        >
          <div className="relative z-10 p-0.5 rounded-3xl bg-gradient-to-br from-primary via-transparent to-accent group shadow-[0_0_30px_rgba(123,63,228,0.3)]">
            <div className="bg-background/90 rounded-[calc(1.5rem-1px)] p-8 overflow-hidden aspect-video relative flex items-center justify-center backdrop-blur-3xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1470')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              <div className="relative text-center">
                 <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30 shadow-[0_0_20px_rgba(123,63,228,0.3)] animate-pulse">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
                 </div>
                 <h3 className="text-3xl font-black italic tracking-widest text-shadow-glow">ELITE STATUS</h3>
                 <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mt-2">Verified Professional Service Provider</p>
              </div>
            </div>
          </div>
          {/* Decorative glow behind the image */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 group-hover:bg-primary/30 transition-all"></div>
        </motion.div>
      </div>
    </section>
  );
}
