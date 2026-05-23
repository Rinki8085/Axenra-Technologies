'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="pt-40 pb-20 relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan-blue/20 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-4xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-brand-cyan-blue" />
          <span className="text-xs font-medium tracking-widest text-brand-cool-gray uppercase">
            Growth Marketing Agency
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white font-orbitron leading-[1.1] tracking-tight mb-8"
        >
          Stop Buying Traffic. <br className="hidden md:block" />
          <span className="text-brand-cyan-blue">Start Building a Pipeline</span><br className="hidden md:block" /> That Pays.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-brand-cool-gray max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Axenra Technologies is a performance-driven growth marketing agency that helps B2B and SaaS companies generate consistent, qualified leads through SEO, demand generation, and scalable content-to-revenue systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors flex items-center justify-center">
            Schedule a Strategy Call &rarr;
          </Link>
          <Link href="/contact" className="w-full sm:w-auto bg-transparent border border-white/10 text-white font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white/5 transition-colors flex items-center justify-center">
            See Our Growth Framework &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
