'use client';

import { motion } from 'framer-motion';
import { Target, Users, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0f1a] pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="relative px-6 max-w-5xl mx-auto text-center mb-24 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-brand-cyan-blue" />
          <span className="text-xs font-bold tracking-widest text-brand-cool-gray uppercase">
            // OUR MISSION
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white font-orbitron leading-[1.1] tracking-tight mb-8"
        >
          We don't just market your business.<br className="hidden md:block" />
          <span className="text-brand-cyan-blue">We build the engine that grows it.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-brand-cool-gray max-w-3xl mx-auto leading-relaxed"
        >
          AXENRA Technologies is a performance-driven growth marketing agency on a mission to help B2B and SaaS companies generate consistent, qualified pipeline — through SEO, demand generation, and scalable content-to-revenue systems.
        </motion.p>
      </section>

      {/* Middle Statement Section */}
      <section className="border-y border-white/5 bg-[#060913] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-brand-cyan-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-cyan-blue/20"
          >
            <Target className="text-brand-cyan-blue" size={40} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white leading-relaxed font-orbitron"
          >
            Growth marketing isn't about more content. It's about the <span className="text-brand-cyan-blue">right message</span>, reaching the <span className="text-brand-cyan-blue">right buyer</span>, at the exact moment they're ready to act.
          </motion.h2>
        </div>
      </section>

      {/* Bottom CTA / Let's Build Section */}
      <section className="max-w-5xl mx-auto px-6 mt-24 lg:mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#121c2d] to-[#0d1326] border border-white/10 rounded-2xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="w-16 h-16 bg-[#00C2FF] rounded-2xl flex items-center justify-center mb-8">
            <Rocket className="text-[#0A0F1F]" size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron mb-6">
            Let's build your <span className="text-brand-cyan-blue">growth engine</span>
          </h2>
          
          <p className="text-brand-cool-gray text-lg max-w-2xl leading-relaxed mb-8">
            If your pipeline is unpredictable, your CAC is creeping up, or your marketing efforts aren't compounding — let's talk. We'll map out exactly where your biggest growth opportunities are and show you what a content-to-revenue system looks like for your business.
          </p>

          <p className="text-white font-bold text-xl font-orbitron mb-10">
            Every great growth partnership starts with one honest conversation.
          </p>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded hover:bg-white transition-colors"
          >
            Schedule Your Strategy Call <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
