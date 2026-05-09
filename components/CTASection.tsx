import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight-navy to-[#050810]" />
      
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-deep-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6">
          Ready to dominate your market?
        </h2>
        <p className="text-xl text-brand-cool-gray mb-10 max-w-2xl mx-auto">
          Stop leaving money on the table. Partner with AXENRA to build a scalable, predictable revenue engine.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="flex items-center justify-center gap-2 bg-brand-cyan-blue text-brand-midnight-navy font-bold rounded-full px-10 h-14 text-lg shadow-lg shadow-brand-cyan-blue/20 hover:scale-105 transition-transform"
          >
            Request Proposal
            <ArrowRight size={20} />
          </button>
          <button 
            className="flex items-center justify-center bg-white/5 text-white font-medium rounded-full px-10 h-14 text-lg hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
