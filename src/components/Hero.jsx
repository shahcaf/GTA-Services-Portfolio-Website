import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full animate-pulse delay-1000 opacity-60"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest inline-block mb-6 shadow-[0_0_15px_rgba(123,63,228,0.2)]"
          >
            Premium GTA Services
          </motion.span>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            GTA Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/50 mb-10 max-w-2xl mx-auto font-medium">
            Modded Accounts • Money Services • Fast Delivery
            <br />
            <span className="text-sm italic opacity-70 mt-4 block">The ultimate upgrade for your GTA experience.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="https://discord.gg/apWhvGtgxF"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center space-x-3 shadow-[0_0_30px_rgba(123,63,228,0.5)] hover:shadow-[0_0_50px_rgba(123,63,228,0.7)] transition-all text-xl group"
            >
              <span>Join Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
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

      {/* Floating Particles/Shapes Background Decoration */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl z-0"
      />
    </section>
  );
}
