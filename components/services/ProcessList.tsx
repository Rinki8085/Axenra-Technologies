'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessListProps {
  title: ReactNode;
  steps: ProcessStep[];
  sectionTag?: string;
}

export default function ProcessList({ title, steps, sectionTag }: ProcessListProps) {
  return (
    <section className="py-24 bg-[#0a0f1a] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {sectionTag && (
            <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
              // {sectionTag}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            {title}
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#121c2d] text-brand-cyan-blue font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {index + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#121c2d] p-6 rounded-2xl border border-white/5 hover:border-brand-cyan-blue/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-brand-cool-gray text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
