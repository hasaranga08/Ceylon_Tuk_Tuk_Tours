import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId } from '../types';
import { siteConfig, toursData } from '../config/siteConfig';

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, tourId?: string) => void;
  selectedTourForInquiry: string | null;
  setSelectedTourForInquiry: (tourId: string | null) => void;
  isInquiryModalOpen: boolean;
  openInquiryModal: (tourId?: string) => void;
  closeInquiryModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const validPages: PageId[] = [
  'home',
  'tours',
  'tuk-tuk-tours-sri-lanka',
  'negombo-tuk-tuk-tour',
  'negombo-tuktuk-tour',
  'negombo-city-tour',
  'colombo-city-tour',
  'negombo-lagoon-tour',
  'local-food-culture-tour',
  'local-food-culture-experience',
  'sri-lanka-private-tours',
  'private-sri-lanka-tours',
  'gallery',
  'about',
  'contact',
];

const getPageFromLocation = (): PageId => {
  // Support existing hash URLs during the transition
  const hash = window.location.hash.replace('#/', '').replace('#', '');

  if (hash && validPages.includes(hash as PageId)) {
    return hash as PageId;
  }

  // Use clean pathname URLs
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');

  if (!pathname) {
    return 'home';
  }

  if (validPages.includes(pathname as PageId)) {
    return pathname as PageId;
  }

  return 'home';
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedTourForInquiry, setSelectedTourForInquiry] = useState<string | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);

  // Parse page from clean URL path, while supporting old hash URLs
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromLocation());
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update SEO metadata dynamically when page changes
  useEffect(() => {
    let title = 'Ceylon Tuk Tuk Tours | Private Tuk Tuk Tours in Sri Lanka';
    let description =
      'Ceylon Tuk Tuk Tours offers private Tuk Tuk tours and local experiences in Negombo, Colombo and beyond. Explore Sri Lanka with Anthony Appuhamy.';
    let canonical = 'https://ceylontuktuktours.com.lk/';

    if (currentPage === 'tours' || currentPage === 'tuk-tuk-tours-sri-lanka') {
      title = `Sri Lanka TukTuk Tours – Negombo & Colombo Packages | ${siteConfig.businessName}`;
      description =
        'Browse authentic Sri Lanka TukTuk tour packages. Half-day and full-day private itineraries in Negombo, Colombo, and Muthurajawela with free hotel pickup.';
      canonical = 'https://ceylontuktuktours.com.lk/tuk-tuk-tours-sri-lanka';
    } else if (currentPage === 'negombo-tuk-tuk-tour' || currentPage === 'negombo-tuktuk-tour') {
      title = `Negombo TukTuk Tour – Coastal & Village Ride | ${siteConfig.businessName}`;
      description =
        'Private 3-hour Negombo TukTuk tour through fishing beaches, catamaran harbors, coconut palm lanes, and ocean viewpoints. Includes fresh King Coconut.';
      canonical = 'https://ceylontuktuktours.com.lk/negombo-tuk-tuk-tour';
    } else if (currentPage === 'negombo-city-tour') {
      title = `Negombo City Tour – Historic Dutch Fort, Canals & Temples | ${siteConfig.businessName}`;
      description =
        "Discover Negombo's Little Rome on a guided city tour. Visit the 17th-century Dutch Fort, Hamilton Canal, St. Mary's Church, and Angurukaramulla Temple.";
      canonical = 'https://ceylontuktuktours.com.lk/negombo-city-tour';
    } else if (currentPage === 'colombo-city-tour') {
      title = `Colombo City Tour – Sightseeing & Street Food TukTuk Safari | ${siteConfig.businessName}`;
      description =
        "Explore Colombo's Pettah markets, Red Mosque, Gangaramaya Temple, and Galle Face Green street food by private TukTuk. Flexible pickup included.";
      canonical = 'https://ceylontuktuktours.com.lk/colombo-city-tour';
    } else if (currentPage === 'negombo-lagoon-tour') {
      title = `Negombo Lagoon Tour – Muthurajawela Mangrove Boat Safari | ${siteConfig.businessName}`;
      description =
        'Private Negombo lagoon tour and Muthurajawela mangrove boat safari. Spot kingfishers, herons, and water monitors with hotel pickup in Negombo included.';
      canonical = 'https://ceylontuktuktours.com.lk/negombo-lagoon-tour';
    } else if (currentPage === 'local-food-culture-tour' || currentPage === 'local-food-culture-experience') {
      title = 'Local Food & Culture Experience in Sri Lanka | Ceylon Tuk Tuk Tours';
      description =
        'Experience authentic Sri Lankan street food, village culture, local markets, and traditional tastes on a private Tuk Tuk tour with Ceylon Tuk Tuk Tours.';
      canonical = 'https://ceylontuktuktours.com.lk/local-food-culture-tour';
    } else if (currentPage === 'sri-lanka-private-tours' || currentPage === 'private-sri-lanka-tours') {
      title = `Sri Lanka Private Tours & Custom Day Trips from Negombo | ${siteConfig.businessName}`;
      description =
        'Custom private day tours from Negombo to Sigiriya Rock, Kandy, Galle Fort, and Bandaranaike Airport transfers. Choice of comfortable private car, van, or classic Tuk Tuk.';
      canonical = 'https://ceylontuktuktours.com.lk/sri-lanka-private-tours';
    } else if (currentPage === 'gallery') {
      title = `Photo Gallery – Sri Lanka Tour Moments & Sights | ${siteConfig.businessName}`;
      description =
        'Browse photos of authentic private Tuk Tuk tours, Negombo fishing beaches, coastal lagoons, wildlife safaris, and culture across Sri Lanka with Anthony Appuhamy.';
      canonical = 'https://ceylontuktuktours.com.lk/gallery';
    } else if (currentPage === 'about') {
      title = `About Our Local TukTuk Guides in Negombo | ${siteConfig.businessName}`;
      description =
        'Meet your local Sri Lankan driver-guide team based in Negombo. Dedicated to authentic hospitality, cultural heritage, passenger safety, and fair local pricing.';
      canonical = 'https://ceylontuktuktours.com.lk/about';
    } else if (currentPage === 'contact') {
      title = `Contact Local Tour Guides in Negombo | ${siteConfig.businessName}`;
      description =
        'Get in touch with our licensed local driver team in Negombo, Sri Lanka. Inquire online or message directly on WhatsApp for tour availability and custom quotes.';
      canonical = 'https://ceylontuktuktours.com.lk/contact';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonical);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: PageId, tourId?: string) => {
    if (tourId) {
      setSelectedTourForInquiry(tourId);
    }

    setCurrentPage(page);

    const path = page === 'home' ? '/' : `/${page}`;

    // Use clean URLs instead of hash URLs
    window.history.pushState({}, '', path);
  };

  const openInquiryModal = (tourId?: string) => {
    if (tourId) {
      setSelectedTourForInquiry(tourId);
    }
    setIsInquiryModalOpen(true);
  };

  const closeInquiryModal = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedTourForInquiry,
        setSelectedTourForInquiry,
        isInquiryModalOpen,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
