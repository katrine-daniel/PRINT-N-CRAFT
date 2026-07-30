import React from 'react';
import { Eye, Compass, HeartHandshake, Quote } from 'lucide-react';

export default function VisionMissionValues() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Vision, Mission & Core Values
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The foundation driving our culture, craftsmanship, and commitment to excellence.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-cyan transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-cyan flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "To provide high-quality printing and crafting solutions that exceed customer expectations. Our goal is to combine precision printing techniques with innovative crafting processes to deliver unique and personalized products. We aim to be a trusted partner for individuals and businesses seeking custom printing and crafting services, offering creativity, reliability, and excellence in every project."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-cyan font-bold">
              <span>Precision & Excellence</span>
              <span>100% Commitment</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-magenta transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-brand-magenta flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "At Print N Craft, our mission is to empower individuals and businesses to unleash their creativity through cutting-edge printing and crafting solutions. We are dedicated to delivering exceptional products and services that reflect the passion and uniqueness of our customers. Our commitment extends to providing a diverse range of high-quality printing materials and crafting supplies, coupled with expert guidance and personalized assistance."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-magenta font-bold">
              <span>Empowering Brands</span>
              <span>Cutting-Edge Tech</span>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-900 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Core Values</h3>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "At Print N Craft, we believe in the transformative power of creativity. We encourage our team and customers alike to explore the boundless realms of imagination, where every print and craft project becomes a canvas for innovation. These values shape our culture, drive our decisions, and define our commitment to excellence in every venture."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-900 font-bold">
              <span>Creativity & Innovation</span>
              <span>Trusted Culture</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
