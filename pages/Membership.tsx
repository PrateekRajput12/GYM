
import React from 'react';
import { motion } from 'framer-motion';
import { PLANS } from '../constants';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import BMICalculator from '../components/BMICalculator';

const Membership: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-zinc-900 dark:bg-black py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white uppercase tracking-wider"
          >
            SIMPLE <span className="text-red-600">PRICING</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg mt-4 mb-10 leading-relaxed font-medium">
            Choose a plan that fits your goals. No hidden fees. No complicated contracts.
          </p>
          <div className="flex justify-center">
            <BMICalculator />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-zinc-900 rounded-[3rem] p-10 md:p-12 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-600 shadow-2xl scale-105 z-10' 
                  : 'border-zinc-200 dark:border-zinc-800'
              } overflow-hidden group`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] py-2 px-10 rotate-45 translate-x-10 translate-y-5 shadow-lg">
                  Best Value
                </div>
              )}
              <h3 className="text-3xl font-bebas tracking-widest text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-6xl font-bebas text-red-600">{plan.price}</span>
                <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">/ {plan.duration}</span>
              </div>
              
              <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800 mb-8"></div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/919876543210?text=I'm interested in the Big Bull Fitness ${plan.name} plan. Can you help me with enrollment?`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-sm font-bebas tracking-widest text-2xl uppercase flex items-center justify-center space-x-3 transition-all ${
                  plan.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-600/30' 
                    : 'bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-red-600'
                }`}
              >
                <MessageCircle size={22} />
                <span>Enquire Now</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Membership;
