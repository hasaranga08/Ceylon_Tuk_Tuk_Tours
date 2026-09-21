import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { siteConfig, toursData, faqsData } from '../config/siteConfig';

export const StructuredData: React.FC = () => {
  const { currentPage } = useNavigation();

  useEffect(() => {
    // Remove any previously injected structured data scripts
    const existingScripts = document.querySelectorAll('script[data-dynamic-jsonld="true"]');
    existingScripts.forEach((s) => s.remove());

    const scriptsToAdd: object[] = [];

    // 1. BreadcrumbList Schema
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ceylontuktuktours.com/',
      },
    ];

    if (currentPage !== 'home') {
      const tour = toursData.find(
        (t) =>
          t.slug === currentPage ||
          t.id === currentPage ||
          (currentPage === 'local-food-culture-experience' && t.slug === 'local-food-culture-tour')
      );
      if (tour) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Sri Lanka TukTuk Tours',
          item: 'https://ceylontuktuktours.com/#/tuk-tuk-tours-sri-lanka',
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: tour.shortTitle,
          item: `https://ceylontuktuktours.com/#/${tour.slug}`,
        });
      } else {
        const isToursCatalog = currentPage === 'tours' || currentPage === 'tuk-tuk-tours-sri-lanka';
        const pageName = isToursCatalog
          ? 'Sri Lanka TukTuk Tours'
          : currentPage === 'about'
          ? 'About Our Guides'
          : currentPage === 'contact'
          ? 'Contact Tour Guides'
          : currentPage;

        const pageUrl = isToursCatalog
          ? 'https://ceylontuktuktours.com/#/tuk-tuk-tours-sri-lanka'
          : `https://ceylontuktuktours.com/#/${currentPage}`;

        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: pageUrl,
        });
      }
    }

    scriptsToAdd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    });

    // 2. TouristTrip Schema for individual Tour Pages
    const activeTour = toursData.find(
      (t) =>
        t.slug === currentPage ||
        t.id === currentPage ||
        (currentPage === 'local-food-culture-experience' && t.slug === 'local-food-culture-tour')
    );
    if (activeTour) {
      scriptsToAdd.push({
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: activeTour.title,
        description: activeTour.summary,
        touristType: ['Family', 'Couples', 'Solo Travelers', 'Adventure Seekers'],
        subTrip: activeTour.itinerary.map((stop) => ({
          '@type': 'TouristTrip',
          name: stop.title,
          description: stop.description,
        })),
        provider: {
          '@type': 'TravelAgency',
          name: siteConfig.businessName,
          image: 'https://ceylontuktuktours.com/logo.png',
          telephone: '+94776067981',
          email: siteConfig.email,
        },
        offers: {
          '@type': 'Offer',
          description: activeTour.pricingNote,
          priceCurrency: 'LKR',
          availability: 'https://schema.org/InStock',
        },
      });
    }

    // 3. FAQPage Schema strictly for pages where the visible FAQ section is rendered
    const hasVisibleFaq =
      currentPage === 'home' || currentPage === 'tours' || currentPage === 'tuk-tuk-tours-sri-lanka';

    if (hasVisibleFaq) {
      scriptsToAdd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqsData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // Inject the scripts into document head
    scriptsToAdd.forEach((schemaData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-jsonld', 'true');
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

    return () => {
      const addedScripts = document.querySelectorAll('script[data-dynamic-jsonld="true"]');
      addedScripts.forEach((s) => s.remove());
    };
  }, [currentPage]);

  return null;
};
