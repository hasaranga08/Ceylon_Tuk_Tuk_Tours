import {
  SiteConfig,
  Tour,
  Destination,
  Vehicle,
  ExperienceHighlight,
  FAQItem,
  Testimonial,
  MultiDayTour,
  SouthCoastActivity,
  CuriousTravelerFeature,
  SriLankaActivity,
  ActivityCategory,
} from '../types';
import { resolveAssetPaths } from '../utils/assetPath';

/**
 * ==============================================================================
 * BUSINESS OWNER CONFIGURATION
 * Edit your contact details, WhatsApp, email, tours, and destinations below.
 * ==============================================================================
 */

export const siteConfig: SiteConfig = {
  businessName: 'Ceylon Tuk Tuk Tours',
  ownerName: 'Anthony Appuhamy',
  logoUrl: '/logo.png',
  legalEntity: 'Ceylon Tuk Tuk Tours',
  tagline: 'Private Tuk Tuk tours and local experiences in Sri Lanka',
  // WhatsApp number in international format without plus or spaces for wa.me links
  whatsappNumber: '94776067981',
  whatsappDisplayNumber: '+94 77 606 7981',
  phone: '+94 77 606 7981',
  email: 'tours.ceylontuktuk@gmail.com',
  address: {
    street: '',
    city: 'Negombo',
    region: 'Western Province',
    country: 'Sri Lanka',
    postalCode: '',
  },
  locationDisplay: 'Negombo, Colombo and across Sri Lanka',
  googleBusinessUrl: 'https://maps.google.com/?q=Negombo+Beach+Sri+Lanka',
  
  /**
   * FORM_ENDPOINT:
   * Replace with your active form endpoint when ready (e.g., https://formspree.io/f/your_form_id
   * or https://api.web3forms.com/submit or https://formsubmit.co/your-email@example.com).
   * If left blank, the website uses a built-in simulation with instant WhatsApp fallback.
   */
  formEndpoint: 'https://formspree.io/f/xbgllnnq',

  socialLinks: {
    facebook: 'https://facebook.com/ceylontuktuktours',
    instagram: 'https://instagram.com/ceylontuktuktours',
    tripadvisor: 'https://tripadvisor.com/Profile/ceylontuktuktours',
    youtube: 'https://youtube.com/@ceylontuktuktours',
  },
  operatingHours: 'Daily 06:00 AM – 09:00 PM (Sri Lanka Time, UTC +5:30)',
  currenciesAccepted: ['LKR (Sri Lankan Rupee)', 'USD ($)', 'EUR (€)', 'GBP (£)'],
};

/**
 * Helper to build prefilled WhatsApp URLs
 */
export function getWhatsAppUrl(customMessage?: string): string {
  if (customMessage === '') {
    return `https://wa.me/${siteConfig.whatsappNumber}`;
  }
  const defaultText =
    "Hello Ceylon Tuk Tuk Tours, I'm interested in a Sri Lanka tour. Could you please provide more information?";
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}

/**
 * ==============================================================================
 * TOURS CONFIGURATION
 * Detailed itineraries, durations, highlights, inclusions, and pricing notes.
 * ==============================================================================
 */
