import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { rateCardData, rateCardCategories } from '../data/rateCardData';
import { 
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize, 
  Search, ArrowRight, LayoutGrid, TableProperties, Tag, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize
};

export default function ServicesGrid({ onSelectService, onOpenEstimate }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'rates'
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRateCategory, setActiveRateCategory] = useState('all');

  const categories = ['All', 'Signage', 'Printing', 'Cutting', 'Architecture', 'Gifts & Office'];

  // Filter services for Grid View
  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filter rate items for Table View
  const filteredRates = rateCardData.filter(item => {
    const matchesCat = activeRateCategory === 'all' || item.category === activeRateCategory;
    const matchesSearch = item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100">
            Printing, Signages & Rate List
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Services & Transparent Rate Card
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Explore our 12 core manufacturing specializations or browse full transparent rate cards with instant estimation.
          </p>

          {/* View Toggle Tabs */}
          <div className="inline-flex items-center bg-slate-200/80 p-1.5 rounded-2xl mt-6 border border-slate-300 shadow-inner gap-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-cyan text-white shadow-md ring-2 ring-brand-cyan/30'
                  : 'text-slate-600 hover:text-brand-cyan hover:bg-sky-50'
              }`}
            >
              <span>Services Grid</span>
            </button>
            <button
              onClick={() => setViewMode('rates')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'rates'
                  ? 'bg-brand-magenta text-white shadow-md ring-2 ring-brand-magenta/30'
                  : 'text-slate-600 hover:text-brand-magenta hover:bg-rose-50'
              }`}
            >
              <TableProperties className="w-4 h-4" />
              <span>Transparent Product & Service Rates</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Category Tabs based on View Mode */}
          {viewMode === 'grid' ? (
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-cyan text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {rateCardCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveRateCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeRateCategory === cat.id
                      ? 'bg-brand-cyan text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={viewMode === 'grid' ? "Search services or materials..." : "Search products & rate items..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
            />
          </div>

        </div>

        {/* VIEW MODE 1: SERVICES CARDS GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Zap;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-cyan hover:shadow-clean-md transition-all duration-300 flex flex-col justify-between group"
                >
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

                    {/* Material & Feature tags */}
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
        )}

        {/* VIEW MODE 2: TRANSPARENT PRODUCT & SERVICE RATES TABLE */}
        {viewMode === 'rates' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-brand-cyan" />
                <h3 className="text-sm font-bold">Standard Transparent Product Rates ({filteredRates.length} Items)</h3>
              </div>
              <span className="text-[11px] text-slate-400">All rates in INR (₹) GST & Installation extra where specified</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Product / Service Specification</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Unit</th>
                    <th className="py-3 px-4 text-right">Standard Rate</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filteredRates.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{idx + 1}</td>
                      <td className="py-3 px-4 font-bold text-slate-900 flex items-center space-x-2">
                        <span>{item.product}</span>
                        {item.badge && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                            {item.badge}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                          {item.categoryName}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-500 font-medium">{item.unit || item.quantity}</td>
                      <td className="py-3 px-4 text-right font-black text-slate-900">
                        {item.rateText ? item.rateText : `₹${item.rate.toLocaleString('en-IN')}`}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onOpenEstimate(item.product)}
                          className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-brand-cyan text-white text-[11px] font-bold transition-all"
                        >
                          Estimate Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Need custom dimensions, bulk quantities, or site installation?</span>
              </div>
              <button
                onClick={() => onOpenEstimate()}
                className="px-4 py-1.5 rounded-lg bg-brand-cyan hover:bg-slate-900 text-white font-bold text-xs transition-all"
              >
                Use Rate Estimator
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
