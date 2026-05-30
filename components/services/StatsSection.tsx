'use client';

import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121c2d] p-6 rounded-2xl border border-white/5 text-center hover:border-brand-cyan-blue/30 transition-colors flex flex-col justify-center min-h-[120px]"
            >
              <div className="text-3xl md:text-4xl font-black text-brand-cyan-blue mb-2 font-orbitron">{stat.value}</div>
              <div className="text-sm font-medium text-brand-cool-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