export const toursData: Tour[] = [
  {
    id: 'negombo-tuk-tuk-tour',
    slug: 'negombo-tuk-tuk-tour',
    title: 'Negombo Coastal & Village TukTuk Tour',
    shortTitle: 'Negombo TukTuk Tour',
    tagline: 'Lellama Fishing Harbor, Beach Catamarans, Coconut Groves & Village Life',
    duration: '3 Hours',
    location: 'Negombo Coastal Belt, Sri Lanka',
    recommendedTime: 'Morning (8:00 AM) or Afternoon (3:00 PM)',
    vehicleType: 'Authentic Sri Lankan TukTuk (Up to 3 Guests)',
    heroImage: '/images/Negombo Coastal & Village TukTuk Tour.avif',
    galleryImages: [
      '/images/fishing_boats.jpg',
      '/images/coastal_beach.jpg',
      '/home.jpeg',
    ],
    summary:
      'Ride along Negombo’s coastal roads in an authentic Sri Lankan TukTuk. Watch fishermen land outrigger catamarans at the Lellama, explore quiet village palm lanes, and enjoy fresh King Coconut water by the sea.',
    description:
      'Experience the genuine rhythm of life along Sri Lanka’s western shores. This private TukTuk excursion focuses on Negombo’s coastal fishing hamlets and daily island life. Riding in a three-wheeler lets you take in the sights, smells, and coastal breezes up close. You will observe traditional fish drying grounds, navigate narrow shaded palm alleys where children play cricket, and chat with your local driver-guide about Sri Lankan traditions.',
    highlights: [
      'Lellama fishing harbor: traditional wooden outrigger boats (oruvas) and seafood auctions',
      'Coastal fish-drying sands along the Indian Ocean shoreline',
      'Quiet coconut palm lanes and fishing village hamlets',
      'Scenic stop at Negombo beach with fresh King Coconut (Thambili)',
      'Unhurried photo stops at local boat building yards and coastal viewpoints',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Hotel or Guesthouse Pickup in Negombo',
        description: 'Meet your friendly English-speaking driver guide at your accommodation in a clean, well-maintained TukTuk.',
        duration: '15 mins',
      },
      {
        stopNumber: 2,
        title: 'Lellama Fishing Beach & Catamaran Fleets',
        description: 'Watch local fishing crews bringing in morning catches, repair heavy nylon nets, and arrange sea-salt cured dry fish on wide coir mats.',
        duration: '50 mins',
      },
      {
        stopNumber: 3,
        title: 'Coastal Palm Lanes & Kudapaduwa Village',
        description: 'Meander down quiet residential lanes shaded by breadfruit and coconut trees to see everyday village life.',
        duration: '35 mins',
      },
      {
        stopNumber: 4,
        title: 'Negombo Beach Breeze & Fresh King Coconut',
        description: 'Savor sweet, chilled King Coconut water cut fresh by your driver while watching waves break on the beach.',
        duration: '35 mins',
      },
      {
        stopNumber: 5,
        title: 'Return Hotel Drop-off',
        description: 'Smooth ride back to your hotel or dropped off at your choice of local cafe.',
        duration: '20 mins',
      },
    ],
    inclusions: [
      'Private TukTuk with licensed local English-speaking driver',
      'Door-to-door hotel pickup and drop-off in Negombo area',
      'Fresh King Coconut drink per guest',
      'Chilled bottled drinking water',
      'Rain protection storm curtains on board',
    ],
    exclusions: [
      'Personal purchases and souvenirs',
      'Optional gratuities for driver',
      'Meals not specified in the itinerary',
    ],
    pricingNote: 'Contact us for current seasonal pricing (direct local rate, no booking commissions)',
    isPopular: true,
  },
  {
    id: 'negombo-city-tour',
    slug: 'negombo-city-tour',
    title: 'Negombo Tuk Tuk City Tour',
    shortTitle: 'Negombo Tuk Tuk City Tour',
    tagline: 'Dutch Fort Portal, Hamilton Canal, St. Mary’s Church & Dragon Temple',
    duration: '3.5 Hours',
    location: 'Negombo Town & Historical Quarter, Sri Lanka',
    recommendedTime: 'Morning (8:30 AM) or Afternoon (2:00 PM)',
    vehicleType: 'Comfort TukTuk (Up to 3 Guests)',
    heroImage: '/images/Negombo City Tour.JPG',
    altText: 'Negombo Tuk Tuk city tour and Dutch canal in Sri Lanka',
    galleryImages: [
      '/images/mangrove_lagoon.JPG',
      '/images/coastal_beach.jpg',
      '/home.jpeg',
    ],
    summary:
      'Uncover Negombo’s multi-layered history as Sri Lanka’s "Little Rome." Visit the 17th-century Dutch Fort, 100-year-old Hamilton Canal, St. Mary’s Cathedral ceiling frescoes, and ancient Buddhist ruins.',
    description:
      'Negombo has played a pivotal role in Sri Lankan trade for over five centuries. This cultural city tour takes you beyond the beach into the architectural and spiritual heart of the town. Accompanied by a knowledgeable local driver, you will explore colonial Dutch waterways constructed for spice transport, the monumental neoclassical facade of St. Mary’s Church, and the fascinating dragon entrance and ancient library of Angurukaramulla Temple.',
    highlights: [
      '1678 Dutch Fort stone gateway and historic administrative quarter',
      'Hamilton Canal waterway and colonial lock infrastructure',
      'St. Mary’s Catholic Church featuring hand-painted religious ceiling murals',
      'Angurukaramulla Buddhist Temple with 6-meter dragon entrance and 300-year-old ruins',
      'Negombo municipal green produce and spice market walk',
      'Informative commentary from your local guide on Negombo’s maritime trade past',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Pickup from Negombo Hotel or Airport Area',
        description: 'Convenient pickup from your accommodation lobby by your local driver-guide.',
        duration: '15 mins',
      },
      {
        stopNumber: 2,
        title: 'Old Dutch Fort & 17th-Century Canal Gates',
        description: 'Examine the surviving stone arch of the Dutch fortress and observe traditional rivercraft on the canal.',
        duration: '40 mins',
      },
      {
        stopNumber: 3,
        title: 'St. Mary’s Church Grand Street',
        description: 'Admire the vaulted neoclassical European architecture, carved statues, and vibrant ceiling paintings depicting biblical scenes.',
        duration: '35 mins',
      },
      {
        stopNumber: 4,
        title: 'Negombo Town Produce & Spice Market',
        description: 'Take a short, informative walk through the local market stalls selling fresh Ceylon cinnamon, nutmeg, and regional fruits.',
        duration: '30 mins',
      },
      {
        stopNumber: 5,
        title: 'Angurukaramulla Temple & Ancient Stupa',
        description: 'Walk through the fearsome dragon mouth portal to view historical paintings and the historic meditation pond.',
        duration: '45 mins',
      },
      {
        stopNumber: 6,
        title: 'Comfortable Hotel Return',
        description: 'Relaxed TukTuk ride back to your hotel in Negombo or Katunayake.',
        duration: '20 mins',
      },
    ],
    inclusions: [
      'Private TukTuk transport throughout the tour',
      'Dedicated local English-speaking driver-guide',
      'Door-to-door pickup and drop-off in Negombo',
      'Temple entrance donations included',
      'Bottled drinking water and fresh king coconut',
    ],
    exclusions: [
      'Discretionary tips for driver',
      'Personal retail purchases',
    ],
    pricingNote: 'Contact us for seasonal pricing (transparent private tour rates)',
    isPopular: true,
  },
  {
    id: 'colombo-city-tour',
    slug: 'colombo-city-tour',
    title: 'Colombo City Tour',
    shortTitle: 'Colombo City Tour',
    tagline: 'Pettah Bazaars, Red Mosque, Galle Face Green & Lotus Tower',
    duration: '5 – 6 Hours',
    location: 'Colombo, Sri Lanka',
    recommendedTime: 'Morning (9:00 AM) or Afternoon/Sunset (2:00 PM)',
    vehicleType: 'Classic Sri Lankan TukTuk (1-3 Guests)',
    heroImage: '/images/Colombo City Tour.AVIF',
    altText: 'Colombo city tour and urban skyline in Sri Lanka',
    galleryImages: [
      '/images/red_mosque_colombo.jpg',
      '/images/galle_face.jpg',
      '/images/spices_food.jpg',
    ],
    summary:
      'Experience the thrilling pulse of Sri Lanka’s commercial capital. Weave through the historic trading streets of Pettah, photograph the candy-striped Red Mosque, and taste iconic street snacks by the ocean.',
    description:
      'Colombo is a sensational kaleidoscope of colonial architecture, modern coastal skyscrapers, vibrant bustling spice bazaars, and peaceful seaside boulevards. Riding through Colombo in an authentic Sri Lankan TukTuk gives you great panoramic views and lets you slip effortlessly through the energetic lanes of Pettah that tourist buses can never enter. Enjoy authentic street food tastings, sample Ceylon black tea, and take in the sunset at Galle Face Green.',
    highlights: [
      'Pettah Wholesale Market & Floating Market spice lanes',
      'Jami Ul-Alfar Mosque (The iconic Red & White Striped Mosque)',
      'Galle Face Green coastal promenade & ocean street food stalls',
      'Gangaramaya Temple & Seema Malaka on Beira Lake',
      'Independence Memorial Hall & Cinnamon Gardens colonial avenues',
      'Colombo Port City & Lotus Tower panoramic photo viewpoints',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Pickup from Negombo or Colombo Hotel',
        description: 'Morning pickup from your hotel lobby. Enjoy the breezy highway or coastal road drive into Colombo.',
        duration: '45 mins',
      },
      {
        stopNumber: 2,
        title: 'Pettah Bazaars & Red Mosque',
        description: 'Navigate the labyrinth of fruit, jewelry, and textile markets, stopping for photos outside the striking candy-striped Jami Ul-Alfar Mosque.',
        duration: '60 mins',
      },
      {
        stopNumber: 3,
        title: 'Gangaramaya Buddhist Temple & Lake Pavilion',
        description: 'Marvel at sacred relics, museum artifacts, antique cars, and the serene Geoffrey Bawa-designed floating shrine on Beira Lake.',
        duration: '45 mins',
      },
      {
        stopNumber: 4,
        title: 'Independence Square & Colonial Cinnamon Gardens',
        description: 'Breeze through the leafy embassy district and stroll the monumental stone hall commemorating Sri Lanka’s independence.',
        duration: '40 mins',
      },
      {
        stopNumber: 5,
        title: 'Galle Face Green & Authentic Street Food',
        description: 'Enjoy crisp isso vade (spiced prawn fritters), egg roti, hot Ceylon tea, and watch kites dancing in the Indian Ocean breeze.',
        duration: '60 mins',
      },
      {
        stopNumber: 6,
        title: 'Lotus Tower & Port City Viewpoint / Return',
        description: 'Capture the futuristic skyline contrast before a comfortable ride back to your hotel.',
        duration: '50 mins',
      },
    ],
    inclusions: [
      'Private TukTuk transport throughout Colombo',
      'Pickup and drop-off in Negombo or Colombo',
      'English-speaking local city guide driver',
      'Street food snack tasting (isso vade or samosa)',
      'Bottled drinking water & fresh coconut',
      'All toll & highway charges',
    ],
    exclusions: [
      'Gangaramaya Temple entrance fee (approx. 500 LKR / ~$1.50 per person)',
      'Lotus Tower observation deck tickets (optional)',
      'Personal alcohol & heavy meals',
    ],
    pricingNote: 'Contact us for current pricing (flexible pickup from Negombo or Colombo)',
    isPopular: true,
  },
  {
    id: 'negombo-lagoon-tour',
    slug: 'negombo-lagoon-tour',
    title: 'Negombo Lagoon Experience',
    shortTitle: 'Negombo Lagoon Experience',
    tagline: 'Quiet Canals, Water Monitors, Migratory Birds & Village Life',
    duration: '4 Hours',
    location: 'Muthurajawela Sanctuary, Negombo',
    recommendedTime: 'Early Morning (6:30 AM) or Late Afternoon (3:00 PM)',
    vehicleType: 'TukTuk Transfer + Covered Boat Safari',
    heroImage: '/images/Negombo Lagoon Experience.WEBP',
    altText: 'Quiet mangrove boat safari in Negombo Lagoon, Sri Lanka',
    galleryImages: [
      '/images/mangrove_lagoon.JPG',
      '/images/fishing_boats.jpg',
      '/images/tropical_palm.jpg',
    ],
    summary:
      'Escape the city hustle into Sri Lanka’s most famous coastal wetland sanctuary. A seamless combination of countryside TukTuk ride and a tranquil motorboat safari deep into the mangrove tunnels.',
    description:
      'Muthurajawela (meaning "Swamp of Royal Treasure") is a protected coastal marsh spanning over 3,000 hectares just south of Negombo Lagoon. Home to over 100 bird species, curious water monitors, purple-faced langur monkeys, and colorful kingfishers, this tour offers nature lovers and photographers peace and biodiversity. Your TukTuk collects you from your hotel and takes you along rustic rural roads to the boat jetty, where a knowledgeable local boatman guides you through winding mangrove channels.',
    highlights: [
      'Quiet 2-hour boat cruise through dense mangrove forest tunnels',
      'Wildlife spotting: Asian water monitors, kingfishers, herons, egrets, and cormorants',
      'Rustic countryside TukTuk drive through local fishing villages & coconut groves',
      'Traditional lagoon crab and prawn trap demonstrations by local fishermen',
      'Cool sea breeze and serene reflections on the wide waters of Negombo Lagoon',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Morning TukTuk Countryside Transfer',
        description: 'Breeze through palm-lined village roads from your hotel to the Muthurajawela Visitor Center and boat jetty.',
        duration: '30 mins',
      },
      {
        stopNumber: 2,
        title: 'Muthurajawela Nature Briefing & Boarding',
        description: 'Meet your boat captain, put on fitted life vests, and board the shaded, quiet safari boat.',
        duration: '15 mins',
      },
      {
        stopNumber: 3,
        title: 'Mangrove Canals & Bird Watching Cruise',
        description: 'Glide silently beneath arched mangrove roots. Look out for Brahminy kites soaring overhead, blue-eared kingfishers, and basking lizards.',
        duration: '90 mins',
      },
      {
        stopNumber: 4,
        title: 'Negombo Lagoon Broad Waters & Fishermen Traps',
        description: 'Emerge into the expansive lagoon where local fishermen tend to traditional brush-pile kraal traps (Ja-Kotu).',
        duration: '30 mins',
      },
      {
        stopNumber: 5,
        title: 'Return TukTuk Ride with Coconut Break',
        description: 'Disembark at the jetty, enjoy a fresh coconut, and ride back along the scenic Dutch Canal path.',
        duration: '35 mins',
      },
    ],
    inclusions: [
      'Private TukTuk hotel transfers to and from the wetland jetty',
      '2-hour shared or private covered boat safari with licensed boatman',
      'Fitted safety lifejackets for all adults and children',
      'Fresh King Coconut refreshment',
      'Bottled drinking water',
      'Wetland conservation entry fees',
    ],
    exclusions: [
      'Binoculars (bring your own or smartphone zoom)',
      'Sunscreen and mosquito repellent (recommended to bring)',
      'Optional tips for the local boatman',
    ],
    pricingNote: 'Contact us for current pricing (includes boat rental, lifejackets & TukTuk transfer)',
    isPopular: false,
  },
  {
    id: 'local-food-culture-tour',
    slug: 'local-food-culture-tour',
    title: 'Local Food & Culture Experience',
    shortTitle: 'Local Food & Culture Experience',
    tagline: 'Authentic Street Food, Fresh Coconut, Spice Tastings & Village Cooking',
    duration: '3.5 Hours',
    location: 'Negombo & Coastal Fishing Villages, Sri Lanka',
    recommendedTime: 'Morning (9:00 AM) or Late Afternoon (3:30 PM)',
    vehicleType: 'Authentic Sri Lankan TukTuk (Up to 3 Guests)',
    heroImage: '/images/Local Food & Culture Experience.JPG',
    altText: 'Authentic Ceylon spices and local street food tasting experience',
    galleryImages: [
      '/images/spices_food.jpg',
      '/images/Colombo Street Food Experience.JPG',
      '/images/Village & Local Food Experience.WEBP',
      '/images/Local Seafood Experience.JPG',
    ],
    summary:
      'Immerse your senses in authentic Sri Lankan culinary traditions. Sample hot egg hoppers, spicy vadai, fresh tropical fruit, Ceylon spices, and home-style village flavors.',
    description:
      'Discover the rich food culture of Sri Lanka on an authentic TukTuk tasting journey. Accompanied by your friendly English-speaking driver, you will taste traditional snacks like crispy dhal vadai, sweet pani pol, freshly cut king coconut, and explore local village markets and authentic eateries away from commercial tourist traps.',
    highlights: [
      'Authentic Ceylon street food tastings at trusted, hygienic local spots',
      'Fresh tropical fruit tasting: sweet king coconut, ripe mango, and passion fruit',
      'Local spice market visit to observe real Ceylon cinnamon, cardamom, and clove',
      'Traditional tea stop: fragrant Ceylon spiced tea or hot ginger brew',
      'Engaging conversations with local market vendors and village cooks',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Hotel Pickup by TukTuk',
        description: 'Meet your driver-guide for a scenic coastal drive into the local food quarter.',
        duration: '15 mins',
      },
      {
        stopNumber: 2,
        title: 'Local Produce & Spice Market Walk',
        description: 'Explore fresh curry leaves, lemongrass, turmeric roots, and fragrant cinnamon quills.',
        duration: '45 mins',
      },
      {
        stopNumber: 3,
        title: 'Street Food & Snack Tasting',
        description: 'Sample crispy egg hoppers, savory dhal vadai, and fresh coconut roti with lunu miris.',
        duration: '50 mins',
      },
      {
        stopNumber: 4,
        title: 'Tropical Fruit & King Coconut Refreshment',
        description: 'Enjoy freshly sliced seasonal tropical fruits and sweet king coconut water by the coast.',
        duration: '35 mins',
      },
      {
        stopNumber: 5,
        title: 'Return Hotel Drop-Off',
        description: 'Relaxing ride back to your hotel or dropped off at your preferred local dining spot.',
        duration: '20 mins',
      },
    ],
    inclusions: [
      'Private TukTuk transport throughout the tour',
      'English-speaking local driver-guide',
      'All street food snack tastings and tropical fruits included',
      'Fresh King Coconut drink and bottled water',
      'Door-to-door hotel pickup and drop-off',
    ],
    exclusions: [
      'Alcoholic beverages and full restaurant meals',
      'Personal retail spice purchases',
      'Optional tips for driver',
    ],
    pricingNote: 'Contact us for transparent direct rates with no hidden commissions',
    isPopular: true,
  },
  {
    id: 'private-sri-lanka-tours',
    slug: 'private-sri-lanka-tours',
    title: 'Customized Day Tours',
    shortTitle: 'Customized Day Tours',
    tagline: 'Sigiriya, Kandy, Galle or Bespoke Multi-Hour Itineraries',
    duration: 'Full Day / Multi-Day (Customizable)',
    location: 'Negombo / Colombo to Island-Wide Destinations',
    recommendedTime: 'Flexible (Custom Departure)',
    vehicleType: 'Sri Lankan TukTuk, Private Car, or Air-Conditioned Van',
    heroImage: '/images/Customized Day Tours.JPG',
    galleryImages: [
      '/images/Ella Day Experience.WEBP',
      '/images/yala_wildlife.jpg',
      '/images/galle_fort.jpg',
    ],
    summary:
      'Want to design your dream Sri Lanka day trip? Whether you want an adventurous TukTuk journey along the coastal roads or a comfortable air-conditioned private vehicle to Sigiriya or Galle Fort, we make it happen.',
    description:
      'Every traveler travels differently. If our standard half-day tours do not match your exact schedule or destinations, we provide 100% private, tailor-made day tours and intercity transfers. We cater to solo travelers, couples, families with children, and photography enthusiasts. Tell us what you want to see—ancient rock fortresses, tea estates, coastal turtle conservation projects, or quiet countryside temples—and we will create an honest, scenic, and transparent itinerary.',
    highlights: [
      'Tailor-made itineraries crafted around your pace and personal interests',
      'Freedom to choose between scenic TukTuk or air-conditioned private car/van',
      'Reliable airport transfers between Bandaranaike International (CMB) and your hotel',
      'Day trip options: Sigiriya Lion Rock, Kandy Temple of the Tooth, Galle Dutch Fort',
      'Honest, local driver-guide with zero commission traps or forced shopping stops',
    ],
    itinerary: [
      {
        stopNumber: 1,
        title: 'Customized Pickup Time & Location',
        description: 'Door-to-door pickup from your hotel in Negombo, Colombo, Katunayake Airport, or nearby beach resorts.',
        duration: 'Flexible',
      },
      {
        stopNumber: 2,
        title: 'Scenic Countryside Drive with Photo Stops',
        description: 'Drive along scenic bypasses, stopping at roadside fruit vendors, paddy fields, and rubber plantations at your leisure.',
        duration: 'Custom',
      },
      {
        stopNumber: 3,
        title: 'Your Chosen Cultural or Natural Attractions',
        description: 'Spend as much time as you like exploring historical monuments, wildlife parks, or beach coves with no rush.',
        duration: 'Custom',
      },
      {
        stopNumber: 4,
        title: 'Authentic Local Sri Lankan Lunch Stop',
        description: 'Enjoy a delicious home-style rice and curry feast or fresh seafood at a verified, clean local restaurant.',
        duration: '60 mins',
      },
      {
        stopNumber: 5,
        title: 'Comfortable Return Drop-off',
        description: 'Return directly to your original hotel or be dropped at your next Sri Lanka travel base with all luggage safe.',
        duration: 'Custom',
      },
    ],
    inclusions: [
      'Private vehicle of your choice (TukTuk or Air-Conditioned car/van)',
      'Dedicated licensed driver-guide with fluent English',
      'All fuel, expressway tolls, and vehicle parking charges',
      'Chilled bottled drinking water',
      'Flexible departure and return schedule',
    ],
    exclusions: [
      'National park or UNESCO heritage monument entry tickets',
      'Meals and personal expenses',
      'Accommodation for multi-day trips',
    ],
    pricingNote: 'Contact us for a tailored quote based on your exact route, vehicle preference, and party size',
    isPopular: false,
  },
];

