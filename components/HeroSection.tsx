'use client';

import { motion } from "framer-motion";
import { ArrowRight, BarChart } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-deep-blue/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cool-gray/30 bg-brand-cool-gray/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan-blue animate-pulse" />
            <span className="text-sm font-medium text-brand-soft-white">Growth-Driven Digital Marketing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-orbitron tracking-tight text-white max-w-4xl mb-6 leading-tight"
          >
            Scale Your Revenue With <br className="hidden md:block" />
            <span className="bg-gradient-to-tr from-brand-deep-blue to-brand-cyan-blue text-transparent bg-clip-text">
              High-Converting
            </span> Marketing
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-cool-gray max-w-2xl mb-10"
          >
            We help B2B and SaaS businesses generate consistent, high-quality leads through SEO, content, and data-driven performance marketing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/contact"
              className="flex items-center justify-center gap-2 bg-brand-soft-white text-brand-midnight-navy font-bold rounded-full px-8 text-md h-14 hover:scale-105 transition-transform"
            >
              Get Free Audit
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact"
              className="flex items-center justify-center gap-2 border border-brand-cool-gray/50 text-white font-medium rounded-full px-8 text-md h-14 hover:bg-brand-cool-gray/10 transition-colors"
            >
              View Case Studies
              <BarChart size={18} className="text-brand-cyan-blue" />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
