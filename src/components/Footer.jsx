import React from 'react';
import { Printer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#202B26] text-slate-300 py-16 border-t border-slate-800 overflow-hidden">
      
      {/* Uploaded Footer Background Illustration Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat pointer-events-none opacity-40"
        style={{ backgroundImage: `url('./footer_bg.png')` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#202B26]/90 via-[#202B26]/80 to-[#18211D]/95"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 text-white font-bold border border-slate-700">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-lg font-black tracking-tight text-white">PRINT</span>
                  <span className="text-lg font-black tracking-tight text-brand-cyan">N</span>
                  <span className="text-lg font-black tracking-tight text-brand-magenta">CRAFT</span>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Your Branding, Our Priority</p>
              </div>
            </a>

            <p className="text-xs leading-relaxed text-slate-300 max-w-sm">
              Established in 2012, Print N Craft is Gurugram's full-service branding, 3D LED signage, CNC carving, laser cutting & vinyl printing manufacturer.
            </p>

            <div className="pt-2 text-xs text-slate-300">
              <p><strong className="text-white">Shop No 101, Village Badshahpur</strong>, near Deewan Palace, Gurugram, Tikli, Haryana 122101</p>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-brand-cyan transition-colors text-slate-300">Home</a></li>
              <li><a href="#about" className="hover:text-brand-cyan transition-colors text-slate-300">About Company</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors text-slate-300">All 12 Services</a></li>
              <li><a href="#calculator" className="hover:text-brand-cyan transition-colors text-slate-300">Instant Rate Estimator</a></li>
              <li><a href="#contact" className="hover:text-brand-cyan transition-colors text-slate-300">Contact Us</a></li>
              <li>
                <a 
                  href={`${import.meta.env.BASE_URL}company-profile.pdf`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="PrintNCraft-Company-Profile.pdf" 
                  className="text-rose-400 font-bold hover:text-rose-300 hover:underline inline-flex items-center gap-1 mt-1"
                >
                  📄 Download PDF Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Services List */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">Core Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">LED Sign Board</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">GSB Glow Sign Board</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Flex & Vinyl Printing</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Laser Cutting & CNC Router</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">SS Sign & ACP Cladding</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Neon Signages & Gifts</a></li>
            </ul>
          </div>

          {/* Col 4 Contacts */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-sans">Contact Direct</h4>
            <div className="space-y-3 text-xs">
              <a href="tel:+918826239697" className="block hover:text-brand-cyan transition-colors font-semibold text-white">
                <span className="text-[10px] text-brand-cyan block">Primary Helpline:</span>
                +91 8826239697
              </a>
              <a href="tel:+917703967979" className="block hover:text-brand-cyan transition-colors text-slate-300">
                <span className="text-[10px] text-slate-400 block">Helpline 2:</span>
                +91 7703967979
              </a>
              <a href="tel:+919654737317" className="block hover:text-brand-cyan transition-colors text-slate-300">
                <span className="text-[10px] text-slate-400 block">Helpline 3:</span>
                +91 9654737317
              </a>
              <a href="mailto:printncraft1@gmail.com" className="block hover:text-brand-cyan transition-colors text-slate-300">
                <span className="text-[10px] text-slate-400 block">Email:</span>
                printncraft1@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Print N Craft. All Rights Reserved. Gurugram, India.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Crafted with precision for</span>
            <span className="text-brand-cyan font-bold">Your Branding</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
