"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { 
        timeZone: 'Africa/Lagos',
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-10 px-4 sm:px-6 flex flex-col justify-center">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[2.5rem] bg-[var(--color-background)] border border-white/5 overflow-hidden flex flex-col justify-between min-h-[85vh] shadow-2xl shadow-black/50">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] mix-blend-screen opacity-60 translate-x-1/3 -translate-y-1/4 animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/15 rounded-full blur-[140px] mix-blend-screen opacity-50 -translate-x-1/4 translate-y-1/4" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(7,7,7,0.9)_100%)] z-10" />
        </div>

        <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start p-8 md:p-16 lg:p-20 gap-12 lg:gap-0 flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_rgba(255,95,31,0.8)] animate-pulse" />
              <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/60 font-heading">
                Hey, I&apos;m Manny
              </span>
            </div>
            
            <h1 className="text-[clamp(4rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter text-white font-heading drop-shadow-2xl">
              Web3 <br />
              Engineer.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-6 lg:text-right max-w-sm lg:mt-12"
          >
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 leading-snug font-heading">
              “Great software should feel invisible.”
            </h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              Building scalable Web3 infrastructure, developer tools, and backend systems that connect and scale.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 border-t border-white/10 bg-black/20 backdrop-blur-md mt-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {[
              { num: '01', label: 'Smart Contracts' },
              { num: '02', label: 'Web3 Infrastructure' },
              { num: '03', label: 'Backend Systems' },
              { num: '04', label: 'FullStack Apps' },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-2 p-6 md:p-8 hover:bg-white/[0.03] transition-colors cursor-default">
                <span className="font-mono text-[var(--color-primary)]/70 text-sm">#{item.num}</span>
                <span className="text-white/80 font-semibold tracking-wider text-xs md:text-sm uppercase font-heading">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
