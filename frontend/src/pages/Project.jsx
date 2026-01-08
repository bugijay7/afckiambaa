import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaMobileAlt, FaDraftingCompass, FaTools, FaHandsHelping } from "react-icons/fa";

import prayerCenter1 from "../assets/pic20.jpeg";
import prayerCenter2 from "../assets/pic19.jpeg";
import prayerCenter3 from "../assets/pic18.jpeg";
import prayerCenter4 from "../assets/pic10.jpeg";

export default function Project() {
  const images = [
    prayerCenter1,
    prayerCenter2,
    prayerCenter3,
    prayerCenter4,
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* --- VISIONARY HERO --- */}
      <section className="relative pt-40 pb-20 px-6 bg-blue-950 text-center">
        <div className="absolute inset-0 opacity-20">
          <img src={prayerCenter3} alt="Overlay" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-blue-950/80" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-red-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Building for Eternity</span>
          <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            The Kiambaa Prayer & Retreat Center
          </h1>
          <p className="text-blue-100/70 text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Building a lasting place of prayer, renewal, and spiritual growth 
            for generations to come.
          </p>
        </motion.div>
      </section>

      {/* --- PROGRESS GALLERY (Masonry Feel) --- */}
      <section className="py-20 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
          <div className="w-12 h-[2px] bg-red-600"></div>
          <h2 className="text-blue-950 font-bold tracking-widest text-sm uppercase">Current Progress</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-[2rem] shadow-lg border-4 border-white"
            >
              <img
                src={img}
                alt={`Prayer Center ${idx + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white/90 backdrop-blur px-6 py-2 rounded-full text-blue-900 font-bold text-sm shadow-xl">View Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STORY & ABOUT SECTION --- */}
      <section className="py-24 bg-gray-50 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h3 className="text-4xl font-serif text-blue-950 font-bold">About the Project</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                The <span className="text-blue-900 font-semibold">Kiambaa Prayer & Retreat Center</span> is a visionary 
                project by Apostolic Faith Church Kiambaa, created to provide a 
                peaceful and sacred space where believers can seek God through 
                prayer, fasting, and reflection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <FaDraftingCompass className="text-red-600 text-xl mt-1" />
                  <p className="text-sm font-medium text-blue-950">Leadership Training Hub</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <FaTools className="text-red-600 text-xl mt-1" />
                  <p className="text-sm font-medium text-blue-950">Youth & Women Conferences</p>
                </div>
              </div>
              <p className="pt-4 border-l-4 border-red-600 pl-6 italic">
                We invite you to be part of this transformative journey through 
                prayer, giving, or contributing building materials. Together, we can 
                raise a sanctuary for generations to meet with God.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="relative">
            <div className="absolute -inset-4 bg-blue-900 rounded-[3rem] rotate-3" />
            <img
              src={prayerCenter1}
              alt="Prayer Center Progress"
              className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-8 rounded-3xl shadow-2xl z-20 hidden lg:block">
               <FaHandsHelping size={40} className="mb-4" />
               <p className="font-bold text-xl tracking-tighter">100% Kingdom <br/>Investment</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GIVING OPTIONS (Premium Cards) --- */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-blue-950 mb-4">How to Support</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Your contribution brings us closer to completion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bank Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
               <FaUniversity size={40} />
            </div>
            
            <h4 className="text-2xl font-bold text-blue-950 mb-8">Bank Transfer</h4>
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium">Bank</span>
                <span className="text-blue-900 font-bold uppercase">Equity Bank</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium">Account Number</span>
                <span className="text-red-600 font-mono font-bold">1234 5678 91011</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Branch</span>
                <span className="text-blue-900 font-bold">Kikuyu Town</span>
              </div>
            </div>
          </motion.div>

          {/* M-Pesa Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group p-10 bg-blue-950 text-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[5rem] flex items-center justify-center group-hover:bg-red-600 transition-colors">
               <FaMobileAlt size={40} />
            </div>
            
            <h4 className="text-2xl font-bold mb-8">M-Pesa Giving</h4>
            <div className="space-y-4 text-blue-100/80">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Paybill</span>
                <span className="text-white font-bold">247247</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-medium">Account</span>
                <span className="text-red-500 font-bold">733227</span>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <span className="text-xs uppercase tracking-widest opacity-60">Account Name</span>
                <span className="text-white font-bold text-sm">APOSTOLIC FAITH CHURCH - DVPT</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-900 text-sm font-light italic">
            "Every contribution, no matter the size, helps us raise a sanctuary for generations."
          </p>
        </div>
      </section>
    </div>
  );
}