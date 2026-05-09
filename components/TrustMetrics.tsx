'use client';

import { motion } from "framer-motion";

const metrics = [
  { value: "$50M+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "10x", label: "Average ROI" },
  { value: "150+", label: "Successful Campaigns" }
];

export default function TrustMetrics() {
  return (
    <section className="py-20 border-y border-white/10 bg-brand-midnight-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-white font-orbitron">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-medium text-brand-cyan-blue uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
