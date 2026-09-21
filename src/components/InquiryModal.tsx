import React from 'react';
import { X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { InquiryForm } from './InquiryForm';

export const InquiryModal: React.FC = () => {
  const { isInquiryModalOpen, closeInquiryModal, selectedTourForInquiry } = useNavigation();

  if (!isInquiryModalOpen) return null;

  return (
    <div
      id="inquiry-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={closeInquiryModal}
    >
      <div
        id="inquiry-modal-container"
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-inquiry-modal-btn"
          onClick={closeInquiryModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <InquiryForm
            initialTourId={selectedTourForInquiry}
            formType="Popup Modal Booking"
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
