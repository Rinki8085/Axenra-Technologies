'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Demand Generation",
    desc: "We build awareness with the right buyers at the right moment — using SEO, content, and distribution strategies designed to pull high-intent leads into your funnel."
  },
  {
    num: "02",
    title: "Lead Conversion",
    desc: "Traffic that doesn't convert is just noise. We design content journeys and messaging frameworks that move qualified prospects from awareness to booked calls."
  },
  {
    num: "03",
    title: "Scalable Systems",
    desc: "One-off campaigns plateau. We build repeatable, compounding systems — topic clusters, conversion funnels, and performance loops — that grow with your business."
  }
];

export default function GrowthSteps() {
  return (
    <section className="py-24 bg-brand-midnight-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron">
            Growth Marketing That <br/>
            <span className="text-brand-cyan-blue">Attracts, Converts & Scales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0b101a] border border-white/5 p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-6xl font-black text-white/5 font-orbitron pointer-events-none">
                {step.num}
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <span className="text-brand-cyan-blue font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white font-orbitron mb-3 relative z-10">{step.title}</h3>
              <p className="text-brand-cool-gray text-sm leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
