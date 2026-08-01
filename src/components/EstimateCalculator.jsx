import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { MessageSquare, Calculator } from 'lucide-react';

export default function EstimateCalculator({ preselectedServiceId }) {
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId || servicesData[0].id);
  const [width, setWidth] = useState('4');
  const [height, setHeight] = useState('3');
  const [quantity, setQuantity] = useState(1);
  const [includeLed, setIncludeLed] = useState(false);
  const [includeInstallation, setIncludeInstallation] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const numWidth = parseFloat(width) || 0;
  const numHeight = parseFloat(height) || 0;
  const totalSqFt = Math.max(0, numWidth * numHeight * quantity);
  const baseRate = currentService.estimatedRatePerSqFt;
  
  let addOnRate = 0;
  if (includeLed && !['led-sign-board', 'neon-signages', 'gsb-sign-board'].includes(currentService.id)) {
    addOnRate += 45;
  }
  if (includeInstallation) {
    addOnRate += 25;
  }

  const minEstimatedCost = Math.round(totalSqFt * (baseRate + addOnRate) * 0.95);
  const maxEstimatedCost = Math.round(totalSqFt * (baseRate + addOnRate) * 1.15);

  const generateWhatsappUrl = () => {
    const text = `Hi Print N Craft! I calculated a project estimate on your website:
- *Service*: ${currentService.title}
- *Dimensions*: ${numWidth} ft x ${numHeight} ft (${totalSqFt} sq. ft. total)
- *Quantity*: ${quantity} unit(s)
- *LED Lighting*: ${includeLed ? 'Yes' : 'No'}
- *On-site Installation*: ${includeInstallation ? 'Yes' : 'No'}
- *Estimated Cost*: ₹${minEstimatedCost.toLocaleString('en-IN')} - ₹${maxEstimatedCost.toLocaleString('en-IN')}

Please share official formal quote & timeline.`;

    return `https://wa.me/918826239697?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            Instant Cost Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Estimate Your Project Cost
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Configure dimensions, materials, and lighting options to receive an instant budget estimation.
          </p>
        </div>

        {/* Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Service Type
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 font-bold focus:outline-none focus:border-brand-cyan shadow-sm"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} (₹{s.estimatedRatePerSqFt}/sq.ft)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Width (in Feet)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="999"
                    placeholder="0"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 font-extrabold focus:outline-none focus:border-brand-cyan shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Height (in Feet)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="999"
                    placeholder="0"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 font-extrabold focus:outline-none focus:border-brand-cyan shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Quantity (Units)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="flex-1 accent-brand-cyan"
                  />
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-extrabold text-xs w-12 text-center">
                    {quantity}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Optional Add-Ons
                </label>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-xs text-slate-700 font-medium">High-Efficiency LED Backlighting</span>
                  <input
                    type="checkbox"
                    checked={includeLed}
                    onChange={(e) => setIncludeLed(e.target.checked)}
                    className="w-4 h-4 rounded accent-brand-cyan"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-xs text-slate-700 font-medium">Gurugram / NCR On-Site Installation</span>
                  <input
                    type="checkbox"
                    checked={includeInstallation}
                    onChange={(e) => setIncludeInstallation(e.target.checked)}
                    className="w-4 h-4 rounded accent-brand-cyan"
                  />
                </div>
              </div>

            </div>

            {/* Output */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl text-center text-white relative">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan">
                  Estimated Total Budget
                </span>

                <div className="my-4 flex flex-col items-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white leading-tight break-all text-center">
                    ₹{minEstimatedCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">to</span>
                  <span className="text-2xl sm:text-3xl font-black text-brand-cyan leading-tight break-all text-center">
                    ₹{maxEstimatedCost.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 mb-6">
                  Based on {totalSqFt} sq. ft. surface area @ ₹{baseRate}/sq.ft standard rate.
                </p>

                <a
                  href={generateWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <p className="text-[10px] text-slate-500 mt-3">
                  *Final quote will be confirmed upon vector review.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
