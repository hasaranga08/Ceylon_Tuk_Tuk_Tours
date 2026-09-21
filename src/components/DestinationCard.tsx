import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { navigateTo } = useNavigation();

  return (
    <article
      id={`destination-card-${destination.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
            {destination.region}
          </span>
          <h3 className="font-heading font-bold text-base sm:text-lg leading-tight">
            {destination.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
            {destination.description}
          </p>

          <div className="space-y-1.5 text-xs text-stone-500 mb-4 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Distance: {destination.distanceFromNegombo}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Recommended hours: {destination.bestTimeToVisit}</span>
            </div>
          </div>
        </div>

        <button
          id={`dest-view-tour-${destination.id}`}
          onClick={() => navigateTo(destination.featuredInTourId)}
          className="w-full flex items-center justify-between text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50/70 hover:bg-amber-100/70 py-2.5 px-3.5 rounded-xl transition-colors"
        >
          <span>Included in this tour</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
