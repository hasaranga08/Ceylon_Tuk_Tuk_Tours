export type PageId =
  | 'home'
  | 'tours'
  | 'tuk-tuk-tours-sri-lanka'
  | 'negombo-tuk-tuk-tour'
  | 'negombo-tuktuk-tour'
  | 'negombo-city-tour'
  | 'colombo-city-tour'
  | 'negombo-lagoon-tour'
  | 'local-food-culture-tour'
  | 'local-food-culture-experience'
  | 'sri-lanka-private-tours'
  | 'private-sri-lanka-tours'
  | 'about'
  | 'contact';

export interface Tour {
  id: string;
  slug: PageId;
  title: string;
  shortTitle: string;
  tagline: string;
  duration: string;
  location: string;
  recommendedTime: string;
  vehicleType: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  description: string;
  highlights: string[];
  itinerary: {
    stopNumber: number;
    title: string;
    description: string;
    duration: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  pricingNote: string;
  isPopular?: boolean;
  altText?: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  shortDescription: string;
  description: string;
  image: string;
  distanceFromNegombo: string;
  bestTimeToVisit: string;
  featuredInTourId: PageId;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
  features: string[];
  idealFor: string;
}

export interface ExperienceHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tours' | 'logistics' | 'payment';
}

export interface Testimonial {
  id: string;
  guestName: string;
  country: string;
  countryCode: string;
  tourTaken: string;
  rating: number;
  date: string;
  comment: string;
  isSampleReview: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  preferredDate: string;
  travelerCount: string;
  pickupLocation: string;
  tourInterest: string;
  preferredVehicle: string;
  travelStyle?: string;
  travelerType?: string;
  message: string;
  formType?: string;
  tourTitle?: string;
  submittedAt?: string;
  referenceNumber?: string;
  botcheck?: string; // Honeypot spam protection
}

export interface MultiDayTourItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface MultiDayTour {
  id: string;
  title: string;
  durationDays: number;
  duration: string;
  tagline: string;
  description: string;
  heroImage: string;
  itineraryDays: MultiDayTourItineraryDay[];
  highlights: string[];
  travelStyles: string[];
  ctaText: string;
  whatsappMessage: string;
  sampleNote: string;
  altText?: string;
}

export interface SouthCoastActivity {
  id: string;
  letter: string;
  title: string;
  location: string;
  tag: string;
  description: string;
  image: string;
  disclaimer?: string;
  ctaText: string;
  whatsappMessage: string;
}

export type ActivityCategory =
  | 'ALL'
  | 'WEST COAST'
  | 'CULTURAL TRIANGLE'
  | 'HILL COUNTRY'
  | 'SOUTH COAST'
  | 'WILDLIFE'
  | 'EAST COAST'
  | 'COLOMBO & NEGOMBO';

export interface SriLankaActivity {
  id: string;
  title: string;
  location: string;
  category: 'WEST COAST' | 'CULTURAL TRIANGLE' | 'HILL COUNTRY' | 'SOUTH COAST' | 'WILDLIFE' | 'EAST COAST' | 'COLOMBO & NEGOMBO';
  description: string;
  image: string;
  tag?: string;
  disclaimer?: string;
  ctaText?: string;
  whatsappMessage?: string;
  altText?: string;
}

export interface CuriousTravelerFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface SiteConfig {
  businessName: string;
  ownerName: string;
  logoUrl: string;
  legalEntity: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplayNumber: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
  };
  locationDisplay: string;
  googleBusinessUrl: string;
  formEndpoint: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
    youtube?: string;
  };
  operatingHours: string;
  currenciesAccepted: string[];
}
