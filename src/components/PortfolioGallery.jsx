import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Neon Signages', 'SS Sign Board', 'ACP & Facade', 'Laser & CNC', 'Custom Gifts'];

  const filteredItems = portfolioData.filter(item => 
    activeTab === 'All' || item.category === activeTab
  );

  return (
    <section id="portfolio" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
            Work Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Featured Craftsmanship
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            A glimpse into custom neon installations, 3D channel letters, architectural cladding & corporate merchandise.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-cyan hover:shadow-clean-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-brand-cyan border border-sky-100">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed Project</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Client: <span className="text-slate-800 font-semibold">{item.client}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-200/80">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
