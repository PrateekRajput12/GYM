
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp Us
        </span>
      </a>
      <a
        href="tel:+919876543210"
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
