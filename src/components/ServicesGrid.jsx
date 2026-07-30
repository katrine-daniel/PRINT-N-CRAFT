import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize, 
  Search, ArrowRight 
} from 'lucide-react';

const iconMap = {
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize
};

export default function ServicesGrid({ onSelectService, onOpenEstimate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Signage', 'Printing', 'Cutting', 'Architecture', 'Gifts & Office'];

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700 px-3 py-1 rounded-full bg-slate-200/80">
            12 Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Printing & Crafting Services
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Exploration of our end-to-end manufacturing, illuminated signages, 3D laser routing, and custom gifts.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
            />
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Zap;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-cyan hover:shadow-clean-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Material tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.materials.map((mat, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Starting Rate</span>
                    <span className="text-xs font-bold text-slate-900">
                      ₹{service.estimatedRatePerSqFt} <span className="text-[9px] text-slate-500 font-normal">/ sq.ft approx</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-cyan hover:text-white text-xs font-bold text-slate-800 transition-all flex items-center space-x-1"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
