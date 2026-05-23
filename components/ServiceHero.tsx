'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

interface ServiceHeroProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  formTitle: string;
}

export default function ServiceHero({ badgeText, title, description, formTitle }: ServiceHeroProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          website: formData.website || 'N/A',
          goal: 'N/A',
          message: formData.description || 'No message provided',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        description: ''
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative bg-[#0a0f1a] overflow-hidden min-h-screen flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#060913] to-transparent z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-full bg-[#0d1326] z-0 skew-x-[-10deg] translate-x-[200px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start pr-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-[#121c2d] border border-white/5 rounded-md px-3 py-1.5 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-brand-cyan-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan-blue font-orbitron">
              // {badgeText}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-orbitron leading-[1.1] tracking-tight mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-cool-gray leading-relaxed max-w-xl mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="bg-[#4EE6FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors flex items-center justify-center">
              TALK TO A STRATEGIST
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/10 text-white font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white/5 transition-colors flex items-center justify-center">
              SCHEDULE A FREE AUDIT
            </Link>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0b101c] p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl"
        >
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan-blue font-orbitron mb-2 block">
              // GET STARTED
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron">
              {formTitle}
            </h3>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name *"
              className="bg-[#131a2a] border border-white/5 rounded p-4 text-white placeholder:text-brand-cool-gray/50 focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email *"
              className="bg-[#131a2a] border border-white/5 rounded p-4 text-white placeholder:text-brand-cool-gray/50 focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="bg-[#131a2a] border border-white/5 rounded p-4 text-white placeholder:text-brand-cool-gray/50 focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Current Website / App URL (if any)"
              className="bg-[#131a2a] border border-white/5 rounded p-4 text-white placeholder:text-brand-cool-gray/50 focus:outline-none focus:border-brand-cyan-blue/50 transition-colors"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project — website, web app, or mobile app..."
              rows={4}
              className="bg-[#131a2a] border border-white/5 rounded p-4 text-white placeholder:text-brand-cool-gray/50 focus:outline-none focus:border-brand-cyan-blue/50 transition-colors resize-none"
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
              className="bg-[#00C2FF] text-[#0A0F1F] font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? 'SENDING...' : 'REQUEST FREE PROPOSAL'}
            </button>

            <p className="text-center text-brand-cool-gray/50 text-xs mt-2 flex items-center justify-center gap-1">
              We Hate Spam As Much As You Do 🔒
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
