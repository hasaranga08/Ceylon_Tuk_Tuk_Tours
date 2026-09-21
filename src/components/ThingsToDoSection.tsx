import React, { useState, useMemo } from 'react';
import {
  Compass,
  MapPin,
  Sparkles,
  PlusCircle,
  MessageCircle,
  AlertCircle,
  ArrowRight,
  SlidersHorizontal,
  ChevronDown,
} from 'lucide-react';
import { sriLankaActivitiesData, getWhatsAppUrl } from '../config/siteConfig';
import { ActivityCategory, SriLankaActivity } from '../types';
import { useNavigation } from '../context/NavigationContext';

const INITIAL_VISIBLE_COUNT = 5;

const CATEGORIES: ActivityCategory[] = [
  'ALL',
  'WEST COAST',
  'CULTURAL TRIANGLE',
  'HILL COUNTRY',
  'SOUTH COAST',
  'WILDLIFE',
  'EAST COAST',
  'COLOMBO & NEGOMBO',
];

export const ThingsToDoSection: React.FC = () => {
  const { openInquiryModal } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<ActivityCategory>('ALL');
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredActivities = useMemo(() => {
    if (activeCategory === 'ALL') {
      return sriLankaActivitiesData;
    }
    return sriLankaActivitiesData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat: ActivityCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const visibleActivities = useMemo(() => {
    if (showAll) {
      return filteredActivities;
    }
    return filteredActivities.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredActivities, showAll]);

  const hasMore = filteredActivities.length > INITIAL_VISIBLE_COUNT && !showAll;
  const remainingCount = filteredActivities.length - INITIAL_VISIBLE_COUNT;

  const handleActivitySelect = (activity: SriLankaActivity) => {
    openInquiryModal(activity.id);
  };

  const handleCustomPlanClick = () => {
    openInquiryModal('custom-trip-builder');
  };

  return (
    <section
      id="things-to-do-section"
      className="py-16 sm:py-24 bg-stone-900 text-stone-100 relative overflow-hidden"
    >
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Island Experiences</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-5 leading-tight">
            Things to Do in Sri Lanka
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover the experiences that make Sri Lanka special — from ancient cities and mountain landscapes to wildlife, beaches, food and local life.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none no-scrollbar" role="tablist">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === 'ALL'
                  ? sriLankaActivitiesData.length
                  : sriLankaActivitiesData.filter((a) => a.category === cat).length;

              return (
                <button
                  key={cat}
                  id={`filter-activity-${cat.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md font-extrabold ring-2 ring-amber-400/40'
                      : 'bg-stone-800/90 hover:bg-stone-750 text-stone-300 border border-stone-700/60 hover:text-white'
                  }`}
                >
                  {cat} <span className="opacity-70 text-[10px] sm:text-xs ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Activities Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${hasMore ? 'mb-8 sm:mb-10' : 'mb-16'}`}>
          {visibleActivities.map((activity) => {
            const defaultButtonLabel = activity.ctaText || 'Ask About This';

            return (
              <article
                key={activity.id}
                id={`activity-${activity.id}`}
                className="bg-stone-800/85 rounded-2xl overflow-hidden border border-stone-750 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={activity.image}
                      alt={activity.altText || activity.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-xs border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                      {activity.category}
                    </div>

                    {/* Sub-tag if present */}
                    {activity.tag && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-stone-900/80 text-stone-300 text-[10px] font-medium border border-stone-700">
                        {activity.tag}
                      </div>
                    )}

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-stone-200 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{activity.location}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {activity.title}
                    </h3>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-3">
                      {activity.description}
                    </p>

                    {/* Disclaimer for wildlife/whales/trains */}
                    {activity.disclaimer && (
                      <div className="mt-3 p-2.5 rounded-lg bg-stone-900/60 border border-stone-700 text-stone-400 text-[11px] flex items-start gap-1.5 leading-normal">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{activity.disclaimer}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 mt-2 flex items-center gap-2 border-t border-stone-750/70">
                  <button
                    type="button"
                    id={`btn-inquire-act-${activity.id}`}
                    onClick={() => handleActivitySelect(activity)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{defaultButtonLabel}</span>
                  </button>

                  <a
                    id={`btn-wa-act-${activity.id}`}
                    href={getWhatsAppUrl(activity.whatsappMessage || `Hi Anthony, I am interested in ${activity.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-stone-700/80 hover:bg-emerald-600 text-stone-300 hover:text-white transition-colors border border-stone-600/60"
                    title="Ask on WhatsApp"
                    aria-label={`Ask on WhatsApp about ${activity.title}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More Button (Loads remaining activities for current category) */}
        {hasMore && (
          <div className="flex justify-center mb-16">
            <button
              type="button"
              id="btn-view-more-activities"
              aria-label="View More Activities"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-amber-400 hover:text-amber-300 font-bold text-sm sm:text-base border border-amber-500/40 hover:border-amber-400 transition-all shadow-md hover:shadow-amber-500/10 active:scale-[0.98] cursor-pointer"
            >
              <span>View More</span>
              <span className="text-xs text-stone-400 font-medium">({remainingCount} more)</span>
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}

        {/* Build Your Sri Lanka Tour Connection CTA */}
        <div
          id="build-your-tour-box"
          className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-stone-800 to-amber-500/10 border border-amber-500/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tailor-Made Routing</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Build Your Sri Lanka Tour
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Found experiences you'd like to try? Tell us what interests you and how many days you have, and we'll help you plan a route around Sri Lanka.
            </p>
          </div>

          <button
            type="button"
            id="btn-plan-my-trip"
            onClick={handleCustomPlanClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-amber-500/20 transition-all shrink-0"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
