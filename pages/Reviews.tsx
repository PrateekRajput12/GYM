
import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star, MessageCircle, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-white dark:bg-zinc-950 py-20 px-4 text-center border-b dark:border-zinc-900">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas text-zinc-900 dark:text-white uppercase">Real <span className="text-red-600">Voices</span></h1>
        <div className="flex flex-col items-center mt-6">
          <div className="flex text-orange-500 space-x-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">4.3 Average Rating Based on 116 Google Reviews</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto space-y-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm border dark:border-zinc-800 relative"
            >
              <Quote className="absolute top-10 right-10 text-red-600/10 w-24 h-24" />
              <div className="flex text-red-600 mb-6">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={20} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-red-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bebas tracking-widest text-zinc-900 dark:text-white">{review.name}</h4>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{review.date} via Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
