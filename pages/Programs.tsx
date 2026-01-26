
import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../constants';
import * as Icons from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-red-600 py-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white uppercase">Programs & Facilities</h1>
        <p className="text-red-100 max-w-2xl mx-auto text-lg mt-4">We offer everything from heavy strength training to premium recovery services.</p>
      </section>

      <section className="py-24 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROGRAMS.map((program) => {
            const IconComponent = (Icons as any)[program.icon];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-2xl"
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-red-600 shadow-xl">
                    <IconComponent size={30} />
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-4xl font-bebas text-zinc-900 dark:text-white tracking-widest mb-4">{program.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <button className="text-red-600 font-bold uppercase text-sm tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                    Learn More <Icons.ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Programs;
