
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Star, MapPin, Trophy, Users, Dumbbell } from 'lucide-react';
import { PROGRAMS, REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 rounded-sm shadow-lg shadow-red-600/30">
              Mumbai Central's Finest
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas text-white leading-[0.9] mb-8 tracking-tight">
              BUILD <span className="text-red-600">STRENGTH.</span><br />
              <span className="text-zinc-200">BUILD DISCIPLINE.</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              Join the most high-energy fitness community in Mumbai. Professional equipment, expert coaching, and a legacy of results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                to="/free-trial"
                className="bg-red-600 text-white px-10 py-5 rounded-sm font-bebas tracking-widest text-2xl uppercase hover:bg-red-700 transition-all flex items-center justify-center group shadow-2xl shadow-red-600/40"
              >
                Join Now <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/programs"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-sm font-bebas tracking-widest text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Our Programs
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats - Always dark/transparent for contrast against background */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:grid grid-cols-4 gap-8"
        >
          {[
            { label: 'Google Rating', value: '4.3 ⭐', icon: Star },
            { label: 'Reviews', value: '116+', icon: Users },
            { label: 'Workout Area', value: '5K+ sq.ft', icon: MapPin },
            { label: 'Equipment', value: '50+', icon: Trophy }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-950/40 backdrop-blur-xl border border-white/10 p-5 rounded-xl flex items-center space-x-4">
              <div className="p-3 bg-red-600 rounded-lg text-white">
                <stat.icon size={20} />
              </div>
              <div>
                <div className="text-white font-bebas text-2xl tracking-wider leading-none">{stat.value}</div>
                <div className="text-zinc-400 text-[10px] uppercase font-bold mt-1 tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-orange-600 py-3 text-center overflow-hidden border-y border-orange-500 relative z-20">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] cursor-default">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className="text-white font-bold text-xs md:text-sm tracking-[0.3em] uppercase flex items-center px-4">
              <span className="mx-8">🇮🇳 REPUBLIC DAY SPECIAL: FLAT 30% OFF ON YEARLY MEMBERSHIPS! VALID TILL JAN 31ST 🇮🇳</span>
              <span className="mx-8">JOIN THE BIG BULL REVOLUTION TODAY 🇮🇳</span>
              <span className="mx-8">PREMIUM FITNESS IN MUMBAI CENTRAL 🇮🇳</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

      {/* Programs Preview - Clear Light Mode Colors */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.5em] mb-4">Elite Facilities</h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-zinc-900 dark:text-white uppercase leading-none">Train Like a Beast</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.slice(0, 3).map((program, i) => (
              <motion.div
                key={program.id}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] overflow-hidden rounded-[2rem] shadow-xl"
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-4xl font-bebas text-white tracking-widest mb-2">{program.title}</h4>
                  <p className="text-zinc-300 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {program.description}
                  </p>
                  <Link to="/programs" className="text-red-500 font-bold uppercase text-xs tracking-widest flex items-center group/link">
                    Explore Facility <ChevronRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/programs" className="inline-flex items-center text-zinc-900 dark:text-white font-bebas tracking-widest text-2xl border-b-2 border-red-600 pb-2 hover:text-red-600 transition-all hover:scale-105">
              See All Programs <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-[0.4em] mb-4">Real Results</h2>
            <h3 className="text-6xl md:text-8xl font-bebas text-white leading-[0.9] mb-8 uppercase">TRANSFORMATION<br />STORIES</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              At Big Bull Fitness, we don't just sell memberships; we build champions. Join hundreds of Mumbai Central residents who have completely reshaped their lives.
            </p>
            <div className="flex items-center space-x-12">
              <div>
                <div className="text-5xl font-bebas text-red-600">500+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-1">Transformations</div>
              </div>
              <div>
                <div className="text-5xl font-bebas text-red-600">100%</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-1">Dedication</div>
              </div>
            </div>
            <Link 
              to="/free-trial" 
              className="inline-flex mt-12 bg-white text-black px-10 py-4 rounded-sm font-bebas tracking-widest text-2xl uppercase hover:bg-red-600 hover:text-white transition-all shadow-xl"
            >
              Start Your Journey
            </Link>
          </motion.div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Transform 1" />
                <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Transform 2" />
              </div>
              <div className="pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Transform 3" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Transform 4" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                <Play size={32} fill="white" className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Snapshot - Improved Contrast for Light Mode */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl text-left">
              <h2 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.5em] mb-4">Reviews</h2>
              <h3 className="text-5xl md:text-7xl font-bebas text-zinc-900 dark:text-white uppercase leading-none">The Bull Squad</h3>
            </div>
            <Link to="/reviews" className="bg-red-600 text-white px-8 py-3 rounded-sm font-bebas tracking-widest text-lg uppercase hover:bg-red-700 transition-all shadow-lg">
              Read All Reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                <div className="flex space-x-1 text-orange-500 mb-5">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-red-600 text-sm uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-zinc-900 dark:text-white font-bold text-sm tracking-wide">{review.name}</div>
                    <div className="text-zinc-400 text-[10px] uppercase tracking-widest mt-0.5 font-bold">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
