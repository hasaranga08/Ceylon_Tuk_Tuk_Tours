import React from 'react';
import { Star, MessageSquareQuote, Info, ExternalLink } from 'lucide-react';
import { testimonialsData, siteConfig } from '../config/siteConfig';

export const Testimonial: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 sm:py-20 bg-stone-100/60 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-700" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
            Guest Memories & Sample Feedback
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
            Hear how our guests experience the hospitality, local stories, and peaceful routes of Negombo and Colombo.
          </p>

          {/* Truthful Transparency Badge as required by system prompt */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-900 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Transparency Note:</strong> Below are representative sample placeholders reflecting typical tour experiences. Real guest reviews will link directly to our verified Google Business & TripAdvisor profiles.
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Sample Review Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                    Sample Review
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">{review.guestName}</span>
                  <span className="text-stone-500">{review.country}</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  {review.tourTaken}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Review Profiles */}
        <div className="mt-10 text-center">
          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
          >
            <span>View our Negombo location on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
