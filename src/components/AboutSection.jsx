import React from 'react';
import { Calendar, Zap, Users, Check, MapPin, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 -mt-10 sm:-mt-16 rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.1)] border-t border-white/90 bg-gradient-to-br from-cyan-50/80 via-yellow-50/40 to-rose-50/60 text-slate-900 py-20 overflow-hidden">
      
      {/* CMYK Pastel Mixed Ambient Glow Blobs (Cyan, Magenta, Yellow) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#EC008C]/12 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF200]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Decorative CMYK Parallax Badges */}
      <div className="absolute top-16 right-16 opacity-30 pointer-events-none animate-bounce hidden lg:block" style={{ animationDuration: '6s' }}>
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/90 shadow-sm border border-slate-200/80 text-xs font-bold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#00AEEF]"></span>
          <span className="w-2 h-2 rounded-full bg-[#EC008C]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FFF200]"></span>
          <span className="ml-1 text-[10px]">CMYK Precision</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-4 py-1.5 rounded-full bg-white/80 border border-cyan-200 shadow-sm inline-flex items-center gap-2">
            <span className="flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]"></span>
              <span className="w-2 h-2 rounded-full bg-[#EC008C]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FFF200]"></span>
            </span>
            <span className="text-slate-800">About Print N Craft</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
            Gurugram's Premier Branding & Printing Hub Since 2012
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed font-normal">
            Delivering high-precision branding solutions, illuminated signages, 3D laser cuts, and custom corporate products with uncompromised quality.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-cyan transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-cyan-50 text-brand-cyan shrink-0 border border-cyan-100 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">Established in 2012</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Print n Craft has been providing high-quality branding and printing services for over a decade. Located in the heart of Gurugram, we have grown to become a comprehensive one-stop-shop for all printing needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-magenta transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-rose-50 text-brand-magenta shrink-0 border border-rose-100 group-hover:bg-brand-magenta group-hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-magenta transition-colors">End-to-End Solutions</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    We specialize in branding, flex print, vinyl print, laser cutting, 3D printing, CNC router carving, ACP cladding, stainless steel signs, LED neon signages, and customized corporate gifts under one roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-900 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-900 shrink-0 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-900 transition-colors">Client-Centric Commitment</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Our team of experienced professionals works closely with clients to understand their exact vision, offering competitive pricing, rapid turnaround times, and precision manufacturing.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Highlights */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-clean-lg relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                <span>Why Choose Print N Craft?</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: 'State-of-the-Art Technology', desc: 'CO2 & Fiber lasers, high-precision CNC routers, eco-solvent printers & LED assembly.' },
                  { title: 'Vibrant & Long-Lasting Quality', desc: 'Heavy-duty weather-resistant materials for outdoor longevity under sun & rain.' },
                  { title: 'Tailored Branding Solutions', desc: 'From initial design to site measurement, fabrication, and on-site installation.' },
                  { title: 'Competitive Pricing', desc: 'Transparent wholesale rates with zero hidden charges and flexible bulk discounts.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <div className="w-5 h-5 rounded-full bg-cyan-50 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5 font-bold border border-cyan-200 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center space-x-3 bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-900">Shop No 101, Village Badshahpur</strong>, near Deewan Palace, Gurugram, Tikli, Haryana 122101
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
