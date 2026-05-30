'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FocusItem {
  title: string;
  description: string;
}

interface InteractiveFocusSectionProps {
  sectionTag?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  items: FocusItem[];
}

export default function InteractiveFocusSection({ sectionTag, title, description, items }: InteractiveFocusSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative bg-[#0a0f1a] overflow-hidden border-t border-white/5">
      {/* Background glow for active item */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan-blue/5 rounded-full blur-[120px] pointer-events-none transition-all duration-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          
          {/* Left: Headers & Text */}
          <div className="xl:col-span-5">
            {sectionTag && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-[#121c2d] border border-white/5 rounded-md px-3 py-1.5 mb-6 inline-flex"
              >
                <div className="w-2 h-2 rounded-full bg-brand-cyan-blue animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan-blue font-orbitron">
                  // {sectionTag}
                </span>
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-orbitron leading-tight mb-6"
            >
              {title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-cool-gray leading-relaxed"
            >
              {description}
            </motion.div>
          </div>

          {/* Right: Interactive Tabs */}
          <div className="xl:col-span-7 flex flex-col md:flex-row gap-6 md:gap-8 min-h-[400px]">
            {/* Tab List */}
            <div className="flex flex-col gap-2 md:w-1/2">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`text-left px-6 py-5 rounded-xl transition-all duration-300 relative group overflow-hidden border ${
                      isActive 
                        ? 'bg-[#131a2a] border-brand-cyan-blue/30 shadow-[0_0_20px_rgba(0,194,255,0.1)]' 
                        : 'bg-transparent border-transparent hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan-blue"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className={`font-orbitron font-bold text-lg transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-cool-gray group-hover:text-white/80'}`}>
                        {item.title}
                      </span>
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-brand-cyan-blue translate-x-0 opacity-100' : 'text-brand-cool-gray -translate-x-4 opacity-0'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            <div className="md:w-1/2 relative bg-[#0d1326] rounded-2xl border border-white/10 p-8 flex flex-col justify-center overflow-hidden min-h-[250px]">
              <div className="absolute top-0 right-0 p-32 bg-brand-cyan-blue/5 blur-[80px] rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan-blue/10 flex items-center justify-center border border-brand-cyan-blue/20 mb-6 text-brand-cyan-blue">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-orbitron mb-4">
                    {items[activeIndex].title}
                  </h4>
                  <p className="text-brand-cool-gray leading-relaxed">
                    {items[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
