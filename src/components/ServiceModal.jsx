import React from 'react';
import { X, CheckCircle2, MessageSquare, PhoneCall, Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenEstimate }) {
  if (!service) return null;

  const whatsappMsg = `Hi Print N Craft, I am interested in your service: *${service.title}*. Please provide detailed quotation and lead time.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-clean-lg relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-cyan shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100">
              {service.category} Specialization
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              {service.title}
            </h3>
            <p className="text-xs text-brand-magenta font-semibold mt-0.5">{service.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          <p className="text-slate-800 text-sm leading-relaxed">{service.fullDesc}</p>

          {/* Key Features */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Key Technical Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-brand-magenta" />
              <span>Available Material Options & Substrates</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.materials.map((mat, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Estimated Standard Rate</span>
              <p className="text-lg font-black text-slate-900">
                ₹{service.estimatedRatePerSqFt} <span className="text-xs text-slate-500 font-normal">/ sq. ft. approx</span>
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenEstimate(service.id);
              }}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-brand-cyan transition-all flex items-center space-x-1"
            >
              <span>Calculate Total Cost</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`https://wa.me/918826239697?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire via WhatsApp</span>
          </a>
          <a
            href="tel:+918826239697"
            className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-brand-cyan" />
            <span>Call +91 8826239697</span>
          </a>
        </div>

      </div>
    </div>
  );
}
