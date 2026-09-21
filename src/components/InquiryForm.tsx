import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Sparkles,
  Sliders,
  Compass,
} from 'lucide-react';
import {
  siteConfig,
  toursData,
  vehiclesData,
  multiDayToursData,
  sriLankaActivitiesData,
  travelStylesList,
  travelerTypesList,
  getWhatsAppUrl,
} from '../config/siteConfig';
import { InquiryFormData } from '../types';

interface InquiryFormProps {
  initialTourId?: string | null;
  onSuccess?: () => void;
  compact?: boolean;
  formType?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialTourId,
  onSuccess,
  compact = false,
  formType,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    preferredDate: '',
    travelerCount: '2 Adults',
    pickupLocation: 'Negombo Hotel / Villa',
    tourInterest: initialTourId || 'negombo-tuktuk-tour',
    preferredVehicle: 'Sri Lankan Tuk Tuk',
    travelStyle: 'Relaxed',
    travelerType: 'Couple',
    message: '',
    botcheck: '', // Honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionReference, setSubmissionReference] = useState('');

  // Sync initialTourId if changed or opened with specific tour/activity
  React.useEffect(() => {
    if (initialTourId) {
      setFormData((prev) => {
        const foundActivity = sriLankaActivitiesData.find((a) => a.id === initialTourId);
        const starterMessage = foundActivity
          ? `Hi Anthony, I would like to include "${foundActivity.title}" (${foundActivity.location}) in my Sri Lanka itinerary.`
          : initialTourId === 'custom-trip-builder'
          ? 'Hi Anthony, I would like to plan a custom Sri Lanka tour route.'
          : prev.message;

        return {
          ...prev,
          tourInterest: initialTourId,
          message: prev.message ? prev.message : starterMessage,
        };
      });
    }
  }, [initialTourId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.botcheck && formData.botcheck.trim() !== '') {
      // Quietly succeed to fool bots
      setStatus('success');
      return;
    }

    // Client-side basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneWhatsapp.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your Name, Email, and WhatsApp or Phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const refNumber = `CTT-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionReference(refNumber);

    const resolvedFormType = formType || (compact ? 'Tour Page Booking Form' : 'General Tour Inquiry Form');
    const matchedTour =
      toursData.find((t) => t.id === formData.tourInterest)?.title ||
      multiDayToursData.find((m) => m.id === formData.tourInterest)?.title ||
      sriLankaActivitiesData.find((a) => a.id === formData.tourInterest)?.title ||
      formData.tourInterest;

    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Colombo',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const payload = {
      ...formData,
      formType: resolvedFormType,
      tourTitle: matchedTour,
      referenceNumber: refNumber,
      submittedAt: formattedDate,
    };

