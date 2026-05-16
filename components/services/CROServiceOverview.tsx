'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface CROServiceOverviewProps {
  badgeText?: string;
  title?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  buttonText?: string;
  funnelStages?: [string, string, string];
  cvrBox?: {
    metric: string;
    title: string;
    subtitle: string;
  };
}

export default function CROServiceOverview({ badgeText, title, paragraphs, buttonText, funnelStages = ['Visitors', 'Leads', 'Customers'], cvrBox = { metric: '+34%', title: 'Conversion Rate', subtitle: 'Average increase for clients' } }: CROServiceOverviewProps) {
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
            
            <div className="w-full flex flex-col items-center gap-8 mb-8">
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
                <span className="text-white font-bold tracking-wide z-10">{funnelStages[0]}</span>
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
                <span className="text-white font-bold tracking-wide z-10">{funnelStages[1]}</span>
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
                <span className="text-white font-bold tracking-wide z-10">{funnelStages[2]}</span>
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
                {cvrBox.metric}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{cvrBox.title}</p>
                <p className="text-brand-cool-gray text-xs mt-1">{cvrBox.subtitle}</p>
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
                CRO Services Built for Precision, Performance & 
  <span className="text-brand-cyan-blue"> Profitable Growth</span>
              </>
            )}
          </h2> 
          <div className="flex flex-col gap-6 text-brand-cool-gray leading-relaxed mb-10">
            {paragraphs ? (
              paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>
                Discover the methodology behind our clients' breakthrough results. ConvertFlux is a team of dedicated conversion strategists, UX researchers, and data scientists with a proven track record in delivering CRO services that directly lift revenue — not just vanity metrics.
                </p>
                <p>
                  We are obsessed with understanding user behaviour. Our mission: to remove every obstacle between your visitor and your conversion goal — whether that's a form submission, a purchase, a call booked, or a trial started. We combine qualitative research, quantitative analysis, and behavioural psychology to craft optimisations that feel effortless to users.
                </p>
                <p>
                  Our CRO experts are deeply experienced across paid media funnels, e-commerce stores, SaaS trials, and lead generation pages. We follow proven testing frameworks and the latest CRO best practices to ensure your marketing campaigns achieve their full revenue potential. Let us optimise the landscape together.
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
