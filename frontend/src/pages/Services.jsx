import React from "react";
import { motion } from "framer-motion";
import {
  Book,
  Users,
  Church,
  Clock,
  Calendar,
  PlayCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";

// Assets
import worshipImg from "../assets/hero3.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function Services() {
  const sundayServices = [
    { id: "01", title: "Youth Service", time: "8:30 AM – 9:30 AM", type: "Gathering", icon: <Users /> },
    { id: "02", title: "Morning Devotion", time: "9:30 AM – 10:00 AM", type: "Prayer", icon: <Church /> },
    { id: "03", title: "Discipleship Classes", time: "10:00 AM – 10:30 AM", type: "Teaching", icon: <Book /> },
    { id: "04", title: "Main Service", time: "10:30 AM – 1:00 PM", type: "Worship", icon: <Users /> },
  ];

  const weekdayServices = [
    { id: "01", title: "Morning Devotion", day: "Mon – Fri", time: "5:00 AM – 7:00 AM", icon: <Book /> },
    { id: "02", title: "Evening Fellowship", day: "Wednesday", time: "5:00 PM – 6:30 PM", icon: <Users /> },
    { id: "03", title: "Kesha (Night Vigil)", day: "Last Friday of every month", time: "9:30 PM – 5:00 AM", icon: <Church /> },
  ];

  return (
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={worshipImg} alt="Worship" className="w-full h-full object-cover opacity-50 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-transparent to-blue-950/50" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="block text-xs md:text-sm font-bold text-red-600 uppercase mb-6"
          >
            Worship Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            SERVICE <span className="italic font-bold font-serif text-amber-500">TIMES.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- SUNDAY SERVICES (TIMELINE STYLE) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-black tracking-[0.4em] uppercase text-red-600 mb-4">Sunday Worship</h2>
          <p className="text-zinc-100 font-light tracking-widest text-sm">MAIN SANCTUARY • KIAMBAA</p>
        </div>

        <div className="border-t border-zinc-900">
          {sundayServices.map((service, idx) => (
            <motion.div 
              key={service.id}
              {...fadeUp}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-zinc-900 hover:border-amber-500 transition-colors duration-500"
            >
              <div className="flex items-center gap-10 mb-6 md:mb-0">
                <span className="text-4xl font-light text-zinc-100 group-hover:text-red-600 transition-colors">
                  {service.id}
                </span>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">{service.type}</span>
                  <h3 className="text-2xl font-bold tracking-tight mt-1">{service.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-400 group-hover:text-zinc-100 transition-colors">
                <Clock size={20} className="text-red-600" />
                <span className="text-sm font-medium tracking-widest text-zinc-100">{service.time}</span>
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WEEKDAY SERVICES (GRID STYLE) --- */}
      <section className="py-32 bg-zinc-100 text-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-light tracking-tighter text-blue-950">
              MID-WEEK <br /> <span className="italic font-serif text-red-600">& Special Services</span>
            </h2>
            <p className="max-w-xs text-sm text-zinc-500 font-light leading-relaxed">
              Spiritual nourishment isn't just for Sundays. Join our community throughout the week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-zinc-300">
            {weekdayServices.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ backgroundColor: "#fef2f2" }} // light red tint
                className="p-12 border-r border-b border-zinc-300 transition-all group"
              >
                <div className="text-red-600 mb-8 transform group-hover:scale-110 transition-transform">
                   {React.cloneElement(service.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">{service.day}</span>
                <h3 className="text-xl font-bold mt-2 mb-6 text-blue-950">{service.title}</h3>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock size={14} />
                  <span className="text-xs font-bold tracking-widest">{service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CINEMATIC) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">STAY <span className="italic font-serif text-amber-500">CONNECTED.</span></h2>
          <p className="text-zinc-100 font-light text-lg mb-12">
            Join our online fellowship, follow our livestreams, or reach out for prayers and spiritual support.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
            <a href="https://www.youtube.com/@a.f.c.kiambaa" className="flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
              <PlayCircle size={18} /> Catch Up on Sermons
            </a>
            <a href="/contact" className="px-10 py-5 border border-zinc-700 text-white text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-all duration-500">
              Plan Your Visit
            </a>
          </div>

          
        </motion.div>
      </section>

    </div>
  );
}