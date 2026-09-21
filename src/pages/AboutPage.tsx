import React from 'react';
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Palmtree,
  Users,
  MessageCircle,
  Award,
  CheckCircle,
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { useNavigation } from '../context/NavigationContext';
import { getAssetPath } from '../utils/assetPath';

export const AboutPage: React.FC = () => {
  const { navigateTo, openInquiryModal } = useNavigation();

  return (
    <div id="about-page" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-amber-700">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900">About Our Team</li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Local Heritage & Story</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
            Passionate Local Drivers. Unscripted Sri Lankan Hospitality.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {siteConfig.businessName} was founded with a simple, genuine mission: to show visitors our beloved island not through generic tour bus windows, but from the warm, breezy seat of an authentic TukTuk alongside someone who has lived here their entire life.
          </p>
        </div>

        {/* Owner Introduction */}
        <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-7 shadow-sm mb-12 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img
            src={siteConfig.logoUrl}
            alt={siteConfig.businessName}
            className="h-20 w-auto object-contain shrink-0"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Local Tour Provider & Guide
            </span>
            <h2 className="font-heading font-bold text-2xl text-stone-900 mb-1">
              {siteConfig.ownerName}
            </h2>
            <p className="text-stone-700 text-base font-medium leading-relaxed">
              Meet Anthony Appuhamy, your local Tuk Tuk tour provider in Sri Lanka.
            </p>
          </div>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
            <h2 className="font-heading font-bold text-2xl text-stone-900">
              Rooted in Negombo's Coastal Community
            </h2>
            <p>
              Negombo has always been a crossroads of cultures—from historic Arab spice traders and Portuguese sea captains to Dutch canal builders and generations of Sinhalese and Tamil fishermen.
            </p>
            <p>
              When you travel with us, you are not treated like a generic tourist ticket. You are greeted like visiting family. We take you down the quiet palm-shaded lanes where we played as children, stop at our favorite fish stalls at the Lellama, and introduce you to the local coconut pluckers and temple guardians.
            </p>
            <p>
              Most importantly, we are committed to <strong>100% commission-free, honest tourism</strong>. We never divert your itinerary to high-pressure tourist shops, souvenir factories, or fake herbal gardens. When you pay for a tour with us, your money goes directly to support local drivers, their families, and local fruit growers.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-stone-200 border border-stone-200">
              <img
                src={getAssetPath('/images/fishing_boats.jpg')}
                alt="Local Sri Lankan driver and fishermen community in Negombo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Local Pride
                </span>
                <p className="text-xs sm:text-sm font-medium text-stone-200">
                  Negombo beach fishermen preparing catamarans at sunrise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Commitments */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-stone-900 text-center mb-10">
            Our 4 Pillars of Responsible Tourism
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Zero Commission Traps
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We never force you into tourist gem stores or spice shops. Your time belongs completely to you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Fair Local Earnings
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                100% of tour fees support our driver-guides directly, ensuring dignified local wages and vehicle maintenance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Palmtree className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Unhurried Pacing
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Tours run at your rhythm. Want an extra 20 minutes photographing a lagoon monitor lizard? No problem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-stone-900 mb-2">
                Licensed Local Guides
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                All drivers hold valid Sri Lankan commercial passenger permits, speak clear English, and know every street.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
            Want to Meet Us in Negombo?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Send us a message with your arrival date or WhatsApp us directly. We will be happy to welcome you to Sri Lanka.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="about-whatsapp-btn"
              href={getWhatsAppUrl("Hello! I read your About page and would like to chat about a tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              id="about-inquiry-btn"
              onClick={() => openInquiryModal()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-sm font-bold shadow-md transition-colors"
            >
              <span>Send Tour Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
