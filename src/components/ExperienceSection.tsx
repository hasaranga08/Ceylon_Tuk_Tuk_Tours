import React from 'react';
import { Palmtree, UtensilsCrossed, Smile, Camera, CheckCircle2 } from 'lucide-react';
import { experienceHighlights } from '../config/siteConfig';

export const ExperienceSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palmtree':
        return <Palmtree className="w-6 h-6 text-amber-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-600" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-600" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="experience-section" className="py-16 sm:py-20 bg-stone-100/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Genuine Island Hospitality</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Why Experience Sri Lanka by Tuk Tuk?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Tour buses separate you from the surroundings with sealed windows and loudspeaker commentary. 
            A private TukTuk connects you directly with the smells of sea-salt and roasted spices, the ocean breeze, and the genuine warmth of Sri Lankan smiles.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceHighlights.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-4">
                  {getIcon(exp.iconName)}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  {exp.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-2 leading-snug">
                  {exp.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl aspect-[16/9] bg-stone-100 mt-2">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
