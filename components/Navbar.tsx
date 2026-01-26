
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  // Force white text on Home Hero even in light mode for aesthetics
  const useTransparentState = isHomePage && !isScrolled && !isOpen;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Dumbbell className="w-8 h-8 text-red-600 group-hover:rotate-12 transition-transform" />
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-bebas tracking-wider transition-colors ${
              useTransparentState ? 'text-white' : 'text-zinc-900 dark:text-white'
            }`}>
              BIG BULL FITNESS
            </span>
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">बिग बुल फिटनेस</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path 
                  ? 'text-red-600' 
                  : useTransparentState 
                    ? 'text-zinc-200 hover:text-white' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 ml-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                useTransparentState 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/free-trial"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-bebas tracking-widest text-lg uppercase transition-all shadow-lg shadow-red-600/20 active:scale-95"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 transition-colors ${useTransparentState ? 'text-white' : 'text-zinc-900 dark:text-white'}`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${useTransparentState ? 'text-white' : 'text-zinc-900 dark:text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-zinc-950 shadow-2xl border-t border-zinc-100 dark:border-zinc-900 flex flex-col p-6 space-y-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-bebas tracking-widest uppercase py-3 border-b border-zinc-100 dark:border-zinc-900 ${
                  location.pathname === link.path ? 'text-red-600' : 'text-zinc-900 dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/free-trial"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white text-center py-4 rounded-lg font-bebas tracking-widest text-xl uppercase mt-4"
            >
              Book Free Trial
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
