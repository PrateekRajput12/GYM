
import React from 'react';
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, ChevronRight } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-zinc-900 py-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white uppercase">The <span className="text-red-600">Experts</span></h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg mt-4">Learn from Mumbai's finest fitness professionals.</p>
      </section>

      <section className="py-24 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-6 shadow-xl">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 flex space-x-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-200">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bebas text-zinc-900 dark:text-white tracking-widest">{trainer.name}</h3>
                <div className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2">{trainer.role}</div>
                <div className="space-y-1 text-sm text-zinc-500">
                  <div className="flex justify-between">
                    <span>Exp:</span>
                    <span className="text-zinc-900 dark:text-white font-bold">{trainer.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Focus:</span>
                    <span className="text-zinc-900 dark:text-white font-bold">{trainer.specialization}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
