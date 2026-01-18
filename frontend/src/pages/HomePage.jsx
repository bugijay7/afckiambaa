import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandsHelping,
  FaHeart,
  FaClock,
  FaMapMarkerAlt,
  FaPrayingHands,
  FaCalendarAlt,
} from "react-icons/fa";

// Assets
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero02.jpg";
import hero3 from "../assets/pic6.jpeg";
import img1 from "../assets/pic2.jpeg";
import img2 from "../assets/hero3.jpeg";
import serviceImg from "../assets/pic6.jpeg";
import ctaBg from "../assets/hero3.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

function HomePage() {
  const missionCards = [
    { icon: <FaUsers />, title: "TEAM WORK", text: "Embrace fellowship of the Holy Spirit and the proper use of gifts and talents." },
    { icon: <FaHandsHelping />, title: "IMPROVE LIVES", text: "To improve lives through training, equipping, and establishing members in their gifts." },
    { icon: <FaHeart />, title: "FELLOWSHIP", text: "To promote strong fellowship among members as one body in Christ, in accordance with Scripture." },
  ];

  const services = [
    { icon: <FaPrayingHands />, title: "SUNDAY SERVICE", time: "10:30 AM – 1:30 PM", desc: "A powerful time of worship, teaching, and fellowship." },
    { icon: <FaClock />, title: "MIDWEEK FELLOWSHIP", time: "WED • 5:00 PM – 6:30 PM", desc: "Recharge your spirit midweek with prayer and study of the Word." },
    { icon: <FaCalendarAlt />, title: "MONTHLY VIGIL", time: "LAST FRI • 9:00 PM", desc: "All-night prayer and revival meetings seeking a deeper encounter." },
    { icon: <FaMapMarkerAlt />, title: "LOCATION", time: "KIAMBAA, KENYA", desc: "A welcoming home for all who seek to know Christ." },
  ];

  return (
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased selection:bg-red-900 selection:text-white">
      
      {/* --- BOUTIQUE HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hero1} alt="Hero" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-zinc-150" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5 }}
            className="block text-xs font-bold text-red-600 uppercase mb-8"
          >
            Apostolic Faith Church kiambaa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-10"
          >
            EVERYBODY IS <br /> <span className="italic font-serif text-amber-500">SOMEBODY.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row gap-0 justify-center items-center"
          >
            <Link to="/about" className="w-full md:w-auto px-12 py-5 bg-zinc-100 text-zinc-950 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-500 rounded-none">
              Who We Are
            </Link>
            <Link to="/events" className="w-full md:w-auto px-12 py-5 bg-transparent border border-zinc-100 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-500 rounded-none">
              View Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- MINIMALIST ABOUT --- */}
      <section className="py-32 px-6 container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <motion.h2 {...fadeUp} className="text-xs font-bold text-red-600 tracking-[0.4em] uppercase mb-12">
              Our Philosophy
            </motion.h2>
            <motion.p {...fadeUp} className="text-3xl md:text-5xl font-light leading-tight text-zinc-200 mb-12">
              Developing winners through <span className="text-amber-500">Spiritual Excellence</span> and communal growth.
            </motion.p>
            <Link to="/about" className="text-xs font-black uppercase tracking-widest border-b-2 border-red-600 pb-2 hover:text-red-600 transition-all">
              Discover Our Story
            </Link>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <motion.img {...fadeUp} src={img2} alt="Interior" className="w-full h-[500px] object-cover hover:grayscale-0 transition-all duration-700 rounded-none shadow-2xl" />
            <motion.img {...fadeUp} src={img1} alt="Fellowship" className="w-full h-[400px] mt-24 object-cover hover:grayscale-0 transition-all duration-700 rounded-none shadow-2xl" />
          </div>
        </div>
      </section>

      {/* --- GRID MISSION SECTION --- */}
      <section className="bg-blue-950 border-y-amber-50 py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-zinc-800">
            {missionCards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: "rgba(255, 0, 0, 1)" }}
                className="p-16 border border-zinc-100 transition-all duration-500 group"
              >
                <div className="text-red-600 text-2xl mb-12 group-hover:text-blue-500 transition-transform duration-500">{card.icon}</div>
                <h4 className="text-xs text-amber-500  font-bold tracking-[0.3em] mb-6">{card.title}</h4>
                <p className="text-zinc-100 font-light leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE SCHEDULE (BOUTIQUE LIST) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="mb-24 flex justify-between items-end">
          <h2 className="text-4xl font-light tracking-tighter italic text-amber-500">Gatherings</h2>
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-200">Kiambaa • Muguga</span>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex flex-col md:flex-row justify-between py-12 border-b border-zinc-900 hover:border-red-600 transition-all duration-500 cursor-default"
            >
              <div className="flex gap-8 items-center mb-4 md:mb-0">
                <span className="text-zinc-100 text-4xl font-light group-hover:text-red-900 transition-colors">0{index + 1}</span>
                <div>
                  <h4 className="text-xl font-bold tracking-tight">{service.title}</h4>
                  <p className="text-xs font-bold text-red-600 tracking-widest mt-1 uppercase">{service.time}</p>
                </div>
              </div>
              <p className="md:w-1/3 text-zinc-100 font-light text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CINEMATIC CTA --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-t border-zinc-900">
        <img src={ctaBg} alt="Church" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">
            A SPIRITUAL FAMILY <br /> <span className="text-amber-600">SINCE THE BEGINNING.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/services" className="px-16 py-6 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-700 rounded-none">
              Plan Visit
            </Link>
            <Link to="/contact" className="px-16 py-6 border border-zinc-100 text-white text-xs font-bold uppercase tracking-[0.3em] hover:border-white transition-all duration-700 rounded-none">
              Contact
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default HomePage;