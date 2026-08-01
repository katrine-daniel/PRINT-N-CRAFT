import React from 'react';
import { Calendar, Zap, Users, Check, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            About Print N Craft
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
            Gurugram's Premier Branding & Printing Hub Since 2012
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Delivering high-precision branding solutions, illuminated signages, 3D laser cuts, and custom corporate products with uncompromised quality.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 shadow-md hover:border-brand-cyan transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0 border border-brand-cyan/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">Established in 2012</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Print n Craft has been providing high-quality branding and printing services for over a decade. Located in the heart of Gurugram, we have grown to become a comprehensive one-stop-shop for all printing needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 shadow-md hover:border-brand-magenta transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-magenta/10 text-brand-magenta shrink-0 border border-brand-magenta/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-magenta transition-colors">End-to-End Solutions</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    We specialize in branding, flex print, vinyl print, laser cutting, 3D printing, CNC router carving, ACP cladding, stainless steel signs, LED neon signages, and customized corporate gifts under one roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 shadow-md hover:border-cyan-400 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">Client-Centric Commitment</h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Our team of experienced professionals works closely with clients to understand their exact vision, offering competitive pricing, rapid turnaround times, and precision manufacturing.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Highlights */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-slate-800/90 border border-slate-700/90 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-5">Why Choose Print N Craft?</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'State-of-the-Art Technology', desc: 'CO2 & Fiber lasers, high-precision CNC routers, eco-solvent printers & LED assembly.' },
                  { title: 'Vibrant & Long-Lasting Quality', desc: 'Heavy-duty weather-resistant materials for outdoor longevity under sun & rain.' },
                  { title: 'Tailored Branding Solutions', desc: 'From initial design to site measurement, fabrication, and on-site installation.' },
                  { title: 'Competitive Pricing', desc: 'Transparent wholesale rates with zero hidden charges and flexible bulk discounts.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5 font-bold border border-brand-cyan/30">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="mt-6 pt-6 border-t border-slate-700 flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0" />
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Shop No 101, Village Badshahpur</strong>, near Deewan Palace, Gurugram, Tikli, Haryana 122101
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
