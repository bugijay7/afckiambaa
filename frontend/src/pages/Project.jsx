import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
  FaDraftingCompass,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";

// Assets
import prayerCenter1 from "../assets/pic20.jpeg";
import prayerCenter2 from "../assets/pic19.jpeg";
import prayerCenter3 from "../assets/pic18.jpeg";
import prayerCenter4 from "../assets/pic10.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Project() {
  const images = [prayerCenter1, prayerCenter2, prayerCenter3, prayerCenter4];

  return (
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased selection:bg-red-900 selection:text-white">
      
      {/* --- CINEMATIC HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={prayerCenter3} alt="Background" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-950/80 to-blue-950" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="block text-xs font-bold text-red-600 uppercase mb-6"
          >
            Kingdom Expansion
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-light tracking-tighter leading-tight mb-8"
          >
            THE KIAMBAA <br /> 
            <span className="italic font-serif text-amber-500">PRAYER & RETREAT CENTER</span>
          </motion.h1>
          <motion.p className="text-zinc-400 max-w-xl mx-auto font-light text-lg">
            Building a lasting place of prayer, renewal, and spiritual growth for generations to come.
          </motion.p>
        </div>
      </section>

      {/* --- ASYMMETRIC PROGRESS GALLERY --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.h2 {...fadeUp} className="text-xs font-black tracking-[0.4em] uppercase text-red-600">
            Current Progress
          </motion.h2>
          <span className="text-[10px] text-zinc-500 tracking-widest">EST. COMPLETION 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              {...fadeUp}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <img 
                src={img} 
                alt={`Progress ${idx + 1}`} 
                className="w-full h-[450px] object-cover  hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-zinc-100 text-zinc-950 px-3 py-1">View Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MINIMALIST ABOUT & STATS --- */}
      <section className="py-32 bg-zinc-100 text-zinc-950">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-red-600 mb-8">About the Project</h3>
            <p className="text-3xl md:text-4xl font-light leading-tight mb-10 text-blue-950">
              A dedicated sanctuary for <span className="text-amber-600 italic font-serif">fasting, reflection</span> and divine encounter.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <FaDraftingCompass className="text-red-600 text-xl mt-1" />
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-tighter">Leadership Hub</h5>
                  <p className="text-zinc-500 text-sm font-light">Equipping the next generation of ministry leaders.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaTools className="text-red-600 text-xl mt-1" />
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-tighter">Conference Space</h5>
                  <p className="text-zinc-500 text-sm font-light">Hosting Youth & Women regional conventions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
             <img src={prayerCenter1} alt="Vision" className="w-full h-[600px] object-cover shadow-2xl" />
             <div className="absolute -bottom-10 -left-10 bg-blue-950 p-12 text-white hidden md:block">
                <FaHandsHelping className="text-amber-500 text-3xl mb-4" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase">100% Kingdom Investment</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- BOUTIQUE GIVING SECTION --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">HOW TO <span className="italic font-serif text-amber-500">SUPPORT</span></h2>
          <p className="text-zinc-500 tracking-widest text-xs uppercase">Your contribution brings us closer to completion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-zinc-800">
          {/* Bank */}
          <motion.div whileHover={{ backgroundColor: "#020617" }} className="p-16 border-r border-zinc-800 transition-colors group">
            <FaUniversity className="text-red-600 text-3xl mb-8 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-6 tracking-tight">Bank Transfer</h4>
            <div className="space-y-2 text-zinc-400 font-light">
              <p className="flex justify-between border-b border-zinc-100 pb-2"><span>Bank:</span> <span className="text-zinc-100">Equity Bank</span></p>
              <p className="flex justify-between border-b border-zinc-100 pb-2"><span>Account Number:</span> <span className="text-zinc-100 font-mono">1234 5678 91011</span></p>
              <p className="flex justify-between border-b border-zinc-100 pb-2"><span>Branch:</span> <span className="text-zinc-100">Kikuyu Town</span></p>
            </div>
          </motion.div>

          {/* MPESA */}
          <motion.div whileHover={{ backgroundColor: "#020617" }} className="p-16 transition-colors group">
            <FaMobileAlt className="text-red-600 text-3xl mb-8 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-6 tracking-tight">M-Pesa Giving</h4>
            <div className="space-y-2 text-zinc-400 font-light">
              <p className="flex justify-between border-b border-zinc-100 pb-2"><span>Paybill:</span> <span className="text-zinc-100 font-mono">247247</span></p>
              <p className="flex justify-between border-b border-zinc-100 pb-2"><span>Account:</span> <span className="text-zinc-100 font-mono">733227</span></p>
              <p className="flex justify-between border-b border-zinc-100 pb-2 text-[10px] md:text-xs"><span>Name:</span> <span className="text-zinc-100 uppercase">Apostolic Faith Church - DVPT</span></p>
            </div>
          </motion.div>
        </div>

        <motion.p {...fadeUp} className="mt-20 text-center text-zinc-100 italic font-serif text-xl max-w-2xl mx-auto leading-relaxed">
          “Every contribution, no matter the size, helps us raise a sanctuary for generations.”
        </motion.p>
      </section>
    </div>
  );
}