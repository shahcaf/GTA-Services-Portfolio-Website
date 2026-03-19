import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, MessageCircle, Heart } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="social" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-wide"
          >
            Join <span className="text-primary">Our Community</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xl mx-auto font-medium"
          >
            Connect with us on TikTok and Discord to see our latest drops and client proofs.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          {/* TikTok Preview Box */}
          <motion.a 
            href="https://www.tiktok.com/@jari.pekkala"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="lg:w-1/2 p-8 glass-card border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[400px]"
          >
            <div className="absolute top-4 right-4 animate-pulse">
               <div className="flex items-center space-x-1.5 bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Live Updates</span>
               </div>
            </div>
            
            <div className="w-20 h-20 bg-accent text-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(0,255,178,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight italic">TikTok Showcase</h3>
            <p className="text-white/40 mb-6 font-medium">Follow @jari.pekkala for daily service highlights.</p>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-xl font-black text-white italic">1M+</p>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Views</p>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-center">
                <p className="text-xl font-black text-white italic">50k+</p>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Followers</p>
              </div>
            </div>
          </motion.a>

          {/* Discord Card */}
          <motion.a 
            href="https://discord.gg/apWhvGtgxF"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="lg:w-1/2 p-8 glass-card border-white/5 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[400px]"
          >
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-[0_0_30px_rgba(123,63,228,0.4)]">
                <MessageCircle size={40} fill="currentColor" stroke="none" />
            </div>
            
            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight italic">Join Discord</h3>
            <p className="text-white/40 mb-6 font-medium">Chat with our team and get instant service delivery.</p>
            
            <div className="bg-primary/20 hover:bg-primary px-8 py-3 rounded-xl border border-primary/30 text-white font-bold uppercase tracking-widest transition-all">
                Join Server
            </div>
            
            <div className="mt-8 flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale opacity-50" />
                    </div>
                ))}
                <span className="ml-5 text-[10px] text-white/40 font-bold uppercase tracking-widest italic">+ 5k Active Members</span>
            </div>
          </motion.a>
        </div>
        
        <div className="mt-16 text-center opacity-30 select-none">
          <p className="text-sm font-bold tracking-[0.5em] uppercase pointer-events-none">✨ Trusted by thousands of players worldwide ✨</p>
        </div>
      </div>
    </section>
  );
}
