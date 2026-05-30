import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from "next/image";
import Logo from '@/public/logo_img.png';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] pt-20 pb-8 border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="font-orbitron font-bold text-2xl tracking-widest text-white">
              <Image src={Logo} alt="Logo" width={160} height={120} />
            </Link>
            <p className="text-brand-cool-gray max-w-sm leading-relaxed">
              Performance-driven growth marketing agency helping B2B and SaaS companies generate consistent, qualified leads.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <a href="mailto:hello@axenra.com" className="flex items-center gap-3 text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">
                <Mail size={18} className="text-brand-cyan-blue" />
                info@axenratechnologies.com
              </a>
              {/* <a href="tel:+1234567890" className="flex items-center gap-3 text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">
                <Phone size={18} className="text-brand-cyan-blue" />
                +1 (234) 567-890
              </a> */}
              <div className="flex items-center gap-3 text-brand-cool-gray">
                <MapPin size={18} className="text-brand-cyan-blue" />
                Remote-First Agency
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Services</h4>
            <div className="flex flex-col gap-4">
              <Link href="/services/performance-marketing" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Performance Marketing</Link>
              <Link href="/services/seo-and-growth" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">SEO & Growth Marketing</Link>
              <Link href="/services/conversion-rate-optimization" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Conversion Rate Optimization</Link>
              <Link href="/services/content-marketing" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Content Marketing</Link>
              <Link href="/services/email-marketing" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Email Marketing</Link>
              <Link href="/services/react-development" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">React Development</Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Company</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">About Us</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Our Process</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Case Studies</Link>
              <Link href="/blog" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Blog</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Careers</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Contact</Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Resources</h4>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Growth Framework</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Free SEO Audit</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Marketing ROI Calculator</Link>
              <Link href="/contact" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors">Industry Reports</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-cool-gray">
            &copy; {currentYear} AXENRA Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-brand-cool-gray hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-brand-cool-gray hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://x.com/axenratech" target="_blank" rel="noopener noreferrer" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/axenratechnologies/" target="_blank" rel="noopener noreferrer" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/axenratechnologies" target="_blank" rel="noopener noreferrer" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/axenra-technologies/" target="_blank" rel="noopener noreferrer" className="text-brand-cool-gray hover:text-brand-cyan-blue transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
