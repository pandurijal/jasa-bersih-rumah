import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import CleaningTipGenerator from './components/CleaningTipGenerator';
import Footer from './components/Footer';
import BookingWizard from './components/BookingWizard';
import { type ServicePackage } from './types';
import FaqSection from './components/FaqSection';

const App: React.FC = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const handleStartBooking = (servicePackage: ServicePackage | null = null) => {
    setSelectedPackage(servicePackage);
    setIsBooking(true);
    window.scrollTo(0, 0);
  };

  const handleCloseBooking = () => {
    setIsBooking(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen antialiased">
      <Header onBookNow={() => handleStartBooking()} />
      <main>
        {isBooking ? (
          <BookingWizard 
            initialPackage={selectedPackage} 
            onClose={handleCloseBooking} 
          />
        ) : (
          <>
            <Hero onBookNow={() => handleStartBooking()} />
            <ServicesSection onSelectPackage={handleStartBooking} />
            <TestimonialsSection />
            <FaqSection />
            <CleaningTipGenerator />
            <AboutSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
