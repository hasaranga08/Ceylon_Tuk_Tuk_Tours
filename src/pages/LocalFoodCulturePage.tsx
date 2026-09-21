import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  MessageCircle,
  UtensilsCrossed,
  Sparkles,
  ShieldCheck,
  Leaf,
  Flame,
  HeartHandshake,
  Coffee,
  Store,
  Compass,
  ChevronDown,
  ChevronUp,
  Info,
  Car,
} from 'lucide-react';
import { toursData, getWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { InquiryForm } from '../components/InquiryForm';
import { RelatedTours } from '../components/RelatedTours';
import { useNavigation } from '../context/NavigationContext';
import { getAssetPath } from '../utils/assetPath';

export const LocalFoodCulturePage: React.FC = () => {
  const { navigateTo, openInquiryModal } = useNavigation();
  const tour =
    toursData.find((t) => t.id === 'local-food-culture-tour' || t.slug === 'local-food-culture-tour') ||
    toursData[3];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const experienceHighlights = [
    {
      id: 'street-food-tasting',
      icon: UtensilsCrossed,
      title: 'Authentic Street Food Tasting',
      description:
        'Savor sizzling hot hoppers, crispy dhal vadai, spicy egg roti, and freshly made kottu prepared right before your eyes by seasoned local street masters.',
      badge: 'Signature Flavors',
    },
    {
      id: 'home-cooking-spices',
      icon: Flame,
      title: 'Traditional Home-Style Cooking & Spices',
      description:
        'Discover the alchemy of Ceylon spices. Learn how true Ceylon cinnamon quills, cardamom, roasted curry powders, and coconut milk transform humble ingredients into rich feasts.',
      badge: 'Heritage Aromas',
    },
    {
      id: 'local-markets',
      icon: Store,
      title: 'Local Fish & Vegetable Markets',
      description:
        'Stroll through bustling neighborhood morning or afternoon markets. Smell wild curry leaves, lemongrass, turmeric roots, and see the daily catch fresh from the Indian Ocean.',
      badge: 'Market Walk',
    },
    {
      id: 'village-life-encounters',
      icon: HeartHandshake,
      title: 'Village Life & Cultural Encounters',
      description:
        'Beyond the tourist resorts, connect with friendly neighborhood cooks, spice vendors, and artisans who greet you with genuine Sri Lankan warmth, hospitality, and smiles.',
      badge: 'Community Connection',
    },
    {
      id: 'tea-coconut-refreshments',
      icon: Coffee,
      title: 'Tea & King Coconut Refreshments',
      description:
        'Sip sweet, electrolyte-rich golden King Coconut (Thambili) freshly lopped on the street corner, followed by steaming, fragrant cups of artisanal Ceylon ginger tea.',
      badge: 'Pure Refreshment',
    },
    {
      id: 'hidden-spots-local-guides',
      icon: Compass,
      title: 'Hidden Spots Guided by Local Drivers',
      description:
        'Tour with an authentic local driver-guide who knows every tucked-away family kitchen, seaside snack shack, and neighborhood bakery that tour buses can never reach.',
      badge: 'Insider Access',
    },
  ];

  const culinarySpotlights = [
    {
      name: 'Rhythmic Kottu Roti',
      subtitle: 'The Heartbeat of Sri Lankan Street Food',
      description:
        'Watch and listen to the hypnotic clatter of steel blades rhythmically chopping shredded godamba flatbread on a searing cast-iron hot plate, tossed with fresh garden vegetables, eggs, aromatic curry spices, and your choice of tender chicken or cheese.',
      tags: ['Sizzling Hot', 'Vegetarian or Meat', 'Evening Favorite'],
      image: getAssetPath('/images/koththu.jpg'),
    },
    {
      name: 'Crispy Bowl Hoppers (Appa)',
      subtitle: 'Delicate Golden Edges & Steamed Centers',
      description:
        'A culinary marvel made from fermented rice flour and silky coconut milk, swirled in deep bowl-shaped wok pans. Try both plain hoppers and rich egg hoppers, topped with freshly ground fiery lunu miris or sweet onion seeni sambal.',
      tags: ['Traditional', 'Gluten-Free Flour', 'Must-Try'],
      image: getAssetPath('/images/hoppers.jpg'),
    },
    {
      name: 'Warm Pol Roti & Sambals',
      subtitle: 'Rustic Griddle-Baked Coconut Flatbread',
      description:
        'Freshly grated coconut hand-kneaded with flour, toasted slowly on dry griddles until golden and fragrant. Served piping hot alongside spicy lunu miris (pounded red onions, dry red chili, salt, and lime juice) and aromatic dhal.',
      tags: ['Coconut Infused', 'Piquant Sambal', 'Comfort Food'],
      image: getAssetPath('/images/polroti.jpg'),
    },
    {
      name: 'Golden Dhal Vadai & Isso Vade',
      subtitle: 'Crunchy Coastal & Street Snacks',
      description:
        'Bite into crunchy deep-fried lentil patties infused with curry leaves and ginger, or the oceanfront favorite isso vade (spiced lentil cake topped with whole prawns), famously enjoyed by locals along the coastal seawall.',
      tags: ['Crispy Texture', 'Spiced Lentils', 'Seaside Tradition'],
      image: getAssetPath('/images/issowade.jpeg'),
    },
    {
      name: 'Sweet Ceylon Treats & Tropical Fruits',
      subtitle: 'Pani Pol, Kevum & Ripe Bounty',
      description:
        'Indulge in Pani Pol (thin rolled crepes stuffed with sweet caramelized coconut and dark kitul palm treacle), crisp traditional sweetmeats, and freshly sliced seasonal papaya, sweet red bananas, and passion fruit.',
      tags: ['Kitul Treacle', 'Fresh Sliced Fruits', 'Dessert Delight'],
      image: getAssetPath('/images/fruits.webp'),
    },
    {
      name: 'Fresh King Coconut (Thambili) & Spiced Tea',
      subtitle: 'Ceylon’s Living Elixir & World-Famous Brew',
      description:
        'Quench your thirst with fresh, naturally sweet golden King Coconut water chopped before you on the street corner. Conclude your tasting tour with steaming Ceylon black tea brewed with fresh crushed ginger and aromatic spices.',
      tags: ['Natural Hydration', 'Artisanal Tea', 'Ceylon Grown'],
      image: getAssetPath('/images/thabili.jpg'),
    },
  ];

  const faqs = [
    {
      q: 'Is the street food safe and hygienic for international travelers?',
      a: 'Absolutely. We only visit meticulously vetted, long-established local eateries, family bakeries, and reputable stalls where our own families eat daily. Ingredients are prepared fresh and cooked hot right before your eyes. Bottled mineral drinking water is always provided.',
    },
    {
      q: 'Can vegetarian, vegan, and gluten-free dietary needs be accommodated?',
      a: 'Yes, wonderfully so! Sri Lankan cuisine is arguably one of the world’s best cuisines for plant-based eaters, naturally relying on coconut milk, rich lentils (dhal), tropical vegetables, and spices. Traditional hoppers and coconut water are also naturally wheat-free. Just let your driver know your preferences at pickup.',
    },
    {
      q: 'What if I cannot tolerate very spicy food?',
      a: 'You are in complete control of your spice level! Your private guide will instruct cooks to prepare your dishes mild, tempered, or completely non-spicy. Sambals and chilies are always served on the side so you can sample as little or as much heat as you feel comfortable with.',
    },
    {
      q: 'Where does the tour start and are hotel pickups included?',
      a: 'Free door-to-door pickup and drop-off are included from any hotel, villa, or residence in Negombo and the Bandaranaike International Airport (CMB) / Katunayake area. Colombo pickups and drop-offs can also be easily arranged upon request.',
    },
    {
      q: 'How many people fit comfortably in one Tuk Tuk?',
      a: 'Each authentic Sri Lankan Tuk Tuk comfortably accommodates up to 3 adult passengers (or 2 adults and 2 children) with ample legroom. For larger families or travel groups, we simply coordinate multiple Tuk Tuks driving together in a fun convoy, keeping everyone together throughout the tour.',
    },
    {
      q: 'What should we wear and bring along on this tour?',
      a: 'We recommend casual, breathable summer clothing and comfortable walking sandals or shoes for strolling through local markets. Bring a camera or smartphone for photos. All food tastings, bottled water, and King Coconut are fully included in the tour experience!',
    },
  ];

  return (
    <article id="local-food-culture-page" className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500">
            <li>
              <button
                id="food-breadcrumb-home"
                onClick={() => navigateTo('home')}
                className="hover:text-amber-700 transition-colors"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li>
              <button
                id="food-breadcrumb-tours"
                onClick={() => navigateTo('tours')}
                className="hover:text-amber-700 transition-colors"
              >
                Tours
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900 truncate">
              Local Food & Culture Experience
            </li>
          </ol>
        </nav>

        {/* ========================================================================= */}
        {/* HERO SECTION                                                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-700" />
              <span>Authentic Culinary & Cultural Safari</span>
            </div>

            {/* Page Main Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
              Local Food & Culture Experience
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl font-medium text-amber-900/90 leading-relaxed mb-3">
              Authentic tastes, village traditions, spice trails & Sri Lankan hospitality
            </p>

            {/* Overview paragraph */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Step away from typical hotel buffets and taste the true soul of Sri Lanka. Ride in a private, comfortable Tuk Tuk with a friendly local driver-guide through historic streets, vibrant spice bazaars, and hidden coastal kitchens. Savor sizzling hoppers, aromatic kottu, warm coconut roti, and sweet King Coconut while uncovering time-honored community customs.
            </p>

            {/* Tour Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm mb-6">
              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-xs">
                <span className="text-stone-400 block text-[11px] font-semibold uppercase">Duration</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  3.5 – 4 Hours
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-xs">
                <span className="text-stone-400 block text-[11px] font-semibold uppercase">Tour Style</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Compass className="w-4 h-4 text-amber-600" />
                  100% Private
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-xs">
                <span className="text-stone-400 block text-[11px] font-semibold uppercase">Best Departures</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  9:00 AM / 3:30 PM
                </span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-xs">
                <span className="text-stone-400 block text-[11px] font-semibold uppercase">Pickup Area</span>
                <span className="font-bold text-stone-900 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  Negombo / CMB
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* WhatsApp CTA */}
              <a
                id="food-tour-whatsapp-cta-btn"
                href={getWhatsAppUrl(
                  "Hello! I would like to book the Local Food & Culture Experience in Sri Lanka. Could you please share availability and pricing?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat & Book via WhatsApp</span>
              </a>

              {/* Plan My Trip Modal CTA */}
              <button
                id="food-tour-plan-trip-cta-btn"
                onClick={() => openInquiryModal('local-food-culture-tour')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan My Trip / Inquire</span>
              </button>
            </div>

            {/* Micro reassurance badge */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Vegetarian & Vegan friendly
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Adjustable spice heat
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Hygienic, tested eateries
              </span>
            </div>
          </div>

          {/* Visual Gallery */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100 relative group">
              <img
                src={tour.heroImage}
                alt="Local Food and Culture Experience in Sri Lanka"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-xs font-bold bg-amber-600 px-2 py-0.5 rounded shadow-sm">
                  Fresh Flavors
                </span>
                <p className="text-xs sm:text-sm font-semibold mt-1 drop-shadow">
                  Hand-crafted Ceylon spices & authentic village dining
                </p>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-2">
              {tour.galleryImages.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 shadow-xs relative"
                >
                  <img
                    src={img}
                    alt={`Sri Lanka local food and culture highlight ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTRODUCTION / EXPERIENCE OVERVIEW                                         */}
        {/* ========================================================================= */}
        <section id="experience-overview" className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Beyond the Guidebooks
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-4">
              Taste Sri Lanka Through the Eyes of a Local Friend
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              In Sri Lanka, food is not merely sustenance—it is our love language, our cultural inheritance, and our deepest expression of hospitality. Every spice blend tells a story of ancient Indian Ocean trade routes; every clay pot simmering on coconut husk embers carries the generational memory of island grandmothers.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              On this private Tuk Tuk journey, you won't sit at generic tourist establishments. Instead, your local driver-guide will escort you into lively village produce bazaars, explain the delicate balance of roasted spices and tangy tamarind, and introduce you to master cooks rolling fresh coconut roti and crafting paper-thin egg hoppers. It is an immersive sensory celebration of Ceylon’s authentic culinary soul.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHAT YOU CAN EXPERIENCE (HIGHLIGHTS GRID)                                 */}
        {/* ========================================================================= */}
        <section id="what-you-can-experience" className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Immersive Adventures
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900">
              What You Can Experience
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Every stop has been hand-selected for unmatched flavor, cleanliness, and cultural authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceHighlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  id={`highlight-card-${item.id}`}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-stone-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOCAL FOOD HIGHLIGHTS (CUISINE SPOTLIGHT)                                  */}
        {/* ========================================================================= */}
        <section id="local-food-highlights" className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Iconic Island Dishes
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900">
              Local Food Highlights
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              From comforting street classics to traditional royal sweets, these are the signature delicacies you can taste during your tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culinarySpotlights.map((dish, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 left-3 text-white text-xs font-bold drop-shadow">
                      {dish.subtitle}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                    {dish.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOCAL CULTURE & DAILY LIFE SECTION                                        */}
        {/* ========================================================================= */}
        <section id="culture-daily-life" className="bg-gradient-to-br from-amber-50/70 via-stone-50 to-white rounded-3xl p-6 sm:p-10 border border-amber-200/70 shadow-sm mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Living Traditions & Heartfelt Encounters
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-4">
                Local Culture & Everyday Island Life
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                This tour is just as much about people as it is about food. Sri Lankan culture thrives on community relationships, neighborly trust, and pride in age-old culinary craft.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      Artisan Spice Merchants & Generational Vendors
                    </strong>
                    Meet third-generation traders who explain how to identify true Ceylon cinnamon quills versus counterfeit cassia bark, and learn ancient Ayurvedic home remedies.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      Coastal Fishermen & Lagoon Outriggers
                    </strong>
                    Witness traditional catamarans (Oruwa) resting on golden sands and see how village fishermen bring in their morning and afternoon catch of prawns and crabs.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      Neighborhood Shrines & Village Harmony
                    </strong>
                    Breeze past colorful roadside Buddhist stupas, historic Catholic churches in "Little Rome", and tranquil tree-lined coastal lanes.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3]">
                <img
                  src={getAssetPath('/images/Village & Local Food Experience.WEBP')}
                  alt="Sri Lankan village life and community interaction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CUSTOMIZABLE EXPERIENCE & DIETARY FLEXIBILITY                              */}
        {/* ========================================================================= */}
        <section id="customizable-experience" className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Tailored to Your Palate
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
              A 100% Customizable Culinary Journey
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              We understand that every traveler has distinct tastes, dietary lifestyles, and spice tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-stone-900 mb-1.5">
                Vegetarian & Vegan
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Sri Lankan food is naturally plant-forward. Enjoy curried jackfruit, creamy coconut dhal, pol sambal, and fresh vegetables cooked in pure coconut milk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-stone-900 mb-1.5">
                Spice Level Adjusted
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Whether you prefer gentle, fragrant aromatics without hot peppers or authentic Sri Lankan chili fire, your guide instructs cooks to your exact preference.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-stone-900 mb-1.5">
                Gluten & Dairy Friendly
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Hoppers, king coconut, and most curries are naturally dairy-free and rice-flour based. We happily navigate allergies with full care.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-stone-900 mb-1.5">
                Private Tour Pace
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Never rushed by crowds. Linger longer over a hot cup of spiced tea, take impromptu photo stops, or ask for extra tastings of your favorite treats.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VEHICLE / TOUR STYLE NOTE (COMPLIANT: NO OPEN-ROOF/OPEN-TOP CLAIMS)         */}
        {/* ========================================================================= */}
        <section id="vehicle-tour-style" className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-md mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Car className="w-3.5 h-3.5" />
                <span>Private Transport & Guide Standard</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                Authentic Sri Lankan Tuk Tuk with Driver-Guide
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                Travel in a classic, meticulously maintained Sri Lankan Tuk Tuk. Our vehicles are equipped with comfortable, cushioned passenger seating, fitted weather protection storm curtains for sudden tropical rain or bright sun, and driven by a licensed, courteous English-speaking local professional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                  <span className="font-bold text-amber-400 block mb-1">Comfort & Cleanliness</span>
                  Spacious padded seating for up to 3 adult guests with hand sanitizer on board.
                </div>
                <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                  <span className="font-bold text-amber-400 block mb-1">Weather Protected</span>
                  Roll-down weather curtains ensure you stay dry and comfortable in any conditions.
                </div>
                <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                  <span className="font-bold text-amber-400 block mb-1">Local Navigation</span>
                  Effortlessly weaves down narrow spice alleys and village lanes inaccessible to large vans.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="p-4 rounded-2xl bg-stone-800 border border-stone-700 w-full text-center">
                <span className="text-stone-400 text-xs block mb-1">Have special mobility needs?</span>
                <span className="text-white text-xs font-semibold block mb-3">
                  Private air-conditioned car or van transfers can also be arranged.
                </span>
                <button
                  onClick={() => openInquiryModal('local-food-culture-tour')}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
                >
                  Request Custom Vehicle
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ITINERARY & INQUIRY SIDEBAR                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7 space-y-10">
            {/* Itinerary Timeline */}
            <section id="food-tour-itinerary">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                Step-By-Step Schedule
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 mb-6">
                Detailed Tour Itinerary
              </h2>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-stone-200">
                {tour.itinerary.map((stop) => (
                  <div key={stop.stopNumber} className="relative flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 ring-4 ring-[#FAF8F5]">
                      {stop.stopNumber}
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm flex-1">
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                        <h3 className="font-heading font-bold text-base text-stone-900">
                          {stop.title}
                        </h3>
                        <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                          {stop.duration}
                        </span>
                      </div>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl text-stone-900 mb-6">
                What’s Included in This Experience
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Included in Direct Rate</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-stone-400" />
                    <span>Not Included</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Inquiry Sidebar */}
          <div className="lg:col-span-5">
            <div id="food-tour-inquiry-sidebar" className="sticky top-24 space-y-4">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-950">
                <span className="font-bold block mb-1 text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Local Food Safari Tip
                </span>
                We recommend having a very light breakfast or lunch prior to the tour. You will be sampling multiple hearty snacks, tropical fruits, and savory street delicacies!
              </div>

              {/* Direct WhatsApp Quick Callout */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-emerald-900 block">Prefer to chat on WhatsApp?</span>
                  <span className="text-emerald-800">Quick replies from our local team in Negombo.</span>
                </div>
                <a
                  href={getWhatsAppUrl(
                    "Hello! I am inquiring about the Local Food & Culture Experience tour. Is it available for our travel dates?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <InquiryForm
                initialTourId="local-food-culture-tour"
                compact={true}
                formType="Local Food & Culture Experience Booking"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FAQ SECTION SPECIFIC TO FOOD & CULTURE                                     */}
        {/* ========================================================================= */}
        <section id="food-culture-faqs" className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Common Questions
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900">
              Food & Culture Tour FAQs
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Everything you need to know about food hygiene, spice tolerances, vehicle safety, and logistics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-stone-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-stone-50/80 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-stone-900">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-500">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION BANNER                                                      */}
        {/* ========================================================================= */}
        <section id="food-tour-cta-banner" className="bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-14 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taste Authentic Sri Lanka</span>
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight mb-4">
              Ready for an Unforgettable Culinary & Cultural Journey?
            </h2>
            <p className="text-stone-200 text-xs sm:text-base leading-relaxed mb-8">
              Experience the genuine warmth of Sri Lankan village cooking, aromatic spice traditions, and sizzling street foods on a private Tuk Tuk tour tailored just for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                id="food-cta-open-modal-btn"
                onClick={() => openInquiryModal('local-food-culture-tour')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Plan My Tour Online
              </button>
              <a
                id="food-cta-whatsapp-btn"
                href={getWhatsAppUrl(
                  "Hello! I want to plan the Local Food & Culture Experience tour. Could you help me with dates and pickup arrangements?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp ({siteConfig.whatsappDisplayNumber})</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* RELATED TOURS                                                              */}
        {/* ========================================================================= */}
        <RelatedTours currentTourSlug="local-food-culture-tour" />
      </div>
    </article>
  );
};
