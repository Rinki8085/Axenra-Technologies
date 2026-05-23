'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RevenueEngines() {
  return (
    <section className="py-24 bg-[#080d1a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Content */}
        <div className="flex flex-col items-center">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // OUR APPROACH
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-orbitron leading-tight mb-6">
            We Don't Run Campaigns.<br />
            <span className="text-brand-cyan-blue">We Build Revenue Engines.</span>
          </h2>
          <p className="text-brand-cool-gray text-lg leading-relaxed mb-8">
            Most agencies chase clicks. At AXENRA, we engineer systems — connecting SEO, high-intent content, and performance marketing into a single, compounding growth machine. We work exclusively with B2B and SaaS companies that are serious about scalable, measurable growth. No vanity metrics. No bloated retainers. Just a predictable pipeline you can plan around.
          </p>
          <Link href="/contact" className="bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors inline-block">
            Get A Free Growth Audit
          </Link>
        </div>

      </div>
    </section>
  );
}
