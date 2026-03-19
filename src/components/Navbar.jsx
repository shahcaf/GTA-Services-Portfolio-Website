import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Join Discord', href: 'https://discord.gg/apWhvGtgxF', highlight: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'
    }`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(123,63,228,0.5)]">
            <span className="text-white font-bold text-xl uppercase tracking-tighter">G</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">
            GTA <span className="text-primary">Services</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${
                link.highlight 
                ? 'bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/80 transition-all shadow-[0_0_15px_rgba(123,63,228,0.4)] hover:shadow-[0_0_25px_rgba(123,63,228,0.6)]'
                : 'text-white/70 hover:text-white transition-colors text-sm font-medium'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
