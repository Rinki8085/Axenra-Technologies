'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface DetailedServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface DetailedServiceGridProps {
  sectionTag?: string;
  title: React.ReactNode;
  description?: string;
  services: DetailedServiceItem[];
}

export default function DetailedServiceGrid({ 
  sectionTag = "EXPERTISE",
  title, 
  description, 
  services 
}: DetailedServiceGridProps) {
  return (
    <section className="py-24 bg-[#0a0f1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // {sectionTag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            {title}
          </h2>
          {description && (
            <p className='mb-10 text-brand-cool-gray leading-relaxed max-w-2xl mx-auto'>
              {description}
            </p> 
          )}
          <Link 
            href="/contact"
            className="inline-block bg-transparent border border-white/20 text-white font-bold text-sm tracking-wide px-8 py-3 rounded hover:bg-white hover:text-[#0A0F1F] transition-colors"
          >
            VIEW PRICING
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Dynamically get the icon from lucide-react based on the string name
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.CheckCircle;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#121c2d] p-8 rounded-2xl border border-white/5 hover:border-brand-cyan-blue/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center mb-6 text-[#00C2FF]">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-brand-cool-gray text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