/**
 * ==============================================================================
 * DESTINATIONS
 * Key tourist places in and around Negombo & Colombo.
 * ==============================================================================
 */
export const destinationsData: Destination[] = [
  {
    id: 'negombo-beach-and-fish-market',
    name: 'Negombo Beach & Lellama Fish Market',
    region: 'Negombo, Western Province',
    shortDescription: 'Golden sand beaches, historic fishing catamarans, and Sri Lanka’s liveliest sea harvest auctions.',
    description:
      'Negombo has been a celebrated fishing port for centuries. At the bustling Lellama auction, wooden outrigger boats unload fresh catches at dawn while miles of sea-salt dry fish glisten along the sunny coast.',
    image: '/images/fishing_boats.jpg',
    distanceFromNegombo: '5 mins from town center',
    bestTimeToVisit: 'Early morning (6:00 – 9:00 AM) or sunset (5:00 PM)',
    featuredInTourId: 'negombo-tuktuk-tour',
  },
  {
    id: 'muthurajawela-lagoon-mangroves',
    name: 'Muthurajawela Wetland & Mangrove Lagoon',
    region: 'Negombo Lagoon Border',
    shortDescription: '3,000 hectares of biodiversity, tranquil boat canals, giant water monitors, and tropical waterbirds.',
    description:
      'A serene contrast to coastal towns. Drifting down the still canals beneath lush mangrove canopies reveals peaceful birdlife, monitor lizards swimming alongside the boat, and quiet fishing traps.',
    image: '/images/mangrove_lagoon.JPG',
    distanceFromNegombo: '20 mins by TukTuk',
    bestTimeToVisit: 'Morning 6:30 – 8:30 AM for active wildlife',
    featuredInTourId: 'negombo-lagoon-tour',
  },
  {
    id: 'pettah-bazaar-red-mosque',
    name: 'Pettah Bazaars & Red Mosque (Jami Ul-Alfar)',
    region: 'Colombo City Center',
    shortDescription: 'Vibrant outdoor trade alleys, spice aromas, and the world-famous red-and-white candy striped minarets.',
    description:
      'Pettah is the heartbeat of Colombo commerce. Every street specializes in a different craft—from cinnamon and cardamom to textiles and jewelry. Rising above the market stands the iconic 1908 Red Mosque.',
    image: '/images/red_mosque_colombo.jpg',
    distanceFromNegombo: '45 mins via expressway',
    bestTimeToVisit: 'Morning or late afternoon',
    featuredInTourId: 'colombo-city-tour',
  },
  {
    id: 'dutch-canal-hamilton-canal',
    name: 'Historic Dutch Canal & Hamilton Canal',
    region: 'Negombo',
    shortDescription: 'Centuries-old waterway constructed by the Dutch to transport precious cinnamon from the interior to the coast.',
    description:
      'Lined with coconut palms, colorful local homes, and traditional fishermen repairing nets, the Dutch Canal provides an intimate window into daily Sri Lankan riverside living.',
    image: '/images/coastal_beach.jpg',
    distanceFromNegombo: 'Directly in Negombo town',
    bestTimeToVisit: 'All day / Golden Hour',
    featuredInTourId: 'negombo-tuktuk-tour',
  },
  {
    id: 'galle-face-green',
    name: 'Galle Face Green & Ocean Promenade',
    region: 'Colombo Waterfront',
    shortDescription: 'Half-kilometer oceanfront lawn where families fly kites, waves crash, and street food carts sizzle.',
    description:
      'Originally laid out in 1859 by the British for horse racing, Galle Face Green is now Sri Lanka’s favorite seaside gathering spot. Feel the Indian Ocean wind while tasting freshly fried crab and prawn snacks.',
    image: '/images/galle_face.jpg',
    distanceFromNegombo: '40 mins from Negombo',
    bestTimeToVisit: 'Sunset (4:30 – 6:30 PM)',
    featuredInTourId: 'colombo-city-tour',
  },
  {
    id: 'angurukaramulla-temple',
    name: 'Angurukaramulla Ancient Buddhist Temple',
    region: 'Negombo Outskirts',
    shortDescription: 'Giant Buddha statue, 6-meter dragon maw entrance, and intricate historical Buddhist wall murals.',
    description:
      'Step inside the giant mouth of a mythical dragon to enter an ancient temple filled with vivid murals depicting the life story of Gautama Buddha and the historic kings of Sri Lanka.',
    image: '/images/dambulla.jpg',
    distanceFromNegombo: '10 mins by TukTuk',
    bestTimeToVisit: 'Morning or late afternoon',
    featuredInTourId: 'negombo-tuktuk-tour',
  },
];

