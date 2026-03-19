import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ticket, ShoppingCart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Join Discord",
    description: "Get started by joining our community server.",
    color: "primary"
  },
  {
    icon: <Ticket className="w-8 h-8" />,
    title: "Open a Ticket",
    description: "Request help or inquire about specific services.",
    color: "accent"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Choose Service",
    description: "Select from our range of premium GTA offerings.",
    color: "primary"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Get Delivered",
    description: "Relax while we process your request with speed.",
    color: "accent"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic"
          >
            How it <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xl mx-auto font-medium"
          >
            A simple, secure process to get you back in the game faster.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] ${
                  step.color === 'primary' 
                    ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white shadow-primary/20' 
                    : 'bg-accent/20 text-accent group-hover:bg-accent group-hover:text-background font-bold shadow-accent/20'
                }`}>
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-background border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black italic">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 uppercase tracking-tight italic">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed leading-6 group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
