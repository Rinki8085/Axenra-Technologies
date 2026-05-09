'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as LucideIcons from 'lucide-react';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface FeatureHighlightsProps {
  features: FeatureItem[];
}

export default function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <section className="py-24 bg-[#0a0f1a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Dynamically get the icon from lucide-react based on the string name
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#121c2d] p-8 rounded-2xl border border-white/5 hover:border-brand-cyan-blue/30 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-cyan-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-cyan-blue">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-4">{feature.title}</h3>
                <p className="text-brand-cool-gray text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
