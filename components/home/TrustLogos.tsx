'use client';

export default function TrustLogos() {
  const logos = ["TechCorp", "ScaleUp", "GrowthAI", "DataFlow", "CloudWorks"];

  return (
    <section className="py-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-brand-cool-gray text-sm mb-6">
          Trusted by forward-thinking companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl font-bold font-orbitron text-white tracking-widest">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
