import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, Zap, Lock } from 'lucide-react';

const services = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Money Services",
    description: "Get millions in-game effortlessly with our fast and secure money injection methods.",
    color: "primary"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Modded Accounts",
    description: "Ready-to-play accounts with maximum levels, unlocks, and pre-built character setups.",
    color: "accent"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Private Sessions",
    description: "Secure, invite-only environments for grinding and relaxation without griefers.",
    color: "primary"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Rapid fulfillment on all orders with active support for every step of the process.",
    color: "accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xl mx-auto font-medium"
          >
            We provide everything you need to dominate GTA Online. Fast, professional, and built for players who want the best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative p-1 rounded-3xl group-hover:bg-gradient-to-br from-white/10 to-transparent transition-all"
            >
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[calc(1.5rem–1px)] transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(123,63,228,0.2)]">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                  service.color === 'primary' 
                    ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white' 
                    : 'bg-accent/20 text-accent group-hover:bg-accent group-hover:text-background font-bold'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed leading-7">
                  {service.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10 ${
                  service.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
