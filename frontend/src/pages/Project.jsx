import React from "react";
import { FaBuilding, FaUsers, FaPray, FaLandmark, FaMobileAlt, FaUniversity } from "react-icons/fa";

// Assets
import prayerCenter1 from "../assets/pic20.jpeg";
import prayerCenter2 from "../assets/pic19.jpeg";
import prayerCenter3 from "../assets/pic18.jpeg";
import prayerCenter4 from "../assets/pic10.jpeg";

export default function Project() {
  const images = [prayerCenter1, prayerCenter2, prayerCenter3, prayerCenter4];

  return (
    <div className="bg-white text-black font-sans selection:bg-amber-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full overflow-hidden">
          <img 
            src={prayerCenter1} 
            alt="Background" 
            className="w-full h-full object-cover  transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto w-full">
          <span className="text-red-600 uppercase tracking-[0.6em] text-xs font-black mb-6 block">
            Kingdom Expansion
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-8">
            THE <span className="text-amber-600">KIAMBAA</span> <br /> 
            <span className="text-blue-600 italic">PRAYER</span> CENTER
          </h1>
          <p className="max-w-md text-zinc-900 text-lg font-light leading-relaxed border-l-4 border-amber-500 pl-6">
            Building a lasting place of prayer, renewal, and spiritual growth for generations to come. 
            A sanctuary rising in the heart of Kiambu.
          </p>
        </div>
      </section>

      {/* 2. GALLERY / PROGRESS */}
      <section className="py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h3 className="text-5xl font-black uppercase tracking-tighter">Current Progress</h3>
              <p className="text-amber-500 font-mono tracking-widest text-sm mt-2 uppercase">Est. Completion 2026</p>
            </div>
            <div className="h-px bg-zinc-700 flex-grow mx-10 hidden md:block mb-4"></div>
            <p className="text-red-500 uppercase text-xs tracking-widest font-black">Architecture • Faith • Legacy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-black aspect-[4/5]">
                <img
                  src={img}
                  alt={`Progress ${idx + 1}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/40 backdrop-blur-sm cursor-pointer">
                  <span className="border-2 border-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">
                    View Detail
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE VISION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xs font-black tracking-[0.4em] text-red-600 uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-red-600"></span> The Vision
            </h3>
            <p className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-12">
              A dedicated sanctuary for <span className="text-blue-600">fasting, reflection</span> and divine encounter.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-amber-600 text-xl">
                  <FaUsers />
                </div>
                <h5 className="font-black uppercase tracking-widest text-sm">Leadership Hub</h5>
                <p className="text-zinc-900 text-sm leading-relaxed">Equipping the next generation of ministry leaders through specialized training environments.</p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-blue-600 text-xl">
                  <FaBuilding />
                </div>
                <h5 className="font-black uppercase tracking-widest text-sm">Conference Space</h5>
                <p className="text-zinc-900 text-sm leading-relaxed">Hosting Youth & Women regional conventions in a state-of-the-art facility.</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 -z-10 rounded-full blur-3xl"></div>
            <img
              src={prayerCenter1}
              alt="Vision"
              className="w-full h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 bg-white p-8">
              <p className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-amber-600 mb-2">Investment Status</p>
              <p className="text-2xl font-black text-red-600 italic">100% Kingdom Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT SECTION */}
      <section className="bg-zinc-50 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">How to <span className="text-blue-600">Support</span></h2>
          <p className="text-zinc-500 font-light tracking-widest uppercase text-sm">Your contribution brings us closer to completion</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Bank Card */}
          <div className="bg-blue-500 p-12 border-t-4 border-red-600 shadow-xl hover:shadow-2xl transition-all group">
            <FaUniversity className="text-4xl text-zinc-200 mb-8 group-hover:text-red-600 transition-colors" />
            <h4 className="text-2xl font-black uppercase tracking-tight mb-8">Bank Transfer</h4>
            <div className="space-y-4 text-zinc-900 font-mono text-sm">
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span>BANK</span>
                <span className="font-black text-black text-right">EQUITY BANK</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span>ACCOUNT</span>
                <span className="font-black text-black text-right underline decoration-amber-500">1234 5678 91011</span>
              </div>
              <div className="flex justify-between">
                <span>BRANCH</span>
                <span className="font-black text-black text-right">KIKUYU TOWN</span>
              </div>
            </div>
          </div>

          {/* M-Pesa Card */}
          <div className="bg-amber-500 p-12 border-t-4 border-blue-600 shadow-xl hover:shadow-2xl transition-all group">
            <FaMobileAlt className="text-4xl text-zinc-200 mb-8 group-hover:text-blue-600 transition-colors" />
            <h4 className="text-2xl font-black uppercase tracking-tight mb-8">M-Pesa Giving</h4>
            <div className="space-y-4 text-zinc-900 font-mono text-sm">
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span>PAYBILL</span>
                <span className="font-black text-black text-right">247247</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-2">
                <span>ACCOUNT</span>
                <span className="font-black text-black text-right underline decoration-amber-500">733227</span>
              </div>
              <div className="flex justify-between">
                <span>NAME</span>
                <span className="font-black text-black text-right uppercase">AFC - DVPT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 text-center">
          <p className="text-xl italic font-light text-zinc-900 leading-relaxed">
            “Every contribution, no matter the size, helps us raise a sanctuary for generations.”
          </p>
        </div>
      </section>

    </div>
  );
}