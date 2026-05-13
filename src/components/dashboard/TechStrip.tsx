"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Ethereum', icon: '⟠' },
  { name: 'Chainlink', icon: '⬡' },
  { name: 'Solidity', icon: 'S' },
  { name: 'Next.js', icon: 'N' },
  { name: 'TypeScript', icon: 'TS' },
];

export const TechStrip = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-6">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 font-heading">
          Core Technologies
        </span>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="text-white/30 group-hover:text-[var(--color-primary)] transition-colors duration-500 text-2xl font-black font-heading drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,95,31,0.6)]">
                {tech.icon}
              </div>
              <span className="text-white/30 group-hover:text-white transition-colors duration-500 font-semibold tracking-wide text-lg md:text-xl font-heading">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
