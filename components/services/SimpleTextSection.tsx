'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SimpleTextSectionProps {
  title: ReactNode;
  children: ReactNode;
  sectionTag?: string;
}

export default function SimpleTextSection({ title, children, sectionTag }: SimpleTextSectionProps) {
  return (
    <section className="py-24 bg-[#060913] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        {sectionTag && (
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // {sectionTag}
          </span>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            {title}
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-brand-cool-gray">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
