import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

// Import local images
import youthImg from "../assets/ministries/youth.webp";
import childrenImg from "../assets/ministries/children.webp";
import womenImg from "../assets/ministries/women.webp";
import menImg from "../assets/ministries/men.webp";
import worshipImg from "../assets/ministries/worship.webp";

function Ministries() {
  const ministries = [
    {
      title: "Youth Ministry",
      desc: "Empowering the next generation to live boldly for Christ through discipleship, mentorship, and vibrant fellowship activities that nurture spiritual growth and leadership.",
      img: youthImg,
      accent: "from-blue-600 to-blue-400",
    },
    {
      title: "Children’s Ministry",
      desc: "A safe and joyful environment where children learn about God’s love through Bible stories, songs, and interactive lessons designed to strengthen their faith foundation.",
      img: childrenImg,
      accent: "from-red-600 to-red-400",
    },
    {
      title: "Women’s Ministry",
      desc: "Bringing together women for prayer, fellowship, and service — encouraging each other to grow in faith and purpose while impacting families and communities.",
      img: womenImg,
      accent: "from-blue-800 to-blue-600",
    },
    {
      title: "Men’s Fellowship",
      desc: "Equipping men to lead in faith, family, and integrity through Bible study, mentorship, and practical outreach that strengthens their role as godly leaders.",
      img: menImg,
      accent: "from-blue-950 to-blue-800",
    },
    {
      title: "Praise & Worship Ministry",
      desc: "Leading the congregation into God’s presence through heartfelt praise and worship, nurturing musical gifts, and inspiring excellence in service to God.",
      img: worshipImg,
      accent: "from-red-500 to-red-700",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 bg-blue-950 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Hearts in Service
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8"
          >
            Our Ministries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/70 text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            At Apostolic Faith Church Kiambaa, we believe in serving God and His
            people through diverse ministries that nurture growth, unity, and
            purpose. Discover your place in the body of Christ.
          </motion.p>
        </div>
      </section>

      {/* --- MINISTRIES LIST (Alternating Layout) --- */}
      <section className="py-24 space-y-32 lg:space-y-48 max-w-7xl mx-auto px-6 lg:px-24">
        {ministries.map((m, i) => (
          <motion.div 
            key={i} 
            {...fadeInUp}
            className={`flex flex-col gap-12 lg:gap-20 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image Container with Luxury Frame */}
            <div className="w-full lg:w-1/2 relative group">
              <div className={`absolute -inset-4 bg-gradient-to-br ${m.accent} opacity-10 rounded-[3rem] blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                <img 
                  src={m.img} 
                  alt={m.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className={`w-12 h-1 bg-gradient-to-r ${m.accent}`} />
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Ministry 0{i+1}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-blue-950">
                {m.title}
              </h2>
              <p className="text-gray-600 text-lg leading-loose font-light italic">
                {m.desc}
              </p>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-red-600 transition-colors uppercase tracking-widest text-sm group"
                >
                  Get Involved <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative Background Icon */}
          <div className="absolute -top-10 -right-10 text-blue-900/5 rotate-12">
             <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z"/></svg>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-blue-950 mb-6">Ready to find your place?</h2>
          <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
            Whether you are a professional, a student, a parent, or a child, there is a community waiting for you at AFC Kiambaa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary bg-blue-900 border-none px-12 rounded-full text-white hover:bg-red-600 transition-all">
              Join A Ministry
            </Link>
            <Link to="/services" className="btn btn-outline border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-12 rounded-full">
              View Service Times
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ministries;