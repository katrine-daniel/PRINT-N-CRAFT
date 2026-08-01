import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { clientsData } from '../data/clientsData';
import { 
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize, 
  Search, ArrowRight, Building2, ShieldCheck, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Zap, Sun, Printer, Layers, Scissors, Cpu, 
  Shield, Building, Bookmark, Gift, Sparkles, Maximize
};

// Category-based thematic color config for Services
const categoryColors = {
  'Signage': {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    hoverBorder: 'hover:border-sky-400',
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-600',
    iconHoverBg: 'group-hover:bg-sky-500',
    labelText: 'text-sky-600',
    labelBg: 'bg-sky-50',
    titleHover: 'group-hover:text-sky-600',
    tagBg: 'bg-sky-100/70',
    tagText: 'text-sky-700',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    badgeBorder: 'border-sky-200',
    footerBtn: 'hover:bg-sky-500',
  },
  'Printing': {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-600',
    iconHoverBg: 'group-hover:bg-amber-500',
    labelText: 'text-amber-600',
    labelBg: 'bg-amber-50',
    titleHover: 'group-hover:text-amber-600',
    tagBg: 'bg-amber-100/70',
    tagText: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    footerBtn: 'hover:bg-amber-500',
  },
  'Cutting': {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    iconHoverBg: 'group-hover:bg-emerald-500',
    labelText: 'text-emerald-600',
    labelBg: 'bg-emerald-50',
    titleHover: 'group-hover:text-emerald-600',
    tagBg: 'bg-emerald-100/70',
    tagText: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    footerBtn: 'hover:bg-emerald-500',
  },
  'Architecture': {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    hoverBorder: 'hover:border-violet-400',
    iconBg: 'bg-violet-100',
    iconText: 'text-violet-600',
    iconHoverBg: 'group-hover:bg-violet-500',
    labelText: 'text-violet-600',
    labelBg: 'bg-violet-50',
    titleHover: 'group-hover:text-violet-600',
    tagBg: 'bg-violet-100/70',
    tagText: 'text-violet-700',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-800',
    badgeBorder: 'border-violet-200',
    footerBtn: 'hover:bg-violet-500',
  },
  'Gifts & Office': {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    hoverBorder: 'hover:border-rose-400',
    iconBg: 'bg-rose-100',
    iconText: 'text-rose-600',
    iconHoverBg: 'group-hover:bg-rose-500',
    labelText: 'text-rose-600',
    labelBg: 'bg-rose-50',
    titleHover: 'group-hover:text-rose-600',
    tagBg: 'bg-rose-100/70',
    tagText: 'text-rose-700',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    badgeBorder: 'border-rose-200',
    footerBtn: 'hover:bg-rose-500',
  },
};

const defaultColors = categoryColors['Signage'];

export default function ServicesGrid({ onSelectService, onOpenEstimate }) {
  const [mainTab, setMainTab] = useState('services'); // 'services' | 'clients'
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

  const filteredClients = clientsData.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100">
            12 Specializations & Key Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Printing & Crafting Services
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            End-to-end manufacturing — illuminated signages, 3D laser routing, ACP facades, and custom gifts.
          </p>

          {/* Main 2 Toggle Options: Services & Key Clients */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6">
            <button
              onClick={() => {
                setMainTab('services');
                setSearchQuery('');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                mainTab === 'services'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Services ({servicesData.length})</span>
            </button>
            
            <button
              onClick={() => {
                setMainTab('clients');
                setSearchQuery('');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                mainTab === 'clients'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Key Clients ({clientsData.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: SERVICES VIEW */}
        {mainTab === 'services' && (
          <>
            {/* Filter Bar & Search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {categories.map((cat) => {
                  const c = categoryColors[cat] || null;
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        cat === 'All'
                          ? isActive
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'text-slate-600 border-transparent hover:bg-slate-100'
                          : isActive
                            ? `${c.bg} ${c.labelText} ${c.border} shadow-sm`
                            : `text-slate-600 border-transparent hover:${c.bg} hover:${c.labelText}`
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
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
                const c = categoryColors[service.category] || defaultColors;

                return (
                  <div
                    key={service.id}
                    className={`${c.bg} rounded-2xl p-6 border ${c.border} ${c.hoverBorder} hover:shadow-clean-md transition-all duration-300 flex flex-col justify-between group`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-xl ${c.iconBg} border ${c.border} flex items-center justify-center ${c.iconText} ${c.iconHoverBg} group-hover:text-white transition-all`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badgeBg} ${c.badgeText} border ${c.badgeBorder}`}>
                          {service.badge}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold uppercase tracking-widest ${c.labelText}`}>
                        {service.category}
                      </span>
                      <h3 className={`text-lg font-bold text-slate-900 mt-0.5 ${c.titleHover} transition-colors`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Material tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {service.materials.map((mat, i) => (
                          <span key={i} className={`text-[10px] px-2 py-0.5 rounded-md ${c.tagBg} ${c.tagText} font-medium`}>
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-6 pt-4 border-t border-white/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 font-medium block">Starting Rate</span>
                        <span className={`text-xs font-bold ${c.labelText}`}>
                          ₹{service.estimatedRatePerSqFt} <span className="text-[9px] text-slate-500 font-normal">/ sq.ft approx</span>
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectService(service)}
                        className={`px-3 py-1.5 rounded-lg bg-white/80 ${c.footerBtn} hover:text-white ${c.labelText} text-xs font-bold border ${c.border} transition-all flex items-center space-x-1`}
                      >
                        <span>Full Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Tab 2: KEY CLIENTS VIEW */}
        {mainTab === 'clients' && (
          <>
            {/* Search Box */}
            <div className="flex items-center justify-between mb-8 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search key clients or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
                />
              </div>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-cyan hover:shadow-clean-md transition-all flex flex-col justify-between items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-brand-cyan group-hover:text-white transition-all mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-cyan px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 inline-block mb-1.5">
                      {client.category}
                    </span>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-cyan transition-colors">
                      {client.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium mt-3 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100 w-full">
                    {client.tagline}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-7 h-7 text-brand-cyan shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Enterprise Signage & Bulk Printing Contracts</h4>
                  <p className="text-xs text-slate-500">Custom NDA contracts, bulk rates, and dedicated account managers available.</p>
                </div>
              </div>
              <a
                href="https://wa.me/918826239697?text=Hi%20Print%20N%20Craft,%20we%20want%20to%20partner%20for%20corporate%20branding%20and%20signage."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-brand-cyan transition-all shrink-0"
              >
                Corporate Partnership Inquiry
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
