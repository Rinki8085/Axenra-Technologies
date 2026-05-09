'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface CROServiceOverviewProps {
  badgeText?: string;
  title?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  buttonText?: string;
}

export default function CROServiceOverview({ badgeText, title, paragraphs, buttonText }: CROServiceOverviewProps) {
  return (
    <section className="py-24 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Funnel Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00C2FF]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
            
            <div className="w-full flex flex-col items-center gap-2 mb-8">
              <span className="text-brand-cool-gray text-xs uppercase tracking-widest font-bold">The Funnel</span>
              
              {/* Funnel Stage 1 */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="h-14 bg-[#121c2d] border border-white/10 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="text-white font-bold tracking-wide z-10">Visitors</span>
              </motion.div>

              {/* Funnel Stage 2 */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '75%', opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-14 bg-brand-cyan-blue/20 border border-brand-cyan-blue/30 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="text-white font-bold tracking-wide z-10">Leads</span>
              </motion.div>

              {/* Funnel Stage 3 */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '50%', opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="text-white font-bold tracking-wide z-10">Customers</span>
              </motion.div>
            </div>

            {/* CVR Box */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#0A0F1F] border border-white/10 p-6 rounded-xl flex items-center gap-6 shadow-2xl w-full"
            >
              <div className="text-4xl font-black text-brand-cyan-blue font-orbitron">
                +34%
              </div>
              <div>
                <p className="text-white font-bold text-sm">Conversion Rate</p>
                <p className="text-brand-cool-gray text-xs mt-1">Average increase for clients</p>
              </div>
              <div className="ml-auto w-10 h-10 bg-brand-cyan-blue/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-brand-cyan-blue" size={20} />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // {badgeText || "OUR APPROACH"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            {title || (
              <>
                Looking for performance marketing that actually  <span className="text-brand-cyan-blue">drives pipeline?</span>
              </>
            )}
          </h2>
          <p>Most agencies optimize for clicks. We optimize for closed deals.</p>
          <div className="flex flex-col gap-6 text-brand-cool-gray leading-relaxed mb-10">
            {paragraphs ? (
              paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>
                 At ContentFlux, performance marketing isn't just about running paid ads — it's about building a full-funnel acquisition system. We combine paid search, paid social, conversion-optimized landing pages, and data-driven audience targeting into one integrated strategy that consistently fills your sales pipeline.
                </p>
                <p>
                  Our team maps your entire buyer journey — from the first ad impression to the booked sales call — and engineers every touchpoint to move your ICP closer to a decision. We obsess over conversion rates, funnel drop-offs, and revenue attribution so you can invest with confidence.
                </p>
                <p>
                  Whether you're scaling a SaaS product, generating leads for a high-ticket B2B service, or breaking into a new market — we build the performance engine that gets you there predictably.
                </p>
              </>
            )}
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            {buttonText || "Let's Increase Conversions"} <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
