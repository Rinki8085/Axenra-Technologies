'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LayoutTemplate, Zap, Search } from 'lucide-react';
import Link from 'next/link';

export default function ReactBenefitShowcase() {
  return (
    <section className="py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Component Tree & Metrics Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center py-10"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-8">
            
            {/* Component Tree */}
            <div className="flex flex-col items-center">
              {/* Root Node */}
              <div className="bg-[#00C2FF] text-[#0A0F1F] font-bold px-8 py-3 rounded-lg shadow-lg shadow-[#00C2FF]/20 relative z-10">
                {'<App />'}
              </div>
              
              {/* Lines container */}
              <div className="flex w-64 justify-between h-8 relative">
                <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-brand-cyan-blue/30 -translate-x-1/2" />
                <div className="absolute top-4 left-0 right-0 border-t-2 border-brand-cyan-blue/30" />
                <div className="absolute top-4 left-0 w-0.5 h-4 bg-brand-cyan-blue/30" />
                <div className="absolute top-4 left-1/2 w-0.5 h-4 bg-brand-cyan-blue/30 -translate-x-1/2" />
                <div className="absolute top-4 right-0 w-0.5 h-4 bg-brand-cyan-blue/30" />
              </div>

              {/* Child Nodes */}
              <div className="flex justify-between w-[320px] relative z-10">
                <div className="bg-[#121c2d] border border-white/10 text-white font-mono text-xs px-4 py-2 rounded">
                  {'<Header />'}
                </div>
                <div className="bg-[#121c2d] border border-white/10 text-white font-mono text-xs px-4 py-2 rounded">
                  {'<Main />'}
                </div>
                <div className="bg-[#121c2d] border border-white/10 text-white font-mono text-xs px-4 py-2 rounded">
                  {'<Footer />'}
                </div>
              </div>
              
              {/* Grandchild lines */}
              <div className="flex w-32 justify-center h-8 relative mt-1">
                <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-brand-cyan-blue/20 -translate-x-1/2" />
                <div className="absolute top-4 left-4 right-4 border-t-2 border-brand-cyan-blue/20" />
                <div className="absolute top-4 left-4 w-0.5 h-4 bg-brand-cyan-blue/20" />
                <div className="absolute top-4 right-4 w-0.5 h-4 bg-brand-cyan-blue/20" />
              </div>
              
              {/* Grandchild Nodes */}
              <div className="flex justify-center gap-4 relative z-10">
                <div className="bg-[#0A0F1F] border border-white/5 text-gray-400 font-mono text-[10px] px-3 py-1.5 rounded">
                  {'<Sidebar />'}
                </div>
                <div className="bg-[#0A0F1F] border border-white/5 text-gray-400 font-mono text-[10px] px-3 py-1.5 rounded">
                  {'<Content />'}
                </div>
              </div>
            </div>

            {/* Core Web Vitals Metrics */}
            <div className="w-full bg-[#121c2d] border border-white/10 p-6 rounded-2xl shadow-xl mt-4">
              <h4 className="text-white font-bold text-sm mb-4 text-center">Core Web Vitals</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#0A0F1F] p-3 rounded-lg border border-emerald-500/20">
                  <div className="text-emerald-400 font-black text-xl mb-1">0.8s</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider">FCP</div>
                </div>
                <div className="bg-[#0A0F1F] p-3 rounded-lg border border-emerald-500/20">
                  <div className="text-emerald-400 font-black text-xl mb-1">1.2s</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider">LCP</div>
                </div>
                <div className="bg-[#0A0F1F] p-3 rounded-lg border border-emerald-500/20">
                  <div className="text-emerald-400 font-black text-xl mb-1">0.01</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider">CLS</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            Why We Are a Leading Force in <span className="text-brand-cyan-blue">ReactJS Frontend Development</span>
          </h2>
          
          <p className="text-brand-cool-gray leading-relaxed mb-10">
            In the fast-paced world of digital engineering, Axenra Technologies has established itself as a powerhouse in results-driven React frontend development. Our agency is renowned for finding practical solutions to even the most complex UI challenges — delivering results that not only improve conversion rates but also strengthen team workflows. Part of what makes Axenra Technologies unique in the React space is our ability to share expertise in impactful, compounding ways.
          </p>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <LayoutTemplate className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Strategic Content Planning & Brand Storytelling Through UI</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  We do not just write code — we craft React strategies that are tied to deep research, audience behaviour analysis, and competitive intelligence to create interfaces that position your brand as the obvious choice for every visitor. Our experienced content creators ensure every message aligns with the brand's voice and vision, and always resonates on each platform. This approach translates into interfaces that engage audiences on every page and drive compounding brand trust across your entire digital presence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Zap className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Performance-Driven Creative Engineering & Optimisation</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                 Setting our approach based on what drives the highest frontend performance, our React engineers create component libraries and advanced routing architectures combined with targeted keyword and data-sourced requirements. We use React patterns that outperform the competition in SEO and measurable results — enabling your audience, growing their confidence, and generating tangible returns from every post — making sure companies grow their customers and achieve tangible returns from every optimised React frontend investment.
                </p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Start Your React Project <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