/**
 * ==============================================================================
 * VEHICLES
 * ==============================================================================
 */
export const vehiclesData: Vehicle[] = [
  {
    id: 'tuktuk',
    name: 'Sri Lankan Tuk Tuk',
    type: 'Classic Three-Wheeler',
    capacity: 'Up to 3 adult passengers',
    image: '/images/tuktuk.jpeg',
    description:
      'Perfect for local sightseeing and shorter private experiences.',
    features: [
      'Authentic Sri Lankan local experience',
      'Roll-down waterproof curtains for rain protection',
      'Agile navigation through village lanes and bustling markets',
      'Onboard phone charging and chilled bottled water',
    ],
    idealFor: 'Local sightseeing, Negombo town, Colombo city tours, lagoon visits, and short coastal hops.',
  },
  {
    id: 'private-car',
    name: 'Private Air-Conditioned Car',
    type: 'Comfortable Sedan',
    capacity: 'Up to 3-4 passengers with luggage',
    image: '/images/car.jpg',
    description:
      'Comfortable option for couples, families and longer journeys.',
    features: [
      'Full climate-controlled air conditioning',
      'Smooth, quiet ride for scenic cross-country routes',
      'Generous trunk space for suitcases and travel gear',
      'Expressway toll-ready for swift intercity transfers',
    ],
    idealFor: 'Multi-day island itineraries, airport pickups, couples, and travelers seeking cool comfort.',
  },
  {
    id: 'private-van',
    name: 'Private Air-Conditioned Van',
    type: 'Spacious Passenger Van',
    capacity: 'Suitable for 4 to 8+ passengers with luggage',
    image: '/images/kdh.jpg',
    description:
      'Suitable for families and larger groups traveling around Sri Lanka.',
    features: [
      'Spacious high-roof cabin with dual air conditioning',
      'Ample luggage capacity for suitcases, backpacks, and surfboards',
      'Comfortable reclining seats for scenic hill-country drives',
      'Child safety seats available upon request',
    ],
    idealFor: 'Families, groups of friends, surf trips, and multi-day island journeys across Sri Lanka.',
  },
];

/**
 * ==============================================================================
 * MULTI-DAY SRI LANKA TOURS ("Explore Sri Lanka Your Way")
 * ==============================================================================
 */
export const multiDayToursData: MultiDayTour[] = [
  {
    id: '7-day-sri-lanka-explorer',
    title: '7-Day Sri Lanka Explorer',
    durationDays: 7,
    duration: '7 Days / 6 Nights',
    tagline: 'Culture, Mountain Scenery, Wildlife, Southern Beaches & Local Life',
    description:
      "A private 7-day journey through some of Sri Lanka's most memorable destinations, combining culture, scenery, wildlife, beaches and local experiences.",
    heroImage: '/images/7-Day Sri Lanka Explorer.WEBP',
    sampleNote: 'Sample itinerary — fully customizable',
    itineraryDays: [
      {
        day: 'Day 1',
        title: 'Negombo',
        description: 'Arrival, Negombo sightseeing, beach and local experiences.',
      },
      {
        day: 'Day 2',
        title: 'Sigiriya / Dambulla',
        description: 'Cultural sights and countryside.',
      },
      {
        day: 'Day 3',
        title: 'Kandy',
        description: 'Kandy city and cultural experiences.',
      },
      {
        day: 'Day 4',
        title: 'Ella',
        description: 'Mountain scenery, viewpoints and local experiences.',
      },
      {
        day: 'Day 5',
        title: 'Ella / South Coast',
        description: 'Scenic journey towards the southern coast.',
      },
      {
        day: 'Day 6',
        title: 'South Coast',
        description: 'Beach, local experiences and optional activities.',
      },
      {
        day: 'Day 7',
        title: 'Galle / Colombo / Departure',
        description: 'Explore Galle or travel towards the departure point.',
      },
    ],
    highlights: [
      'Sigiriya Ancient Rock Fortress & Dambulla Caves',
      'Kandy Sacred Temple & cultural heritage',
      'Ella mountain peaks & scenic viewpoints',
      'Scenic transition to the tropical South Coast',
      'Relaxed southern beach time & surfing options',
      'Historic 17th-century Galle Fort cobblestone ramparts',
    ],
    travelStyles: ['Culture', 'Scenery', 'Beaches', 'Local Experiences'],
    ctaText: 'Ask About This Tour',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in the 7-Day Sri Lanka Explorer. Could you please provide more information?",
  },
  {
    id: '12-day-sri-lanka-discovery',
    title: '12-Day Sri Lanka Discovery',
    durationDays: 12,
    duration: '12 Days / 11 Nights',
    tagline: 'Ancient UNESCO Sites, Hill Country, Wildlife Region, Beaches & Southern Coast',
    description:
      'A relaxed private journey around Sri Lanka combining cultural landmarks, mountains, wildlife, local life and the southern coast.',
    heroImage: '/images/12-Day Sri Lanka Discovery.JPG',
    altText: 'Scenic tea plantation in Nuwara Eliya Hill Country, Sri Lanka',
    sampleNote: 'Sample itinerary — fully customizable',
    itineraryDays: [
      {
        day: 'Days 1–2',
        title: 'Negombo & Colombo',
        description: 'Arrival, coastal markets, colonial architecture, street food and seaside promenades.',
      },
      {
        day: 'Days 3–4',
        title: 'Sigiriya & Dambulla',
        description: 'Cultural landmarks, 5th-century rock citadel, ancient cave monasteries and rural countryside.',
      },
      {
        day: 'Days 5–6',
        title: 'Kandy & Surrounding Areas',
        description: 'Kandy sacred heritage, spice gardens, tea hills and traditional craftsmanship.',
      },
      {
        day: 'Days 7–8',
        title: 'Ella and the Hill Country',
        description: 'Mountain scenery, tea estates, Ravana waterfalls, Nine Arch Bridge and relaxed village cafés.',
      },
      {
        day: 'Day 9',
        title: 'Yala / Southern Wildlife Region',
        description: 'Wildlife sanctuary borderlands, scenic lakes and southern countryside.',
      },
      {
        day: 'Days 10–11',
        title: 'South Coast',
        description: 'Sun, surf, beaches, coastal villages (Weligama, Hiriketiya, Mirissa) and fresh local seafood.',
      },
      {
        day: 'Day 12',
        title: 'Galle / Colombo / Departure',
        description: 'UNESCO-listed Galle Fort ramparts, coastal scenic highway and smooth transfer to departure.',
      },
    ],
    highlights: [
      'Sri Lankan culture & ancient heritage',
      'Lush mountain landscapes & highland tea estates',
      'Scenic hill country trains & cascading waterfalls',
      'Southern wildlife region discovery',
      'Sun, surf & relaxed South Coast beach living',
      'Historic Galle Fort colonial architecture & cafés',
      'Authentic local food & fresh ocean seafood',
    ],
    travelStyles: ['Relaxed', 'Culture', 'Wildlife', 'Beaches', 'Hill Country'],
    ctaText: 'Plan My 12-Day Tour',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in the 12-Day Sri Lanka Discovery. Could you please provide more information?",
  },
  {
    id: '20-day-sri-lanka-grand-journey',
    title: '20-Day Sri Lanka Grand Journey',
    durationDays: 20,
    duration: '20 Days / 19 Nights',
    tagline: 'The Ultimate In-Depth Private Journey at an Unhurried, Relaxed Pace',
    description:
      "A longer private journey designed for travelers who want to experience Sri Lanka at a slower pace, with time for culture, mountains, wildlife, beaches, local communities and the island's southern coast.",
    heroImage: '/images/galle_fort.jpg',
    sampleNote: 'Sample itinerary — fully customizable',
    itineraryDays: [
      {
        day: 'Days 1–2',
        title: 'Negombo',
        description: 'Arrival, coastal lagoons, fishing villages, local markets and beach relaxation.',
      },
      {
        day: 'Days 3–4',
        title: 'Anuradhapura / Cultural Region',
        description: 'Ancient royal capital, sacred stupas, monastic ruins and rural heartlands.',
      },
      {
        day: 'Days 5–6',
        title: 'Sigiriya & Dambulla',
        description: 'Sigiriya Rock fortress, Dambulla golden cave temples and countryside village walks.',
      },
      {
        day: 'Days 7–8',
        title: 'Kandy',
        description: 'Kandy city, Sacred Temple of the Tooth Relic, botanical gardens and cultural performances.',
      },
      {
        day: 'Days 9–10',
        title: 'Nuwara Eliya / Hill Country',
        description: 'Misty tea plantations, waterfalls, cool mountain climate and colonial tea estates.',
      },
      {
        day: 'Days 11–12',
        title: 'Ella',
        description: 'Iconic Nine Arch Bridge, Little Adam’s Peak, mountain viewpoints and laid-back cafés.',
      },
      {
        day: 'Days 13–14',
        title: 'Yala / Wildlife Region',
        description: 'Southern wildlife borderlands, birdwatching, lakes and scenic natural settings.',
      },
      {
        day: 'Days 15–18',
        title: 'South Coast',
        description: 'Unhurried days exploring Weligama, Hiriketiya, Mirissa, Unawatuna, surfing, beaches and local food.',
      },
      {
        day: 'Days 19–20',
        title: 'Galle / Colombo / Departure',
        description: 'Galle Dutch Fort exploration, coastal highway journey, Colombo highlights and departure transfer.',
      },
    ],
    highlights: [
      'Deep cultural immersion across Anuradhapura & Sigiriya',
      'Misty tea country of Nuwara Eliya & Ella',
      'Wildlife sanctuaries & natural borderlands',
      'Four full days of relaxed South Coast beach & surf life',
      'Authentic home-cooked meals & street food discoveries',
      'Cobblestone ramparts & boutique lifestyle of Galle Fort',
      'Flexible free time for spontaneous detours & relaxation',
    ],
    travelStyles: ['Deep Exploration', 'Slow Travel', 'Culture', 'Wildlife', 'Surfing & Beaches', 'Food'],
    ctaText: 'Create My 20-Day Journey',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in the 20-Day Sri Lanka Grand Journey. Could you please provide more information?",
  },
];

