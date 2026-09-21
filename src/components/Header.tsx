import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Compass,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  Clock,
  MapPin,
  Calendar,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { siteConfig, toursData, getWhatsAppUrl } from '../config/siteConfig';
import { PageId } from '../types';

export const Header: React.FC = () => {
  const { currentPage, navigateTo, openInquiryModal } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, targetElementId?: string) => {
    setIsMobileMenuOpen(false);
    setIsToursDropdownOpen(false);
    navigateTo(page);
    if (targetElementId) {
      setTimeout(() => {
        const el = document.getElementById(targetElementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-stone-200/50 py-3.5'
      }`}
    >
      {/* Top micro bar for phone & location */}
      <div className="hidden lg:block border-b border-stone-200/60 pb-1.5 mb-2 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-800">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              Negombo & Colombo, Sri Lanka
            </span>
            <span className="text-stone-300">|</span>
            <span className="flex items-center gap-1.5 text-stone-600">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              Tours daily 6:30 AM – 8:00 PM • Free Hotel & Airport Pickup
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 text-stone-700 hover:text-amber-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-stone-700 hover:text-amber-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call: {siteConfig.whatsappDisplayNumber}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
            aria-label={`${siteConfig.businessName} - Home`}
          >
            <img
              src={siteConfig.logoUrl}
              alt={siteConfig.businessName}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 drop-shadow-xs"
            />
            <div className="flex flex-col justify-center">
              <span className="block font-heading font-bold text-base sm:text-lg md:text-xl text-stone-900 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">
                {siteConfig.businessName}
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-amber-700 tracking-wider uppercase mt-0.5">
                Authentic Private Tours
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            <button
              id="nav-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'home'
                  ? 'text-amber-700 bg-amber-50/80 font-bold'
                  : 'text-stone-700 hover:text-amber-700 hover:bg-stone-100/60'
              }`}
            >
              Home
            </button>

            {/* Tours Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsToursDropdownOpen(true)}
              onMouseLeave={() => setIsToursDropdownOpen(false)}
            >
              <button
                id="nav-tours-dropdown"
                onClick={() => handleNavClick('tours')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === 'tours' ||
                  currentPage.includes('-tour') ||
                  currentPage.includes('-tours') ||
                  currentPage.includes('-experience')
                    ? 'text-amber-700 bg-amber-50/80 font-bold'
                    : 'text-stone-700 hover:text-amber-700 hover:bg-stone-100/60'
                }`}
                aria-expanded={isToursDropdownOpen}
              >
                <span>Tours</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isToursDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isToursDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-200/90 py-2.5 overflow-hidden">
                    <div className="px-4 py-1.5 border-b border-stone-100 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Popular Guided Tours
                    </div>
                    {toursData.map((tour) => (
                      <button
                        key={tour.id}
                        id={`nav-sub-${tour.slug}`}
                        onClick={() => handleNavClick(tour.slug)}
                        className={`w-full text-left px-4 py-2.5 hover:bg-amber-50/80 transition-colors flex flex-col ${
                          currentPage === tour.slug ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-stone-800'
                        }`}
                      >
                        <span className="text-sm font-semibold leading-snug">{tour.shortTitle}</span>
                        <span className="text-xs text-stone-500 line-clamp-1">{tour.duration} • {tour.location}</span>
                      </button>
                    ))}
                    <div className="pt-2 border-t border-stone-100 mt-1 px-3">
                      <button
                        id="nav-all-tours-view"
                        onClick={() => handleNavClick('tours')}
                        className="w-full text-center py-2 bg-stone-100 hover:bg-amber-100/70 text-stone-800 hover:text-amber-900 rounded-lg text-xs font-bold transition-colors"
                      >
                        View All Tour Packages &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-things-to-do"
              onClick={() => handleNavClick('home', 'things-to-do-section')}
              className="px-3 py-2 rounded-lg text-sm font-semibold transition-colors text-stone-700 hover:text-amber-700 hover:bg-stone-100/60"
            >
              Things to Do
            </button>

            <button
              id="nav-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'about'
                  ? 'text-amber-700 bg-amber-50/80 font-bold'
                  : 'text-stone-700 hover:text-amber-700 hover:bg-stone-100/60'
              }`}
            >
              About Us
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'contact'
                  ? 'text-amber-700 bg-amber-50/80 font-bold'
                  : 'text-stone-700 hover:text-amber-700 hover:bg-stone-100/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Quick CTA */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with local guide"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Plan My Tour Modal Button */}
            <button
              id="header-inquire-btn"
              onClick={() => openInquiryModal()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan My Tour</span>
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Icon + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quick WhatsApp message"
              className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="lg:hidden mt-3 pt-3 border-t border-stone-200/80 pb-4 space-y-2 animate-in slide-in-from-top-4 duration-200"
          >
            {/* Mobile Branding Header */}
            <button
              onClick={() => handleNavClick('home')}
              className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors mb-2 text-left"
              aria-label={`${siteConfig.businessName} - Home`}
            >
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.businessName}
                className="h-12 w-auto object-contain shrink-0"
              />
              <div>
                <span className="block font-heading font-bold text-sm text-stone-900 leading-tight">
                  {siteConfig.businessName}
                </span>
                <span className="block text-[11px] text-amber-700 font-medium mt-0.5">
                  Authentic Sri Lanka Tours
                </span>
              </div>
            </button>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                id="mobile-nav-home"
                onClick={() => handleNavClick('home')}
                className={`py-2.5 px-3 rounded-xl text-left text-sm font-bold ${
                  currentPage === 'home'
                    ? 'bg-amber-100/80 text-amber-900 border border-amber-300/60'
                    : 'bg-stone-100 text-stone-800'
                }`}
              >
                Home
              </button>
              <button
                id="mobile-nav-all-tours"
                onClick={() => handleNavClick('tours')}
                className={`py-2.5 px-3 rounded-xl text-left text-sm font-bold ${
                  currentPage === 'tours'
                    ? 'bg-amber-100/80 text-amber-900 border border-amber-300/60'
                    : 'bg-stone-100 text-stone-800'
                }`}
              >
                All Tours
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                id="mobile-nav-multi-day"
                onClick={() => handleNavClick('home', 'multi-day-tours-group')}
                className="py-2.5 px-3 rounded-xl text-left text-xs sm:text-sm font-bold bg-amber-50 text-amber-950 border border-amber-200/80"
              >
                Multi-Day Tours
              </button>
              <button
                id="mobile-nav-things-to-do"
                onClick={() => handleNavClick('home', 'things-to-do-section')}
                className="py-2.5 px-3 rounded-xl text-left text-xs sm:text-sm font-bold bg-amber-50 text-amber-950 border border-amber-200/80"
              >
                Things to Do
              </button>
            </div>

            {/* Tour Subpages Direct Links on Mobile */}
            <div className="bg-white rounded-2xl p-2.5 border border-stone-200/80 space-y-1">
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Direct Tour Pages
              </div>
              {toursData.map((tour) => (
                <button
                  key={tour.id}
                  id={`mobile-sub-${tour.slug}`}
                  onClick={() => handleNavClick(tour.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between items-center ${
                    currentPage === tour.slug
                      ? 'bg-amber-50 text-amber-800 font-semibold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="font-medium">{tour.shortTitle}</span>
                  <span className="text-xs text-stone-400">{tour.duration}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                id="mobile-nav-about"
                onClick={() => handleNavClick('about')}
                className={`py-2.5 px-3 rounded-xl text-left text-sm font-bold ${
                  currentPage === 'about'
                    ? 'bg-amber-100/80 text-amber-900 border border-amber-300/60'
                    : 'bg-stone-100 text-stone-800'
                }`}
              >
                About Us
              </button>
              <button
                id="mobile-nav-contact"
                onClick={() => handleNavClick('contact')}
                className={`py-2.5 px-3 rounded-xl text-left text-sm font-bold ${
                  currentPage === 'contact'
                    ? 'bg-amber-100/80 text-amber-900 border border-amber-300/60'
                    : 'bg-stone-100 text-stone-800'
                }`}
              >
                Contact & Map
              </button>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                id="mobile-inquire-modal-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openInquiryModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Send Tour Inquiry</span>
              </button>

              <a
                id="mobile-menu-whatsapp-btn"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp ({siteConfig.whatsappDisplayNumber})</span>
              </a>

              <a
                id="mobile-menu-email-btn"
                href={`mailto:${siteConfig.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-semibold text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>Email: {siteConfig.email}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
