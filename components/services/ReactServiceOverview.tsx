'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ReactServiceOverview() {
  return (
    <section className="py-24 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Code Editor Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00C2FF]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md">
            
            {/* IDE Window */}
            <div className="bg-[#0A0F1F] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#121c2d] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-brand-cool-gray text-xs">App.tsx</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 text-gray-300 leading-relaxed overflow-x-auto">
                <div><span className="text-pink-400">import</span> React, {'{'} useState {'}'} <span className="text-pink-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
                <div><span className="text-pink-400">import</span> {'{'} motion {'}'} <span className="text-pink-400">from</span> <span className="text-emerald-300">'framer-motion'</span>;</div>
                <br />
                <div><span className="text-brand-cyan-blue">const</span> <span className="text-yellow-200">App</span> <span className="text-pink-400">=</span> () <span className="text-pink-400">{'=>'}</span> {'{'}</div>
                <div className="pl-4"><span className="text-brand-cyan-blue">const</span> [active, setActive] <span className="text-pink-400">=</span> <span className="text-blue-300">useState</span>(<span className="text-orange-300">false</span>);</div>
                <br />
                <div className="pl-4"><span className="text-pink-400">return</span> (</div>
                <div className="pl-8 text-gray-400">{'<'}div className<span className="text-pink-400">=</span><span className="text-emerald-300">"app-container"</span>{'>'}</div>
                <div className="pl-12 text-gray-400">{'<'}<span className="text-yellow-200">Header</span> {'/>'}</div>
                <div className="pl-12 text-gray-400">{'<'}<span className="text-yellow-200">MainContent</span> active<span className="text-pink-400">=</span>{'{'}active{'}'} {'/>'}</div>
                <div className="pl-12 text-gray-400">{'<'}<span className="text-yellow-200">Footer</span> {'/>'}</div>
                <div className="pl-8 text-gray-400">{'<'}/div{'>'}</div>
                <div className="pl-4">);</div>
                <div>{'}'}</div>
                <br />
                <div><span className="text-pink-400">export default</span> App;</div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-6 py-3 rounded-lg flex items-center gap-3 shadow-xl"
            >
              <CheckCircle2 className="text-emerald-500" size={20} />
              <span className="text-emerald-400 font-bold text-sm">99+ Lighthouse Score</span>
            </motion.div>

          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            Why Businesses MUST Prioritise <span className="text-brand-cyan-blue">ReactJS Frontend Development</span>
          </h2>
          
          <div className="flex flex-col gap-6 text-brand-cool-gray leading-relaxed mb-10">
            <p>
              In today's competitive digital landscape, the importance of flawless, high-quality ReactJS frontend development simply cannot be overstated. Social feeds are saturated, attention spans are at a record low, and user expectations for fast, beautiful, bug-free interfaces grow more demanding every quarter. Businesses that invest in quality React development connect directly with their target audience, build brand awareness, and establish the kind of technical credibility that drives meaningful growth.
            </p>
            <p>
              At Axenra Technologies, we have spent years delivering ReactJS development services that move business metrics — not just pixel measurements. Are you struggling with slow load times, outdated UI patterns, or inconsistent component behaviour across devices? Our team dives deep into your codebase, brand, and user flows to deliver React solutions tailored precisely to your needs.
            </p>
            <p>
             Whether you are launching a new product, rebuilding a legacy application, or scaling an existing React codebase to enterprise level — without any hesitation and without putting extra effort on your side, contact us directly. We will help businesses navigate the React ecosystem and render top-notch, high-performance frontend development services with a swift turnaround.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Consult with a React Dev <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
