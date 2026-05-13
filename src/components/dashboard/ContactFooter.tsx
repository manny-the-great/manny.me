"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.86 5.5 5.5 0 0 0-.15-3.81s-1.18-.35-3.9 1.5a13.3 13.3 0 0 0-7 0c-2.72-1.85-3.9-1.5-3.9-1.5a5.5 5.5 0 0 0-.15 3.81 5.5 5.5 0 0 0-1.5 3.86c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const ContactFooter = () => {
  return (
    <footer id="contact" className="w-full border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Let’s Build Something <br/>
            Meaningful.
          </h2>
          <a href="mailto:contact@manny.me" className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] font-semibold text-lg hover:opacity-90 transition-opacity mt-4 font-heading">
            Get in Touch
          </a>
        </motion.div>

        <div className="flex items-center gap-6 mt-12">
          <a href="https://github.com/manny-the-great" className="p-3 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" className="p-3 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://twitter.com" className="p-3 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all">
            <TwitterIcon size={20} />
          </a>
          <a href="mailto:contact@manny.me" className="p-3 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-white/30 font-mono mt-8">
          © {new Date().getFullYear()} Manny D&apos; Great. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
