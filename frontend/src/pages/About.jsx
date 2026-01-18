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
import leadership1 from "../assets/pastor.jpg";
import leadership2 from "../assets/elders.jpg";
import leadership3 from "../assets/secretarys.jpg";
import rev from "../assets/bishops.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

function About() {
  const location = useLocation();

  const beliefs = [
    { title: "THE BIBLE", icon: <FaBible />, text: "The inspired Word of God, our infallible guide for faith and daily living." },
    { title: "SALVATION", icon: <FaCross />, text: "Comes only through repentance from sin and faith in the atoning blood of Jesus Christ." },
    { title: "SANCTIFICATION", icon: <FaHeartbeat />, text: "A second, definite work of grace known as sanctification — a pure heart made holy." },
    { title: "HOLY SPIRIT", icon: <FaDove />, text: "Endues believers with power for service, evidenced by biblical tongues." },
    { title: "DIVINE HEALING", icon: <FaWater />, text: "Healing through faith in the name of Jesus Christ and the power of prayer." },
    { title: "SECOND COMING", icon: <FaCrown />, text: "Jesus Christ will return soon — first for His church, then to reign on earth." },
  ];

 const leaders = [
  {
    name: "PST. LOREM IPSUM",
    title: "ASSISTANT PASTOR",
    img: leadership1,
    bio: "Committed to teaching the Word with clarity and power.",
  },
  {
    name: "BRO. LOREN IPSUME",
    title: "YOUTH COORDINATOR",
    img: leadership2,
    bio: "Empowering the next generation to walk in divine purpose.",
  },
  {
    name: "ELDER LOREN IPSUM",
    title: "CHURCH sECREATARY",
    img: leadership3,
    bio: "Ensuring the house of God operates with excellence.",
  },
];

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="bg-blue-100 text-blue-800 font-sans selection:bg-red-900">
      
      {/* --- PAGE HEADER --- */}
      <section className="pt-40 pb-20 border-b border-zinc-900 px-6 h-[50vh] flex items-center">
        <div className="container mx-auto">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-bold tracking-[0.5em] text-red-600 uppercase block mb-6"
          >
            Apostolic Faith Church
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter leading-none"
          >
            IDENTITY & <br /> <span className="italic font-serif text-zinc-500 underline decoration-zinc-800 underline-offset-8">PURPOSE.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- STATEMENT OF FAITH (UNABRIDGED) --- */}
      <section id="faith" className="py-32 px-6 container mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 border-b border-zinc-900 pb-24">
          <div className="lg:col-span-4 lg:sticky top-40 h-fit">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-8">Statement of Faith</h2>
            <p className="text-3xl font-light italic text-amber-400 leading-tight">
              Our core tenets, held in reverence and practiced in truth.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-24">
            {/* Social Mission */}
            <motion.div {...fadeUp} className="border-l border-zinc-800 pl-12">
              <FaHandsHelping className="text-red-600 text-xl mb-6" />
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-amber-500">Social Mission</h3>
              <p className="text-zinc-800 font-light text-lg leading-relaxed">
                In line with the mission of Christ, Apostolic Faith Church will <span className="text-black font-medium">do good everywhere</span>; it claims the right to undertake educational, medical, and charitable work for the benefit of all who desire its help. We declare our willingness to co-operate with government and other agencies in promoting the community's welfare.
              </p>
            </motion.div>

            {/* Core Commission */}
            <motion.div {...fadeUp} className="border-l border-red-800 pl-12">
              <FaGlobeAfrica className="text-red-600 text-xl mb-6" />
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-amber-500">The Core Commission</h3>
              <div className="mb-6">
                <span className="text-3xl font-serif italic text-zinc-800 block mb-2">“Go ye and make disciples in all nations.”</span>
                <span className="text-xs font-bold tracking-widest">— MATTHEW 28:19–20</span>
              </div>
              <p className="text-amber-500 font-light leading-relaxed">
                The church will maintain this core commission of Jesus Christ in all projects and missions, ensuring every work is centered on the advancement of the Kingdom of God throughout the world.
              </p>
            </motion.div>

            {/* Supreme Rule */}
            <motion.div {...fadeUp} className="border-l border-zinc-800 pl-12">
              <FaBalanceScale className="text-red-600 text-xl mb-6" />
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-amber-500">Supreme Rule of Faith</h3>
              <p className="text-zinc-800 font-light text-lg leading-relaxed mb-6">
                Apostolic Faith Church receives the Word of God contained in the Scriptures of the <span className="text-white font-medium underline decoration-red-900 underline-offset-4">Old and New Testaments — the 66 books</span> — as its supreme rule.
              </p>
              <p className="text-amber-500 font-light">
                Our unity is derived from the oneness of our members with the Lord Jesus Christ, our sole King and Head of the Church.
              </p>
            </motion.div>

            {/* Triune God */}
            <motion.div {...fadeUp} className="bg-zinc-900 p-12 border border-zinc-800 relative overflow-hidden">
              <FaQuoteLeft className="absolute -top-4 -right-4 text-zinc-800 text-9xl opacity-20" />
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-red-600">The Triune God</h3>
              <p className="text-2xl font-light text-zinc-200 leading-relaxed mb-8">
                We worship God Almighty — <span className="italic">All-wise and All-loving</span> — in the Trinity of the Father, the Son, and the Holy Spirit; the same in substance, equal in power and glory.
              </p>
              <p className="text-amber-500 font-light text-sm leading-loose uppercase tracking-widest">
                We adore the Father, infinite in majesty; confess our Lord Jesus Christ, the Eternal Son; and receive and trust the Holy Spirit for the work of redemption.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section id="mission" className="bg-blue-700 border-y border-zinc-900 py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-px bg-white">
          <motion.div {...fadeUp} className="bg-amber-500 p-12 lg:p-24 flex flex-col items-center text-center group">
            <div className="overflow-hidden w-full h-80 mb-12">
              <img src={missionImg} alt="Mission" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-red-600 mb-6">Our Mission</h2>
            <p className="text-2xl font-semibold tracking-tight italic">To Win People, Build Believers, and Send Workers.</p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-amber-500 p-12 lg:p-24 flex flex-col items-center text-center group">
            <div className="overflow-hidden w-full h-80 mb-12">
              <img src={visionImg} alt="Vision" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-red-600 mb-6">Our Vision</h2>
            <p className="text-2xl font-semi-bold tracking-tight italic">Glorify God, Proclaim His Kingdom, and Improve Lives.</p>
          </motion.div>
        </div>
      </section>

      {/* --- BELIEFS --- */}
      <section id="beliefs" className="py-32 px-6 container mx-auto">
        <h2 className="text-4xl font-light tracking-tighter mb-20 italic text-blue-800">Core Beliefs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-zinc-900">
          {beliefs.map((belief, index) => (
            <div key={index} className="p-12 border-r border-b border-zinc-900 hover:bg-red-600 transition-colors">
              <div className="text-red-600 hover:text-white mb-8 text-xl">{belief.icon}</div>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-4">{belief.title}</h3>
              <p className="text-zinc-800 hover:text-white transition  font-light text-sm leading-relaxed">{belief.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- LEADERSHIP --- */}
      <section id="leadership" className="py-32 border-t border-zinc-900 px-6">
        <div className="container mx-auto">
          <div className="mb-24">
            <h2 className="text-xs font-bold tracking-[0.4em] text-red-600 uppercase mb-4">Leadership</h2>
            <p className="text-4xl font-light tracking-tighter">Shepherding with Excellence.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
            <div className="lg:col-span-5 hover:grayscale-0 transition-all duration-700 overflow-hidden">
               <img src={rev} alt="Bishop Peter Mungai" className="w-full h-full object-cover border border-zinc-800" />
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-5xl font-light tracking-tighter mb-2">Bishop Peter Mungai</h3>
              <p className="text-xs font-bold text-red-600 tracking-widest uppercase mb-8">Bishop & Spiritual Father</p>
              <p className="text-2xl font-light text-amber-500 leading-relaxed italic border-l border-zinc-800 pl-8">
                "Dedicated to spiritual excellence and the transformation of lives through the Apostolic faith, Bishop Peter Mungai leads AFC Kiambaa with a father's heart and a prophet's vision."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <motion.div key={index} {...fadeUp} className="group">
                <div className="w-full aspect-square mb-8 bg-zinc-900 overflow-hidden border border-zinc-800">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-1">{leader.name}</h3>
                <p className="text-xs font-bold text-zinc-800 tracking-[0.2em] uppercase mb-4">{leader.title}</p>
                <p className="text-sm text-zinc-800 font-light leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default About;