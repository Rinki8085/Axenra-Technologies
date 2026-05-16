'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, TrendingDown, Clock, MousePointerClick, FileText } from 'lucide-react';
import Link from 'next/link';

interface CROBenefitShowcaseProps {
  buttonText?: string;
  data: {
    h1: string;
    para: string;
    sub: {
      h2: string;
      para1: string;
    }[];
  };
  statsBox?: {
    title: string;
    stats: { label: string; value: string }[];
    totalLabel: string;
    totalValue: string;
  };
}

const defaultStatsBox = {
  title: "Campaign Performance",
  stats: [
    { label: "Bounce Rate", value: "-25%" },
    { label: "Avg Session", value: "+1m 45s" },
    { label: "Conversion", value: "+3.2%" },
    { label: "Form Fills", value: "+12%" },
  ],
  totalLabel: "Total ROI",
  totalValue: "+42%",
};

export default function CROBenefitShowcase({ buttonText, data, statsBox = defaultStatsBox }: CROBenefitShowcaseProps) {
  return (
    <section className="py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Campaign Performance Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
            <h4 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
              <TrendingUp className="text-[#00C2FF]" size={20} />
              {statsBox.title}
            </h4>

            <div className="space-y-5">
              
              {statsBox.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                    <TrendingDown size={16} className={idx % 2 === 0 ? "text-gray-400" : "text-brand-cyan-blue"} />
                    {stat.label}
                  </div>
                  <div className="text-emerald-500 font-bold bg-emerald-50 px-2 py-1 rounded text-sm">
                    {stat.value}
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-6 pt-4 border-t-2 border-gray-100 flex items-center justify-between">
              <span className="text-gray-900 font-bold">{statsBox.totalLabel}</span>
              <span className="text-brand-cyan-blue font-black text-xl">{statsBox.totalValue}</span>
            </div>

          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            {data.h1}
          </h2>
          
          <p className="text-brand-cool-gray leading-relaxed mb-10">
            {data.para}
          </p>

          <div className="flex flex-col gap-8 mb-10">
           {data.sub.map((item, index) => (
             <div key={index} className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">{item.h2}</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  {item.para1}
                </p>
              </div>
            </div>
           ))} 
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            {buttonText || "Start your CRO audit"} <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
