'use client';

import { Search, Mail, LineChart, Code, Target, FileText } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO & Growth",
    description: "Dominate search rankings and capture high-intent traffic with technical, on-page, and off-page SEO.",
    icon: Search,
    color: "text-brand-deep-blue",
    bgColor: "bg-brand-deep-blue/10"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Google, LinkedIn, and Meta that maximize your ROAS.",
    icon: Target,
    color: "text-brand-cyan-blue",
    bgColor: "bg-brand-cyan-blue/10"
  },
  {
    title: "CRO Services",
    description: "Convert more visitors into paying customers with advanced A/B testing and user experience optimization.",
    icon: LineChart,
    color: "text-brand-accent-blue",
    bgColor: "bg-brand-accent-blue/10"
  },
  {
    title: "Content Marketing",
    description: "Authoritative, engaging content that builds trust and guides prospects through the funnel.",
    icon: FileText,
    color: "text-brand-deep-blue",
    bgColor: "bg-brand-deep-blue/10"
  },
  {
    title: "Email Automation",
    description: "Nurture leads and retain customers with highly personalized, automated email sequences.",
    icon: Mail,
    color: "text-brand-cyan-blue",
    bgColor: "bg-brand-cyan-blue/10"
  },
  {
    title: "React JS Development",
    description: "Lightning-fast, scalable frontend architectures that provide exceptional user experiences.",
    icon: Code,
    color: "text-brand-accent-blue",
    bgColor: "bg-brand-accent-blue/10"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#080d1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Services Built For <span className="text-brand-cyan-blue">Scale</span>
          </h2>
          <p className="text-brand-cool-gray max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to drive revenue, increase conversions, and build lasting authority in your industry.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item}>
                <div 
                  className="flex flex-col bg-brand-midnight-navy border border-white/5 hover:border-brand-cyan-blue/30 shadow-sm transition-colors h-full rounded-xl overflow-hidden"
                >
                  <div className="flex gap-3 px-6 pt-6 pb-2">
                    <div className={`p-3 rounded-lg ${service.bgColor}`}>
                      <Icon className={service.color} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white font-orbitron">{service.title}</h3>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-brand-cool-gray">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
