import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Printer, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services & Rates', href: '#services' },
    { name: 'Rate Estimator', href: '#calculator' },
    { name: 'Clients', href: '#clients' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' : 'bg-white/70 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Minimal Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-white font-black group-hover:bg-brand-cyan transition-colors">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-black tracking-tight text-slate-900">PRINT</span>
                <span className="text-xl font-black tracking-tight text-brand-cyan">N</span>
                <span className="text-xl font-black tracking-tight text-brand-magenta">CRAFT</span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Your Branding, Our Priority</p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenEstimate}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-cyan hover:bg-slate-900 transition-all flex items-center space-x-1 shadow-sm"
            >
              <span>Get Instant Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+917703967979"
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-brand-cyan border border-slate-200 transition-all flex items-center space-x-1"
              title="Call Sales Team"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-bold hidden xl:inline">+91 7703967979</span>
            </a>
            <a
              href="https://wa.me/917703967979?text=Hi%20Print%20N%20Craft,%20I%20want%20to%20inquire%20about%20printing/signage%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-md">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-cyan bg-slate-50 rounded-lg border border-slate-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-brand-cyan text-center shadow-sm"
            >
              Calculate Quote Now
            </button>
            <a
              href="tel:+917703967979"
              className="w-full py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call: +91 7703967979</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
