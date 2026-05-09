'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/public/logo_img.png';
import Link from 'next/link';
import Image from "next/image";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesLinks = [
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "SEO & Growth Marketing", href: "/services/seo-and-growth" },
    { name: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "Email Marketing & Automation", href: "/services/email-marketing" },
    { name: "React JS Development", href: "/services/react-development" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-midnight-navy/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-orbitron font-bold text-2xl tracking-widest text-white">
          <Image src={Logo} alt="Logo" width={160} height={120} />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-brand-soft-white hover:text-brand-cyan-blue transition-colors font-medium text-sm">
            Home
          </Link>
          <Link href="/about" className="text-brand-soft-white hover:text-brand-cyan-blue transition-colors font-medium text-sm">
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-brand-soft-white group-hover:text-brand-cyan-blue transition-colors font-medium text-sm py-2">
              Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-brand-midnight-navy border border-white/10 rounded-xl shadow-xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <div className="py-2 flex flex-col">
                {servicesLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="px-4 py-3 text-sm text-brand-soft-white hover:bg-white/5 hover:text-brand-cyan-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-brand-soft-white hover:text-brand-cyan-blue transition-colors font-medium text-sm">
            Contact
          </Link>
        </div>
        
        {/* CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link 
            href="/contact" 
            className="flex items-center justify-center h-10 bg-brand-cyan-blue text-brand-midnight-navy font-bold rounded-full px-6 shadow-lg shadow-brand-cyan-blue/20 hover:scale-105 transition-transform"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-brand-cyan-blue transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 h-screen bg-brand-midnight-navy/98 backdrop-blur-xl border-t border-white/10 sm:hidden overflow-y-auto pb-24"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">About</Link>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between text-white text-2xl font-bold text-left"
                >
                  Services <ChevronDown size={24} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-4 pl-4 overflow-hidden border-l border-white/10 ml-2"
                    >
                      {servicesLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-brand-cool-gray text-lg hover:text-brand-cyan-blue"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">Contact</Link>
              
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 flex items-center justify-center h-14 bg-brand-cyan-blue text-brand-midnight-navy text-lg font-bold rounded-full px-6 shadow-lg shadow-brand-cyan-blue/20"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