/**
 * ==============================================================================
 * TRANSPORT NOTICE FOR MULTI-DAY & EXTENDED TOURS
 * ==============================================================================
 */
export const transportNotice = {
  heading: 'Important Vehicle Information',
  message:
    'Choose the vehicle that suits your journey. Tuk Tuk tours are ideal for local sightseeing and shorter experiences, while cars and vans are available for longer journeys, families and groups.',
  options: [
    {
      vehicle: 'Tuk Tuk',
      description: 'Great for local sightseeing and authentic short-distance experiences.',
    },
    {
      vehicle: 'Car',
      description: 'Comfortable for couples, families and longer journeys.',
    },
    {
      vehicle: 'Van',
      description: 'Ideal for families and small groups.',
    },
  ],
};

/**
 * ==============================================================================
 * THINGS TO DO IN SRI LANKA (Categorized by Area)
 * ==============================================================================
 */
export const sriLankaActivitiesData: SriLankaActivity[] = [
  // COLOMBO & NEGOMBO
  {
    id: 'act-negombo-city',
    title: 'Negombo City Tour',
    location: 'Negombo, Western Province',
    category: 'COLOMBO & NEGOMBO',
    tag: 'City & Culture',
    description: "Explore Negombo's streets, fishing culture, markets, churches, beaches and local life.",
    image: '/images/Negombo City Tour.JPG',
    altText: 'Negombo city tour and coastal town exploration in Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Negombo City Tour. Could you please provide more information?",
  },
  {
    id: 'act-negombo-lagoon',
    title: 'Negombo Lagoon Boat Experience',
    location: 'Negombo Lagoon & Muthurajawela',
    category: 'COLOMBO & NEGOMBO',
    tag: 'Wetlands & Waterways',
    description: 'Enjoy a lagoon experience and discover the surrounding waterways and local environment.',
    image: '/images/Negombo Lagoon Boat Experience.JPG',
    altText: 'Boat experience on Negombo Lagoon and Muthurajawela wetlands, Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to add the Negombo Lagoon Boat Experience to my tour inquiry.",
  },
  {
    id: 'act-negombo-fish-market',
    title: 'Negombo Fish Market Experience',
    location: 'Lellama Harbor, Negombo',
    category: 'COLOMBO & NEGOMBO',
    tag: 'Local Harbor Life',
    description: "Experience one of the area's lively local fishing and market environments.",
    image: '/images/Negombo Fish Market Experience.JPG',
    altText: 'Traditional wooden fishing boats at Negombo fish market, Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Negombo Fish Market Experience. Could you please provide more details?",
  },
  {
    id: 'act-colombo-city',
    title: 'Colombo City Tour',
    location: 'Colombo, Western Province',
    category: 'COLOMBO & NEGOMBO',
    tag: 'Urban & Colonial',
    description: "Explore Colombo's historic areas, markets, waterfront and modern city.",
    image: '/images/Colombo City Tour.AVIF',
    altText: 'Colombo city tour and skyline in Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include the Colombo City Tour in my itinerary.",
  },
  {
    id: 'act-colombo-street-food',
    title: 'Colombo Street Food Experience',
    location: 'Galle Face Green & Pettah, Colombo',
    category: 'COLOMBO & NEGOMBO',
    tag: 'Culinary Tasting',
    description: 'Discover Sri Lankan flavors and local food around Colombo.',
    image: '/images/Colombo Street Food Experience.JPG',
    altText: 'Colombo street food experience at Galle Face Green, Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Colombo Street Food Experience.",
  },
  {
    id: 'act-tuk-tuk-local',
    title: 'Tuk Tuk Local Exploration',
    location: 'Negombo & Coastal Outskirts',
    category: 'COLOMBO & NEGOMBO',
    tag: 'Authentic Tuk Tuk',
    description: 'Explore local areas with a private Tuk Tuk experience.',
    image: '/images/Nehombo Tuk Tuk City Tour.JPG',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to book a private Tuk Tuk Local Exploration.",
  },

  // CULTURAL TRIANGLE
  {
    id: 'act-sigiriya-rock',
    title: 'Sigiriya Rock Fortress',
    location: 'Sigiriya (UNESCO World Heritage)',
    category: 'CULTURAL TRIANGLE',
    tag: 'Ancient Citadel',
    description: 'Climb and explore the historic Sigiriya Rock Fortress.',
    image: '/images/sigiriya.jpg',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include the Sigiriya Rock Fortress in my tour plan.",
  },
  {
    id: 'act-dambulla-cave',
    title: 'Dambulla Cave Temple',
    location: 'Dambulla, Central Province',
    category: 'CULTURAL TRIANGLE',
    tag: 'Cave Monasteries',
    description: 'Visit the historic Dambulla Cave Temple and its Buddhist art and architecture.',
    image: '/images/dambulla.jpg',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting the Dambulla Cave Temple.",
  },
  {
    id: 'act-sigiriya-dambulla-day',
    title: 'Sigiriya & Dambulla Day Tour',
    location: 'Cultural Triangle Heartlands',
    category: 'CULTURAL TRIANGLE',
    tag: 'Full Day Cultural',
    description: 'A day experience combining major attractions around Sigiriya and Dambulla.',
    image: '/images/Sigiriya & Dambulla Day Tour.AVIF',
    altText: 'Sigiriya Rock Fortress and Dambulla day tour in Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to book the Sigiriya & Dambulla Day Tour.",
  },
  {
    id: 'act-polonnaruwa',
    title: 'Polonnaruwa Ancient City',
    location: 'Polonnaruwa Archaeological Park',
    category: 'CULTURAL TRIANGLE',
    tag: 'Medieval Ruins',
    description: 'Explore the historic ancient city and archaeological sites.',
    image: '/images/polonnaruwa.jpg',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting Polonnaruwa Ancient City.",
  },
  {
    id: 'act-anuradhapura',
    title: 'Anuradhapura Ancient City',
    location: 'Anuradhapura Sacred City',
    category: 'CULTURAL TRIANGLE',
    tag: 'Sacred Capital',
    description: "Discover one of Sri Lanka's major ancient cultural sites.",
    image: '/images/anuradhapura.jpg',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include Anuradhapura Ancient City in my itinerary.",
  },
  {
    id: 'act-village-food',
    title: 'Village & Local Food Experience',
    location: 'Habarana & Countryside',
    category: 'CULTURAL TRIANGLE',
    tag: 'Rural Life',
    description: 'Experience rural Sri Lankan life, local food and village surroundings.',
    image: '/images/Village & Local Food Experience.WEBP',
    altText: 'Traditional Sri Lankan village food and cooking experience',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Village & Local Food Experience in the Cultural Triangle.",
  },

  // HILL COUNTRY
  {
    id: 'act-kandy-city',
    title: 'Kandy City Experience',
    location: 'Kandy, Central Highlands',
    category: 'HILL COUNTRY',
    tag: 'Highland Capital',
    description: 'Explore Kandy and its cultural highlights.',
    image: '/images/Kandy City Experience.JPG',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to add the Kandy City Experience to my journey.",
  },
  {
    id: 'act-temple-tooth',
    title: 'Temple of the Tooth Area',
    location: 'Sri Dalada Maligawa, Kandy',
    category: 'HILL COUNTRY',
    tag: 'Sacred UNESCO Site',
    description: 'Visit the important cultural and religious area around the Temple of the Tooth.',
    image: '/images/kandy_tooth.jpg',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting the Temple of the Tooth area in Kandy.",
  },
  {
    id: 'act-tea-country',
    title: 'Tea Country Experience',
    location: 'Highland Tea Plantations',
    category: 'HILL COUNTRY',
    tag: 'Ceylon Tea Estates',
    description: "Explore Sri Lanka's tea-growing landscapes and learn about tea production.",
    image: '/images/Tea Country Experience.WEBP',
    altText: 'Ceylon tea picker in Sri Lanka tea country',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to experience the Ceylon Tea Country.",
  },
  {
    id: 'act-nuwara-eliya',
    title: 'Nuwara Eliya Experience',
    location: 'Nuwara Eliya ("Little England")',
    category: 'HILL COUNTRY',
    tag: 'Mountain Climate',
    description: 'Discover the cool-climate hill country and surrounding landscapes.',
    image: '/images/Nuwara Eliya Experience.WEBP',
    altText: 'Misty tea plantations in Nuwara Eliya Hill Country, Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Nuwara Eliya Hill Country Experience.",
  },
  {
    id: 'act-ella-day',
    title: 'Ella Day Experience',
    location: 'Ella, Badulla District',
    category: 'HILL COUNTRY',
    tag: 'Mountain Vistas',
    description: "Explore Ella's mountain scenery and local attractions.",
    image: '/images/Ella Day Experience.WEBP',
    altText: 'Nine Arch Bridge in Ella, Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include the Ella Day Experience in my tour.",
  },
  {
    id: 'act-scenic-train',
    title: 'Scenic Train Experience',
    location: 'Kandy to Ella Mountain Railway',
    category: 'HILL COUNTRY',
    tag: 'Scenic Railway',
    description: 'Ask us about arranging scenic train travel through the hill country where available.',
    image: '/images/Scenic Train Experience.AVIF',
    altText: 'Scenic train journey across Nine Arch Bridge in Sri Lanka',
    disclaimer: 'Train ticket bookings are subject to national railway availability and seasonal demand.',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, could you help us arrange the Scenic Train Experience between Kandy and Ella?",
  },
  {
    id: 'act-waterfalls',
    title: 'Waterfall Exploration',
    location: 'Ramboda, Ravana & Diyaluma Falls',
    category: 'HILL COUNTRY',
    tag: 'Cascading Waters',
    description: 'Discover waterfalls and scenic areas around the hill country.',
    image: '/images/Waterfall Exploration.AVIF',
    altText: 'Waterfall exploration in Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to add Waterfall Exploration to my itinerary.",
  },
  {
    id: 'act-hiking-nature',
    title: 'Hiking & Nature Walks',
    location: "Little Adam's Peak & Ella Rock",
    category: 'HILL COUNTRY',
    tag: 'Nature Trails',
    description: "Explore suitable walking and hiking experiences based on the traveler's interests and fitness.",
    image: '/images/Hiking & Nature Walks.AVIF',
    altText: 'Hiking and nature walk in Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in Hiking & Nature Walks in Sri Lanka's hill country.",
  },

  // WILDLIFE
  {
    id: 'act-yala-safari',
    title: 'Yala Safari',
    location: 'Yala National Park, Southern Province',
    category: 'WILDLIFE',
    tag: 'National Park Safari',
    description: 'Experience a safari in Yala National Park.',
    image: '/images/Yala Safari.WEBP',
    altText: 'Yala National Park 4x4 safari jeep in Sri Lanka',
    disclaimer: 'Safaris take place in natural open habitats; animal sightings cannot be guaranteed.',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in arranging a Yala National Park Safari.",
  },
  {
    id: 'act-udawalawe-safari',
    title: 'Udawalawe Safari',
    location: 'Udawalawe National Park',
    category: 'WILDLIFE',
    tag: 'Elephant Habitat',
    description: 'Experience a wildlife safari in the Udawalawe region.',
    image: '/images/Udawalawe Safari.JPG',
    altText: 'Udawalawe National Park elephant safari in Sri Lanka',
    disclaimer: 'Conducted via licensed 4x4 safari jeeps; wildlife sightings depend on natural animal movement.',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include an Udawalawe Safari in my travel plan.",
  },
  {
    id: 'act-minneriya-safari',
    title: 'Minneriya / Kaudulla Safari',
    location: 'Minneriya & Kaudulla Reserves',
    category: 'WILDLIFE',
    tag: 'Seasonal Gathering',
    description: 'Ask about seasonal wildlife experiences around the national parks.',
    image: '/images/Minneriya _ Kaudulla Safari.AVIF',
    altText: 'Minneriya and Kaudulla seasonal safari in Sri Lanka',
    disclaimer: 'Safari locations are selected according to seasonal wildlife movements and weather patterns.',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, please provide details on the seasonal Minneriya/Kaudulla Safari.",
  },
  {
    id: 'act-bird-watching',
    title: 'Bird Watching',
    location: 'Wetland Sanctuaries & Rainforests',
    category: 'WILDLIFE',
    tag: 'Avian Sanctuaries',
    description: 'Explore birdwatching opportunities in suitable areas.',
    image: '/images/Bird Watching.JPG',
    altText: 'Bird watching experience in Sri Lanka',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in Bird Watching experiences in Sri Lanka.",
  },
  {
    id: 'act-wildlife-nature',
    title: 'Wildlife & Nature Experience',
    location: 'Island-Wide Wildlife Reserves',
    category: 'WILDLIFE',
    tag: 'Custom Nature',
    description: "Create a customizable wildlife experience depending on the traveler's itinerary.",
    image: '/images/Wildlife & Nature Experience.JPG',
    altText: 'Sri Lankan leopard in Yala National Park, Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to plan a custom Wildlife & Nature Experience.",
  },

  // SOUTH COAST
  {
    id: 'act-weligama-surf',
    title: 'Weligama Surf Experience',
    location: 'Weligama Bay, South Coast',
    category: 'SOUTH COAST',
    tag: 'Surf & Ocean',
    description: 'Try surfing or arrange a lesson through an appropriate local provider.',
    image: '/images/Weligama Surf Experience.JPG',
    altText: 'Weligama surf experience and lessons in Sri Lanka',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Weligama Surf Experience.",
  },
  {
    id: 'act-hiriketiya',
    title: 'Hiriketiya Beach & Surf',
    location: 'Hiriketiya Bay, Dickwella',
    category: 'SOUTH COAST',
    tag: 'Horseshoe Bay',
    description: "Explore Hiriketiya's beach and surf atmosphere.",
    image: '/images/Hiriketiya Beach & Surf.WEBP',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to visit Hiriketiya Beach on the South Coast.",
  },
  {
    id: 'act-mirissa-whale',
    title: 'Mirissa Whale Watching',
    location: 'Mirissa Coastal Waters',
    category: 'SOUTH COAST',
    tag: 'Marine Excursion',
    description: 'Ask about whale-watching experiences from Mirissa.',
    image: '/images/Mirissa Whale Watching.jpg',
    altText: 'Whale watching boat experience off Mirissa, Sri Lanka',
    disclaimer: 'Boat excursions are subject to seasonal weather and marine conditions; natural whale sightings cannot be guaranteed.',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm inquiring about whale-watching experiences from Mirissa.",
  },
  {
    id: 'act-galle-fort',
    title: 'Galle Fort Experience',
    location: 'Galle Fort (UNESCO World Heritage)',
    category: 'SOUTH COAST',
    tag: 'Historic Ramparts',
    description: 'Explore the historic Galle Fort, streets, architecture, shops and cafés.',
    image: '/images/Galle Fort Experience.PNG',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include the Galle Fort Experience in my tour.",
  },
  {
    id: 'act-unawatuna',
    title: 'Unawatuna Beach',
    location: 'Unawatuna Bay, Southern Province',
    category: 'SOUTH COAST',
    tag: 'Golden Sands',
    description: 'Relax and explore the coastal area around Unawatuna.',
    image: '/images/unawatuna.jpg',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting Unawatuna Beach.",
  },
  {
    id: 'act-south-beach-hop',
    title: 'South Coast Beach Hopping',
    location: 'Ahangama, Midigama & Madiha',
    category: 'SOUTH COAST',
    tag: 'Coastal Exploration',
    description: 'Explore different beaches and coastal areas.',
    image: '/images/surf_beach.jpg',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to do South Coast Beach Hopping.",
  },
  {
    id: 'act-snorkeling-diving',
    title: 'Snorkeling & Diving',
    location: 'Southern Coral Reefs & Coves',
    category: 'SOUTH COAST',
    tag: 'Undersea Reefs',
    description: 'Ask about suitable snorkeling and diving experiences available along the coast.',
    image: '/images/scuba_diving.jpg',
    disclaimer: 'Activities depend on sea conditions and local water visibility; arranged via certified local operators.',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm inquiring about Snorkeling & Diving experiences on the South Coast.",
  },
  {
    id: 'act-seafood',
    title: 'Local Seafood Experience',
    location: 'Coastal Fishing Harbors & Beach Eateries',
    category: 'SOUTH COAST',
    tag: 'Ocean Gastronomy',
    description: 'Discover Sri Lankan seafood and coastal food.',
    image: '/images/Local Seafood Experience.JPG',
    altText: 'Fresh Sri Lankan seafood experience along the coast',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to enjoy a Local Seafood Experience on the South Coast.",
  },
  {
    id: 'act-sunset',
    title: 'Sunset Experience',
    location: 'Southern Coastal Viewpoints',
    category: 'SOUTH COAST',
    tag: 'Golden Hour',
    description: 'Enjoy a relaxed sunset experience along the southern coast.',
    image: '/images/Sunset Experience.jpg',
    altText: 'Sunset experience along Sri Lanka coastal viewpoints',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in a Sunset Experience on the South Coast.",
  },

  // EAST COAST
  {
    id: 'act-arugam-bay',
    title: 'Arugam Bay Surf Experience',
    location: 'Arugam Bay, Eastern Province',
    category: 'EAST COAST',
    tag: 'World-Class Point Break',
    description: 'Explore the surf and laid-back coastal atmosphere of Arugam Bay.',
    image: '/images/arugam_bay.jpg',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Arugam Bay Surf Experience on the East Coast.",
  },
  {
    id: 'act-pasikuda',
    title: 'Pasikuda Beach Experience',
    location: 'Pasikuda Bay, Batticaloa',
    category: 'EAST COAST',
    tag: 'Shallow Calm Waters',
    description: 'Enjoy the calm shallow waters and serene white sandy bay of Pasikuda.',
    image: '/images/Pasikuda Beach Experience.JPG',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to include Pasikuda Beach in my East Coast journey.",
  },
  {
    id: 'act-trincomalee',
    title: 'Trincomalee Coastal Experience',
    location: 'Trincomalee & Swami Rock',
    category: 'EAST COAST',
    tag: 'Historic Harbor',
    description: 'Discover the natural harbor, historic Swami Rock, and coastal sights of Trincomalee.',
    image: '/images/Trincomalee Coastal Experience.JPG',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Trincomalee Coastal Experience.",
  },
  {
    id: 'act-east-snorkeling',
    title: 'Snorkeling & Marine Experiences',
    location: 'Pigeon Island & Nilaveli',
    category: 'EAST COAST',
    tag: 'Marine National Park',
    description: 'Ask about seasonal snorkeling and marine experiences along the east coast, including Pigeon Island.',
    image: '/images/scuba_diving.jpg',
    disclaimer: 'Seasonal excursions depend on weather and marine park permits; marine sightings cannot be guaranteed.',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to inquire about Pigeon Island snorkeling on the East Coast.",
  },
  {
    id: 'act-east-beach-explore',
    title: 'East Coast Beach Exploration',
    location: 'Nilaveli & Eastern Shores',
    category: 'EAST COAST',
    tag: 'Untouched Coastlines',
    description: "Discover quiet, expansive sandy shores and unhurried coastal life on Sri Lanka's east coast.",
    image: '/images/East Coast Beach Exploration.WEBP',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in East Coast Beach Exploration.",
  },

  // WEST COAST
  {
    id: 'act-kalpitiya',
    title: 'Kalpitiya Coastal & Lagoon Exploration',
    location: 'Kalpitiya Peninsula',
    category: 'WEST COAST',
    tag: 'Coastal Peninsula',
    description: 'Explore the tranquil peninsula, kite lagoons, and pristine coastal sands of the northwest.',
    image: '/images/Kalpitiya Coastal & Lagoon Exploration.JPG',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to explore Kalpitiya on the West Coast.",
  },
  {
    id: 'act-bentota-river',
    title: 'Bentota River Safari & Coastal Experience',
    location: 'Bentota River & Golden Sands',
    category: 'WEST COAST',
    tag: 'River Mangroves & Beach',
    description: 'Discover the calm river safari waterways, mangrove canals, and golden sandy beaches of the west coast.',
    image: '/images/Bentota River Safari & Coastal Experience.JPG',
    ctaText: 'Ask About This',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'm interested in the Bentota River Safari & Coastal Experience.",
  },
  {
    id: 'act-negombo-coastal',
    title: 'Negombo Coastal Exploration',
    location: 'Negombo Shoreline',
    category: 'WEST COAST',
    tag: 'Fishing Heritage',
    description: 'Discover the historic fishing traditions, sandy beach shores, and coastal breeze of Negombo.',
    image: '/images/Negombo Coastal Exploration.WEBP',
    ctaText: 'Add to My Tour',
    whatsappMessage: "Hello Ceylon Tuk Tuk Tours, I'd like to add Negombo Coastal Exploration to my trip.",
  },
];

