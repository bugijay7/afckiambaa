/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaQuoteLeft, FaBible, FaCross, FaWater, FaDove, 
  FaHeartbeat, FaCrown, FaGlobeAfrica, FaHandsHelping, FaBalanceScale 
} from "react-icons/fa";

import missionImg from "../assets/mission.jpeg";
import visionImg from "../assets/vision.jpeg";
import logo from "../assets/logo.png";
import rev from "../assets/bishop.png";

function About() {
  const location = useLocation();

  const beliefs = [
    {
      title: "The Bible",
      icon: <FaBible />,
      text: "We believe the Holy Bible is the inspired Word of God, our infallible guide for faith and daily living.",
    },
    {
      title: "Salvation",
      icon: <FaCross />,
      text: "We believe salvation comes only through repentance from sin and faith in the atoning blood of Jesus Christ.",
    },
    {
      title: "Sanctification",
      icon: <FaHeartbeat />,
      text: "We believe in a second, definite work of grace known as sanctification — a pure heart made holy.",
    },
    {
      title: "Baptism of the Holy Spirit",
      icon: <FaDove />,
      text: "We believe the baptism of the Holy Spirit endues believers with power for service and is evidenced by tongues.",
    },
    {
      title: "Divine Healing",
      icon: <FaWater />,
      text: "We believe in divine healing through faith in the name of Jesus Christ and through the power of prayer.",
    },
    {
      title: "The Second Coming",
      icon: <FaCrown />,
      text: "We believe Jesus Christ will return soon — first to take away His church, and later to reign on earth.",
    },
  ];

  const leaders = [
    { name: "Pst. Lorem Ipsum", title: "Lead Pastor", img: logo, bio: "Committed to teaching the Word with clarity and power." },
    { name: "Bro. Loren Ipsume", title: "Youth Coordinator", img: logo, bio: "Empowering the next generation to walk in divine purpose." },
    { name: "Elder Loren Ipsum", title: "Church Administrator", img: logo, bio: "Ensuring the house of God operates with excellence." },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
    <div className="bg-white text-gray-800 selection:bg-red-100 selection:text-red-900">
      {/* --- PAGE HEADER --- */}
      <section className="bg-blue-950 pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px]" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Apostolic Faith Church</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6">Our Identity & Purpose</h1>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* --- STATEMENT OF FAITH SECTION --- */}
      <section id="faith" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-blue-950 text-3xl lg:text-5xl font-serif font-bold mb-6">Statement of Faith</h2>
          <p className="text-gray-500 italic max-w-3xl mx-auto text-lg">"Receiving the Word of God as our supreme rule of faith and life."</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: Social Responsibility */}
          <motion.div {...fadeInUp} className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 shadow-sm">
            <FaHandsHelping className="text-red-600 text-3xl mb-6" />
            <h3 className="text-xl font-bold text-blue-950 mb-4">Our Social Mission</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              In line with the mission of Christ, Apostolic Faith Church will **do good everywhere**; it claims the right to undertake educational, medical, and charitable work for the benefit of all who desire its help. We declare our willingness to co-operate with government and other agencies in promoting the community's welfare.
            </p>
          </motion.div>

          {/* Column 2: The Core Commission */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-blue-900 p-8 rounded-[2.5rem] shadow-xl text-white">
            <FaGlobeAfrica className="text-red-500 text-3xl mb-6" />
            <h3 className="text-xl font-bold mb-4">The Core Commission</h3>
            <p className="text-blue-100 leading-relaxed font-light italic mb-6 text-lg">
              “Go ye and make disciples in all nations.” <br/> <span className="text-xs font-bold text-red-400">— Matthew 28:19–20</span>
            </p>
            <p className="text-blue-50 leading-relaxed font-light">
              The church will maintain this core commission of Jesus Christ in all projects and missions, ensuring every work is centered on the advancement of the Kingdom of God throughout the world.
            </p>
          </motion.div>

          {/* Column 3: The Supreme Rule */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 shadow-sm">
            <FaBalanceScale className="text-blue-900 text-3xl mb-6" />
            <h3 className="text-xl font-bold text-blue-950 mb-4">Supreme Rule of Faith</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              Apostolic Faith Church receives the Word of God contained in the Scriptures of the **Old and New Testaments — the 66 books** — as its supreme rule. Our unity is derived from the oneness of our members with the Lord Jesus Christ, our sole King and Head of the Church.
            </p>
          </motion.div>
        </div>

        {/* The Trinity Block */}
        <motion.div {...fadeInUp} className="mt-12 bg-white border-2 border-blue-950 p-10 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <FaQuoteLeft className="absolute -top-4 -left-4 text-blue-900/5 text-9xl group-hover:text-blue-900/10 transition-colors" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-blue-950 mb-8 uppercase tracking-widest">The Triune God</h3>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-serif">
              We worship God Almighty — **All-wise and All-loving** — in the Trinity of the Father, the Son, and the Holy Spirit; the same in substance, equal in power and glory. We adore the Father, infinite in majesty; confess our Lord Jesus Christ, the Eternal Son; and receive and trust the Holy Spirit for the work of redemption.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section id="mission" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <img src={missionImg} alt="Mission" className="w-24 h-24 object-cover rounded-2xl mb-8 shadow-lg grayscale hover:grayscale-0 transition-all duration-500" />
            <h2 className="text-3xl font-serif font-bold text-blue-950 mb-4 tracking-tight uppercase">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm font-light uppercase tracking-tighter">To Win People, Build Believers, and Send Workers.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-blue-900 p-12 rounded-[3rem] shadow-xl text-white flex flex-col items-center text-center">
            <img src={visionImg} alt="Vision" className="w-24 h-24 object-cover rounded-2xl mb-8 shadow-lg border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-500" />
            <h2 className="text-3xl font-serif font-bold mb-4 tracking-tight uppercase">Our Vision</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-sm font-light uppercase tracking-tighter">Glorify God, Proclaim His Kingdom, Improve Lives, and Promote Fellowship.</p>
          </motion.div>
        </div>
      </section>

      {/* --- BELIEFS SECTION --- */}
      <section id="beliefs" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-blue-950 mb-4">Core Beliefs</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div 
              key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-900/20 transition-all p-8 rounded-3xl"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                {belief.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4 tracking-tight">{belief.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{belief.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section id="leadership" className="py-24 bg-blue-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Church Leadership</h2>
            <p className="text-red-500 font-bold uppercase tracking-widest text-xs">Shepherding Kiambaa with Excellence</p>
          </div>

          {/* Bishop Feature */}
          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row items-center gap-12 bg-white/5 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 mb-20 shadow-3xl hover:border-red-600/30 transition-colors">
            <div className="w-72 h-72 lg:w-96 lg:h-96 shrink-0 overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={rev} alt="Bishop Peter Mungai" className="w-full h-full object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-2">Bishop Peter Mungai</h3>
              <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-8">Senior Pastor & Spiritual Father</p>
              <p className="text-xl text-white/70 leading-relaxed italic max-w-2xl font-light">
                "Dedicated to spiritual excellence and the transformation of lives through the Apostolic faith, Bishop Peter Mungai leads AFC Kiambaa with a father's heart and a prophet's vision."
              </p>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="bg-white/5 p-8 rounded-[2.5rem] text-center border border-white/5 group hover:bg-white/10 transition-all">
                <div className="avatar mb-6">
                  <div className="w-28 rounded-full ring-4 ring-blue-700 ring-offset-base-100 ring-offset-4 group-hover:ring-red-600 transition-all">
                    <img src={leader.img} alt={leader.name} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{leader.name}</h3>
                <p className="text-red-500 text-[10px] font-bold uppercase mb-4 tracking-[0.2em]">{leader.title}</p>
                <p className="text-white/50 text-sm font-light leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;