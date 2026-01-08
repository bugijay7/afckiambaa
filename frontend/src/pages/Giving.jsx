import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaUniversity, FaHeart, FaQuoteRight } from "react-icons/fa";

export default function Giving() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      {/* Reduced padding: pt-32 (mobile) vs pt-44 (desktop) */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 bg-blue-950 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Smaller icon for mobile */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-6 md:mb-8 shadow-2xl shadow-red-600/40">
            <FaHeart />
          </div>
          <span className="text-red-500 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
            Faithful Stewardship
          </span>
          {/* Responsive Heading: text-3xl (mobile) vs text-7xl (desktop) */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-8 leading-tight">
            Support the Ministry
          </h1>
          <p className="text-blue-100/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed px-2">
            Your generous giving helps Apostolic Faith Church Kiambaa continue spreading
            the gospel and building strong foundations of faith.
          </p>
        </motion.div>
      </section>

      {/* --- SCRIPTURE QUOTE --- */}
      <section className="py-8 md:py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center italic text-gray-500 font-serif flex items-center justify-center gap-3 md:gap-4">
          <FaQuoteRight className="text-red-600/20 text-2xl md:text-4xl shrink-0" />
          <p className="text-lg md:text-xl leading-snug">
            "Each of you should give what you have decided in your heart to give..." 
            <span className="block text-[10px] font-bold uppercase tracking-widest mt-2 text-blue-950">— 2 Corinthians 9:7</span>
          </p>
        </div>
      </section>

      {/* --- GIVING OPTIONS GRID --- */}
      <section className="py-12 md:py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        {/* Gap reduced for mobile to save scroll space */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Bank Transfer Card */}
          <motion.div 
            {...fadeInUp}
            className="group relative bg-white p-6 md:p-10 lg:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-xl border border-gray-100 transition-all"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-xl mb-6">
              <FaUniversity />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-blue-950 mb-4 md:mb-6">Bank Transfer</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col border-b border-gray-50 pb-2 md:pb-4">
                <span className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Institution</span>
                <span className="text-lg md:text-xl font-medium text-gray-800">Equity Bank</span>
              </div>
              <div className="flex flex-col border-b border-gray-50 pb-2 md:pb-4">
                <span className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Account Number</span>
                <span className="text-xl md:text-2xl font-mono font-bold text-blue-950 tracking-tighter">1234 5678 91011</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Branch</span>
                <span className="text-lg md:text-xl font-medium text-gray-800">Kikuyu Town</span>
              </div>
            </div>
          </motion.div>

          {/* M-Pesa Card */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="group relative bg-blue-950 p-6 md:p-10 lg:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl text-white overflow-hidden"
          >
            <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center text-xl mb-6">
              <FaMobileAlt />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6">M-Pesa Giving</h2>
            
            <div className="space-y-4 md:space-y-6 relative z-10">
              <div className="flex flex-col border-b border-white/10 pb-2 md:pb-4">
                <span className="text-[9px] md:text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Paybill Number</span>
                <span className="text-2xl md:text-3xl font-bold">202273</span>
              </div>
              <div className="flex flex-col border-b border-white/10 pb-2 md:pb-4">
                <span className="text-[9px] md:text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Account Name</span>
                <span className="text-lg md:text-xl font-medium">Offering / Tithe</span>
              </div>
              <p className="text-blue-100/50 text-xs md:text-sm font-light leading-relaxed italic">
                Use your M-Pesa app or Sim Tool Kit to send your contribution securely. 
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DIASPORA & HELPLINE --- */}
      <section className="pb-16 md:pb-24 px-6 lg:px-24 max-w-5xl mx-auto">
        <motion.div 
          {...fadeInUp}
          className="bg-gray-900 rounded-4xl md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-4">Diaspora Giving & Helpline</h3>
            <p className="text-gray-400 text-base md:text-lg font-light mb-8 leading-relaxed">
              For help from outside Kenya, contact us:
            </p>
            
            <div className="inline-block px-6 py-4 md:px-10 md:py-6 bg-white/5 border border-white/10 rounded-2xl mb-6">
                <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block mb-2">Direct Phone / M-Pesa</span>
                <a href="tel:+254722850169" className="text-xl md:text-4xl font-mono font-bold text-white">
                    +254 722 850 169
                </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}