/**
 * ==============================================================================
 * SOUTH COAST ACTIVITIES ("Discover Sri Lanka's South Coast")
 * ==============================================================================
 */
export const southCoastActivitiesData: SouthCoastActivity[] = [
  {
    id: 'sc-weligama-surfing',
    letter: 'A',
    title: 'Surfing in Weligama',
    location: 'Weligama Bay',
    tag: 'Surf & Ocean',
    description:
      "Try surfing on one of Sri Lanka's popular beginner-friendly surf beaches, with lessons available through local surf providers.",
    image: '/images/Weligama Surf Experience.JPG',
    disclaimer: 'Lessons and board rentals available through licensed local surf schools.',
    ctaText: 'Ask About Weligama Surfing',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in surfing in Weligama on Sri Lanka's South Coast. Could you please provide more information?",
  },
  {
    id: 'sc-hiriketiya-beach',
    letter: 'B',
    title: 'Surf & Beach Life in Hiriketiya',
    location: 'Hiriketiya Horseshoe Bay',
    tag: 'Coastal Lifestyle',
    description:
      "Spend time around Hiriketiya's beach, surf culture, cafés and relaxed coastal atmosphere.",
    image: '/images/Hiriketiya Beach & Surf.WEBP',
    disclaimer: 'A favorite bay for travelers seeking relaxed coastal culture and calm swimming spots.',
    ctaText: 'Ask About Hiriketiya',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting Hiriketiya beach and surf culture. Could you please provide more information?",
  },
  {
    id: 'sc-mirissa-whale-watching',
    letter: 'C',
    title: 'Whale Watching around Mirissa',
    location: 'Mirissa Coastal Waters',
    tag: 'Marine Wildlife',
    description:
      'Ask about whale-watching experiences from the southern coast. Mirissa is renowned as a primary departure point for seasonal marine boat excursions.',
    image: '/images/Mirissa Whale Watching.jpg',
    disclaimer: 'Excursions depend on seasonal weather and ocean conditions; natural wildlife sightings cannot be guaranteed.',
    ctaText: 'Inquire About Whale Watching',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in whale-watching experiences around Mirissa. Could you please provide more information?",
  },
  {
    id: 'sc-galle-fort',
    letter: 'D',
    title: 'Galle Fort Heritage',
    location: 'Galle Fort (UNESCO)',
    tag: 'Colonial Heritage',
    description:
      'Explore the historic streets, architecture, cafés, shops and coastal atmosphere of Galle Fort.',
    image: '/images/Galle Fort Experience.PNG',
    disclaimer: 'Walk the 300-year-old Dutch ramparts, boutique alleys, lighthouse, and oceanfront bastions.',
    ctaText: 'Ask About Galle Fort',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in exploring Galle Fort on Sri Lanka's South Coast. Could you please provide more information?",
  },
  {
    id: 'sc-snorkeling-diving',
    letter: 'E',
    title: 'Snorkeling & Diving',
    location: 'Hikkaduwa, Jungle Beach & Polhena',
    tag: 'Marine Adventure',
    description:
      'Ask about snorkeling and diving experiences available along the southern coast with vibrant marine reefs and clear waters.',
    image: '/images/scuba_diving.jpg',
    disclaimer: 'Experiences depend on seasonal sea conditions and local water visibility; arranged through certified local dive operators.',
    ctaText: 'Ask About Snorkeling & Diving',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in snorkeling and diving experiences along Sri Lanka's South Coast. Could you please provide more information?",
  },
  {
    id: 'sc-unawatuna-beach',
    letter: 'F',
    title: 'Unawatuna Beach',
    location: 'Unawatuna Bay',
    tag: 'Beach Relaxation',
    description:
      'Relax around Unawatuna and explore the surrounding coastal area, quiet swimming bays, and vibrant oceanfront dining.',
    image: '/images/unawatuna.jpg',
    disclaimer: 'A beloved crescent beach with sheltered waters, seaside eateries, and easy access to Jungle Beach.',
    ctaText: 'Ask About Unawatuna',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in visiting Unawatuna Beach and coastal area. Could you please provide more information?",
  },
  {
    id: 'sc-beach-hopping',
    letter: 'G',
    title: 'South Coast Beach Hopping',
    location: 'Ahangama, Midigama & Madiha',
    tag: 'Coastal Exploration',
    description:
      'Discover different beaches and coastal villages around the southern coast, finding secluded palm bays and scenic coastal roads.',
    image: '/images/surf_beach.jpg',
    disclaimer: 'Customizable day itineraries connecting the South Coast’s most picturesque sandy stretches.',
    ctaText: 'Ask About Beach Hopping',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in South Coast beach hopping. Could you please provide more information?",
  },
  {
    id: 'sc-food-experiences',
    letter: 'H',
    title: 'Sri Lankan Food Experiences',
    location: 'Southern Coastal Villages',
    tag: 'Local Flavors',
    description:
      'Try local Sri Lankan food, fresh seafood, tropical fruit and traditional dishes like fresh fish ambul thiyal, egg hoppers, and coconut sambol.',
    image: '/images/Local Food & Culture Experience.JPG',
    disclaimer: 'Experience home-style cooking at authentic, hygienic local village eateries and coastal spots.',
    ctaText: 'Ask About Food Experiences',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in authentic Sri Lankan food experiences on the South Coast. Could you please provide more information?",
  },
  {
    id: 'sc-sunset-experiences',
    letter: 'I',
    title: 'Sunset Experiences',
    location: 'Mirissa, Galle & Coastal Viewpoints',
    tag: 'Golden Hour',
    description:
      'Enjoy a relaxed sunset along the southern coastline, taking in palm-lined horizons and golden ocean reflections.',
    image: '/images/Sunset Experience.jpg',
    disclaimer: 'We know serene coastal viewpoints including Coconut Tree Hill and Galle Fort bastions.',
    ctaText: 'Ask About Sunset Experiences',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in scenic sunset experiences on Sri Lanka's South Coast. Could you please provide more information?",
  },
  {
    id: 'sc-local-village-coastal',
    letter: 'J',
    title: 'Local Village & Coastal Experiences',
    location: 'Southern Inland & Lagoon Hamlets',
    tag: 'Authentic Island Life',
    description:
      'Experience quieter coastal areas and everyday Sri Lankan life away from the busiest tourist spots.',
    image: '/images/Village & Local Food Experience.WEBP',
    disclaimer: 'Discover cinnamon peelers, coastal backwaters, artisan workshops, and genuine local hospitality.',
    ctaText: 'Ask About Village Experiences',
    whatsappMessage:
      "Hello Ceylon Tuk Tuk Tours, I'm interested in quiet local village and coastal experiences on the South Coast. Could you please provide more information?",
  },
];

