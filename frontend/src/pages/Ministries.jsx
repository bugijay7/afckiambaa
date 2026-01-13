import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

// Images
import youthImg from "../assets/ministries/youth.webp";
import childrenImg from "../assets/ministries/children.webp";
import womenImg from "../assets/ministries/women.webp";
import menImg from "../assets/ministries/men.webp";
import worshipImg from "../assets/ministries/worship.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

function Ministries() {
  const ministries = [
    {
      title: "Youth Ministry",
      desc: "Empowering the next generation to live boldly for Christ through discipleship, mentorship, and vibrant fellowship activities that nurture spiritual growth and leadership.",
      img: youthImg,
    },
    {
      title: "Children’s Ministry",
      desc: "A safe and joyful environment where children learn about God’s love through Bible stories, songs, and interactive lessons designed to strengthen their faith foundation.",
      img: childrenImg,
    },
    {
      title: "Women’s Ministry",
      desc: "Bringing together women for prayer, fellowship, and service — encouraging each other to grow in faith and purpose while impacting families and communities.",
      img: womenImg,
    },
    {
      title: "Men’s Fellowship",
      desc: "Equipping men to lead in faith, family, and integrity through Bible study, mentorship, and practical outreach that strengthens their role as godly leaders.",
      img: menImg,
    },
    {
      title: "Praise & Worship",
      desc: "Leading the congregation into God’s presence through heartfelt praise and worship, nurturing musical gifts, and inspiring excellence in service to God.",
      img: worshipImg,
    },
  ];

  return (
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img src={worshipImg} alt="Hero" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-blue-950 to-blue-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1 }}
            className="block text-xs font-bold text-red-600 uppercase mb-6"
          >
            Heart of the Church
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter"
          >
            OUR <span className="italic font-serif text-amber-500">MINISTRIES.</span>
          </motion.h1>
          <motion.p {...fadeUp} className="max-w-2xl mx-auto mt-8 text-zinc-400 font-light text-lg">
            Serving God and His people through diverse communities that nurture growth, unity, and purpose.
          </motion.p>
        </div>
      </section>

      {/* --- MINISTRIES ALTERNATING LIST --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="space-y-32 md:space-y-48">
          {ministries.map((m, i) => (
            <motion.div 
              key={i} 
              {...fadeUp}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative group">
                <div className="overflow-hidden">
                  <img 
                    src={m.img} 
                    alt={m.title} 
                    className="w-full h-[400px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                </div>
                {/* Decorative Frame */}
                <div className={`absolute -bottom-6 ${i % 2 !== 0 ? "-left-6" : "-right-6"} w-24 h-24 border border-red-600/30 -z-10`} />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-[10px] font-black tracking-[0.5em] text-red-600 uppercase block">
                  Ministry — 0{i + 1}
                </span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
                  {m.title.split(" ")[0]} <br />
                  <span className="italic font-serif text-amber-500">{m.title.split(" ").slice(1).join(" ")}</span>
                </h2>
                <p className="text-zinc-400 font-light leading-relaxed text-lg max-w-md">
                  {m.desc}
                </p>
                <div className="pt-6">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-zinc-800 pb-2 hover:border-red-600 hover:text-red-600 transition-all group"
                  >
                    Get Involved 
                    <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MINIMALIST CTA --- */}
      <section className="py-32 bg-zinc-100 text-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="absolute top-0 right-0 text-[15rem] font-black text-zinc-200/50 leading-none select-none -translate-y-1/2">
            AFC
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <motion.h2 {...fadeUp} className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-blue-950">
              READY TO FIND <br /> <span className="italic font-serif text-red-600">YOUR PLACE?</span>
            </motion.h2>
            <motion.p {...fadeUp} className="text-zinc-500 text-lg font-light mb-12 max-w-xl">
              Whether you are a professional, a student, a parent, or a child, there is a community waiting for you at AFC Kiambaa.
            </motion.p>

            <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-blue-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-500 text-center"
              >
                Join A Ministry
              </Link>
              <Link 
                to="/services" 
                className="px-12 py-5 border border-zinc-300 text-zinc-950 text-xs font-bold uppercase tracking-widest hover:border-blue-950 transition-all duration-500 text-center"
              >
                View Service Times
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Ministries;