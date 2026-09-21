import React from 'react';
import {
  Waves,
  Palmtree,
  UtensilsCrossed,
  Compass,
  Binoculars,
  Landmark,
  Music,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { curiousTravelerFeaturesData, getWhatsAppUrl } from '../config/siteConfig';
import { CuriousTravelerFeature } from '../types';
import { useNavigation } from '../context/NavigationContext';

export const CuriousTravelersSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-amber-600" />;
      case 'Palmtree':
        return <Palmtree className="w-5 h-5 text-amber-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'Binoculars':
        return <Binoculars className="w-5 h-5 text-amber-600" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-amber-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section
      id="curious-travelers-section"
      className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Independent & Adventurous Spirits</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Made for Curious Travelers
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you are backpacking solo, exploring with friends, or surfing the southern coast with your partner—we provide honest local connections, flexible transport, and zero tourist-trap pressure.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {curiousTravelerFeaturesData.map((feature: CuriousTravelerFeature) => (
            <div
              key={feature.id}
              id={`curious-feature-${feature.id}`}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(feature.iconName)}
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 mb-2 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-stone-100 mt-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Travel Style CTA Banner */}
        <div className="text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="curious-travelers-plan-btn"
            onClick={() => openInquiryModal('Curious Traveler Custom Itinerary')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            <span>Plan My Custom Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            id="curious-travelers-whatsapp-btn"
            href={getWhatsAppUrl(
              "Hello Ceylon Tuk Tuk Tours! We are curious travelers planning a trip around Sri Lanka and would like some local tips and private transport."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
