'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Megaphone, 
  Target, 
  Mail, 
  BarChart3 
} from 'lucide-react';

const services = [
  { 
    icon: Search, 
    title: "SEO & Organic Growth", 
    desc: "End-to-end SEO strategy — from keyword research and technical audits to topic cluster execution that dominates your niche in search." 
  },
  { 
    icon: FileText, 
    title: "High-Converting Content", 
    desc: "Every asset — blog, landing page, case study, or email sequence — is built to rank, resonate, and convert your ICP into pipeline." 
  },
  { 
    icon: Megaphone, 
    title: "Performance Marketing", 
    desc: "Paid search and social campaigns engineered around your revenue goals — not impressions. We optimize for CAC and qualified pipeline, not clicks." 
  },
  { 
    icon: Target, 
    title: "Demand Generation Strategy", 
    desc: "We map your entire buyer journey — from first touch to closed-won — and build a demand gen strategy that fills your pipeline consistently." 
  },
  { 
    icon: Mail, 
    title: "Email & Nurture Marketing", 
    desc: "Automated sequences that keep warm leads engaged, accelerate the buying decision, and reduce churn for SaaS products." 
  },
  { 
    icon: BarChart3, 
    title: "Growth Analytics & Reporting", 
    desc: "Real dashboards tied to real revenue metrics — so you always know what's working, what to double down on, and where to cut." 
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron">
            Our Growth Marketing <br/>
            <span className="text-brand-cyan-blue">Services</span>
          </h2>
          <p className="text-brand-cool-gray mt-4 max-w-2xl mx-auto">
            Everything you need to build a full-funnel growth engine — under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0b101a] border border-white/5 p-8 rounded-xl hover:border-brand-cyan-blue/30 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/5 group-hover:bg-[#00C2FF]/10 transition-colors rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-brand-cool-gray group-hover:text-[#00C2FF] transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron mb-3">{service.title}</h3>
                <p className="text-brand-cool-gray text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
