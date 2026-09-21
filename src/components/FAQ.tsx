import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Search } from 'lucide-react';
import { faqsData, getWhatsAppUrl } from '../config/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
          <span>Travel Planning & Advice</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Everything you need to know about pickups, temple dress codes, luggage, rain protection, and local cash payment.
        </p>

        {/* Quick Search Field */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Search questions (e.g. pickup, rain, luggage, dress code)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3" role="region" aria-label="FAQ Accordion">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-stone-900 text-sm sm:text-base hover:text-amber-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-amber-100 text-amber-800 rotate-180' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-stone-500 text-sm bg-white rounded-2xl border border-stone-200">
            No questions found matching "{searchQuery}". Have a specific question? Ask us directly on WhatsApp!
          </div>
        )}
      </div>

      {/* Still Have Questions? */}
      <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-heading font-bold text-emerald-950 text-base">
            Have a question not listed here?
          </h4>
          <p className="text-emerald-800 text-xs sm:text-sm mt-0.5">
            We are glad to help with route recommendations, airport flight arrival times, or traveling with infants.
          </p>
        </div>
        <a
          id="faq-whatsapp-btn"
          href={getWhatsAppUrl("Hello, I have a quick question about your Sri Lanka tours: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2 shrink-0 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
