'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ContentServiceOverview() {
  return (
    <section className="py-24 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Stats Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00C2FF]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 bg-[#0A0F1F] border border-white/10 rounded-2xl shadow-2xl p-8">
            <h4 className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-8 text-center">
              Average Results After 12 Months
            </h4>

            <div className="space-y-6 mb-8">
              {/* Stat 1 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-semibold">Total Traffic</span>
                  <span className="text-emerald-400 font-bold">+45% Increase</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '45%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-400 rounded-full"
                  />
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-semibold">Qualified Leads</span>
                  <span className="text-emerald-400 font-bold">+2x Increase</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-[#00C2FF] rounded-full"
                  />
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-semibold">Bounce Rate</span>
                  <span className="text-emerald-400 font-bold">-15% Decrease</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '15%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-400 rounded-full"
                  />
                </div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-semibold">Time on Page</span>
                  <span className="text-emerald-400 font-bold">+60% Increase</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* ROI Box */}
            <div className="bg-[#121c2d] border border-[#00C2FF]/30 p-6 rounded-xl flex items-center gap-6 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
              <div className="text-4xl font-black text-white font-orbitron">
                6.2x
              </div>
              <div>
                <p className="text-white font-bold text-sm">Return On Investment</p>
                <p className="text-brand-cool-gray text-xs mt-1">Average ROI for our B2B clients</p>
              </div>
              <div className="ml-auto w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-[#00C2FF]" size={20} />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            Looking For a Reliable <span className="text-brand-cyan-blue">Content Marketing Agency?</span>
          </h2>
          
          <div className="flex flex-col gap-6 text-brand-cool-gray leading-relaxed mb-10">
            <p>
              We have been delivering content marketing strategies for years and earned outstanding results across industries. This plays a significant role in scaling businesses of every size. Are you struggling with crafting content that truly resonates? It's quite challenging to consistently capture audience attention, articulate your brand value, and optimise across multiple channels simultaneously when you're running a business.
            </p>
            <p>
              Whatever the challenge — we simplify the process. Our team dives deep into thorough research on your products, brand voice, and target audience. We craft insight-led, conversion-driven content strategies tailored precisely to your unique requirements — whether you're launching new products, refreshing existing campaigns, or building thought leadership across digital platforms.
            </p>
            <p>
              Our experienced content marketers have placed content on major industry publications, top-tier media outlets, and high-authority blogs. We specialise in long-form content for every goal, with a swift turnaround. We have every angle covered — from awareness to advocacy.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Let's Build Your Content Engine <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
