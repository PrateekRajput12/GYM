
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Trophy, Send } from 'lucide-react';

const FreeTrial: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', goal: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Big Bull Fitness! My name is ${form.name}. I want to book a free trial. My goal is ${form.goal}. Contact me at ${form.phone}.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-zinc-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <h1 className="text-[20vw] font-bebas text-white leading-none rotate-12 -translate-x-20">BIG BULL</h1>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
        <div className="p-12 bg-red-600 text-white hidden lg:flex flex-col justify-between">
          <div>
            <Trophy size={60} className="mb-8" />
            <h2 className="text-5xl font-bebas leading-tight mb-6">START YOUR<br />TRANSFORMATION<br />FOR FREE</h2>
            <p className="text-red-100 opacity-80 leading-relaxed">
              Experience the energy of Mumbai Central's most elite gym. No strings attached. One full day access to all our equipment and facilities.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">All Equipment Access</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">Free Consultation</span>
            </div>
          </div>
        </div>

        <div className="p-12">
          {!isSuccess ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-4xl font-bebas tracking-widest text-zinc-900 dark:text-white mb-8">Book Your Session</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Your Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Fitness Goal</label>
                  <select
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white appearance-none"
                  >
                    <option value="">Select a goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Strength">Strength Training</option>
                    <option value="Endurance">General Fitness</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bebas tracking-widest text-2xl py-5 rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Claim Free Pass</span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-green-500/20">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-4xl font-bebas text-zinc-900 dark:text-white mb-2">PASS RESERVED!</h3>
              <p className="text-zinc-500">Redirecting you to WhatsApp to confirm your slot...</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
