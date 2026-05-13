"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Star, GitPullRequest, GitFork } from 'lucide-react';

const generateHeatmapData = () => {
  return Array.from({ length: 52 * 7 }, (_, i) => {
    const val = Math.random();
    if (val > 0.8) return 4;
    if (val > 0.6) return 3;
    if (val > 0.4) return 2;
    if (val > 0.2) return 1;
    return 0;
  });
};

export const GithubActivity = () => {
  const heatmapData = generateHeatmapData();

  return (
    <section id="activity" className="w-full max-w-[1400px] mx-auto px-6 py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight">
          Engineering Activity
        </h2>
        <p className="text-white/50">Continuous deployment, open-source contributions, and late-night commits.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-card p-8 flex flex-col gap-8 relative overflow-hidden group"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-heading">Contribution Graph</h3>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 font-mono">
              @manny-the-great
            </span>
          </div>

          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[700px] grid grid-rows-7 grid-flow-col gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              {heatmapData.map((level, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-[2px] transition-all duration-300 ${
                    level === 4 ? 'bg-[var(--color-primary)] drop-shadow-[0_0_8px_rgba(255,95,31,0.8)]' :
                    level === 3 ? 'bg-[var(--color-primary)]/80' :
                    level === 2 ? 'bg-[var(--color-primary)]/50' :
                    level === 1 ? 'bg-[var(--color-primary)]/20' :
                    'bg-white/5'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Less</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-[2px] bg-white/5" />
              <div className="w-3 h-3 rounded-[2px] bg-[var(--color-primary)]/20" />
              <div className="w-3 h-3 rounded-[2px] bg-[var(--color-primary)]/50" />
              <div className="w-3 h-3 rounded-[2px] bg-[var(--color-primary)]/80" />
              <div className="w-3 h-3 rounded-[2px] bg-[var(--color-primary)]" />
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Stats Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-white/70">
                <GitCommit size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-white/50">Total Commits</span>
                <span className="text-xl font-bold text-white font-mono">1,204</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[var(--color-secondary)]">
                <Star size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-white/50">Stars Earned</span>
                <span className="text-xl font-bold text-white font-mono">128</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-white/70">
                <GitPullRequest size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-white/50">Pull Requests</span>
                <span className="text-xl font-bold text-white font-mono">56</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
