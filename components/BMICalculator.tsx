
import React, { useState } from 'react';
import { Calculator, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BMICalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w && h) {
      const val = w / (h * h);
      setBmi(val);
      if (val < 18.5) setStatus('Underweight');
      else if (val < 25) setStatus('Normal weight');
      else if (val < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-colors"
      >
        <Calculator size={16} />
        <span>BMI Calculator</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-red-600 transition-colors">
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bebas tracking-wider mb-2 text-zinc-900 dark:text-white">Check Your BMI</h3>
              <p className="text-sm text-zinc-500 mb-6">Enter your stats to find your body mass index.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white"
                  />
                </div>
                <button
                  onClick={calculate}
                  className="w-full bg-red-600 text-white font-bebas tracking-widest text-xl py-4 rounded-xl hover:bg-red-700 transition-colors mt-2"
                >
                  Calculate Now
                </button>
              </div>

              {bmi && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-2xl text-center"
                >
                  <div className="text-zinc-500 text-sm uppercase font-bold tracking-widest mb-1">Your Score</div>
                  <div className="text-5xl font-bebas text-red-600 mb-2">{bmi.toFixed(1)}</div>
                  <div className={`text-lg font-bold ${status === 'Normal weight' ? 'text-green-500' : 'text-orange-500'}`}>
                    {status}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BMICalculator;
