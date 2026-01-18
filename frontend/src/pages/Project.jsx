import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased selection:bg-red-900">
      
      {/* --- CINEMATIC HERO --- */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={prayerCenter1} alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-blue-950/60 to-amber-450" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            className="block text-[10px] md:text-xs font-bold text-red-600 uppercase mb-6"
          >
            Kingdom Expansion
          </motion.span>
          <motion.h1 
            {...fadeUp}
            className="text-3xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            THE KIAMBAA <br />
            <span className="italic font-serif text-amber-500">PRAYER CENTER</span>
          </motion.h1>
          <motion.p {...fadeUp} className="max-w-md mx-auto text-sm md:text-base font-light text-zinc-300 leading-relaxed">
            Building a lasting place of prayer, renewal, and spiritual growth for generations to come.
          </motion.p>
        </div>
      </section>

      {/* --- STAGGERED PROGRESS GALLERY --- */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h3 className="text-xs font-bold text-red-600 tracking-[0.4em] uppercase mb-4">Current Progress</h3>
              <p className="text-3xl font-light italic text-amber-500">Est. Completion 2026</p>
            </div>
          </div>

          {/* Mobile: Horizontal Snap Scroll | Desktop: Staggered Grid */}
          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 md:pb-0">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className={`min-w-[80vw] md:min-w-full snap-center group relative overflow-hidden ${
                  idx % 2 !== 0 ? "md:mt-20" : "" // Stagger effect on desktop
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Progress ${idx + 1}`} 
                    className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white border-b border-red-600">View Detail</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (Split Layout) --- */}
      <section className="py-32 bg-zinc-100 text-blue-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-xs font-bold text-red-600 tracking-[0.4em] uppercase mb-8">The Vision</h3>
              <p className="text-4xl md:text-5xl font-light tracking-tighter leading-none mb-12">
                A dedicated sanctuary for <span className="italic font-serif">fasting, reflection</span> and divine encounter.
              </p>
              
              <div className="space-y-8 border-l-2 border-red-600 pl-8">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm">Leadership Hub</h5>
                  <p className="font-light text-zinc-600">Equipping the next generation of ministry leaders.</p>
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm">Conference Space</h5>
                  <p className="font-light text-zinc-600">Hosting Youth & Women regional conventions.</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500 z-10" />
              <img src={prayerCenter1} alt="Vision" className="w-full h-[600px] object-cover" />
              <p className="mt-4 text-[10px] font-black tracking-[0.5em] uppercase text-zinc-400">100% Kingdom Investment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SUPPORT / DONATION CARDS --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">HOW TO SUPPORT</h2>
          <p className="text-zinc-400 font-light tracking-widest text-xs uppercase">Your contribution brings us closer to completion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-zinc-800">
          <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-zinc-800 bg-amber-600 transition-colors duration-700 group">
            <h4 className=" font-bold tracking-widest text-xs mb-8 text-blue-950 transition-colors">BANK TRANSFER</h4>
            <div className="space-y-2 text-xl font-light">
              <p className="text-blue-450 font-bold">Bank: <span className="text-white">Equity Bank</span></p>
              <p className="text-blue-450 text-sm md:text-xl font-bold">Acc: <span className="text-white">1234 5678 91011</span></p>
              <p className=" text-blue-450 text-sm md:text-xl font-bold">Branch: <span className="text-white">Kikuyu Town</span></p>
            </div>
          </div>

          <div className="p-12 md:p-20 bg-zinc-100 transition-colors duration-700 group">
            <h4 className="text-red-600 font-bold tracking-widest text-xs mb-8">M-PESA GIVING</h4>
            <div className="space-y-2 text-xl font-light text-blue-950">
              <p className= "text-zinc-600 font-bold">Paybill: <span className="text-blue-950 font-bold">247247</span></p>
              <p className="text-zinc-600 font-bold">Account: <span className="text-blue-950 font-bold">733227</span></p>
              <p className="text-xs font-bold tracking-widest mt-4 text-red-600">AFC - DVPT</p>
            </div>
          </div>
        </div>

        <motion.p 
          {...fadeUp}
          className="max-w-2xl mx-auto text-center mt-20 text-xl font-light italic text-zinc-100"
        >
          “Every contribution, no matter the size, helps us raise a sanctuary for generations.”
        </motion.p>
      </section>
    </div>
  );
}