    try {
      let dispatched = false;

      // 1. Primary: Server-side API endpoint that dispatches notification to tours.ceylontuktuk@gmail.com
      try {
        const response = await fetch('/api/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const resData = await response.json();
          if (resData.referenceNumber) {
            setSubmissionReference(resData.referenceNumber);
          }
          dispatched = true;
        }
      } catch (apiErr) {
        console.warn('/api/inquiry call could not be reached, attempting fallback:', apiErr);
      }

      // 2. Secondary fallback: If custom siteConfig.formEndpoint was provided
      if (!dispatched && siteConfig.formEndpoint && siteConfig.formEndpoint.trim() !== '') {
        const fbResponse = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...payload,
            _subject: `New Website Inquiry – ${resolvedFormType} (#${refNumber})`,
          }),
        });

        if (fbResponse.ok) {
          dispatched = true;
        }
      }

      // 3. Mark success
      setStatus('success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to submit the inquiry at this moment. Please use WhatsApp for instant booking.'
      );
    }
  };

  // Generate WhatsApp text from current form state
  const getPrefilledWhatsAppText = () => {
    const matchedTour =
      toursData.find((t) => t.id === formData.tourInterest)?.title ||
      multiDayToursData.find((m) => m.id === formData.tourInterest)?.title ||
      formData.tourInterest;

    return (
      `Hello Ceylon Tuk Tuk Tours! I just submitted a tour inquiry:\n\n` +
      `• Ref: ${submissionReference || 'Direct Website Inquiry'}\n` +
      `• Name: ${formData.fullName}\n` +
      `• Tour / Package: ${matchedTour}\n` +
      `• Date: ${formData.preferredDate || 'Flexible'}\n` +
      `• Travelers: ${formData.travelerCount} (${formData.travelerType || 'Travelers'})\n` +
      (formData.travelStyle ? `• Travel Style: ${formData.travelStyle}\n` : '') +
      `• Pickup: ${formData.pickupLocation}\n` +
      `• Preferred Vehicle: ${formData.preferredVehicle}\n` +
      (formData.message ? `• Note: ${formData.message}\n` : '') +
      `\nCould you please confirm current availability and pricing?`
    );
  };

  if (status === 'success') {
    return (
      <div
        id="inquiry-success-state"
        className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm text-center animate-in fade-in duration-300"
      >
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 mb-2">
          Inquiry Received!
        </h3>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-4">
          Thank you, <strong className="text-stone-900">{formData.fullName}</strong>! Your tour inquiry has been received. We'll get back to you as soon as possible with route availability and local pricing.
        </p>

        {submissionReference && (
          <div className="inline-block bg-stone-100 px-3.5 py-1.5 rounded-lg text-xs font-mono text-stone-700 font-semibold mb-6">
            Inquiry Ref: {submissionReference}
          </div>
        )}

        <div className="bg-emerald-50 rounded-xl p-4 max-w-md mx-auto border border-emerald-200 mb-6 text-xs sm:text-sm text-emerald-900 text-left">
          <div className="flex items-center gap-2 font-bold mb-1">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Want an instant confirmation?</span>
          </div>
          <p className="text-emerald-800 text-xs leading-relaxed">
            Our driver team is often on the road. Tap below to send this exact inquiry directly to our phone via WhatsApp for an immediate response!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            id="success-whatsapp-fast-btn"
            href={getWhatsAppUrl(getPrefilledWhatsAppText())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send via WhatsApp Now</span>
          </a>

          <button
            id="success-reset-form-btn"
            onClick={() => setStatus('idle')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="tour-inquiry-form"
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-stone-200/90 shadow-sm ${
        compact ? 'p-5' : 'p-6 sm:p-8'
      }`}
      noValidate
    >
      {/* Honeypot Spam Protection (Invisible to real humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botcheck">Do not fill this out if you are human</label>
        <input
          id="botcheck"
          type="text"
          name="botcheck"
          value={formData.botcheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mb-6">
        {compact ? (
          <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 mb-1">
            Plan Your Private TukTuk Tour
          </h3>
        ) : (
          <h2 className="font-heading font-bold text-lg sm:text-xl text-stone-900 mb-1">
            Plan Your Private TukTuk Tour
          </h2>
        )}
        <p className="text-stone-500 text-xs sm:text-sm">
          No credit card required. Pay in cash directly to your driver after the tour.
        </p>
      </div>

      {status === 'error' && (
        <div
          id="inquiry-form-error-alert"
          className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-stone-700 mb-1">
            Full Name <span className="text-amber-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-stone-700 mb-1">
            Email Address <span className="text-amber-600">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. sarah@example.com"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* WhatsApp / Phone */}
        <div>
          <label htmlFor="phoneWhatsapp" className="block text-xs font-bold text-stone-700 mb-1">
            WhatsApp / Phone (with country code) <span className="text-amber-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="phoneWhatsapp"
              type="tel"
              name="phoneWhatsapp"
              required
              value={formData.phoneWhatsapp}
              onChange={handleChange}
              placeholder="+44 7700 900077"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold text-stone-700 mb-1">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="preferredDate"
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Number of Travelers */}
        <div>
          <label htmlFor="travelerCount" className="block text-xs font-bold text-stone-700 mb-1">
            Number of Travelers
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              id="travelerCount"
              name="travelerCount"
              value={formData.travelerCount}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            >
              <option value="1 Solo Traveler">1 Solo Traveler</option>
              <option value="2 Adults (1 TukTuk)">2 Adults (1 TukTuk)</option>
              <option value="3 Adults (1 TukTuk Max)">3 Adults (1 TukTuk Max)</option>
              <option value="Family: 2 Adults + 1-2 Kids">Family: 2 Adults + 1-2 Kids</option>
              <option value="Group: 4-6 Guests (2 TukTuks)">Group: 4-6 Guests (2 TukTuks)</option>
              <option value="Group: 7+ Guests (Convoy or Mini-Van)">Group: 7+ Guests (Convoy / Van)</option>
            </select>
          </div>
        </div>

        {/* Pickup Location */}
        <div>
          <label htmlFor="pickupLocation" className="block text-xs font-bold text-stone-700 mb-1">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="pickupLocation"
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Jetwing Blue Negombo or CMB Airport"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Tour / Package Interest */}
        <div className="md:col-span-2">
          <label htmlFor="tourInterest" className="block text-xs font-bold text-stone-700 mb-1">
            Tour or Package Interest
          </label>
          <select
            id="tourInterest"
            name="tourInterest"
            value={formData.tourInterest}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
          >
            <optgroup label="Multi-Day Sri Lanka Tours (Customizable)">
              {multiDayToursData.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title} ({m.duration})
                </option>
              ))}
            </optgroup>
            <optgroup label="Local & Day Tours">
              {toursData.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title} ({t.duration})
                </option>
              ))}
            </optgroup>
            <optgroup label="Custom Itinerary Planning">
              <option value="custom-trip-builder">
                Build Your Sri Lanka Tour (Custom Route)
              </option>
              <option value="Airport Transfer Only">
                Bandaranaike Airport (CMB) Transfer Only
              </option>
            </optgroup>
            <optgroup label="Things to Do & Specific Experiences">
              {sriLankaActivitiesData.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.title} ({a.location})
                </option>
              ))}
            </optgroup>
          </select>

          {/* Customizable notice when multi-day or custom tour is chosen */}
          <div className="mt-2 p-2 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-[11px] sm:text-xs flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> Sample itinerary — fully customizable based on your pace, travel dates, and vehicle preferences.
            </span>
          </div>
        </div>

        {/* Traveler Type */}
        <div>
          <label htmlFor="travelerType" className="block text-xs font-bold text-stone-700 mb-1">
            Traveler Type
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              id="travelerType"
              name="travelerType"
              value={formData.travelerType || 'Couple'}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            >
              {travelerTypesList.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Travel Style */}
        <div>
          <label htmlFor="travelStyle" className="block text-xs font-bold text-stone-700 mb-1">
            Travel Style / Focus
          </label>
          <div className="relative">
            <Compass className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              id="travelStyle"
              name="travelStyle"
              value={formData.travelStyle || 'Relaxed'}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
            >
              {travelStylesList.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Vehicle */}
        <div className="md:col-span-2">
          <label htmlFor="preferredVehicle" className="block text-xs font-bold text-stone-700 mb-1">
            Preferred Vehicle
          </label>
          <select
            id="preferredVehicle"
            name="preferredVehicle"
            value={formData.preferredVehicle}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
          >
            {vehiclesData.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.capacity}) — {v.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message / Special Requests */}
      <div className="mt-4">
        <label htmlFor="message" className="block text-xs font-bold text-stone-700 mb-1">
          Special Requests / Flight Details / Dietary Preferences
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. We are arriving at CMB Airport at 7 AM. We'd love to stop for authentic egg hoppers and take photos of the catamarans..."
          className="w-full px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors resize-none"
        ></textarea>
      </div>

      {/* Submit Controls */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button
          id="submit-inquiry-form-btn"
          type="submit"
          disabled={status === 'submitting'}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-200"
        >
          {status === 'submitting' ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Tour Inquiry</span>
            </>
          )}
        </button>

        {/* Alternative direct WhatsApp button */}
        <a
          id="inquiry-direct-whatsapp-btn"
          href={getWhatsAppUrl(getPrefilledWhatsAppText())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Book Directly on WhatsApp</span>
        </a>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Your contact info is safe. We never sell data or send marketing spam.</span>
      </div>
    </form>
  );
};
