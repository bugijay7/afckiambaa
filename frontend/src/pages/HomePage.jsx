import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaMapMarkerAlt, FaCross } from "react-icons/fa";

// Assets
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero02.jpg";
import hero3 from "../assets/pic6.jpeg";
import img1 from "../assets/pic2.jpeg";
import img2 from "../assets/hero3.jpeg";
import ctaBg from "../assets/hero3.jpeg";

function HomePage() {
  // HERO SLIDER
  const heroImages = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const missionCards = [
    { title: "TEAM WORK", text: "Embrace fellowship of the Holy Spirit and the proper use of gifts and talents.", color: "border-blue-600" },
    { title: "IMPROVE LIVES", text: "To improve lives through training, equipping, and establishing members in their gifts.", color: "border-red-600" },
    { title: "FELLOWSHIP", text: "To promote strong fellowship among members as one body in Christ.", color: "border-amber-600" },
  ];

  const services = [
    { title: "SUNDAY SERVICE", time: "10:30 AM – 1:30 PM", desc: "A powerful time of worship, teaching, and fellowship." },
    { title: "MIDWEEK FELLOWSHIP", time: "WED • 5:00 PM – 6:30 PM", desc: "Recharge your spirit midweek with prayer and study of the Word." },
    { title: "MONTHLY VIGIL", time: "LAST FRI • 9:00 PM", desc: "All-night prayer and revival meetings seeking a deeper encounter." },
  ];

  return (
    <div className="bg-white text-black font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-60" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-amber-600 uppercase tracking-[0.5em] text-xs font-black mb-4">
            Apostolic Faith Church Kiambaa
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase mb-10">
            Everybody is <br /> <span className="text-blue-600">Somebody.</span>
          </h1>

          <div className="flex flex-col sm:row gap-4">
            <Link to="/about" className="px-12 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-all">
              Who We Are
            </Link>
            <Link to="/events" className="px-12 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              View Events
            </Link>
          </div>

          {/* Custom Dots */}
          <div className="absolute bottom-10 flex gap-3">
            {heroImages.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all ${i === currentSlide ? "w-12 bg-amber-600" : "w-4 bg-white/30"}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY (Split Layout) */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-zinc-100 border-l-4 border-red-600">
            <span className="text-red-600 text-xs font-black tracking-widest uppercase">Our Philosophy</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
            Developing <br /> <span className="text-blue-600">Winners.</span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 font-light max-w-md">
            We believe in <span className="font-bold text-black italic">Spiritual Excellence</span> and communal growth, ensuring every member finds their divine purpose.
          </p>
          <Link to="/about" className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-sm">
            <span className="border-b-2 border-amber-600 pb-1 group-hover:border-blue-600 transition-colors">Discover Our Story</span>
            <span className="bg-amber-600 text-white p-2 group-hover:bg-blue-600 transition-all"><FaArrowRight /></span>
          </Link>
        </div>

        <div className="relative">
          <img src={img2} alt="Worship" className="w-full h-[500px] object-cover shadow-2xl" />
          <div className="absolute -bottom-10 -left-10 hidden md:block w-64 h-64 border-[12px] border-white overflow-hidden shadow-xl">
            <img src={img1} alt="Community" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. MISSION CARDS */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1px bg-zinc-200 border border-zinc-200">
          {missionCards.map((card, index) => (
            <div key={index} className="bg-white p-12 space-y-6 hover:bg-zinc-50 transition-colors">
              <div className={`w-10 h-1 bg-current ${card.title === 'TEAM WORK' ? 'text-blue-600' : card.title === 'IMPROVE LIVES' ? 'text-red-600' : 'text-amber-600'}`}></div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">{card.title}</h4>
              <p className="text-zinc-500 text-sm leading-loose">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES (Glassmorphism Style) */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-blue-900">
          <img src={hero2} className="w-full h-full object-cover opacity-20" alt="background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
              Join Our <span className="text-amber-600">Gatherings</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-amber-600 transition-all group">
                <FaCross className="text-red-600 mb-6 text-xl" />
                <h4 className="text-white text-xl font-black uppercase mb-2 group-hover:text-blue-400">{service.title}</h4>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] tracking-widest mb-4">
                  <FaClock /> {service.time}
                </div>
                <p className="text-zinc-400 text-sm italic">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src={ctaBg} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">
            A Spiritual Family <br /> <span className="text-red-600">Since The Beginning.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-all">
            Connect With Us
          </Link>
        </div>
      </section>

    </div>
  );
}

export default HomePage;