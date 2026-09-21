import React from 'react';
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  MessageCircle,
  Truck,
  Compass,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { toursData, getWhatsAppUrl } from '../config/siteConfig';
import { InquiryForm } from '../components/InquiryForm';
import { RelatedTours } from '../components/RelatedTours';
import { useNavigation } from '../context/NavigationContext';

export const PrivateToursPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const tour = toursData.find((t) => t.id === 'private-sri-lanka-tours') || toursData[3];

  const popularCustomRoutes = [
    {
      title: 'Sigiriya Rock Fortress & Dambulla Cave Temple',
      duration: 'Full Day (12-14 Hours)',
      vehicle: 'Air-Conditioned Car / Van',
      description:
        'Climb King Kashyapa’s 5th-century palace in the sky and marvel at the UNESCO golden cave temples of Dambulla.',
    },
    {
      title: 'Kandy Sacred City & Peradeniya Royal Botanical Gardens',
      duration: 'Full Day (10-12 Hours)',
      vehicle: 'Air-Conditioned Car / Van',
      description:
        'Visit the Sacred Temple of the Tooth Relic, watch traditional tea factory processing, and stroll under giant Javanese fig trees.',
    },
    {
      title: 'Galle Dutch Fort & Southern Coastal Highway',
      duration: 'Full Day (10-12 Hours)',
      vehicle: 'Air-Conditioned Car / Van',
      description:
        'Explore 300-year-old colonial ramparts, sea-turtle conservation hatcheries, and ocean viewpoints along the southern coast.',
    },
    {
      title: 'Bandaranaike Airport (CMB) VIP Transfer with Coastal Tour',
      duration: '3 - 4 Hours',
      vehicle: 'Choice of TukTuk or Air-Conditioned Vehicle',
      description:
        'Turn a boring airport layover into an unforgettable sightseeing break with safe luggage storage.',
    },
  ];

  return (
    <article id="private-tours-page" className="py-6 sm:py-10">
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
            <li className="font-semibold text-stone-900 truncate">Private Sri Lanka Tours</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Tailor-Made Island Journeys</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              Private Sri Lanka Day Tours & Island-Wide Transfers
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
              Travel on your own terms. Whether you want a comfortable air-conditioned private car or van to Sigiriya, Kandy, or Galle Fort, or an authentic local Tuk Tuk for city and village exploring—we design honest, flexible, and unforgettable private itineraries.
            </p>

            {/* Quick Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm mb-6">
              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Custom Routing</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Compass className="w-4 h-4 text-amber-600" />
                  Your Choice
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80">
                <span className="text-stone-400 block text-[11px] font-semibold">Vehicle Fleet</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Truck className="w-4 h-4 text-amber-600" />
                  TukTuk, Car, or Van
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/80 col-span-2 sm:col-span-1">
                <span className="text-stone-400 block text-[11px] font-semibold">Transparency</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Zero Hidden Fees
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                id="private-book-whatsapp-btn"
                href={getWhatsAppUrl(
                  "Hello! I am planning a custom day trip in Sri Lanka and would like a quote. Our dates and destinations are:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Discuss Route on WhatsApp</span>
              </a>

              <a
                href="#custom-tour-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Gallery */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src={tour.heroImage}
                alt="Private custom Sri Lanka tour"
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
                    alt={`Private tour destination ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Custom Routes Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            <section id="custom-routes-ideas">
              <h2 className="font-heading font-extrabold text-2xl text-stone-900 mb-2">
                Popular Day Trip Ideas Starting from Negombo / Colombo
              </h2>
              <p className="text-stone-600 text-sm mb-6">
                These are sample custom itineraries frequently requested by our travelers. We can adjust stops, departure times, and pacing according to your desires.
              </p>

              <div className="space-y-4">
                {popularCustomRoutes.map((route, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:border-amber-300 transition-colors"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-heading font-bold text-base text-stone-900">
                        {route.title}
                      </h3>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                        {route.duration}
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
                      {route.description}
                    </p>
                    <div className="text-xs text-stone-500 font-medium">
                      Recommended Vehicle: <strong className="text-stone-700">{route.vehicle}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Guarantees */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl text-stone-900 mb-6">
                All Private Day Tours Include
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Licensed, vetted driver-guide with fluent English</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Door-to-door hotel and airport pickup/drop-off</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>All fuel costs, expressway highway tolls & parking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Flexible photo stops at any scenic viewpoint</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Chilled bottled drinking water throughout the day</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero forced shopping visits or commission traps</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Inquiry Sidebar */}
          <div className="lg:col-span-5">
            <div id="custom-tour-form" className="sticky top-24">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 mb-4 text-xs text-amber-900">
                <span className="font-bold block mb-1">Custom Route Quote Request</span>
                Let us know where you want to go, your dates, and group size. We'll send you a fast, transparent quote.
              </div>
              <InquiryForm
                initialTourId={tour.id}
                compact={true}
                formType="Multi-Day Private Tour Booking"
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
