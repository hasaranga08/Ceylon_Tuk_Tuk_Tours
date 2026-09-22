import React from 'react';
import { Compass, MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { siteConfig, toursData, getWhatsAppUrl } from '../config/siteConfig';
import { useNavigation } from '../context/NavigationContext';
import { getAssetPath } from '../utils/assetPath';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer id="site-footer" className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2">
            <button
              id="footer-brand-logo-btn"
              onClick={() => {
                navigateTo('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 mb-4 text-left focus:outline-none"
              aria-label={`${siteConfig.businessName} - Back to Home`}
            >
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.businessName}
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 drop-shadow-md"
              />
              <div>
                <span className="block font-heading font-bold text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {siteConfig.businessName}
                </span>
                <span className="block text-[11px] font-semibold text-amber-400 tracking-wider uppercase">
                  Sri Lanka Tours
                </span>
              </div>
            </button>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-3 max-w-sm">
              Private Tuk Tuk tours and local experiences in Sri Lanka.
            </p>

            <p className="text-stone-200 text-xs sm:text-sm font-semibold mb-4">
              {siteConfig.ownerName}
            </p>

            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition-colors"
                >
                  WhatsApp: {siteConfig.whatsappDisplayNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{siteConfig.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => navigateTo('home')}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-tours"
                  onClick={() => navigateTo('tours')}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  All Tours & Packages
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-multi-day"
                  onClick={() => {
                    navigateTo('home');
                    setTimeout(() => {
                      document.getElementById('multi-day-tours-group')?.scrollIntoView({ behavior: 'smooth' });
                    }, 120);
                  }}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  Multi-Day Tours
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-things-to-do"
                  onClick={() => {
                    navigateTo('home');
                    setTimeout(() => {
                      document.getElementById('things-to-do-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 120);
                  }}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  Things to Do in Sri Lanka
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-gallery"
                  onClick={() => navigateTo('gallery')}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => navigateTo('about')}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  About Our Team
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => navigateTo('contact')}
                  className="hover:text-amber-400 transition-colors text-stone-300"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Tours Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Featured Tours
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {toursData.map((tour) => (
                <li key={tour.id}>
                  <button
                    id={`footer-tour-${tour.slug}`}
                    onClick={() => navigateTo(tour.slug)}
                    className="hover:text-amber-400 transition-colors text-stone-300 text-left"
                  >
                    {tour.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-stone-900" />
                  <span>WhatsApp: {siteConfig.whatsappDisplayNumber}</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t border-stone-800">
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Follow & Reviews
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={siteConfig.socialLinks.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-stone-800 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  TripAdvisor
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-stone-800 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-stone-800 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & SEO Meta strip */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved. Registered private tourism business in Negombo, Sri Lanka.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={getAssetPath('/robots.txt')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              robots.txt
            </a>
            <span>•</span>
            <a
              href={getAssetPath('/sitemap.xml')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              sitemap.xml
            </a>
            <span>•</span>
            <a
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Google Business Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
