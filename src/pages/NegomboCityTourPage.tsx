import React from 'react';
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  MessageCircle,
  Landmark,
  Compass,
  Building2,
} from 'lucide-react';
import { toursData, getWhatsAppUrl } from '../config/siteConfig';
import { InquiryForm } from '../components/InquiryForm';
import { RelatedTours } from '../components/RelatedTours';
import { useNavigation } from '../context/NavigationContext';

export const NegomboCityTourPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const tour =
    toursData.find((t) => t.id === 'negombo-city-tour' || t.slug === 'negombo-city-tour') ||
    toursData[1];

  return (
    <article id="negombo-city-tour-page" className="py-6 sm:py-10">
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
              <button onClick={() => navigateTo('tuk-tuk-tours-sri-lanka')} className="hover:text-amber-700">
                Tours
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900 truncate">Negombo City Tour</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Cultural & Colonial Heritage</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              Negombo City Tour – Historic Fort, Dutch Canals & Sacred Temples
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
              Explore the rich historical heart of Negombo, affectionately called Sri Lanka’s "Little Rome." 
              This private 3.5-hour cultural city tour guides you through 17th-century Dutch colonial fortifications, the tranquil Hamilton Canal waterway, vaulted ceiling frescoes at St. Mary’s Church, and the historic dragon portal at Angurukaramulla Buddhist Temple.
            </p>

            {/* Quick Tour Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm mb-6">
              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Tour Duration</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  {tour.duration}
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Pickup Area</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  Negombo / Katunayake
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80 col-span-2 sm:col-span-1">
                <span className="text-stone-400 block text-[11px] font-semibold">Focus</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  Architecture & History
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                id="negombo-city-whatsapp-btn"
                href={getWhatsAppUrl(
                  "Hello! I am interested in booking the Negombo Historic City & Cultural Heritage Tour. Could you please check availability and pricing?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href="#negombo-city-inquiry-box"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Send Booking Inquiry</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src={tour.heroImage}
                alt="Negombo historic city center and Dutch canal architecture"
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
                    alt={`Negombo city tour landmark stop ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Detailed Itinerary and Sightseeing Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            {/* Context Section for Humans & Search Engines */}
            <section aria-labelledby="about-negombo-heritage">
              <h2 id="about-negombo-heritage" className="font-heading font-extrabold text-2xl text-stone-900 mb-4">
                Discovering Negombo's Living History
              </h2>
              <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
                <p>
                  Long before becoming a popular coastal beach stop near Bandaranaike International Airport (CMB), Negombo was a vital commercial cinnamon and spice port contested by Portuguese, Dutch, and British colonial powers.
                </p>
                <p>
                  This guided city tour introduces you to the surviving physical landmarks of these eras. You will walk along the Dutch-constructed canal system that once ferried spices from inland plantations to merchant ships, step inside the century-old Catholic sanctuary of St. Mary’s to view ceiling paintings executed by local artists, and explore the ancient Buddhist heritage of Angurukaramulla Temple.
                </p>
              </div>
            </section>

            {/* Step-by-Step Itinerary */}
            <section id="city-tour-itinerary" aria-labelledby="itinerary-heading">
              <h2 id="itinerary-heading" className="font-heading font-extrabold text-2xl text-stone-900 mb-6">
                Complete Negombo City Itinerary
              </h2>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-stone-200">
                {tour.itinerary.map((stop) => (
                  <div key={stop.stopNumber} className="relative flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 ring-4 ring-[#FAF8F5]">
                      {stop.stopNumber}
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex-1">
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                        <h3 className="font-heading font-bold text-base text-stone-900">
                          {stop.title}
                        </h3>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
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
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm" aria-labelledby="inclusions-heading">
              <h2 id="inclusions-heading" className="font-heading font-extrabold text-xl text-stone-900 mb-6">
                What is Included in Your Negombo City Tour
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
          <aside className="lg:col-span-5">
            <div id="negombo-city-inquiry-box" className="sticky top-24">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 mb-4 text-xs text-amber-900">
                <span className="font-bold block mb-1">Local Guide Guarantee</span>
                Our drivers are licensed Negombo residents who take pride in sharing their hometown’s culture with transparency and care.
              </div>
              <InquiryForm
                initialTourId={tour.id}
                compact={true}
                formType="Negombo City Tour Page Booking"
              />
            </div>
          </aside>
        </div>

        {/* Natural Internal Links to other tours */}
        <RelatedTours currentTourSlug={tour.slug} />
      </div>
    </article>
  );
};
