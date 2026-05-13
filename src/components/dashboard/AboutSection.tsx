"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-tighter text-white font-heading">
            Building <br/>
            Experiences That <br/>
            Power Web3.
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 lg:max-w-lg"
        >
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
            I’m a Blockchain & FullStack developer focused on building scalable, modern, and user focused digital systems for Web3 and the internet.
          </p>
          <div>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium tracking-wide">
              Get in Touch
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
