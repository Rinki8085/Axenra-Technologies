'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Rocket } from 'lucide-react';

const reasons = [
  { icon: CheckCircle2, title: "Built for your ICP, not everyone", desc: "We don't target broad audiences. We study your ideal customer profile deeply and build campaigns that speak their language and solve their exact problem." },
  { icon: Shield, title: "Credibility that closes deals", desc: "Authoritative SEO content makes you the obvious choice before a prospect ever books a call — shortening sales cycles and increasing close rates." },
  { icon: Rocket, title: "More ROI than paid ads alone", desc: "Ads stop the moment you pause spend. Our organic-first growth systems compound month over month — delivering leads long after the initial investment." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-midnight-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // OUR ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron">
            Why B2B Companies <br/>
            <span className="text-brand-cyan-blue">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0b101a] border border-white/5 p-8 rounded-xl flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-[#00C2FF] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-[#0A0F1F]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-3">{reason.title}</h3>
                <p className="text-brand-cool-gray text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
