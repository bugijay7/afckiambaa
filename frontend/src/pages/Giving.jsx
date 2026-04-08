import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaUniversity, FaHeart, FaQuoteRight, FaWhatsapp } from "react-icons/fa";

import diasporaImg from "../assets/hero3.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Giving() {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Subtle Background Pattern or Image */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 flex justify-center"
          >
            <div className="p-4 bg-red-600 rounded-full text-white shadow-2xl shadow-red-600/40">
              <FaHeart size={32} />
            </div>
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-blue-500 uppercase text-xs font-black block mb-4"
          >
            Faithful Stewardship
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9]"
          >
            Support the <br /> 
            <span className="text-blue-600">Ministry.</span>
          </motion.h1>
          
          <motion.p 
            {...fadeUp}
            className="mt-8 text-zinc-400 max-w-xl mx-auto text-lg font-light leading-relaxed"
          >
            Your generous giving helps Apostolic Faith Church Kiambaa continue
            spreading the gospel and building strong foundations of faith.
          </motion.p>
        </div>
      </section>

      {/* 2. SCRIPTURE QUOTE */}
      <section className="py-24 bg-zinc-50 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto relative text-center">
          <FaQuoteRight className="absolute -top-10 left-1/2 -translate-x-1/2 text-zinc-200 text-7xl -z-0" />
          <motion.div {...fadeUp} className="relative z-10">
            <p className="text-2xl md:text-4xl font-serif italic text-zinc-800 leading-snug mb-8">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="font-black uppercase tracking-widest text-sm text-zinc-500">2 Corinthians 9:7</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. GIVING OPTIONS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* BANK TRANSFER (EQUITY) */}
          <motion.div 
            {...fadeUp}
            className="group p-10 md:p-16 bg-red-200 border-4 border-zinc-900 shadow-[20px_20px_0px_0px_rgba(30,58,138,1)] hover:shadow-none transition-all duration-500"
          >
            <FaUniversity className="text-blue-600 text-5xl mb-8" />
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">
              Pay with <span className="text-blue-700">Equity</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { label: "Paybill Number", value: "247247" },
                { label: "Account Number", value: "850890" },
                { label: "Account Name", value: "Offering / Tithe" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-zinc-100 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">{item.label}</span>
                  <span className="text-2xl font-black text-zinc-900 tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* M-PESA */}
          <motion.div 
            {...fadeUp}
            className="group p-10 md:p-16 bg-amber-600 text-white border-4 border-zinc-900 shadow-[20px_20px_0px_0px_rgba(220,38,38,1)] hover:shadow-none transition-all duration-500"
          >
            <FaMobileAlt className="text-red-600 text-5xl mb-8" />
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">
              M-Pesa <span className="text-red-600 italic">Giving</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {[
                { label: "Paybill Number", value: "202273" },
                { label: "Account Name", value: "850890" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 mb-1">{item.label}</span>
                  <span className="text-2xl font-black text-white tracking-tight">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-900 text-sm leading-relaxed italic border-l-2 border-red-600 pl-4">
              Use your M-Pesa app or Sim Tool Kit to send your contribution securely. 
              Confirm "Apostolic Faith Church Kiambaa" as the recipient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. DIASPORA & HELPLINE */}
      <section className="bg-zinc-100 py-32 px-6">
        <motion.div 
          {...fadeUp}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h3 className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase">Global Support</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Diaspora <br /> <span className="text-red-600">Giving.</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-md">
              For brothers and sisters supporting us from outside Kenya, get in touch with the below number to get dedicated channels for secure international transfers.
            </p>
            
            <div className="inline-flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="https://wa.me/254722850169" 
                className="flex items-center justify-center gap-4 px-10 py-5 bg-green-600 text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
              >
                <FaWhatsapp size={20} />
                WhatsApp Help
              </a>
              <a 
                href="tel:+254722850169" 
                className="flex items-center justify-center px-10 py-5 border-2 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-all"
              >
                +254 722 850 169
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block flex-1">
  <div className="relative border-4 border-zinc-900 shadow-[20px_20px_0px_0px_rgba(37,99,235,1)]">
    <img 
      src={diasporaImg} // Replace with your top-level import variable
      alt="Global Support" 
      className="w-full h-80 object-cover hover:grayscale-0 transition-all duration-700"
    />
  </div>
</div>
        </motion.div>
      </section>

    </div>
  );
}