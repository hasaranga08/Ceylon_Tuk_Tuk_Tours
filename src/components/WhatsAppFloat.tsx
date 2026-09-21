import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white rounded-2xl p-3 shadow-xl border border-stone-200/90 text-stone-800 text-xs max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative flex items-start gap-2">
          <div className="flex-1">
            <span className="font-bold text-emerald-800 block text-xs">
              Direct Driver Chat
            </span>
            <p className="text-stone-600 text-[11px] leading-snug mt-0.5">
              Have questions or need quick availability? Chat with us on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Pulse Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat directly on WhatsApp with ${siteConfig.businessName}`}
        className="pointer-events-auto relative group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-emerald-600/40 transform hover:scale-105 transition-all duration-200"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-bold text-sm hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
