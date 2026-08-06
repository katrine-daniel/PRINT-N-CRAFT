import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'LED Sign Board',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'LED Sign Board', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Let's Bring Your Brand To Life
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Visit our workshop in Gurugram or connect with our design engineers directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Phone className="w-5 h-5 text-brand-cyan" />
                <span>Call Our Sales Team</span>
              </h3>
              
              <div className="space-y-2">
                <a
                  href="tel:+918826239697"
                  className="flex items-center justify-between p-3 rounded-xl bg-sky-50 border border-sky-200 hover:border-brand-cyan text-slate-900 font-bold text-xs transition-all"
                >
                  <div>
                    <span className="text-[10px] text-brand-cyan font-bold block">Primary Sales Line</span>
                    <span>+91 8826239697</span>
                  </div>
                  <Phone className="w-4 h-4 text-brand-cyan" />
                </a>

                <a
                  href="tel:+917703967979"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-cyan text-slate-900 font-bold text-xs transition-all"
                >
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Secondary Line</span>
                    <span>+91 7703967979</span>
                  </div>
                  <Phone className="w-4 h-4 text-brand-cyan" />
                </a>

                <a
                  href="tel:+919654737317"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-cyan text-slate-900 font-bold text-xs transition-all"
                >
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Support Line</span>
                    <span>+91 9654737317</span>
                  </div>
                  <Phone className="w-4 h-4 text-brand-cyan" />
                </a>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-brand-magenta" />
                <span>Digital Channels</span>
              </h3>
              
              <div className="space-y-2">
                <a
                  href="mailto:printncraft1@gmail.com"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-magenta text-slate-900 font-bold text-xs transition-all"
                >
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Official Email</span>
                    <span>printncraft1@gmail.com</span>
                  </div>
                  <Mail className="w-4 h-4 text-brand-magenta" />
                </a>              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-slate-900">
                <MapPin className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-sm font-bold">Workshop & Retail Unit</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shop No 101, Village Badshahpur, near Deewan Palace, Gurugram, Tikli, Haryana 122101, India.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+101,+Village+Badshahpur,+near+Deewan+Palace,+Gurugram,+Tikli,+Haryana+122101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sky-50 hover:bg-brand-cyan hover:text-white border border-sky-200 text-brand-cyan font-bold text-xs transition-all shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <div className="pt-2 flex items-center space-x-2 text-[11px] text-slate-500 border-t border-slate-100">
                <Clock className="w-4 h-4 text-brand-cyan" />
                <span>Open Monday - Saturday: 9:30 AM to 8:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-clean-md">
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Project Inquiry</h3>
              <p className="text-xs text-slate-500 mb-6">Fill in your requirements below. Our technical team will respond within 30 minutes.</p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-600">Thank you, {formData.name || 'Valued Customer'}. Our team is reviewing your specifications and will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-brand-cyan font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-brand-cyan font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-brand-cyan font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-brand-cyan font-medium"
                      >
                        <option value="LED Sign Board">LED Sign Board</option>
                        <option value="GSB Glow Sign Board">GSB Glow Sign Board</option>
                        <option value="Flex Board Design">Flex Board Design</option>
                        <option value="Vinyl Printing">Vinyl Printing</option>
                        <option value="Laser Cutting">Laser Cutting</option>
                        <option value="CNC Router">CNC Router</option>
                        <option value="SS Sign Board">SS Sign Board</option>
                        <option value="ACP Cladding">ACP Cladding</option>
                        <option value="Name Plate">Name Plate</option>
                        <option value="Customized Gifts">Customized Gifts</option>
                        <option value="Neon Signages">Neon Signages</option>
                        <option value="Flange Board">Flange Board</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details / Dimensions / Quantity
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-brand-cyan font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-brand-cyan text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
