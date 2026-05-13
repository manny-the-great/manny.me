"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { id: 'hero',     label: 'Overview' },
  { id: 'projects', label: 'Projects'  },
  { id: 'activity', label: 'Activity'  },
  { id: 'stars',    label: 'Stars'     },
  { id: 'contact',  label: 'Contact'   },
];

export function Navbar() {
  const [activeTab, setActiveTab]   = useState('hero');
  const { theme, setTheme }         = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 130;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= pos) { setActiveTab(navItems[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full border transition-all duration-500',
          scrolled
            ? 'bg-[var(--color-background)]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/60'
            : 'bg-white/5 backdrop-blur-xl border-white/10'
        )}
      >
        <div className="flex items-center gap-2 pl-2 pr-1 sm:pr-2 border-r border-white/10 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
            <img src="https://github.com/manny-the-great.png" alt="Manny" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex items-center px-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                'relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none flex-shrink-0 font-heading',
                activeTab === item.id ? 'text-white' : 'text-white/60 hover:text-white'
              )}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.label.substring(0, 4)}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>
          
          <button
            onClick={() => handleClick('contact')}
            className="hidden sm:block px-5 py-2 text-sm font-semibold rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 transition-opacity font-heading"
          >
            Get in Touch
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