/**
 * ==============================================================================
 * CURIOUS TRAVELER FEATURES ("Made for Curious Travelers")
 * ==============================================================================
 */
export const curiousTravelerFeaturesData: CuriousTravelerFeature[] = [
  {
    id: 'surf',
    title: 'Surf',
    description: 'Catch gentle beginner waves in Weligama or watch experienced riders along southern reef points.',
    iconName: 'Waves',
    image: '/images/surf.jpg',
  },
  {
    id: 'beaches',
    title: 'Beaches',
    description: 'Relax on golden sands, sheltered coves, and quiet coconut palm stretches along the Indian Ocean.',
    iconName: 'Palmtree',
    image: '/images/mirissa.jpg',
  },
  {
    id: 'local-food',
    title: 'Local Food',
    description: 'Taste authentic kottu roti, freshly caught lagoon crab, spicy curries, and sweet king coconut.',
    iconName: 'UtensilsCrossed',
    image: '/images/spices_food.jpg',
  },
  {
    id: 'adventure',
    title: 'Adventure',
    description: 'Trek misty mountain trails in Ella, climb Sigiriya Rock fortress, and discover hidden waterfalls.',
    iconName: 'Compass',
    image: '/images/sigiriya.jpg',
  },
  {
    id: 'wildlife',
    title: 'Wildlife',
    description: 'Explore national park regions for wild elephants, spotted deer, peacocks, and rich birdlife.',
    iconName: 'Binoculars',
    image: '/images/wildlife.jpg',
  },
  {
    id: 'culture',
    title: 'Culture',
    description: 'Walk through 2,000-year-old ancient ruins, sacred Buddhist temples, and historic colonial ramparts.',
    iconName: 'Landmark',
    image: '/images/polonnaruwa.jpg',
  },
  {
    id: 'nightlife-atmosphere',
    title: 'Nightlife & Coastal Atmosphere',
    description: 'Unwind at beachfront cafés, acoustic live music sessions, and friendly sunset gathering spots.',
    iconName: 'Music',
    image: '/images/nightlife.png',
  },
  {
    id: 'hidden-experiences',
    title: 'Hidden Local Experiences',
    description: 'Venture off the main highway into peaceful village backroads, craft workshops, and spice gardens.',
    iconName: 'Sparkles',
    image: '/images/craft.jpg',
  },
];

