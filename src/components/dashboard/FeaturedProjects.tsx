"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.86 5.5 5.5 0 0 0-.15-3.81s-1.18-.35-3.9 1.5a13.3 13.3 0 0 0-7 0c-2.72-1.85-3.9-1.5-3.9-1.5a5.5 5.5 0 0 0-.15 3.81 5.5 5.5 0 0 0-1.5 3.86c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const projects = [
  {
    title: "DegenSim",
    description: "Crypto trading simulator for practicing with virtual funds. Experience market dynamics, study price action, and hone your strategy without real risk.",
    tags: ["Next.js", "TypeScript", "Web3.js", "Tailwind"],
    githubUrl: "https://github.com/manny-the-great/CryptoVerse",
    liveUrl: "#",
    year: "2024",
  },
  {
    title: "SecureChat",
    description: "AI-powered chat with real-time toxic message detection. TensorFlow classification model keeps communities safe from harassment and harmful content.",
    tags: ["React", "Node.js", "TensorFlow", "Socket.io"],
    githubUrl: "https://github.com/manny-the-great/Safe-Chat-Project",
    liveUrl: "#",
    year: "2024",
  },
  {
    title: "Chainlink Functions",
    description: "Smart contracts that interact with external APIs via decentralised oracles. True on-chain interoperability for any Web3 protocol.",
    tags: ["Solidity", "Chainlink", "Hardhat", "EVM"],
    githubUrl: "#",
    year: "2025",
  }
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group glass-card glass-card-hover flex flex-col overflow-hidden relative cursor-pointer min-h-[400px]"
          >
            {/* Image/Video Preview Area placeholder */}
            <div className="h-48 w-full bg-black/40 relative overflow-hidden flex items-center justify-center border-b border-white/5">
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] to-transparent z-10" />
               <span className="text-white/10 font-bold text-xl tracking-widest">{project.title.toUpperCase()}</span>
            </div>

            <div className="flex flex-col gap-4 p-6 flex-1 z-20 bg-[var(--color-card)]">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-white/40 font-mono">{project.year}</span>
              </div>
              
              <p className="text-sm text-white/60 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                <a href={project.liveUrl} className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors">
                  Live Demo <ExternalLink size={12} />
                </a>
                <a href={project.githubUrl} className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors ml-auto">
                  <GithubIcon size={14} /> Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
