import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  location: string;
}

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const photos: GalleryItem[] = [
    {
      src: getAssetPath('/home.jpeg'),
      alt: 'Authentic Sri Lankan Tuk Tuk with canopy roof on coastal road beside palm trees',
      caption: 'The authentic Sri Lankan three-wheeler ready for a coastal adventure.',
      location: 'Negombo Coastal Road',
    },
    {
      src: getAssetPath('/images/fishing_boats.jpg'),
      alt: 'Traditional wooden outrigger fishing boats resting on Negombo beach',
      caption: 'Centuries-old wooden outrigger boats resting on Negombo beach after morning catch.',
      location: 'Lellama Beach, Negombo',
    },
    {
      src: getAssetPath('/images/red_mosque_colombo.jpg'),
      alt: 'Iconic red and white striped Jami Ul-Alfar Mosque in Pettah, Colombo',
      caption: 'Navigating the historic trading avenues and candy-striped Red Mosque of Pettah.',
      location: 'Pettah Bazaars, Colombo',
    },
    {
      src: getAssetPath('/images/mangrove_lagoon.JPG'),
      alt: 'Muthurajawela wetlands quiet boat canal in morning light',
      caption: 'Serene mangrove canals of Muthurajawela marsh bird sanctuary.',
      location: 'Muthurajawela Lagoon',
    },
    {
      src: getAssetPath('/images/galle_face.jpg'),
      alt: 'Golden hour sunset over the Indian Ocean at Galle Face Green',
      caption: 'Finishing the day with fresh King Coconut as the sun sets over the ocean.',
      location: 'Galle Face Green, Colombo',
    },
    {
      src: getAssetPath('/images/Ella Day Experience.WEBP'),
      alt: 'Historic Nine Arch Bridge surrounded by lush tea hills in Ella',
      caption: 'Scenic colonial viaduct and mist-shrouded green hills of Ella.',
      location: 'Ella Hill Country',
    },
  ];

  return (
    <section id="gallery-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Camera className="w-3.5 h-3.5 text-amber-700" />
          <span>Moments on the Road</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
          Sri Lanka Through Our Windshield
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Unfiltered, everyday scenes from our Negombo, Colombo, and lagoon journeys. Click any photo to expand.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setActivePhoto(photo)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[11px] font-semibold text-amber-300 block mb-0.5">
                {photo.location}
              </span>
              <p className="text-xs sm:text-sm font-medium line-clamp-1">
                {photo.caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-gallery-lightbox-btn"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-5 bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  {activePhoto.location}
                </span>
                <p className="text-sm text-stone-200">{activePhoto.caption}</p>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors self-start sm:self-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
