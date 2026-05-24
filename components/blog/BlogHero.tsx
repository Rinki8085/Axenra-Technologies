"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-125 bg-brand-deep-blue/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-midnight-navy border border-brand-cyan-blue/30 text-brand-cyan-blue text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-blue"></span>
          </span>
          Axenra Insights
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-brand-soft-white mb-6 tracking-tight font-orbitron"
        >
          Insights on <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan-blue to-brand-deep-blue">B2B Marketing</span> & <br className="hidden md:block" />
          Modern Web Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-cool-gray mb-10 max-w-3xl mx-auto"
        >
          Expert strategies, technical deep dives, and actionable advice to help you scale your SaaS product, optimize your SEO, and build high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#featured"
            className="w-full sm:w-auto px-8 py-4 bg-brand-cyan-blue text-brand-midnight-navy font-bold rounded-lg hover:bg-brand-soft-white transition-colors duration-300 flex items-center justify-center group"
          >
            Explore Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-soft-white/20 text-brand-soft-white font-bold rounded-lg hover:bg-brand-soft-white/10 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
