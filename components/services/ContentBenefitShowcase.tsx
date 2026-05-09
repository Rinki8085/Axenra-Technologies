'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, PenTool, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cards = [
  { icon: PenTool, title: "Expert Content Writers", desc: "Specialists crafting your brand's unique voice." },
  { icon: Lightbulb, title: "Captivating Narratives", desc: "Stories that build trust and drive action." },
  { icon: Target, title: "Targeted Audience Focus", desc: "Speaking directly to your buyers' pain points." },
  { icon: BarChart, title: "High-Converting Content", desc: "Engineered to turn casual readers into loyal advocates." }
];

export default function ContentBenefitShowcase() {
  return (
    <section className="py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Stacked Cards Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan-blue/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#121c2d] border border-white/5 p-5 rounded-2xl flex items-center gap-5 shadow-lg hover:border-brand-cyan-blue/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#00C2FF]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{card.title}</h4>
                    <p className="text-brand-cool-gray text-xs">{card.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            We Provide the Most Captivating, <span className="text-brand-cyan-blue">High-Converting Content Marketing</span>
          </h2>
          
          <p className="text-brand-cool-gray leading-relaxed mb-10">
            Crafting compelling content marketing is an art — and we are here to help your brand succeed at it. Our content doesn't just fill pages. It builds trust, earns attention, and drives decisions at every stage of your buyer's journey.
          </p>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Expert Content Writers at Your Service</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  Our specialist content writers help your brand stand out in a competitive market by highlighting key differentiators, addressing audience pain points, and crafting narratives that build genuine emotional connection — transforming casual readers into engaged, loyal brand advocates who convert.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="text-[#00C2FF]" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Captivating Narratives That Drive Action</h4>
                <p className="text-sm text-brand-cool-gray leading-relaxed">
                  We specialise in creating brand stories that bring your message to life, captivate your target audience at every touchpoint, and leave a lasting, memorable impression — persuading readers to take the next step with your brand with clarity, confidence, and compelling urgency.
                </p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Start growing today <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
