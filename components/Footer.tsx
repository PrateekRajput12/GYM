
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 pt-16 pb-8 border-t dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="w-10 h-10 text-red-600" />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-bebas tracking-wider text-zinc-900 dark:text-white">BIG BULL FITNESS</span>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Mumbai Central</span>
            </div>
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            The ultimate fitness destination in Mumbai Central. Premium equipment, expert trainers, and a high-energy environment built for winners.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 shadow-md flex items-center justify-center text-red-600 hover:scale-110 transition-transform">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 shadow-md flex items-center justify-center text-red-600 hover:scale-110 transition-transform">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 shadow-md flex items-center justify-center text-red-600 hover:scale-110 transition-transform">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bebas tracking-widest uppercase mb-6 text-zinc-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors">About Our Story</Link></li>
            <li><Link to="/programs" className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors">Fitness Programs</Link></li>
            <li><Link to="/trainers" className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors">Meet Our Trainers</Link></li>
            <li><Link to="/membership" className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors">Membership Plans</Link></li>
            <li><Link to="/gallery" className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bebas tracking-widest uppercase mb-6 text-zinc-900 dark:text-white">Visit Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="text-red-600 shrink-0" size={20} />
              <span className="text-zinc-600 dark:text-zinc-400">123, Mumbai Central Depot, near Orchid Mall, Mumbai Central, Maharashtra 400008</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-red-600" size={18} />
              <span className="text-zinc-600 dark:text-zinc-400">+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-red-600" size={18} />
              <span className="text-zinc-600 dark:text-zinc-400">info@bigbullfitness.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xl font-bebas tracking-widest uppercase mb-6 text-zinc-900 dark:text-white">Gym Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="text-zinc-500">Mon - Fri</span>
              <span className="text-zinc-900 dark:text-white font-bold">5:00 AM - 12:00 AM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-500">Saturday</span>
              <span className="text-zinc-900 dark:text-white font-bold">6:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-500">Sunday</span>
              <span className="text-zinc-900 dark:text-white font-bold">8:00 AM - 2:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t dark:border-zinc-900 text-center text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Big Bull Fitness (बिग बुल फिटनेस). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
