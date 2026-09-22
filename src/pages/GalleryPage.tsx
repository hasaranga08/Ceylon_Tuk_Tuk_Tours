import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Maximize2,
  Calendar,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { galleryItems } from '../data/galleryData';
import { GalleryItem } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { getAssetPath } from '../utils/assetPath';

const PAGE_SIZE = 9;

export const GalleryPage: React.FC = () => {
  const { navigateTo, openInquiryModal } = useNavigation();
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Display images up to the current visible count
  const visibleItems = useMemo(() => {
    return galleryItems.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMore = visibleCount < galleryItems.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  // Current active item in lightbox
  const activeLightboxItem: GalleryItem | null = useMemo(() => {
    if (activeLightboxIndex === null || activeLightboxIndex < 0 || activeLightboxIndex >= visibleItems.length) {
      return null;
    }
    return visibleItems[activeLightboxIndex];
  }, [activeLightboxIndex, visibleItems]);

  // Lightbox navigation handlers
  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : visibleItems.length - 1;
    });
  }, [visibleItems.length]);

  const goToNext = useCallback(() => {
    setActiveLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev < visibleItems.length - 1 ? prev + 1 : 0;
    });
  }, [visibleItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, goToPrevious, goToNext]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex]);

  return (
    <div id="gallery-page" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500">
            <li>
              <button
                id="gallery-breadcrumb-home"
                onClick={() => navigateTo('home')}
                className="hover:text-amber-700 transition-colors"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900">Photo Gallery</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Journey & Tour Moments</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
            Ceylon Tuk Tuk Tours Photo Gallery
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Experience the vibrant spirit of Sri Lanka through our private tour moments. From coastal Negombo fishing harbours and historic landmarks to lush hill country trails and wildlife safaris, explore the authentic sights you will discover with Anthony Appuhamy.
          </p>
        </header>

        {/* Image Grid */}
        <section aria-label="Photo Grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => {
              const assetUrl = getAssetPath(`/images/gallery/${item.filename}`);

              return (
                <figure
                  key={item.id}
                  id={`gallery-card-${item.id}`}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={assetUrl}
                      alt={item.altText}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Expand Hover Icon */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="p-2 rounded-lg bg-amber-600/90 text-white flex items-center justify-center shadow">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Bottom Gradient for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Caption & Details */}
                  <figcaption className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-stone-900 text-base mb-1 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-end text-xs text-stone-500">
                      <span className="text-amber-700 font-semibold group-hover:underline flex items-center gap-1">
                        View photo &rarr;
                      </span>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* View More Button */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                id="gallery-view-more-btn"
                onClick={handleViewMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>View More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        {/* Bottom Booking & Contact CTA */}
        <section
          aria-label="Book Tour Banner"
          className="mt-16 bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Camera className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Create Your Own Memories</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-3">
              Ready to Explore Sri Lanka by Private Tuk Tuk?
            </h2>

            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Every photo in our gallery represents real tour moments enjoyed by travelers from all around the world. Let Anthony customize a private itinerary just for you.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                id="gallery-cta-inquire"
                onClick={() => openInquiryModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                <span>Send Tour Inquiry</span>
              </button>

              <a
                id="gallery-cta-whatsapp"
                href={getWhatsAppUrl("Hello Anthony, I was looking through your Ceylon Tuk Tuk Tours photo gallery and would like to inquire about booking a tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                id="gallery-cta-tours"
                onClick={() => navigateTo('tours')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all"
              >
                <span>Browse Tour Packages &rarr;</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && activeLightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-stone-950/80 border-b border-stone-800 text-white z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-stone-800 text-amber-300">
                {activeLightboxIndex + 1} / {visibleItems.length}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {activeLightboxItem.title}
                </h3>
              </div>
            </div>

            <button
              id="gallery-lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Previous Button */}
            <button
              id="gallery-lightbox-prev-btn"
              onClick={goToPrevious}
              aria-label="Previous Photo"
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white border border-stone-700/60 shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="max-w-5xl max-h-[70vh] sm:max-h-[78vh] flex items-center justify-center">
              <img
                src={getAssetPath(`/images/gallery/${activeLightboxItem.filename}`)}
                alt={activeLightboxItem.altText}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] sm:max-h-[78vh] max-w-full w-auto object-contain rounded-lg shadow-2xl transition-all"
              />
            </div>

            {/* Next Button */}
            <button
              id="gallery-lightbox-next-btn"
              onClick={goToNext}
              aria-label="Next Photo"
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white border border-stone-700/60 shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption Bar */}
          <div className="px-4 sm:px-6 py-4 bg-stone-950/90 border-t border-stone-800 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 z-20">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="lightbox-inquire-btn"
                onClick={() => {
                  closeLightbox();
                  openInquiryModal();
                }}
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors"
              >
                Inquire About Tour
              </button>
              <a
                id="lightbox-whatsapp-btn"
                href={getWhatsAppUrl(`Hello Anthony, I saw the photo "${activeLightboxItem.title}" in your gallery and would like to ask about this experience.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
