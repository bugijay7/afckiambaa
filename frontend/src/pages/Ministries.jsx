import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Images
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
    <div className="bg-white text-black selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <img
          src={worshipImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-500 uppercase tracking-[0.6em] text-xs font-black block mb-4">
            Heart of the Church
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
            OUR <span className="text-blue-600 italic">MINISTRIES</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-zinc-400 font-light text-lg">
            Serving God and His people through diverse communities that nurture growth, unity, and purpose.
          </p>
        </div>
      </section>

      {/* 2. MINISTRIES LIST - Alternating Layout */}
      <section className="py-24">
        {ministries.map((m, i) => (
          <div 
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-32 lg:mb-0`}
          >
            {/* Image Container */}
            <div className="w-full lg:w-1/2 overflow-hidden bg-zinc-100">
              <img
                src={m.img}
                alt={m.title}
                className="w-full h-[400px] lg:h-[700px] object-cover hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              />
            </div>

            {/* Text Container */}
            <div className="w-full lg:w-1/2 p-12 md:p-24 relative">
              {/* Large Background Number */}
              <span className="absolute top-10 left-10 text-[12rem] font-black text-zinc-50 opacity-10 pointer-events-none select-none">
                0{i + 1}
              </span>
              
              <div className="relative z-10">
                <span className="text-red-600 font-mono tracking-widest text-sm uppercase block mb-4">
                  Ministry — 0{i + 1}
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                  {m.title}
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed font-light mb-10 max-w-md">
                  {m.desc}
                </p>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-4 group text-sm font-black uppercase tracking-widest border-b-2 border-black pb-2 hover:text-blue-600 hover:border-blue-600 transition-all"
                >
                  Get Involved 
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-zinc-900 text-white py-32 px-6 text-center relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            READY TO FIND <br /> 
            <span className="text-amber-500 italic">YOUR PLACE?</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are a professional, a student, a parent, or a child, there is a community waiting for you at AFC Kiambaa.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full md:w-auto bg-blue-600 hover:bg-white hover:text-black text-white px-10 py-5 font-black uppercase tracking-widest text-xs transition-all duration-500"
            >
              Join A Ministry
            </Link>
            <Link 
              to="/services" 
              className="w-full md:w-auto border border-zinc-700 hover:border-white px-10 py-5 font-black uppercase tracking-widest text-xs transition-all duration-500"
            >
              View Service Times
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Ministries;