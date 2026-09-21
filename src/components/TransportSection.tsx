import React from 'react';
import { Truck, Users, Check, Calendar, MessageCircle, Info } from 'lucide-react';
import { vehiclesData, getWhatsAppUrl } from '../config/siteConfig';
import { useNavigation } from '../context/NavigationContext';

export const TransportSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();

  return (
    <section
      id="vehicles-section"
      className="py-16 sm:py-20 bg-stone-100/70 border-y border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-amber-700" />
            <span>Transport Across Sri Lanka</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Clean, Maintained Private Vehicles
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
            We provide clear, honest vehicle options suited for every leg of your Sri Lankan journey. All vehicles are licensed, fully insured, and operated by professional, courteous local drivers.
          </p>

          {/* Clarification banner */}
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-white border border-stone-200 text-stone-700 text-xs text-left sm:text-center shadow-xs">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Tip:</strong> Tuk Tuks are ideal for vibrant city & coastal exploration; private air-conditioned cars and vans are recommended for longer cross-country and multi-day island journeys.
            </span>
          </div>
        </div>

        {/* 3 Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {vehiclesData.map((vehicle) => (
            <article
              key={vehicle.id}
              id={`vehicle-card-${vehicle.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{vehicle.capacity}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    {vehicle.type}
                  </span>

                  <h3 className="font-heading font-bold text-xl text-stone-900 mb-2 leading-snug">
                    {vehicle.name}
                  </h3>

                  {/* Core required description */}
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/60 mb-4">
                    <p className="text-amber-950 font-semibold text-xs sm:text-sm">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-5 text-xs text-stone-700">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-stone-100 text-xs text-stone-500">
                    <span className="font-semibold text-stone-800">Ideal For: </span>
                    <span>{vehicle.idealFor}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-stone-100 space-y-2">
                <button
                  type="button"
                  id={`select-vehicle-${vehicle.id}`}
                  onClick={() => openInquiryModal(`Vehicle Request: ${vehicle.name}`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all duration-200"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request This Vehicle</span>
                </button>

                <a
                  id={`whatsapp-vehicle-${vehicle.id}`}
                  href={getWhatsAppUrl(
                    `Hello Ceylon Tuk Tuk Tours! I am interested in booking your ${vehicle.name} for our upcoming travel in Sri Lanka.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quick WhatsApp Inquiry</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
