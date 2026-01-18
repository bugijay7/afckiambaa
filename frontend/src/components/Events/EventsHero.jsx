import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImg from "../../assets/hero3.jpeg";

function EventsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-amber-400 overflow-hidden">
      {/* Background Image with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImg} 
          alt="Church Gathering" 
          className="w-full h-full object-cover  opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-blue-200/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Icon Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-blue-950 flex items-center justify-center text-red-600 text-2xl mb-8 shadow-xl"
          >
            <FaCalendarAlt />
          </motion.div>

          {/* Tagline */}
          <span className="text-xs font-black text-red-700 uppercase tracking-[0.4em] block mb-4">
            Our Community Life
          </span>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter uppercase leading-none mb-8">
            Gather • Grow <br />
            <span className="italic font-serif text-red-800 normal-case tracking-normal text-6xl md:text-8xl">Serve.</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 border-l-4 border-zinc-400 pl-6">
            At <strong className="text-blue-950 font-black uppercase tracking-tight">Apostolic Faith Church Kiambaa</strong>, our events are more than just gatherings—they are moments where hearts are renewed, faith is strengthened, and communities are built.
          </p>

          {/* Bible Verse Blockquote */}
          <motion.blockquote 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-950 p-8 md:p-10 shadow-2xl relative"
          >
            <p className="text-gray-200 text-lg md:text-xl italic font-serif leading-relaxed mb-4">
              “And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together…”
            </p>
            <footer className="text-red-500 font-black uppercase tracking-widest text-xs">
              — Hebrews 10:24–25
            </footer>
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-red-700" />
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

export default EventsHero;