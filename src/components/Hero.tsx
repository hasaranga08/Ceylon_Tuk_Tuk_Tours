import React from 'react';
import {
  Compass,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Palmtree,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { getWhatsAppUrl } from '../config/siteConfig';
import { getAssetPath } from '../utils/assetPath';

export const Hero: React.FC = () => {
  const { navigateTo, openInquiryModal } = useNavigation();

  return (
    <section id="hero-section" className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with warm tropical overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetPath('/home.jpeg')}
          alt="Authentic Sri Lankan Tuk Tuk with traditional canopy roof along scenic palm-lined tropical coast"
          className="w-full h-full object-cover object-center md:object-[center_35%] opacity-45 scale-100 transform animate-fade-in"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-900/20 to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Private & Tailor-Made TukTuk Tours in Sri Lanka</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Private Sri Lanka TukTuk Tours in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 font-serif-display italic font-normal">
              Negombo & Colombo
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Discover the real Negombo and Colombo with trusted local English-speaking driver guides. 
            From bustling morning fish markets and tranquil lagoon mangrove safaris to Colombo’s mouthwatering street food—100% private, unhurried, and commission-free.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              id="hero-inquire-cta-btn"
              onClick={() => openInquiryModal()}
              className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Private Tour</span>
            </button>

            <a
              id="hero-whatsapp-cta-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Quick WhatsApp Chat</span>
            </a>

            <button
              id="hero-view-tours-btn"
              onClick={() => navigateTo('tours')}
              className="hidden md:flex items-center justify-center gap-1.5 px-5 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-colors"
            >
              <span>Explore Itineraries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Points Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-700/60 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Private (No Strangers)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free Hotel & Airport Pickup</span>
            </div>
            <div className="flex items-center gap-2">
              <Palmtree className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fresh King Coconuts Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Zero Forced Shopping Stops</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative subtle wave divider at bottom */}
      <div className="h-6 bg-[#FAF8F5] rounded-t-[2.5rem] relative -mt-6 z-20" />
    </section>
  );
};
