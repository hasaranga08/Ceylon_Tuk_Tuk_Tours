import React from 'react';
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  MessageCircle,
  Palmtree,
  Compass,
} from 'lucide-react';
import { toursData, getWhatsAppUrl } from '../config/siteConfig';
import { InquiryForm } from '../components/InquiryForm';
import { RelatedTours } from '../components/RelatedTours';
import { useNavigation } from '../context/NavigationContext';

export const LagoonTourPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const tour = toursData.find((t) => t.id === 'negombo-lagoon-tour') || toursData[2];

  return (
    <article id="lagoon-tour-page" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-amber-700">
                Home
              </button>
            </li>
            <li>/</li>
            <li>
              <button onClick={() => navigateTo('tours')} className="hover:text-amber-700">
                Tours
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900 truncate">Negombo Lagoon Safari</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Nature & Mangrove Sanctuary</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              Muthurajawela Lagoon & Mangrove Safari
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
              A serene escape from coastal towns. Ride through rustic fishing hamlets into the protected Muthurajawela Marsh, board a covered safari boat, and glide silently through mangrove tunnels where kingfishers, herons, and giant Asian water monitors thrive.
            </p>

            {/* Tour Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm mb-6">
              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Duration</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  {tour.duration}
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Experience</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Palmtree className="w-4 h-4 text-emerald-600" />
                  TukTuk + Boat Safari
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80 col-span-2 sm:col-span-1">
                <span className="text-stone-400 block text-[11px] font-semibold">Best Departure</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  6:30 AM or 3:00 PM
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                id="lagoon-book-whatsapp-btn"
                href={getWhatsAppUrl(
                  "Hello! I'm interested in booking the Muthurajawela Lagoon & Mangrove TukTuk Combo Safari. Could you please check availability?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href="#lagoon-inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Send Booking Inquiry</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Gallery */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src={tour.heroImage}
                alt="Negombo Lagoon Mangrove Safari"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {tour.galleryImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                  <img
                    src={img}
                    alt={`Lagoon tour stop ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Itinerary Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            <section id="lagoon-itinerary">
              <h2 className="font-heading font-extrabold text-2xl text-stone-900 mb-6">
                Lagoon & Mangrove Safari Itinerary
              </h2>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-stone-200">
                {tour.itinerary.map((stop) => (
                  <div key={stop.stopNumber} className="relative flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 ring-4 ring-[#FAF8F5]">
                      {stop.stopNumber}
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex-1">
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                        <h3 className="font-heading font-bold text-base text-stone-900">
                          {stop.title}
                        </h3>
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                          {stop.duration}
                        </span>
                      </div>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl text-stone-900 mb-6">
                What’s Included in the Lagoon Safari
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Included</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-stone-400" />
                    <span>Not Included</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Inquiry Sidebar */}
          <div className="lg:col-span-5">
            <div id="lagoon-inquiry-form" className="sticky top-24">
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 mb-4 text-xs text-emerald-900">
                <span className="font-bold block mb-1">Nature Safari Tip</span>
                Early mornings (6:30 AM) offer the calmest waters, coolest temperature, and the highest concentration of active migratory bird species.
              </div>
              <InquiryForm
                initialTourId={tour.id}
                compact={true}
                formType="Negombo Lagoon Boat Tour Booking"
              />
            </div>
          </div>
        </div>

        {/* Natural Internal Links to other tours */}
        <RelatedTours currentTourSlug={tour.slug} />
      </div>
    </article>
  );
};
