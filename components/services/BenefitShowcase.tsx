'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function BenefitShowcase() {
  return (
    <section className="py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Mockup Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan-blue/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 bg-[#0A0F1F] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00C2FF] rounded-lg flex items-center justify-center">
                  <Zap className="text-[#0A0F1F]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Lead Nurturing Flow</h4>
                  <p className="text-brand-cool-gray text-xs">Active Workflow</p>
                </div>
              </div>
              <div className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
              </div>
            </div>

            <div className="space-y-4">
              {/* Node 1 */}
              <div className="bg-[#121c2d] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Trigger: Subscribed to Newsletter</p>
                  <p className="text-brand-cool-gray text-xs">Wait 0 days</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Play size={14} className="text-brand-cyan-blue" />
                </div>
              </div>
              
              <div className="h-4 border-l-2 border-dashed border-white/10 ml-6" />

              {/* Node 2 */}
              <div className="bg-[#121c2d] border border-[#00C2FF]/30 p-4 rounded-xl flex flex-col gap-3 relative shadow-[0_0_15px_rgba(0,194,255,0.1)]">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#00C2FF] rounded-r-md" />
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm font-semibold">Send: Welcome Email #1</p>
                  <p className="text-brand-cyan-blue text-xs font-bold">58% Open Rate</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-brand-cool-gray border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Delivered: 100%</div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#00C2FF]" /> Clicked: 24%</div>
                </div>
              </div>

              <div className="h-4 border-l-2 border-dashed border-white/10 ml-6" />

              {/* Node 3 */}
              <div className="bg-[#121c2d] border border-white/5 p-4 rounded-xl opacity-70">
                <p className="text-white text-sm font-semibold mb-1">Condition: Did they click?</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Yes</span>
                  <span className="bg-red-500/20 text-red-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase">No</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // OUR PLATFORM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            Simplify Your Email Marketing & <span className="text-brand-cyan-blue">Amplify Your Results</span>
          </h2>
          
          <p className="text-brand-cool-gray leading-relaxed mb-10">
            With our proven email marketing and automation services, you can easily scale your outreach — ensuring every subscriber receives a personalised experience that builds trust and drives action. Our tailored solutions allow businesses to focus on growth while we handle the complexity.
          </p>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Campaign Analysis & Continuous Improvement</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  Our email marketing services include detailed performance analysis reports after every campaign send — covering deliverability health, engagement trends, conversion attribution, and revenue impact — alongside clear strategic recommendations to consistently improve each subsequent send.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Skilled Email Strategists & Copywriters</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  Trust our experienced email marketing specialists to create compelling, highly personalised campaigns that connect complex audience segments with messages tailored precisely to their needs — so your subscribers always feel understood, valued, and motivated to take action with your brand.
                </p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Start automating <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
