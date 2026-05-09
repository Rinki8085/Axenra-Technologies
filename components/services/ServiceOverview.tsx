'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowDown, Users, RotateCcw, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const workflowSteps = [
  { icon: Mail, title: "Welcome Series", desc: "Introduce your brand and values" },
  { icon: Users, title: "Lead Nurturing", desc: "Build trust and educate prospects" },
  { icon: RotateCcw, title: "Re-engagement", desc: "Win back inactive subscribers" },
  { icon: ShoppingBag, title: "Post-Purchase", desc: "Drive loyalty and repeat sales" }
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Visual Representation */}
        <div className="relative">
          <div className="flex flex-col items-center max-w-md mx-auto">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="w-full flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full bg-[#121c2d] border border-white/5 p-4 rounded-xl flex items-center gap-4 shadow-lg z-10"
                  >
                    <div className="w-10 h-10 bg-brand-cyan-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="text-brand-cyan-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{step.title}</h4>
                      <p className="text-brand-cool-gray text-xs">{step.desc}</p>
                    </div>
                  </motion.div>
                  
                  {/* Connection line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="h-8 border-l-2 border-dashed border-white/10 my-1 relative">
                      <div className="absolute -bottom-2 -left-1.5 text-white/20">
                        <ArrowDown size={12} />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            
            {/* Metrics Boxes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full grid grid-cols-3 gap-4 mt-12"
            >
              <div className="bg-[#0a0f1a] border border-white/5 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-brand-cyan-blue font-orbitron">42%</p>
                <p className="text-xs text-brand-cool-gray mt-1">Open Rate</p>
              </div>
              <div className="bg-[#0a0f1a] border border-white/5 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-brand-cyan-blue font-orbitron">12x</p>
                <p className="text-xs text-brand-cool-gray mt-1">Avg. ROI</p>
              </div>
              <div className="bg-[#0a0f1a] border border-white/5 p-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-brand-cyan-blue font-orbitron">50%</p>
                <p className="text-xs text-brand-cool-gray mt-1">Conversion</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4">
            // OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-orbitron leading-tight mb-8">
            Are You Looking for Quality Email Marketing & <span className="text-brand-cyan-blue">Automation Services?</span>
          </h2>
          
          <div className="flex flex-col gap-6 text-brand-cool-gray leading-relaxed mb-10">
            <p>
              As a leading email marketing and automation agency, we are always ready to help businesses navigate the ever-changing landscape of inbox competition. Algorithms shift, subscriber expectations evolve, and what worked last year rarely performs today. Having a team of expert email strategists ensures your campaigns are always optimised and ahead of the curve.
            </p>
            <p>
              Our email marketing services are built for serious, measurable results — not vanity metrics. We design data-driven automation workflows, craft high-converting email copy, and execute precisely segmented campaigns that genuinely resonate with every contact on your list. Whether you need a full email programme from scratch, a comprehensive account audit, or strategic support for existing campaigns, we deliver without friction or unnecessary delay.
            </p>
            <p>
             Whether you are looking for an email copywriter, a marketing automation specialist, or a full-service email agency — we have a versatile team of strategists and technical resources ready to elevate your results. Contact us directly, and we will help your business unlock the full, compounding revenue potential that email marketing consistently delivers.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors"
          >
            Get a free consultation <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
