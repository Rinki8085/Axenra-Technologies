'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    goal: '',
    challenges: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          website: '',
          goal: '',
          challenges: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#0a0f1a] pt-32 pb-24 overflow-hidden">
      
      {/* Top Section: Intro & Info */}
      <section className="relative px-6 max-w-7xl mx-auto w-full mb-20 lg:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-orbitron leading-[1.1] tracking-tight mb-6"
          >
            Let's Turn Your Ideas <br />
            <span className="text-brand-cyan-blue">Into Growth</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-cool-gray leading-relaxed"
          >
            <p className="mb-4">
              Looking to scale your business, improve your digital presence, or build powerful technology solutions? <span className="text-white font-semibold">You're in the right place.</span>
            </p>
            <p>
              At <span className="text-white font-semibold">Axenra Technologies</span>, we help businesses turn strategies into measurable results — combining marketing expertise with scalable tech solutions.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <div className="bg-[#121c2d] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-brand-cyan-blue/30 transition-colors">
            <h3 className="text-xl font-bold text-white font-orbitron mb-4">Tell Us What You Need</h3>
            <p className="text-brand-cool-gray text-sm leading-relaxed mb-6">
              Whether you have a clear project in mind or just an idea you want to explore, our team is ready to guide you. Fill out the form and get:
            </p>
            <ul className="space-y-3 text-sm text-brand-cool-gray">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-brand-cyan-blue shrink-0 mt-0.5" /> A personalized response within 24 hours</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-brand-cyan-blue shrink-0 mt-0.5" /> Clear next steps tailored to your goals</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-brand-cyan-blue shrink-0 mt-0.5" /> Expert insights on how to move forward</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121c2d] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-brand-cyan-blue/30 transition-colors">
            <h3 className="text-xl font-bold text-white font-orbitron mb-4">What Happens After?</h3>
            <p className="text-brand-cool-gray text-sm leading-relaxed mb-6">
              We keep things simple and transparent. No confusion. No unnecessary delays.
            </p>
            <ul className="space-y-3 text-sm text-brand-cool-gray">
              <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-brand-cyan-blue/10 text-brand-cyan-blue flex items-center justify-center text-xs font-bold shrink-0">1</div> We review your requirements</li>
              <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-brand-cyan-blue/10 text-brand-cyan-blue flex items-center justify-center text-xs font-bold shrink-0">2</div> We analyze the best approach</li>
              <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-brand-cyan-blue/10 text-brand-cyan-blue flex items-center justify-center text-xs font-bold shrink-0">3</div> We get back with a clear plan</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Bottom Section: Form & Direct Contact */}
      <section className="relative px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
        
        {/* Left Side: Contact Details */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-32">
          <div>
            <h2 className="text-3xl font-bold text-white font-orbitron mb-4">Start Your Project Today</h2>
            <p className="text-brand-cool-gray leading-relaxed mb-2">
              The sooner we connect, the sooner you can start seeing results.
            </p>
            <p className="text-brand-cyan-blue font-semibold">
              👉 Fill out the form and let's build something that works.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Prefer to Reach Out Directly?</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-[#121c2d] border border-white/5 p-4 rounded-xl">
                <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center text-[#00C2FF]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Email Us</p>
                  <p className="text-brand-cool-gray text-sm">axenratechnologies</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#121c2d] border border-white/5 p-4 rounded-xl">
                <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center text-[#00C2FF]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Call Us</p>
                  <p className="text-brand-cool-gray text-sm">+1 (XXX) XXX-XXXX</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4 bg-[#121c2d] border border-white/5 p-4 rounded-xl">
                <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center text-[#00C2FF]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Location</p>
                  <p className="text-brand-cool-gray text-sm">Serving clients globally</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Why Businesses Choose Axenra</h3>
            <p className="text-brand-cool-gray text-sm leading-relaxed mb-6">
              We don't just deliver services — we deliver outcomes.
            </p>
            <ul className="space-y-4 text-sm text-brand-cool-gray">
              <li className="flex items-start gap-3"><ArrowRight size={18} className="text-[#00C2FF] shrink-0 mt-0.5" /> Data-driven marketing strategies</li>
              <li className="flex items-start gap-3"><ArrowRight size={18} className="text-[#00C2FF] shrink-0 mt-0.5" /> Scalable technology solutions</li>
              <li className="flex items-start gap-3"><ArrowRight size={18} className="text-[#00C2FF] shrink-0 mt-0.5" /> Focus on real, measurable growth</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-[#080c14] border border-white/5 p-8 lg:p-10 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white font-orbitron mb-2">Book A Free Strategy Session</h3>
          <p className="text-brand-cool-gray text-sm mb-8">We'll review your current setup and map out the next steps.</p>
          
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name *" 
                className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name *" 
                className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
              />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Work Email *" 
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <input 
              type="url" 
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Company Website URL *" 
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <select 
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 appearance-none transition-colors"
            >
              <option value="">What is your primary goal? *</option>
              <option value="Increase Organic Traffic (SEO)">Increase Organic Traffic (SEO)</option>
              <option value="Improve Paid Ad ROI">Improve Paid Ad ROI</option>
              <option value="Increase Website Conversions">Increase Website Conversions</option>
              <option value="Content Marketing Strategy">Content Marketing Strategy</option>
              <option value="Other">Other</option>
            </select>
            <textarea 
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              placeholder="Tell us a little bit about your current challenges..." 
              rows={4}
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 transition-colors resize-none"
            />
            
            {submitStatus === 'success' && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm p-4 rounded-lg">
                Thank you! Your message has been sent successfully. We'll be in touch soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-4 rounded-lg">
                {errorMessage}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-widest uppercase py-4 rounded-lg mt-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : "Let's Build Your Growth Engine →"}
            </button>
            <p className="text-xs text-brand-cool-gray/50 text-center mt-4">
              By submitting this form you agree to our terms and conditions. We hate spam as much as you do.
            </p>
          </form>
        </motion.div>

      </section>
    </main>
  );
}
