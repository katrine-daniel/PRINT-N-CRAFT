import React, { useState } from 'react';
import { rateCardData, rateCardCategories } from '../data/rateCardData';
import { Search, FileSpreadsheet, MessageSquare, Tag, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RateCardSection({ onOpenEstimate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = rateCardData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.quantity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsappUrlForItem = (item) => {
    const text = `Hi Print N Craft! I want to inquire about the rate for:
- *Product*: ${item.product}
- *Unit/Size*: ${item.quantity}
- *Listed Rate*: ${item.rateText || `₹${item.rate} ${item.unit}`}

Please provide availability & formal quotation.`;
    return `https://wa.me/917703967979?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rate-card" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Official Price List / Rate Card</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Transparent Product & Service Rates
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Updated pricing table for Eco Solvent/UV Printing, Signages, CNC Jaali Cutting & Readymade Display Items.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {rateCardCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product (e.g. Flex, Acrylic, Standy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-cyan shadow-sm"
            />
          </div>

        </div>

        {/* Table View (Desktop & Tablet) */}
        <div className="hidden sm:block overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase font-extrabold tracking-wider">
                <th className="py-4 px-6 rounded-tl-2xl">SR.</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Product Description</th>
                <th className="py-4 px-6">Quantity / Unit</th>
                <th className="py-4 px-6 text-right">Rate (₹)</th>
                <th className="py-4 px-6 text-center rounded-tr-2xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="py-3.5 px-6 font-bold text-slate-400 group-hover:text-slate-900">
                      #{item.sr}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-500">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600">
                        {item.categoryName}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-bold text-slate-900">
                      <div className="flex items-center space-x-2">
                        <span>{item.product}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-600">
                      <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                        {item.quantity}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right font-black text-slate-900 text-sm">
                      {item.rateText ? (
                        <span className="text-xs text-brand-cyan font-bold">{item.rateText}</span>
                      ) : (
                        <span>
                          ₹{item.rate.toLocaleString('en-IN')}{' '}
                          <span className="text-[10px] font-normal text-slate-400">{item.unit}</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      <a
                        href={getWhatsappUrlForItem(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 font-bold transition-all text-[11px]"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Order Rate</span>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-slate-400">
                    No products match your search or category filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="sm:hidden space-y-3">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    #{item.sr} • {item.categoryName}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">{item.product}</h4>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Unit: {item.quantity}</span>
                  <span className="text-sm font-black text-slate-900">
                    {item.rateText || `₹${item.rate} ${item.unit}`}
                  </span>
                </div>

                <a
                  href={getWhatsappUrlForItem(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center space-x-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-700 text-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
            <span>
              <strong>Note:</strong> GST & Installation charges extra where applicable. Custom size vector design fees apply for complex CNC Jali cuts.
            </span>
          </div>
          <button
            onClick={() => onOpenEstimate && onOpenEstimate()}
            className="whitespace-nowrap px-4 py-2 rounded-xl bg-slate-900 hover:bg-brand-cyan text-white font-bold text-xs transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span>Open Cost Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
