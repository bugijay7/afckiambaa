import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaUniversity, FaHeart, FaQuoteRight } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Giving() {
  return (
    <div className="bg-amber-950 text-zinc-100 font-sans antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-8"
          >
            <FaHeart className="text-red-600 text-3xl" />
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="block text-xs font-bold text-amber-500 uppercase mb-6"
          >
            Faithful Stewardship
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter leading-tight"
          >
            SUPPORT THE <br /> 
            <span className="italic font-serif text-zinc-150">MINISTRY.</span>
          </motion.h1>
          
          <motion.p {...fadeUp} className="max-w-xl mx-auto mt-8 text-zinc-100 font-light text-lg">
            Your generous giving helps Apostolic Faith Church Kiambaa continue
            spreading the gospel and building strong foundations of faith.
          </motion.p>
        </div>
      </section>

      {/* --- SCRIPTURE QUOTE (EDITORIAL STYLE) --- */}
      <section className="py-32 bg-zinc-100 text-zinc-950">
        <div className="container mx-auto px-6 text-center relative">
          <FaQuoteRight className="text-zinc-200 text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl font-light leading-relaxed italic font-serif text-blue-950">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">2 Corinthians 9:7</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GIVING OPTIONS --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 border border-zinc-100">
          
          {/* BANK TRANSFER */}
          <motion.div 
            {...fadeUp}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-zinc-900 group"
          >
            <FaUniversity className="text-red-600 text-4xl mb-10 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-light tracking-tighter mb-12 uppercase">pay with <span className="italic font-serif text-amber-500">Equity</span></h2>
            
            <div className="space-y-6">
              {[
                { label: "Paybill Number", value: "247247", mono: true },
                { label: "Account Number", value: "850890" },
                { label: "Account Name", value: "Offering / Tithe" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-zinc-100 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-100">{item.label}</span>
                  <span className={`text-sm tracking-wide ${item.mono ? 'font-mono text-amber-500' : 'font-light'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* M-PESA */}
          <motion.div 
            {...fadeUp}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            className="p-12 md:p-20 group"
          >
            <FaMobileAlt className="text-red-600 text-4xl mb-10 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-light tracking-tighter mb-12">M-PESA <span className="italic font-serif text-amber-500">GIVING</span></h2>
            
            <div className="space-y-6 mb-10">
              {[
                { label: "Paybill Number", value: "202273", mono: true },
                { label: "Account Name", value: "Offering / Tithe" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-zinc-100 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-100">{item.label}</span>
                  <span className={`text-sm tracking-wide ${item.mono ? 'font-mono text-amber-500' : 'font-light'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-100 font-light leading-relaxed tracking-wide italic">
              Use your M-Pesa app or Sim Tool Kit to send your contribution securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DIASPORA & HELPLINE --- */}
      <section className="pb-32 container mx-auto px-6">
        <motion.div 
          {...fadeUp}
          className="bg-red-600 p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/80">Global Support</h3>
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-8">DIASPORA GIVING & HELPLINE</h2>
            <p className="text-white/70 font-light mb-10 max-w-lg mx-auto">
              For brothers and sisters supporting us from outside Kenya, reach out directly for tailored giving instructions.
            </p>
            <div className="inline-block border-b-2 border-white pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest mr-4">Direct WhatsApp</span>
              <a href="tel:+254722850169" className="text-xl font-bold tracking-tighter hover:text-amber-500 transition-colors">
                +254 722 850 169
              </a>
            </div>
          </div>
          
          {/* Subtle background text */}
          <div className="absolute -bottom-10 -right-10 text-9xl font-black text-white/5 select-none pointer-events-none">
            GLOBAL
          </div>
        </motion.div>
      </section>

    </div>
  );
}