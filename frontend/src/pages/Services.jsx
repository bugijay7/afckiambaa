import React from "react";
import { FaYoutube, FaMapMarkerAlt, FaCalendarAlt, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

// Assets
import worshipImg from "../assets/hero3.jpeg";

export default function Services() {
  const sundayServices = [
    { id: "01", title: "Youth Service", time: "8:30 AM – 9:30 AM", type: "Gathering", colorClass: "text-blue-600", borderClass: "border-blue-600" },
    { id: "02", title: "Morning Devotion", time: "9:30 AM – 10:00 AM", type: "Prayer", colorClass: "text-red-600", borderClass: "border-red-600" },
    { id: "03", title: "Discipleship Classes", time: "10:00 AM – 10:30 AM", type: "Teaching", colorClass: "text-amber-600", borderClass: "border-amber-600" },
    { id: "04", title: "Main Service", time: "10:30 AM – 1:00 PM", type: "Worship", colorClass: "text-blue-600", borderClass: "border-blue-600" },
  ];

  const weekdayServices = [
    { id: "01", title: "Morning Devotion", day: "Mon – Fri", time: "5:00 AM – 7:00 AM", icon: <FaSun /> },
    { id: "02", title: "Evening Fellowship", day: "Wednesday", time: "5:00 PM – 6:30 PM", icon: <FaCalendarAlt /> },
    { id: "03", title: "Kesha (Night Vigil)", day: "Last Friday", time: "9:30 PM – 5:00 AM", icon: <FaMoon /> },
  ];

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-amber-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src={worshipImg}
          alt="Worship"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
        
        <div className="relative z-10 p-8 text-center max-w-7xl mx-auto">
          <span className="text-amber-500 uppercase tracking-[0.8em] text-sm font-black mb-6 block animate-pulse">
            Worship Experience
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-tight">
            Service <br /> <span className="text-blue-600">Times.</span>
          </h1>
        </div>
      </section>

      {/* 2. SUNDAY SERVICES - Numbers now match the border color */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-zinc-900">Sunday Worship</h2>
            <div className="flex items-center gap-3 text-zinc-600 font-bold uppercase tracking-widest text-xs bg-zinc-100 p-3 rounded-sm inline-flex">
              <FaMapMarkerAlt className="text-red-600" /> Main Sanctuary • Kiambaa, Kenya
            </div>
          </div>
          <div className="h-[2px] flex-grow mx-10 bg-zinc-200 hidden md:block"></div>
          <span className="text-blue-700 font-black text-sm tracking-widest uppercase italic">The Lord's Day</span>
        </div>

        <div className="grid grid-cols-1 divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {sundayServices.map((service) => (
            <div key={service.id} className="group bg-white p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-50 transition-all duration-500">
              <div className="flex items-center gap-10">
                {/* Number color synced to service type border color */}
                <span className={`text-5xl font-black opacity-40  transition-opacity duration-500 ${service.colorClass}`}>
                  {service.id}
                </span>
                <div>
                  <span className={`text-[11px] font-black tracking-[0.4em] uppercase block mb-2 px-2 py-0.5 border-l-4 ${service.borderClass}`}>
                    {service.type}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-800">{service.title}</h3>
                </div>
              </div>
              <div className="mt-6 md:mt-0 text-left md:text-right">
                <p className="text-2xl md:text-3xl font-light text-zinc-900 bg-amber-50 md:bg-transparent p-4 md:p-0 border-l-2 md:border-l-0 border-amber-500">
                  {service.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEEKDAY SERVICES */}
      <section className="bg-zinc-900 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-5xl font-black tracking-tighter text-white uppercase leading-none">
                Mid-Week <br /> <span className="text-blue-500">& Special</span>
              </h2>
              <p className="text-zinc-400 leading-loose text-base italic border-l-4 border-red-600 pl-6">
                Spiritual nourishment isn't just for Sundays. Our community gathers 
                throughout the week to stay rooted in the Word and fellowship.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {weekdayServices.map((service) => (
                <div key={service.id} className="p-10 bg-white/5 border border-white/10 hover:border-amber-500 hover:bg-white/10 transition-all group">
                  <div className="text-amber-500 text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase block mb-3">
                    {service.day}
                  </span>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-6">
                    {service.title}
                  </h3>
                  <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30">
                    <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                      {service.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-32 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-zinc-900">
            Stay <span className="text-blue-700">Connected.</span>
          </h2>
          <p className="text-zinc-600 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Join our online fellowship, follow our livestreams, or reach out 
            for prayers and spiritual support. We are a family that extends beyond 
            the walls of the church.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="https://www.youtube.com/@a.f.c.kiambaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all shadow-xl shadow-red-600/20 hover:shadow-zinc-900/20"
            >
              <FaYoutube className="text-xl" />
              Catch Up on Sermons
            </a>
            <Link 
              to="/contact" 
              className="px-12 py-5 border-4 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-all"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}