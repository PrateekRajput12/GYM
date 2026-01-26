
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-red-600 py-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white uppercase">Get In <span className="text-zinc-900">Touch</span></h1>
      </section>

      <section className="py-24 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bebas tracking-widest text-zinc-900 dark:text-white mb-8">Reach Us Directly</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-1">Our Location</h4>
                    <p className="text-zinc-500">123, Mumbai Central Depot, near Orchid Mall, Mumbai Central, Maharashtra 400008</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-1">Call Us</h4>
                    <p className="text-zinc-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-1">Email Support</h4>
                    <p className="text-zinc-500">info@bigbullfitness.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex-1 bg-zinc-100 dark:bg-zinc-900 py-6 rounded-3xl flex flex-col items-center justify-center space-y-2 group transition-all hover:bg-red-600 hover:text-white">
                <Instagram size={30} className="text-red-600 group-hover:text-white" />
                <span className="font-bold text-[10px] uppercase tracking-widest">Instagram</span>
              </a>
              <a href="https://wa.me/919876543210" className="flex-1 bg-zinc-100 dark:bg-zinc-900 py-6 rounded-3xl flex flex-col items-center justify-center space-y-2 group transition-all hover:bg-green-500 hover:text-white">
                <MessageCircle size={30} className="text-green-500 group-hover:text-white" />
                <span className="font-bold text-[10px] uppercase tracking-widest">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden border dark:border-zinc-800 shadow-2xl h-[500px]">
            {/* Google Maps Embed Placeholder (Mumbai Central Area) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1s0x3be7ce9555555555%3A0x6b48873491d604c2!2sMumbai%20Central!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
