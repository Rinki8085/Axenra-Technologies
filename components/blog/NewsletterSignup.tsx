"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-deep-blue/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-brand-midnight-navy/80 backdrop-blur-lg border border-brand-cyan-blue/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan-blue/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-deep-blue/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-deep-blue/20 text-brand-cyan-blue mb-6 border border-brand-cyan-blue/30">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4 font-orbitron">
            Get Insights Delivered Weekly
          </h2>
          <p className="text-brand-cool-gray max-w-2xl mx-auto mb-8 text-lg">
            Join 10,000+ founders and engineers receiving our best strategies on SaaS growth, modern web development, and AI automation.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-20">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl"
              >
                Thanks for subscribing! Check your inbox soon.
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full px-5 py-4 bg-brand-midnight-navy border border-brand-soft-white/20 rounded-xl focus:outline-none focus:border-brand-cyan-blue text-brand-soft-white placeholder:text-brand-cool-gray/50 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-4 bg-brand-cyan-blue text-brand-midnight-navy font-bold rounded-xl hover:bg-brand-soft-white transition-all duration-300 flex items-center justify-center disabled:opacity-70 group whitespace-nowrap shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:shadow-[0_0_30px_rgba(0,194,255,0.5)]"
                >
                  {status === "loading" ? (
                    <span className="w-5 h-5 border-2 border-brand-midnight-navy border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}
            <p className="text-brand-cool-gray/60 text-xs mt-4">
              We respect your inbox. No spam, unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
