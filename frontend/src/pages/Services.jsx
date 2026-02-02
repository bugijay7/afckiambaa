import React from "react";
import { FaYoutube, FaMapMarkerAlt, FaCalendarAlt, FaMoon, FaSun } from "react-icons/fa";

// Assets
import worshipImg from "../assets/hero3.jpeg";

export default function Services() {
  const sundayServices = [
    { id: "01", title: "Youth Service", time: "8:30 AM – 9:30 AM", type: "Gathering", border: "border-blue-600" },
    { id: "02", title: "Morning Devotion", time: "9:30 AM – 10:00 AM", type: "Prayer", border: "border-red-600" },
    { id: "03", title: "Discipleship Classes", time: "10:00 AM – 10:30 AM", type: "Teaching", border: "border-amber-600" },
    { id: "04", title: "Main Service", time: "10:30 AM – 1:00 PM", type: "Worship", border: "border-blue-600" },
  ];

  const weekdayServices = [
    { id: "01", title: "Morning Devotion", day: "Mon – Fri", time: "5:00 AM – 7:00 AM", icon: <FaSun /> },
    { id: "02", title: "Evening Fellowship", day: "Wednesday", time: "5:00 PM – 6:30 PM", icon: <FaCalendarAlt /> },
    { id: "03", title: "Kesha (Night Vigil)", day: "Last Friday", time: "9:30 PM – 5:00 AM", icon: <FaMoon /> },
  ];

  return (
    <div className="bg-white text-black font-sans selection:bg-amber-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-end bg-black">
        <img
          src={worshipImg}
          alt="Worship"
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="relative z-10 p-6 md:p-20 w-full max-w-7xl mx-auto">
          <span className="text-amber-600 uppercase tracking-[0.6em] text-xs font-black mb-4 block">
            Worship Experience
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
            Service <br /> <span className="text-red-600">Times.</span>
          </h1>
        </div>
      </section>

      {/* 2. SUNDAY SERVICES (Timeline Style) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">Sunday Worship</h2>
            <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-widest text-xs">
              <FaMapMarkerAlt className="text-red-600" /> Main Sanctuary • Kiambaa, Kenya
            </div>
          </div>
          <div className="h-px flex-grow mx-10 bg-zinc-100 hidden md:block"></div>
          <span className="text-blue-600 font-black text-sm tracking-widest uppercase italic">The Lord's Day</span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-zinc-200 border border-zinc-200">
          {sundayServices.map((service) => (
            <div key={service.id} className="group bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-50 transition-all">
              <div className="flex items-center gap-8">
                <span className="text-4xl font-black text-amber-900 group-hover:text-blue-600 transition-colors">
                  {service.id}
                </span>
                <div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-amber-600 uppercase block mb-1">
                    {service.type}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{service.title}</h3>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-xl md:text-2xl font-light text-zinc-500 tracking-tight">
                  {service.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEEKDAY SERVICES (Modern Grid) */}
      <section className="bg-amber-900 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black tracking-tighter text-white uppercase leading-none mb-8">
                Mid-Week <br /> <span className="text-blue-600">& Special</span>
              </h2>
              <p className="text-zinc-400 leading-loose text-sm italic border-l border-red-600 pl-6">
                Spiritual nourishment isn't just for Sundays. Our community gathers 
                throughout the week to stay rooted in the Word and fellowship.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {weekdayServices.map((service) => (
                <div key={service.id} className="p-10 bg-white/5 border border-white/10 hover:border-amber-600 transition-all">
                  <div className="text-amber-600 text-2xl mb-6">
                    {service.icon}
                  </div>
                  <span className="text-gray-200 text-[10px] font-black tracking-[0.3em] uppercase block mb-2">
                    {service.day}
                  </span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                    {service.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (Catchy Online/Physical Visit) */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            Stay <span className="text-blue-600">Connected.</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-light">
            Join our online fellowship, follow our livestreams, or reach out 
            for prayers and spiritual support. We are a family that extends beyond 
            the walls of the church.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="https://www.youtube.com/@a.f.c.kiambaa" 
              className="group flex items-center gap-4 px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all"
            >
              <FaYoutube className="text-xl" />
              Catch Up on Sermons
            </a>
            <a 
              href="/contact" 
              className="px-10 py-5 border-2 border-black text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}