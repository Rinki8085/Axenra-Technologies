'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BottomCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    goal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          goal: ''
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
    <section className="py-24 relative overflow-hidden bg-brand-midnight-navy">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan-blue/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-start pt-8">
          <span className="text-brand-cyan-blue text-xs font-bold tracking-widest uppercase mb-4 block">
            // NEXT STEPS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-6">
            Let's Build Your <br />
            <span className="text-brand-cyan-blue">Growth Engine</span>
          </h2>
          <p className="text-brand-cool-gray text-lg max-w-md mb-8">
            Every scalable growth system starts with one conversation. Tell us where your pipeline stands today, and we'll map out exactly how AXENRA Technologies can turn it into a predictable, compounding revenue channel.
          </p>
          <div className="flex items-center gap-4 bg-[#0a0f1a] border border-white/5 p-4 rounded-xl">
            <div className="w-10 h-10 bg-[#00C2FF] rounded-lg flex items-center justify-center text-[#0A0F1F] font-bold">
              A
            </div>
            <div>
              <p className="text-white font-bold text-sm">Email Us</p>
              <p className="text-brand-cool-gray text-xs">info@axenra.com</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#080c14] border border-white/5 p-8 rounded-2xl shadow-2xl relative"
        >
          <h3 className="text-2xl font-bold text-white font-orbitron mb-2">Book A Free Strategy Session</h3>
          <p className="text-brand-cool-gray text-sm mb-6">We'll review your current setup and find the hidden revenue.</p>
          
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name *" 
                className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50"
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name *" 
                className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50"
              />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Work Email *" 
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50"
            />
            <input 
              type="url" 
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Company Website URL *" 
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50"
            />
            <select 
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="bg-[#111827] border border-white/5 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-brand-cyan-blue/50 appearance-none"
            >
              <option value="">What is your primary goal? *</option>
              <option value="Increase Organic Traffic (SEO)">Increase Organic Traffic (SEO)</option>
              <option value="Improve Paid Ad ROI">Improve Paid Ad ROI</option>
              <option value="Increase Website Conversions">Increase Website Conversions</option>
              <option value="Content Marketing Strategy">Content Marketing Strategy</option>
              <option value="Other">Other</option>
            </select>
            
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
            <p className="text-xs text-brand-cool-gray/50 text-center mt-2">
              By submitting this form you agree to our terms and conditions.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
