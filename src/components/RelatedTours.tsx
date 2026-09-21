import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { toursData } from '../config/siteConfig';
import { useNavigation } from '../context/NavigationContext';

interface RelatedToursProps {
  currentTourSlug: string;
}

export const RelatedTours: React.FC<RelatedToursProps> = ({ currentTourSlug }) => {
  const { navigateTo } = useNavigation();
  const otherTours = toursData
    .filter((t) => t.slug !== currentTourSlug && t.id !== currentTourSlug)
    .slice(0, 3);

  return (
    <section id="related-tours-section" className="pt-10 border-t border-stone-200/80 mt-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            Explore More Sri Lanka Itineraries
          </span>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900">
            Other Popular Private Tours
          </h2>
        </div>
        <button
          id="view-all-tours-link"
          onClick={() => navigateTo('tuk-tuk-tours-sri-lanka')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
        >
          <span>All Tour Packages</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {otherTours.map((tour) => (
          <article
            key={tour.id}
            id={`related-tour-${tour.id}`}
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-4 group"
          >
            <div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-stone-100">
                <img
                  src={tour.heroImage}
                  alt={`${tour.title} in ${tour.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                  {tour.duration}
                </span>
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-700 transition-colors mb-1.5 leading-snug">
                {tour.title}
              </h3>
              <p className="text-stone-600 text-xs line-clamp-2 mb-3">
                {tour.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                {tour.location}
              </span>
              <a
                href={`#/${tour.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(tour.slug);
                }}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <span>View Tour</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
