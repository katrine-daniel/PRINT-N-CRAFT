import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VisionMissionValues from './components/VisionMissionValues';
import ServicesGrid from './components/ServicesGrid';
import ServiceModal from './components/ServiceModal';
import EstimateCalculator from './components/EstimateCalculator';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [estimateServiceId, setEstimateServiceId] = useState(null);

  const handleOpenEstimate = (serviceId) => {
    if (serviceId) {
      setEstimateServiceId(serviceId);
    }
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-cmyk-cyan selection:text-black">
      
      {/* Navigation Header */}
      <Navbar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenEstimate={() => handleOpenEstimate()} />
        <AboutSection />
        <VisionMissionValues />
        <ServicesGrid 
          onSelectService={(service) => setSelectedService(service)} 
          onOpenEstimate={(id) => handleOpenEstimate(id)} 
        />
        <EstimateCalculator preselectedServiceId={estimateServiceId} />
        <PortfolioGallery onOpenEstimate={() => handleOpenEstimate()} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenEstimate={(id) => handleOpenEstimate(id)}
        />
      )}

    </div>
  );
}
