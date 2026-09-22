/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { InquiryModal } from './components/InquiryModal';
import { StructuredData } from './components/StructuredData';

// Pages
import { HomePage } from './pages/HomePage';
import { ToursPage } from './pages/ToursPage';
import { NegomboTourPage } from './pages/NegomboTourPage';
import { NegomboCityTourPage } from './pages/NegomboCityTourPage';
import { ColomboTourPage } from './pages/ColomboTourPage';
import { LagoonTourPage } from './pages/LagoonTourPage';
import { LocalFoodCulturePage } from './pages/LocalFoodCulturePage';
import { PrivateToursPage } from './pages/PrivateToursPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'tours':
      case 'tuk-tuk-tours-sri-lanka':
        return <ToursPage />;
      case 'negombo-tuk-tuk-tour':
      case 'negombo-tuktuk-tour':
        return <NegomboTourPage />;
      case 'negombo-city-tour':
        return <NegomboCityTourPage />;
      case 'colombo-city-tour':
        return <ColomboTourPage />;
      case 'negombo-lagoon-tour':
        return <LagoonTourPage />;
      case 'local-food-culture-tour':
      case 'local-food-culture-experience':
        return <LocalFoodCulturePage />;
      case 'sri-lanka-private-tours':
      case 'private-sri-lanka-tours':
        return <PrivateToursPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800">
      {/* Dynamic SEO Structured Data */}
      <StructuredData />

      {/* Primary Site Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Primary Site Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppFloat />

      {/* Quick Booking & Inquiry Modal */}
      <InquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
