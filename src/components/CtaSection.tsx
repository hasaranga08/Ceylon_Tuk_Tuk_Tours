import React from 'react';
import { Calendar, MessageCircle, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { getWhatsAppUrl } from '../config/siteConfig';

export const CtaSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();

  return (
    <section id="cta-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 text-white p-8 sm:p-12 lg:p-16 shadow-xl">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Start Your Sri Lankan Adventure</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            Ready to Explore Negombo & Colombo with a Local Friend?
          </h2>

          <p className="text-stone-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
            Tell us when you are visiting and which places excite you. We provide personalized routes, honest local pricing, and comfortable TukTuks with fresh king coconuts on board.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
            <button
              id="cta-open-inquiry-btn"
              onClick={() => openInquiryModal()}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Send Quick Tour Inquiry</span>
            </button>

            <a
              id="cta-whatsapp-link"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-amber-100/90 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pay in Cash upon completion</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Door-to-door hotel & airport pickup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Roll-down rain curtains on board</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
