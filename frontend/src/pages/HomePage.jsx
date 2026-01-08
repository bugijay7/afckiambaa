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
  FaArrowRight,
} from "react-icons/fa";

// Assets - Ensure paths are correct for your project structure
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero02.jpg";
import hero3 from "../assets/pic6.jpeg";
import img1 from "../assets/pic2.jpeg";
import img2 from "../assets/hero3.jpeg";
import serviceImg from "../assets/pic6.jpeg";
import ctaBg from "../assets/hero3.jpeg";

function HomePage() {
  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Apostolic Faith Church Kiambaa",
      text: "A place where everybody is somebody in the eyes of God.",
      button: "About Us",
      link: "/about",
    },
    {
      id: 2,
      image: hero2,
      title: "Worship With Us",
      text: "Experience uplifting music, heartfelt prayer, and inspiring messages every week.",
      button: "Plan Your Visit",
      link: "/services",
    },
    {
      id: 3,
      image: hero3,
      title: "Growing Together in Christ",
      text: "Discover how we build strong families and communities rooted in love and faith.",
      button: "Join Us",
      link: "/contact",
    },
  ];

  const missionCards = [
    {
      icon: <FaUsers />,
      title: "Team Work",
      text: "Embrace fellowship of the Holy Spirit and the proper use of gifts and talents.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Improve Lives",
      text: "To improve lives through training, equipping, and establishing members in their gifts and purpose.",
    },
    {
      icon: <FaHeart />,
      title: "Strong Fellowship",
      text: "To promote strong fellowship among members as one body in Christ, in accordance with Scripture.",
    },
  ];

  const services = [
    {
      icon: <FaPrayingHands />,
      title: "Sunday Service",
      time: "Every Sunday • 10:30 AM – 1:30 PM",
      desc: "A powerful time of worship, teaching, and fellowship where lives are transformed by God’s Word.",
    },
    {
      icon: <FaClock />,
      title: "Midweek Fellowship",
      time: "Every Wednesday • 5:00 PM – 6:30 PM",
      desc: "Recharge your spirit midweek with prayer, study of the Word, and testimonies of faith.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Monthly Services",
      time: "Last Friday • 9:00 PM – 4:00 AM",
      desc: "Join us for our all-night prayer and revival meetings as we seek a deeper encounter with God.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      time: "Kiambaa, Kenya",
      desc: "We’re a welcoming home for all who seek to know Christ and grow in faith.",
    },
  ];

  // Animation Variant
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white overflow-x-hidden pt-16 lg:pt-0">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] lg:h-screen w-full overflow-hidden">
        <div className="carousel w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`slide${index}`}
              className="carousel-item relative w-full h-full"
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-transparent z-10" />
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={slide.title}
              />

              <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 lg:px-24 max-w-5xl text-white">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-red-600 px-4 py-1 mb-4 text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase rounded-sm shadow-lg"
                >
                  Apostolic Faith Church
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-md"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-base lg:text-xl mb-10 text-white/80 font-light max-w-xl leading-relaxed"
                >
                  {slide.text}
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.link}
                    className="btn btn-primary bg-blue-700 hover:bg-red-600 border-none px-10 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {slide.button}
                  </Link>
                  <Link
                    to="/events"
                    className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-900 px-10 rounded-full transition-all"
                  >
                    View Events
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 lg:py-32 px-6 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-red-600"></div>
            <h2 className="text-red-600 font-bold tracking-widest text-xs uppercase">
              Developing Winners
            </h2>
          </div>
          <h3 className="text-3xl lg:text-5xl font-serif text-blue-950 font-bold mb-8 leading-snug">
            Reaching Souls through <br /> Spiritual Excellence
          </h3>
          <p className="text-gray-600 leading-loose text-lg mb-10">
            The purpose of our church is rooted in the Holy Scriptures. We believe the church is God’s chosen vessel for sharing the truth and advancing His kingdom. Within these walls, gifts of the saints are nurtured for God’s glory.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 font-bold text-blue-900 hover:text-red-600 transition-all border-b-2 border-blue-100 pb-1"
          >
            DISCOVER OUR STORY{" "}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <motion.div {...fadeInUp} className="relative flex justify-center">
          <div className="relative grid grid-cols-2 gap-4 w-full">
            <img
              src={img2}
              alt="Ministry"
              className="rounded-2xl shadow-2xl mt-12 transform hover:rotate-2 transition-transform duration-500 z-10"
            />
            <img
              src={img1}
              alt="Church members"
              className="rounded-2xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
            />
          </div>
          {/* Decorative Background Element */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70" />
        </motion.div>
      </section>

      {/* --- MISSION SECTION (Glassmorphism) --- */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -mr-48 -mt-48" />

        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
            <p className="mt-6 text-white/60 max-w-2xl mx-auto font-light italic">
              "Building a Spirit-led community where every believer thrives through growth and fellowship."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {missionCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="text-5xl text-red-500 mb-8">{card.icon}</div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h4>
                <p className="text-white/70 font-light leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
            <h2 className="text-red-600 font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              Worship With Us
            </h2>
            <h3 className="text-4xl font-serif text-blue-950 font-bold mb-8">
              Service Times & <br /> Sacred Gatherings
            </h3>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src={serviceImg}
                alt="Service"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="mt-8">
               <Link to="/services" className="btn btn-ghost text-blue-900 font-bold p-0 hover:bg-transparent hover:text-red-600">
                VIEW FULL SCHEDULE <FaArrowRight className="ml-2"/>
               </Link>
            </div>
          </div>

          <div className="lg:w-3/5 grid sm:grid-cols-1 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col sm:flex-row gap-6 p-8 bg-gray-50 hover:bg-white rounded-3xl transition-all border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-3xl text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-1">{service.title}</h4>
                  <p className="text-red-600 font-semibold text-sm mb-3 uppercase tracking-wider">{service.time}</p>
                  <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-28 px-6 lg:px-24 overflow-hidden text-center">
        {/* Background Image with Fixed Attachment for Parallax feel */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.35) blur(2px)'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Join Us and Be Part of a <br/> Growing Spiritual Family
            </h2>
            <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto">
              Experience powerful worship, inspiring messages, and a community that walks together in faith and purpose.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/services"
                className="btn btn-lg bg-white text-blue-950 hover:bg-red-600 hover:text-white border-none px-12 rounded-full shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Plan Your Visit
              </Link>
              <Link
                to="/contact"
                className="btn btn-lg btn-outline border-white text-white hover:bg-white/10 px-12 rounded-full"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;