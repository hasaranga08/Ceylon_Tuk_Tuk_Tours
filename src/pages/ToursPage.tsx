import React from 'react';
import { TourGrid } from '../components/TourGrid';
import { CtaSection } from '../components/CtaSection';
import { FAQ } from '../components/FAQ';
import { Compass, Clock, Users, ShieldCheck, Check } from 'lucide-react';
import { toursData } from '../config/siteConfig';
import { useNavigation } from '../context/NavigationContext';

export const ToursPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div id="tours-page" className="py-8 sm:py-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center gap-2 text-xs text-stone-500">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-amber-700">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-800">All Tours</li>
          </ol>
        </nav>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5 text-amber-700" />
          <span>Private Guided Journeys</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight mb-4">
          Sri Lanka TukTuk Tours & Private Excursions
        </h1>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          From the fishing canals and colonial history of Negombo to the lively street food markets of Colombo and the peaceful birdwatching canals of Muthurajawela Lagoon. Every journey is 100% private.
        </p>
      </div>

      {/* Main Tour Grid */}
      <TourGrid showFilters={true} />

      {/* Tour Comparison Matrix */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm overflow-x-auto">
          <h2 className="font-heading font-bold text-xl text-stone-900 mb-4">
            Quick Tour Comparison
          </h2>
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                <th className="p-3.5 font-bold rounded-l-xl">Tour Name</th>
                <th className="p-3.5 font-bold">Duration</th>
                <th className="p-3.5 font-bold">Primary Highlights</th>
                <th className="p-3.5 font-bold">Vehicle</th>
                <th className="p-3.5 font-bold rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {toursData.map((tour) => (
                <tr key={tour.id} className="hover:bg-amber-50/40 transition-colors">
                  <td className="p-3.5 font-bold text-stone-900">{tour.shortTitle}</td>
                  <td className="p-3.5 text-stone-600 whitespace-nowrap">{tour.duration}</td>
                  <td className="p-3.5 text-stone-600 line-clamp-1 max-w-xs">{tour.tagline}</td>
                  <td className="p-3.5 text-stone-600">{tour.vehicleType.split('(')[0]}</td>
                  <td className="p-3.5 whitespace-nowrap">
                    <button
                      onClick={() => navigateTo(tour.slug)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
                    >
                      View Details &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <FAQ />

      {/* CTA */}
      <CtaSection />
    </div>
  );
};
