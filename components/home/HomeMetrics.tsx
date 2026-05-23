'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const metrics = [
  { value: "150%", label: "Increase In Leads" },
  { value: "5x", label: "Average ROI" },
  { value: "40%", label: "Increase In Traffic" },
  { value: "6mo", label: "Avg Payback Period" }
];

export default function HomeMetrics() {
  return (
    <section className="py-20 bg-[#060913] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-6 leading-tight">
            We focus on building interest, generating demand, and <span className="text-brand-cyan-blue">turning traffic into revenue — with the best strategy and the clearest message.</span>
          </h2>
          <p className="text-brand-cool-gray text-sm md:text-base">
            We market for real people, to real people — with strategy that drives real decisions.
Executed by a team that thinks like founders and measures like CFOs.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/contact" className="bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-6 py-3 rounded hover:bg-white transition-colors">
              Get Free Audit
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/10 text-white font-bold text-sm tracking-wide px-6 py-3 rounded hover:bg-white/5 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center mt-16 pt-16 border-t border-white/5">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-cyan-blue font-orbitron">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-brand-cool-gray uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
