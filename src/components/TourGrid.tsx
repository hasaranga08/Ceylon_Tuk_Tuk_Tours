import React, { useState } from 'react';
import { TourCard } from './TourCard';
import { toursData, multiDayToursData, transportNotice, siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { MultiDayTour } from '../types';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Compass,
  Clock,
  Car,
  ChevronDown,
  ChevronUp,
  Check,
  MessageCircle,
  ArrowRight,
  Info,
  Calendar,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface TourGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showFilters?: boolean;
}

export const TourGrid: React.FC<TourGridProps> = ({
  title = 'Authentic Tuk Tuk Tours',
  subtitle = 'Choose from our most loved private coastal, city, and lagoon excursions, or embark on a custom multi-day island journey across Sri Lanka.',
  limit,
  showFilters = true,
}) => {
  const { openInquiryModal } = useNavigation();
  const [tourView, setTourView] = useState<'all' | 'local' | 'multiday'>('all');
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  const toggleExpand = (tourId: string) => {
    setExpandedTourId(expandedTourId === tourId ? null : tourId);
  };

  const displayLocalTours = limit ? toursData.slice(0, limit) : toursData;

  return (
    <section id="tours-section" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5 text-amber-700" />
          <span>Carefully Planned Private Excursions</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>

        {/* View Switcher: All / Local & Day Tours / Multi-Day Tours */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6" role="tablist">
            <button
              id="view-all-tours"
              onClick={() => setTourView('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                tourView === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Tours ({toursData.length + multiDayToursData.length})
            </button>
            <button
              id="view-local-tours"
              onClick={() => setTourView('local')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                tourView === 'local'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Local & Day Tours ({toursData.length})
            </button>
            <button
              id="view-multiday-tours"
              onClick={() => setTourView('multiday')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                tourView === 'multiday'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Multi-Day Sri Lanka Tours ({multiDayToursData.length})
            </button>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* GROUP 1: LOCAL & DAY TOURS */}
      {/* ============================================================ */}
      {(tourView === 'all' || tourView === 'local') && (
        <div id="local-day-tours-group" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-stone-200 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100/90 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <span>Group 1</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900">
                Local & Day Tours
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                Shorter, flexible excursions around Negombo, Colombo, coastal lagoons and authentic village food traditions.
              </p>
            </div>
            <span className="text-xs font-medium text-stone-500 shrink-0">
              {displayLocalTours.length} Private Day Experiences
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {displayLocalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} featured={tour.isPopular} />
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* GROUP 2: MULTI-DAY SRI LANKA TOURS */}
      {/* ============================================================ */}
      {(tourView === 'all' || tourView === 'multiday') && (
        <div id="multi-day-tours-group" className="pt-6 sm:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-stone-200 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <span>Group 2</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900">
                Multi-Day Sri Lanka Tours
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                Private, flexible journeys connecting ancient rock citadels, misty tea country, wildlife sanctuaries, and sun-drenched beaches.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sample itineraries — customizable</span>
            </div>
          </div>

          {/* TRANSPORT MESSAGE IN MULTI-DAY SECTION */}
          <div
            id="multiday-transport-notice"
            className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-stone-800"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-stone-900">
                  {transportNotice.heading}
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm mt-1 leading-relaxed">
                  {transportNotice.message}
                </p>
              </div>
            </div>

            {/* 3 Vehicle Short Notes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-amber-200/70">
              {transportNotice.options.map((opt, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/90 border border-amber-200/60 shadow-2xs"
                >
                  <span className="inline-block px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                    {opt.vehicle}
                  </span>
                  <p className="text-stone-600 text-xs leading-normal">
                    {opt.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[11px] sm:text-xs text-amber-900/80 font-medium mt-3 italic text-center sm:text-left">
              The business specializes in Tuk Tuk experiences, but cars and vans are also available.
            </p>
          </div>

          {/* 3 Multi-Day Tour Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {multiDayToursData.map((tour: MultiDayTour) => {
              const isExpanded = expandedTourId === tour.id;

              return (
                <article
                  key={tour.id}
                  id={`multi-day-tour-${tour.id}`}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Tour Image with Duration Badge */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={tour.heroImage}
                        alt={tour.altText || tour.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-amber-500 text-stone-950 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{tour.duration}</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block mb-0.5">
                          {tour.sampleNote}
                        </span>
                        <h4 className="font-heading font-extrabold text-xl text-white leading-tight drop-shadow-xs">
                          {tour.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <p className="text-amber-900 font-semibold text-xs sm:text-sm mb-3">
                        {tour.tagline}
                      </p>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                        {tour.description}
                      </p>

                      {/* Travel Style Tags */}
                      <div className="mb-5">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                          Travel Styles
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {tour.travelStyles.map((style, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200/60"
                            >
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="mb-5">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                          Sample Highlights
                        </span>
                        <ul className="space-y-1.5">
                          {tour.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Day-by-Day Accordion Toggle */}
                      <div className="pt-2 border-t border-stone-100 mb-2">
                        <button
                          type="button"
                          id={`toggle-itinerary-${tour.id}`}
                          onClick={() => toggleExpand(tour.id)}
                          className="w-full flex items-center justify-between py-2 text-xs font-bold text-stone-800 hover:text-amber-700 transition-colors"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            <span>Sample Itinerary ({tour.itineraryDays.length} Days)</span>
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-stone-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-500" />
                          )}
                        </button>

                        {/* Collapsible Itinerary Details */}
                        {isExpanded && (
                          <div className="mt-3 space-y-2.5 pb-2 border-b border-stone-100 animate-in fade-in duration-200 max-h-72 overflow-y-auto pr-1">
                            {tour.itineraryDays.map((d) => (
                              <div
                                key={d.day}
                                className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/60 text-xs"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-extrabold text-amber-800 bg-amber-100/70 px-1.5 py-0.5 rounded text-[11px]">
                                    Day {d.day}
                                  </span>
                                  <span className="font-bold text-stone-800">{d.title}</span>
                                </div>
                                <p className="text-stone-600 text-[11px] leading-relaxed">
                                  {d.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      type="button"
                      id={`inquire-multiday-${tour.id}`}
                      onClick={() => openInquiryModal(tour.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-xs"
                    >
                      <span>{tour.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      id={`wa-multiday-${tour.id}`}
                      href={getWhatsAppUrl(`Hi Anthony, I would like to inquire about the ${tour.title} (${tour.duration}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-700 font-semibold text-xs transition-colors border border-stone-200/70"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* Quality commitment strip */}
      <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-stone-900 text-base">
              The {siteConfig.businessName} Promise
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm">
              All tours are private. We never rush our guests, and we never take you to tourist commission shops.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white px-3 py-2 rounded-xl border border-stone-200 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Pay at tour completion in cash</span>
        </div>
      </div>
    </section>
  );
};
