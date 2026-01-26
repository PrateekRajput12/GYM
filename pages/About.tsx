
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Flame, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-zinc-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white tracking-widest mb-6"
          >
            OUR <span className="text-red-600">STORY</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            From a humble space to Mumbai Central's most advanced fitness hub. We believe in raw strength and unwavering discipline.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-4 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" alt="Gym" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-20 z-0"></div>
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bebas text-zinc-900 dark:text-white uppercase leading-none">The Big Bull Vision</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Founded in 2018, Big Bull Fitness was born out of a desire to create a high-performance environment where athletes and beginners alike can push their boundaries. We aren't just a gym; we are a community that thrives on the sound of iron and the sweat of hard work.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Modern Gear', icon: Flame },
                { title: 'Clean Space', icon: Shield },
                { title: 'Expert Team', icon: Award },
                { title: 'Best Results', icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="p-2 bg-red-600/10 text-red-600 rounded-lg">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white uppercase text-sm tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '5K+', label: 'Active Members' },
            { value: '15+', label: 'Elite Trainers' },
            { value: '50+', label: 'Modern Equipment' },
            { value: '12+', label: 'Years Experience' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bebas text-red-600 mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
