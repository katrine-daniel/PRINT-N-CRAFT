import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenEstimate }) {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              <span>Gurugram's Premier Printing & Signage Hub Since 2012</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Transforming Ideas Into <br />
              <span className="text-brand-cyan">Vibrant Brand Reality</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              From <strong className="text-slate-900 font-semibold">3D LED Channel Letters</strong> and <strong className="text-slate-900 font-semibold">Neon Signages</strong> to <strong className="text-slate-900 font-semibold">Laser Cutting, CNC Carving, ACP Facades</strong>, and <strong className="text-slate-900 font-semibold">Custom Corporate Gifts</strong>.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                '100% In-House Production Unit',
                'Fast Turnaround & Delivery',
                'Premium Grade SS 304 & Acrylic',
                'Competitive Wholesale Pricing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenEstimate}
                className="px-6 py-3 rounded-lg font-bold text-xs text-white bg-slate-900 hover:bg-brand-cyan transition-all flex items-center space-x-2 shadow-sm"
              >
                <span>Calculate Project Price</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="px-6 py-3 rounded-lg font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                Explore 12 Services
              </a>
              <a
                href="tel:+917703967979"
                className="p-3 rounded-lg bg-slate-100 border border-slate-200 text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all flex items-center space-x-2 text-xs font-bold"
                title="Call +91 7703967979"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 7703967979</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">12+</p>
                <p className="text-xs text-slate-500 font-medium">Years Excellence (2012)</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-cyan font-sans">5000+</p>
                <p className="text-xs text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-magenta font-sans">13+</p>
                <p className="text-xs text-slate-500 font-medium">Enterprise Clients</p>
              </div>
            </div>

          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-clean-lg bg-slate-100">
              <img
                src="/hero_banner.png"
                alt="Print N Craft Signage Showcase"
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Gurugram Manufacturing Unit</span>
                  <p className="text-xs font-bold text-slate-900">3D LED Signages & Laser Carvings</p>
                </div>
                <button
                  onClick={onOpenEstimate}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-brand-cyan transition-colors"
                >
                  Estimate Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
