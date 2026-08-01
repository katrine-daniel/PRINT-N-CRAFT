import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Printer, ChevronRight, Download, FileText, BookOpen } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">

    <header className={`transition-all duration-200 ${
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
          <div className="hidden sm:flex items-center space-x-2">
            {/* Glowing PDF Brochure Button */}
            <a
              href="./company-profile.pdf"
              download="PrintNCraft-Company-Profile.pdf"
              className="relative p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-brand-magenta border border-rose-200 transition-all flex items-center space-x-1.5 shadow-sm group"
              title="Download PDF Catalog & Company Profile"
            >
              <FileText className="w-4 h-4 text-brand-magenta" />
              <span className="text-xs font-bold text-slate-900 hidden md:inline">PDF Catalog</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-magenta"></span>
              </span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-brand-cyan hover:bg-slate-900 transition-all flex items-center space-x-1 shadow-sm"
            >
              <span>Get Instant Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://wa.me/918826239697?text=Hi%20Print%20N%20Craft,%20I%20want%20to%20inquire%20about%20printing/signage%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200 transition-all flex items-center space-x-1.5"
              title="Chat on WhatsApp +91 8826239697"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
              <span className="text-xs font-bold hidden xl:inline">+91 8826239697</span>
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
              href="tel:+918826239697"
              className="w-full py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call: +91 8826239697</span>
            </a>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}
