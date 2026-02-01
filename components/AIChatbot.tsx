
// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const AIChatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
//     { role: 'ai', content: 'Hey champion! I am Big Bull AI. Ready to crush your fitness goals? Ask me anything!' }
//   ]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages, isLoading]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMsg = input;
//     setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
//     setInput('');
//     setIsLoading(true);

//     // const aiResponse = await getFitnessAdvice(userMsg);
//     setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 z-40 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
//       >
//         <MessageSquare size={28} />
//         <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
//           Ask Big Bull AI
//         </span>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 100, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 100, scale: 0.8 }}
//             className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800"
//           >
//             {/* Header */}
//             <div className="bg-red-600 p-4 flex justify-between items-center">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   <Bot className="text-red-600" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-bebas tracking-wider text-xl leading-none">Big Bull AI</h3>
//                   <span className="text-[10px] text-red-100 uppercase tracking-widest font-bold">Online Assistant</span>
//                 </div>
//               </div>
//               <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Chat area */}
//             <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-950">
//               {messages.map((m, i) => (
//                 <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                   <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user'
//                       ? 'bg-red-600 text-white rounded-tr-none'
//                       : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-sm border dark:border-zinc-700 rounded-tl-none'
//                     }`}>
//                     {m.content}
//                   </div>
//                 </div>
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none flex space-x-1 items-center">
//                     <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
//                     <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                     <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input */}
//             <div className="p-4 bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 flex items-center space-x-2">
//               <input
//                 type="text"
//                 placeholder="Ask about workouts, diet, or plans..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//                 className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none text-zinc-900 dark:text-white"
//               />
//               <button
//                 onClick={handleSend}
//                 disabled={isLoading}
//                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 disabled:opacity-50 transition-colors"
//               >
//                 <Send size={18} />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AIChatbot;
