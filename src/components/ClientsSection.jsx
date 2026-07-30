import React from 'react';
import { clientsData } from '../data/clientsData';
import { Building2, ShieldCheck } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            Enterprise Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Key Enterprise Clients
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Trusted partner to healthcare giants, e-commerce pioneers, fashion retailers, and tech leaders.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientsData.map((client, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-brand-cyan transition-all flex flex-col justify-between items-center text-center group shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-brand-cyan transition-all">
                <Building2 className="w-5 h-5" />
              </div>

              <div className="my-3">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">
                  {client.name}
                </h3>
                <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                  {client.category}
                </span>
              </div>

              <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                {client.tagline}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-7 h-7 text-brand-cyan shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Corporate Signage & Bulk Printing Contracts</h4>
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

      </div>
    </section>
  );
}
