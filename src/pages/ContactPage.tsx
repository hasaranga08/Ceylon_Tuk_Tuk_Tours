import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ExternalLink,
  Plane,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { InquiryForm } from '../components/InquiryForm';
import { useNavigation } from '../context/NavigationContext';

export const ContactPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div id="contact-page" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-stone-500">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-amber-700">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="font-semibold text-stone-900">Contact & Inquiries</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Local Tourism Business In Negombo, Sri Lanka
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight mb-4">
            Contact {siteConfig.businessName}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Have questions about tour routes, airport pickups, or traveling with family? 
            Send us an inquiry below or tap our WhatsApp link for a friendly, direct reply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Map Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <h2 className="font-heading font-bold text-xl text-stone-900 border-b border-stone-100 pb-3">
                Business Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="pb-3 border-b border-stone-100 flex items-center gap-3.5">
                  <img
                    src={siteConfig.logoUrl}
                    alt={siteConfig.businessName}
                    className="h-14 w-auto object-contain shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-heading">
                      {siteConfig.businessName}
                    </h3>
                    <p className="text-stone-700 font-semibold mt-0.5 text-sm">
                      {siteConfig.ownerName}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Private Tuk Tuk tours and local experiences in Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-xs font-semibold">WhatsApp:</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      {siteConfig.whatsappDisplayNumber}
                    </a>
                    <span className="block text-xs text-stone-500">Fastest response for inquiries & bookings</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-xs font-semibold">Email:</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-bold text-stone-900 hover:text-amber-700 transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-xs font-semibold">Operating Hours</span>
                    <span className="font-medium text-stone-800">{siteConfig.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <a
                  href={siteConfig.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Airport Proximity Card */}
            <div className="bg-amber-50/80 rounded-3xl p-6 border border-amber-200/80 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2 font-bold mb-1.5 text-amber-900">
                <Plane className="w-4 h-4 text-amber-700" />
                <span>Just 15–20 Mins from Colombo Airport (CMB)</span>
              </div>
              <p className="text-amber-900/80 leading-relaxed">
                Negombo is the closest major coastal destination to Bandaranaike International Airport. 
                We provide smooth airport arrival pickups so you can start your vacation relaxed.
              </p>
            </div>
          </div>

          {/* Inquiry Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <InquiryForm formType="Contact Page Inquiry Form" />
          </div>
        </div>
      </div>
    </div>
  );
};
