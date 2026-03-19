import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(123,63,228,0.5)]">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase italic">
              GTA <span className="text-primary font-black uppercase">Services</span>
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <motion.a 
                whileHover={{ y: -3, color: '#7B3FE4' }}
                href="https://discord.gg/apWhvGtgxF" 
                className="text-white/40 font-bold uppercase tracking-widest text-sm transition-colors"
                target="_blank" rel="noopener noreferrer"
            >
              Discord
            </motion.a>
            <motion.a 
                whileHover={{ y: -3, color: '#00FFB2' }}
                href="https://www.tiktok.com/@jari.pekkala" 
                className="text-white/40 font-bold uppercase tracking-widest text-sm transition-colors"
                target="_blank" rel="noopener noreferrer"
            >
              TikTok
            </motion.a>
          </div>
          
          {/* Copyright/Back to Top */}
          <p className="text-white/20 text-xs font-bold tracking-[0.2em] uppercase">
            © {currentYear} GTA SERVICES • ALL RIGHTS RESERVED
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.3em] font-medium leading-relaxed italic pointer-events-none">
            DISCLAIMER: This site is not affiliated with Rockstar Games, Take-Two Interactive, or any of their subsidiaries. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
