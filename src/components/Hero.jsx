import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenEstimate }) {
  return (
    <section id="hero" className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-white border-b border-slate-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">

          {/* Left Text & Details Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 backdrop-blur-sm border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span>Gurugram's Premier Printing & Signage Hub <span className="text-[10px] text-slate-500 font-normal ml-0.5">Since 2012</span></span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-2xl">
              Transforming Ideas Into <br />
              <span className="text-brand-cyan">Vibrant Brand Reality</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed">
              From <span className="text-slate-900 font-semibold">3D LED Channel Letters</span> and <span className="text-slate-900 font-semibold">Neon Signages</span> to <span className="text-slate-900 font-semibold">Laser Cutting, CNC Carving, ACP Facades</span>, and <span className="text-slate-900 font-semibold">Custom Corporate Gifts</span>.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl">
              {[
                '100% In-House Production Unit',
                'Fast Turnaround & Delivery',
                'Premium Grade SS 304 & Acrylic',
                'Competitive Wholesale Pricing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-800 bg-white p-2 rounded-lg border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenEstimate}
                className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-brand-cyan transition-all flex items-center space-x-2 shadow-md hover:-translate-y-0.5"
              >
                <span>Calculate Project Price</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-5 py-3.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all hover:-translate-y-0.5"
              >
                Explore Services
              </a>
              <a
                href="tel:+918826239697"
                className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all flex items-center space-x-2 text-xs font-bold shadow-sm hover:-translate-y-0.5"
                title="Call +91 8826239697"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 8826239697</span>
              </a>
            </div>

          </div>

          {/* Right Side Pure White Background Artisan Illustration - Merges 100% Seamlessly */}
          <div className="lg:col-span-5 hidden lg:block relative z-10">
            <img
              src="./clean_artisan_hero.jpg"
              alt="Print N Craft Artisan Workshop"
              className="w-full h-auto object-contain max-h-[480px] ml-auto drop-shadow-xs"
            />
          </div>

        </div>

        {/* Metrics Row - Placed after text below */}
        <div className="pt-8 mt-8 border-t border-slate-100 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl relative z-10">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">12+</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Years Excellence (2012)</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-brand-cyan font-sans">50000+</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Projects Delivered</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-brand-magenta font-sans">50+</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Enterprise Clients</p>
          </div>
        </div>

      </div>
    </section>
  );
}
