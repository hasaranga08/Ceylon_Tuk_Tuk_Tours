import React from 'react';
import { Hero } from '../components/Hero';
import { TourGrid } from '../components/TourGrid';
import { ThingsToDoSection } from '../components/ThingsToDoSection';
import { CuriousTravelersSection } from '../components/CuriousTravelersSection';
import { TransportSection } from '../components/TransportSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { DestinationCard } from '../components/DestinationCard';
import { Gallery } from '../components/Gallery';
import { Testimonial } from '../components/Testimonial';
import { FAQ } from '../components/FAQ';
import { InquiryForm } from '../components/InquiryForm';
import { CtaSection } from '../components/CtaSection';
import { destinationsData } from '../config/siteConfig';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div id="home-page" className="space-y-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Authentic Sri Lanka Tours (Group 1: Local & Day Tours + Group 2: Multi-Day Sri Lanka Tours) */}
      <TourGrid
        title="Authentic Tuk Tuk Tours"
        subtitle="Handcrafted private excursions in Negombo, Colombo, and Muthurajawela Lagoon, plus custom multi-day island journeys across Sri Lanka."
        showFilters={true}
      />

      {/* 3. Things to Do in Sri Lanka (Curated activities across 7 regions + Build Your Tour CTA) */}
      <ThingsToDoSection />

      {/* 4. Made for Curious Travelers (Backpackers, Young Explorers & Adventurers) */}
      <CuriousTravelersSection />

      {/* 5. Clarified Transport Options (Tuk Tuk, Private Car, Van) */}
      <TransportSection />

      {/* 6. The Authentic Experience */}
      <ExperienceSection />

      {/* 7. Destinations Highlights */}
      <section id="destinations-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Where We Take You</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
              Top Destinations Around Negombo, Colombo & Beyond
            </h2>
          </div>
          <button
            id="explore-all-tours-from-destinations-btn"
            onClick={() => navigateTo('tours')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>View All Tours</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsData.slice(0, 6).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 8. Photo Gallery */}
      <Gallery />

      {/* 9. Guest Testimonials (Transparently marked sample reviews) */}
      <Testimonial />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* 11. Standalone Direct Inquiry Form Section on Home */}
      <section id="home-inquiry-section" className="py-16 sm:py-20 bg-amber-50/50 border-t border-amber-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Direct Local Reservation
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
              Check Tour Availability & Custom Quote
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Receive a fast, friendly reply directly from our Sri Lanka driver team.
            </p>
          </div>

          <InquiryForm formType="Homepage Direct Booking Form" />
        </div>
      </section>

      {/* 12. Bottom Call to Action */}
      <CtaSection />
    </div>
  );
};
