import React, { useState } from 'react';
import {
  Compass,
  Waves,
  MapPin,
  MessageCircle,
  Calendar,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { southCoastActivitiesData, getWhatsAppUrl } from '../config/siteConfig';
import { SouthCoastActivity } from '../types';
import { useNavigation } from '../context/NavigationContext';

export const SouthCoastSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();
  const [filterTag, setFilterTag] = useState<string>('all');

  const tags = [
    { id: 'all', label: 'All Experiences' },
    { id: 'surf', label: 'Surfing & Beach Life' },
    { id: 'heritage', label: 'Heritage & Culture' },
    { id: 'marine', label: 'Marine & Nature' },
    { id: 'food', label: 'Food & Village Life' },
  ];

  const filteredActivities = southCoastActivitiesData.filter((item) => {
    if (filterTag === 'all') return true;
    if (filterTag === 'surf')
      return item.id.includes('weligama') || item.id.includes('hiriketiya') || item.id.includes('beach');
    if (filterTag === 'heritage')
      return item.id.includes('galle') || item.id.includes('sunset');
    if (filterTag === 'marine')
      return item.id.includes('whale') || item.id.includes('snorkeling') || item.id.includes('unawatuna');
    if (filterTag === 'food')
      return item.id.includes('food') || item.id.includes('village');
    return true;
  });

  return (
    <section
      id="south-coast-section"
      className="py-16 sm:py-24 bg-stone-900 text-stone-100 relative overflow-hidden"
    >
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5 text-amber-400" />
            <span>Southern Province Highlights</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-5 leading-tight">
            Discover Sri Lanka’s South Coast
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-6">
            Sri Lanka’s southern coast is known for world-class beginner surf breaks, relaxed coastal café culture, marine excursions, UNESCO cobblestone fortifications, and unhurried tropical island living.
          </p>

          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mx-auto">
            Whether you want a day excursion from Negombo/Colombo or an extended multi-day coastal stay, our private drivers connect you to trusted local surf schools, boat operators, and scenic viewpoints.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setFilterTag(tag.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filterTag === tag.id
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'bg-stone-800/80 hover:bg-stone-750 text-stone-300 border border-stone-700/60'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* 10 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredActivities.map((activity: SouthCoastActivity) => (
            <article
              key={activity.id}
              id={`south-coast-${activity.id}`}
              className="bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-750 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Letter badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-stone-900/90 backdrop-blur-md border border-stone-700/80 flex items-center justify-center text-amber-400 font-extrabold text-xs">
                    {activity.letter}
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-md text-stone-200 text-[11px] font-semibold flex items-center gap-1 border border-stone-700/60">
                    <span>{activity.tag}</span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{activity.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                    {activity.title}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>

                  {/* Realistic Note / Disclaimer */}
                  {activity.disclaimer && (
                    <div className="p-2.5 rounded-xl bg-stone-850 border border-stone-700/60 text-[11px] text-stone-400 flex items-start gap-2 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{activity.disclaimer}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-stone-700/50 space-y-2 mt-auto">
                <a
                  id={`whatsapp-${activity.id}`}
                  href={getWhatsAppUrl(activity.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                  <span>{activity.ctaText}</span>
                </a>

                <button
                  type="button"
                  id={`inquire-${activity.id}`}
                  onClick={() => openInquiryModal(`South Coast: ${activity.title}`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-700 hover:bg-stone-650 text-stone-200 text-xs font-semibold transition-colors"
                >
                  <Calendar className="w-3 h-3 text-stone-400" />
                  <span>Include in My Trip Plan</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* South Coast Bottom CTA */}
        <div className="bg-stone-850 rounded-3xl p-6 sm:p-8 border border-stone-750 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Private Transfers & Custom South Coast Routes
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              Ready to visit Weligama, Mirissa, Hiriketiya, or Galle Fort?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg">
              We provide clean, air-conditioned cars and passenger vans for comfortable long-distance transfers, plus local Tuk Tuk hops for scenic village routes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              id="south-coast-plan-trip-btn"
              onClick={() => openInquiryModal('South Coast Coastal Tour')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-extrabold shadow-sm transition-colors"
            >
              <span>Plan South Coast Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              id="south-coast-whatsapp-btn"
              href={getWhatsAppUrl(
                "Hello Ceylon Tuk Tuk Tours! I'm planning a trip to Sri Lanka's South Coast (Weligama, Mirissa, Hiriketiya, Galle). Could you please provide transport options and recommendations?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-750 hover:bg-stone-700 text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