export const travelStylesList = [
  'Relaxed',
  'Adventure',
  'Culture',
  'Beaches',
  'Wildlife',
  'Surfing',
  'Food',
  'Photography',
];

export const travelerTypesList = [
  'Solo',
  'Couple',
  'Family',
  'Friends',
  'Small Group',
];

/**
 * ==============================================================================
 * AUTHENTIC EXPERIENCES SECTION
 * ==============================================================================
 */
export const experienceHighlights: ExperienceHighlight[] = [
  {
    id: 'king-coconut',
    title: 'Fresh King Coconut (Thambili)',
    description: 'Savor nature’s sweet electrolyte nectar freshly cut by your driver right before your eyes by the seaside.',
    iconName: 'Palmtree',
    tag: 'Island Refreshment',
    image: '/images/tropical_palm.jpg',
  },
  {
    id: 'street-food',
    title: 'Authentic Ceylon Street Food',
    description: 'Taste savory dhal wade, crispy prawn cakes, egg hoppers, and fragrant milk tea at trusted, hygienic local spots.',
    iconName: 'UtensilsCrossed',
    tag: 'Flavor Journey',
    image: '/images/spices_food.jpg',
  },
  {
    id: 'local-stories',
    title: 'Warm Local Storytelling',
    description: 'No sterile pre-recorded audio tours. Talk directly with your friendly English-speaking driver about everyday life in Sri Lanka.',
    iconName: 'Smile',
    tag: 'Real Connection',
    image: '/home.jpeg',
  },
  {
    id: 'photo-spots',
    title: 'Unbeatable Photo Stops',
    description: 'We know the exact hidden viewpoints for golden hour beach photos, colonial arches, and colorful TukTuk portraits.',
    iconName: 'Camera',
    tag: 'Memory Maker',
    image: '/images/Ella Day Experience.WEBP',
  },
];

/**
 * ==============================================================================
 * FREQUENTLY ASKED QUESTIONS (FAQ)
 * Truthful, practical information for travelers.
 * ==============================================================================
 */
export const faqsData: FAQItem[] = [
  {
    question: 'Where can you pick us up for the tours?',
    answer:
      'We offer complimentary door-to-door pickup and drop-off from any hotel, villa, or guesthouse in Negombo, Waikkal, Katunayake, or directly outside Bandaranaike International Airport (CMB) arrival terminal. For Colombo city tours, pickup from Colombo central hotels is also included.',
    category: 'logistics',
  },
  {
    question: 'What happens if it rains during a TukTuk tour?',
    answer:
      'All our TukTuks are fully equipped with transparent, roll-down waterproof storm curtains that keep passengers completely dry while still allowing you to enjoy the views. In the event of heavy monsoon storms, we can reschedule without penalty or switch to an air-conditioned car or van at your preference.',
    category: 'general',
  },
  {
    question: 'What is the dress code for visiting Buddhist and Hindu temples?',
    answer:
      'When entering religious sites (such as Angurukaramulla Temple in Negombo or Gangaramaya in Colombo), modest attire is required: shoulders and knees must be covered. You will also need to remove shoes and hats before entering. Bringing a light sarong or scarf is highly recommended.',
    category: 'tours',
  },
  {
    question: 'How many people fit into one TukTuk?',
    answer:
      'A standard Sri Lankan three-wheeler comfortably seats up to 3 adult passengers on the padded rear bench seat (or 2 adults plus 2 small children). For larger families or groups, we simply travel in a convoy of 2 or 3 TukTuks together, which is incredibly fun!',
    category: 'tours',
  },
  {
    question: 'Can we bring our luggage in the TukTuk?',
    answer:
      'For city sightseeing, small backpacks and day bags fit easily. If you are arriving from or heading to the airport with large hard-shell suitcases, we recommend our private air-conditioned car or mini-van option, or booking an extra luggage TukTuk.',
    category: 'logistics',
  },
  {
    question: 'How does tour pricing and payment work?',
    answer:
      'We believe in honest, fair local pricing with zero hidden booking commissions. You can contact us via our simple inquiry form or WhatsApp for current rates. Payment is made in cash directly at the end of your tour. We gladly accept Sri Lankan Rupees (LKR), US Dollars (USD), Euros (EUR), and British Pounds (GBP).',
    category: 'payment',
  },
  {
    question: 'Do your drivers make unwanted stops at commission shops?',
    answer:
      'Strictly NO. We run 100% private, authentic local tours. We never force our guests to visit overpriced gem museums, herbal gardens, or tourist gift shops. If you specifically request to buy tea, spices, or handicrafts, we take you to honest, government-approved local stores.',
    category: 'general',
  },
  {
    question: 'Can we customize the tour itinerary on the day?',
    answer:
      'Yes, absolutely! Because our tours are private, you set the pace. If you want to spend extra time taking photos at the fish market, skip a church, or sit longer enjoying a king coconut on the beach, simply tell your driver.',
    category: 'tours',
  },
];

/**
 * ==============================================================================
 * TESTIMONIALS
 * Truthful policy: Clearly marked as sample guest placeholders until real
 * customer reviews from Google Business Profile or TripAdvisor are connected.
 * ==============================================================================
 */
export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    guestName: 'Mark & Sarah T.',
    country: 'United Kingdom',
    countryCode: 'GB',
    tourTaken: 'Negombo Heritage TukTuk Tour',
    rating: 5,
    date: 'Sample Guest Feedback',
    comment:
      'Our driver showed us sides of Negombo we never would have discovered alone. From watching the catamaran fishermen at the Lellama to the king coconut on the beach, it was the warmest welcome to Sri Lanka!',
    isSampleReview: true,
  },
  {
    id: 't-2',
    guestName: 'Elena & David B.',
    country: 'Germany',
    countryCode: 'DE',
    tourTaken: 'Muthurajawela Lagoon Safari',
    rating: 5,
    date: 'Sample Guest Feedback',
    comment:
      'The combination of a breeze-filled TukTuk ride through rural villages followed by a quiet boat safari through the mangrove channels was wonderful. We saw so many kingfishers and water monitors!',
    isSampleReview: true,
  },
  {
    id: 't-3',
    guestName: 'Liam & Chloe P.',
    country: 'Australia',
    countryCode: 'AU',
    tourTaken: 'Colombo Street Food & Highlights',
    rating: 5,
    date: 'Sample Guest Feedback',
    comment:
      'Navigating Pettah market in a TukTuk was exhilarating! Our driver was polite, knowledgeable, and guided us safely through the authentic street food stalls at Galle Face Green. Highly recommended!',
    isSampleReview: true,
  },
  {
    id: 't-4',
    guestName: 'Jessica M.',
    country: 'Canada',
    countryCode: 'CA',
    tourTaken: 'Private Custom Island Transfer',
    rating: 5,
    date: 'Sample Guest Feedback',
    comment:
      'Clean vehicle, punctual airport pickup, and zero stress. Honest pricing with no pushy tourist traps. We booked our return transfer immediately.',
    isSampleReview: true,
  },
];

// Normalize asset paths with Vite base path for GitHub Pages and production
resolveAssetPaths(siteConfig);
resolveAssetPaths(toursData);
resolveAssetPaths(destinationsData);
resolveAssetPaths(vehiclesData);
resolveAssetPaths(multiDayToursData);
resolveAssetPaths(sriLankaActivitiesData);
resolveAssetPaths(southCoastActivitiesData);
resolveAssetPaths(curiousTravelerFeaturesData);
resolveAssetPaths(experienceHighlights);

