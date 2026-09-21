import React from 'react';
import { Users, Check, Calendar } from 'lucide-react';
import { Vehicle } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const { openInquiryModal } = useNavigation();

  return (
    <article
      id={`vehicle-card-${vehicle.id}`}
      className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span>{vehicle.capacity}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
            {vehicle.type}
          </span>
          <h3 className="font-heading font-bold text-lg text-stone-900 mb-2 leading-snug">
            {vehicle.name}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
            {vehicle.description}
          </p>

          <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-stone-700">
            {vehicle.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-stone-100">
          <div className="mb-3 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Best for: </span>
            <span>{vehicle.idealFor}</span>
          </div>

          <button
            id={`select-vehicle-${vehicle.id}`}
            onClick={() => openInquiryModal()}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-800 text-xs font-bold transition-all duration-200"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Request This Vehicle</span>
          </button>
        </div>
      </div>
    </article>
  );
};
