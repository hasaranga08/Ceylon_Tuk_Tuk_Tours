import React from 'react';
import { Clock, MapPin, Check, ArrowRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Tour } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { getWhatsAppUrl } from '../config/siteConfig';

interface TourCardProps {
  tour: Tour;
  featured?: boolean;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, featured = false }) => {
  const { navigateTo, openInquiryModal } = useNavigation();

  return (
    <article
      id={`tour-card-${tour.id}`}
      className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
        featured
          ? 'border-amber-400 shadow-md hover:shadow-xl ring-1 ring-amber-400/30'
          : 'border-stone-200/90 shadow-sm hover:shadow-lg hover:border-amber-300'
      }`}
    >
      {/* Tour Image with Hover Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={tour.heroImage}
          alt={tour.altText || `${tour.title} in ${tour.location}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {tour.duration}
          </span>
          {tour.isPopular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 text-xs font-bold shadow-sm">
              <Sparkles className="w-3 h-3" />
              Most Popular
            </span>
          )}
        </div>

        {/* Location pill on bottom left */}
        <div className="absolute bottom-3 left-3 text-xs font-medium text-white flex items-center gap-1 drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{tour.location}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 group-hover:text-amber-700 transition-colors leading-snug mb-2">
            {tour.title}
          </h3>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {tour.summary}
          </p>

          {/* Highlights checklist */}
          <ul className="space-y-1.5 mb-5" aria-label="Key highlights">
            {tour.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing notice & Actions */}
        <div className="pt-4 border-t border-stone-100">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-stone-500 font-medium">Pricing:</span>
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-right">
              {tour.pricingNote}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* View Full Itinerary */}
            <button
              id={`view-tour-btn-${tour.id}`}
              onClick={() => navigateTo(tour.slug)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors"
            >
              <span>Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Quick Inquire Button */}
            <button
              id={`inquire-tour-btn-${tour.id}`}
              onClick={() => openInquiryModal(tour.id)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </button>
          </div>

          {/* WhatsApp Direct Option */}
          <a
            id={`whatsapp-tour-link-${tour.id}`}
            href={getWhatsAppUrl(
              `Hello! I'm interested in the "${tour.title}". Could you please let me know availability and current pricing for our travel date?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors py-1"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
            <span>Chat about this tour on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
};
