import React from 'react';
import { Printer } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center space-x-3 group">
              <img 
                src="./cmyk_logo.jpg" 
                alt="Print N Craft CMYK Logo" 
                className="w-9 h-9 object-contain shrink-0" 
              />
              <div>
                <div className="flex items-baseline space-x-1 font-black text-lg tracking-tight leading-none font-sans">
                  <span className="text-[#0E3A60]">PRINT</span>
                  <span className="text-[#CF8332] ml-0.5">N</span>
                  <span className="text-[#CF8332] ml-0.5">CRAFT</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5">Your branding, our priority</p>
              </div>
            </a>

            <p className="text-xs leading-relaxed text-slate-600 max-w-sm">
              Established in 2012, Print N Craft is Gurugram's full-service branding, 3D LED signage, CNC carving, laser cutting & vinyl printing manufacturer.
            </p>

            <div className="pt-1 text-xs text-slate-600">
              <p><strong className="text-slate-900">Shop No 101, Village Badshahpur</strong>, near Deewan Palace, Gurugram, Tikli, Haryana 122101</p>
            </div>

            {/* Verified Business Profiles & Social Icons */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">Connect & Verified Listings</p>
              <div className="flex flex-wrap items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/printncraft01?igsh=MTlvN2l6OHdnbGRtYg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white border border-rose-200 text-xs font-bold transition-all shadow-xs"
                  title="Follow Print N Craft on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                {/* IndiaMART */}
                <a
                  href="https://www.indiamart.com/print-ncraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-700 hover:text-white border border-teal-200 text-xs font-bold transition-all shadow-xs"
                  title="Verified Seller on IndiaMART"
                >
                  <span className="font-extrabold text-[10px] bg-teal-600 text-white px-1 rounded">iM</span>
                  <span>IndiaMART</span>
                </a>

                {/* Justdial */}
                <a
                  href="https://jsdl.in/DT-23TTL51QVV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white border border-amber-200 text-xs font-bold transition-all shadow-xs"
                  title="Rated Business on Justdial"
                >
                  <span className="font-extrabold text-[10px] bg-amber-500 text-white px-1 rounded">JD</span>
                  <span>Justdial</span>
                </a>
              </div>
            </div>

          </div>

          {/* Col 2 Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-brand-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-cyan transition-colors">About Company</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">All 12 Services</a></li>
              <li><a href="#calculator" className="hover:text-brand-cyan transition-colors">Instant Rate Estimator</a></li>
              <li><a href="#contact" className="hover:text-brand-cyan transition-colors">Contact Us</a></li>
              <li>
                <a 
                  href={`${import.meta.env.BASE_URL}company-profile.pdf`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="PrintNCraft-Company-Profile.pdf" 
                  className="text-rose-600 font-bold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  📄 Download PDF Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Services List */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">Core Services</h4>
            <ul className="space-y-2 text-xs">
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
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">Contact Direct</h4>
            <div className="space-y-3 text-xs">
              <a href="tel:+918826239697" className="block hover:text-brand-cyan transition-colors font-semibold text-slate-900">
                <span className="text-[10px] text-brand-cyan block">Primary Helpline:</span>
                +91 8826239697
              </a>
              <a href="tel:+917703967979" className="block hover:text-brand-cyan transition-colors text-slate-600">
                <span className="text-[10px] text-slate-400 block">Helpline 2:</span>
                +91 7703967979
              </a>
              <a href="tel:+919654737317" className="block hover:text-brand-cyan transition-colors text-slate-600">
                <span className="text-[10px] text-slate-400 block">Helpline 3:</span>
                +91 9654737317
              </a>
              <a href="mailto:printncraft1@gmail.com" className="block hover:text-brand-cyan transition-colors text-slate-600">
                <span className="text-[10px] text-slate-400 block">Email:</span>
                printncraft1@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
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
