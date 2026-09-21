import React, { useState } from 'react';
import {
  Calendar,
  Compass,
  Check,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Sliders,
} from 'lucide-react';
import { multiDayToursData, getWhatsAppUrl } from '../config/siteConfig';
import { MultiDayTour } from '../types';
import { useNavigation } from '../context/NavigationContext';

export const MultiDayToursSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  const toggleExpand = (tourId: string) => {
    setExpandedTourId(expandedTourId === tourId ? null : tourId);
  };

  return (
    <section
      id="multi-day-tours-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50/70 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-950 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200/70 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Multi-Day Private Itineraries</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight mb-5 leading-tight">
            Explore Sri Lanka Your Way
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
            Private, flexible journeys connecting ancient rock citadels, misty tea country, wildlife sanctuaries, and sun-drenched southern surf beaches. Travel at your own pace with a trusted, licensed local driver.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Sample itineraries — 100% fully customizable to your dates, interests & pace</span>
          </div>
        </div>

        {/* 3 Package Cards */}
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
                      alt={tour.title}
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
                      <h3 className="font-heading font-extrabold text-xl text-white leading-tight drop-shadow-xs">
                        {tour.title}
                      </h3>
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
                        Tour Highlights
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
                          <span>{isExpanded ? 'Hide Day-by-Day Route' : 'View Sample Day-by-Day Route'}</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-stone-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-500" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2.5 pb-2 text-xs">
                          {tour.itineraryDays.map((dayItem, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70"
                            >
                              <div className="font-bold text-stone-900 mb-0.5 flex items-center gap-1.5">
                                <span className="px-1.5 py-0.5 rounded bg-amber-200/60 text-amber-900 text-[10px] font-extrabold uppercase">
                                  {dayItem.day}
                                </span>
                                <span>{dayItem.title}</span>
                              </div>
                              <p className="text-stone-600 text-[11px] leading-relaxed pl-1">
                                {dayItem.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-stone-100 space-y-2">
                  <div className="text-[11px] text-stone-500 text-center mb-2">
                    Transparent pricing based on your dates & vehicle selection.
                  </div>

                  {/* WhatsApp Direct Button */}
                  <a
                    id={`whatsapp-tour-${tour.id}`}
                    href={getWhatsAppUrl(tour.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>{tour.ctaText}</span>
                  </a>

                  {/* Customize / Inquiry Modal Button */}
                  <button
                    type="button"
                    id={`customize-tour-${tour.id}`}
                    onClick={() => openInquiryModal(tour.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-stone-600" />
                    <span>Inquire & Customize Itinerary</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Customization Callout Box */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              <Shield className="w-3 h-3 text-amber-800" />
              <span>Tailored To You</span>
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900">
              Need a custom duration or specific destinations?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
              Add surf days in Weligama, spend extra nights in Hiriketiya, or request our air-conditioned car or van with child seats. Tell us your travel dates and we will tailor the itinerary for you.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              id="plan-custom-trip-banner-btn"
              onClick={() => openInquiryModal('Custom Mixed Day Tour')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              id="whatsapp-custom-trip-banner-btn"
              href={getWhatsAppUrl(
                "Hello Ceylon Tuk Tuk Tours! I would like to design a custom multi-day itinerary in Sri Lanka. Could you please assist me?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
