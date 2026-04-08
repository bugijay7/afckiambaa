import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCross, 
  FaChevronLeft, 
  FaChevronRight,
  FaQuoteLeft,
  FaPlayCircle
} from "react-icons/fa";

// AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import hero1 from "../assets/hero3.jpeg";
import hero2 from "../assets/heronew3.jpeg";
import hero3 from "../assets/heronew2.jpeg";
import img1 from "../assets/pic2.jpeg";
import img2 from "../assets/hero3.jpeg";
import ctaBg from "../assets/hero3.jpeg";
import pastorImg from "../assets/bishops.jpg"; 

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: "ease-out-quart", 
      once: false, 
      mirror: true,
      offset: 100,
    });
  }, []);

  const slides = [
    { id: 1, image: hero1, title: "Reaching Souls, Developing Winners", state: "The Year Of Fresh Ideas", subtitle: "Isaiah 43:18-19", button: "Who We Are", link: "/about", align: "left" },
    { id: 2, image: hero2, title: "Welcome To Church", state: "Apostolic Faith Church Kiambaa", subtitle: "1 Peter 4:10", button: "Weekly Services", link: "/services", align: "right" },
    { id: 3, image: hero3, title: "Apostolic Faith Church", state: "Where Everybody is Somebody", subtitle: "John 10:10", button: "Talk To Us", link: "/contact", align: "left" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const missionCards = [
    { title: "TEAM WORK", text: "Embrace fellowship of the Holy Spirit and the proper use of gifts and talents." },
    { title: "IMPROVE LIVES", text: "To improve lives through training, equipping, and establishing members in their gifts." },
    { title: "FELLOWSHIP", text: "To promote strong fellowship among members as one body in Christ." },
  ];

  const services = [
    { title: "SUNDAY SERVICE", time: "10:30 AM – 1:30 PM", desc: "A powerful time of worship, teaching, and fellowship." },
    { title: "MIDWEEK FELLOWSHIP", time: "WED • 5:00 PM – 6:30 PM", desc: "Recharge your spirit midweek with prayer and study of the Word." },
    { title: "MONTHLY VIGIL", time: "LAST FRI • 9:00 PM", desc: "All-night prayer and revival meetings seeking a deeper encounter." },
  ];

  return (
    <div className="bg-gray-200 text-black font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {slides.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={`Hero ${slide.id}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-50" : "opacity-0"}`}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/90"></div>

        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 text-white/30 hover:text-blue-500 transition-all transform hover:scale-110 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
          <FaChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 text-white/30 hover:text-blue-500 transition-all transform hover:scale-110 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
          <FaChevronRight size={24} />
        </button>

        <div className={`relative z-10 h-full flex items-center px-12 md:px-24 max-w-[1600px] mx-auto ${slides[currentSlide].align === 'right' ? 'justify-end text-right' : 'justify-start text-left'}`}>
          <div className="max-w-2xl lg:max-w-3xl">
            <span data-aos="fade-down" className="text-amber-500 uppercase tracking-[0.6em] text-xs font-black block mb-6 animate-pulse">
              {slides[currentSlide].subtitle}
            </span>
            <h2 data-aos="fade-up" data-aos-delay="400" className="text-white text-base md:text-lg font-medium uppercase tracking-[0.2em] mb-4 opacity-80">
              {slides[currentSlide].state}
            </h2>
            <h1 data-aos="fade-right" data-aos-delay="800" className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] uppercase mb-10">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                 <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 ? "text-blue-600" : ""}>
                   {word}{' '}
                 </span>
              ))}
            </h1>
            <div data-aos="zoom-in" data-aos-delay="1200">
              <Link to={slides[currentSlide].link} className="inline-block px-12 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-xl">
                {slides[currentSlide].button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORD OF THE YEAR 2026 SECTION */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Bishop Image */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <img 
                src={pastorImg} 
                alt="Bishop Peter Mungai" 
                className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-b-8 border-blue-600" 
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 p-6 text-white hidden md:block">
                <p className="font-black uppercase text-xl leading-none">The<br/>Visionary</p>
              </div>
            </div>
          </div>

          {/* Declaration Content */}
          <div className="lg:col-span-7 space-y-8 relative" data-aos="fade-left">
            <FaQuoteLeft className="absolute -top-10 left-0 text-zinc-100 text-9xl -z-0" />
            <div className="relative z-10">
              <h4 className="text-red-600 font-black tracking-[0.4em] text-xs uppercase mb-2">Prophetic Declaration</h4>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase mb-4">Word of the Year 2026</h2>
              <p className="text-blue-600 font-bold tracking-widest text-sm mb-8">Apostolic Faith Church Kiambaa</p>

              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-serif italic text-zinc-800 leading-snug">
                  "God is speaking clearly. This is the year of <span className="text-blue-600 font-bold not-italic">new ideas</span>, <span className="text-blue-600 font-bold not-italic">new approaches</span>, and <span className="text-blue-600 font-bold not-italic">new streams</span> springing forth."
                </p>
                <div className="h-px w-24 bg-amber-500"></div>
                <div className="grid md:grid-cols-1 gap-6 text-zinc-600 leading-relaxed text-base">
                  <p>
                    Do not dwell on what you did not achieve in 2025. Do not allow yesterday’s limitations to define today’s possibilities. Behold, God is doing a new thing! Even in dry places, new streams are breaking forth.
                  </p>
                  <p>
                    Where there seemed to be no way, God is making a way. What looked impossible will receive divine direction; what felt delayed will receive divine acceleration. Align your faith and renew your mindset.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-100 mt-8">
                <p className="text-zinc-900 font-black uppercase tracking-tighter text-lg">2026: Divine Innovation & Fresh Beginnings</p>
                <p className="text-blue-700 font-black text-xl uppercase italic mt-1">— Bishop Peter Mungai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center overflow-hidden">
        <div className="space-y-8" data-aos="fade-right">
          <div className="inline-block px-4 py-1 bg-zinc-100 border-l-4 border-red-600">
            <span className="text-red-600 text-xs font-black tracking-widest uppercase">Our Philosophy</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
            Developing <br /> <span className="text-blue-600">Winners.</span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 font-light max-w-md">
            We believe in <span className="font-bold text-black italic">Spiritual Excellence</span> and communal growth.
          </p>
          <Link to="/about" className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-sm">
            <span className="border-b-2 border-amber-600 pb-1 group-hover:border-blue-600 transition-colors">Discover Our Story</span>
            <span className="bg-amber-600 text-white p-2 group-hover:bg-blue-600 transition-all"><FaArrowRight /></span>
          </Link>
        </div>

        <div className="relative" data-aos="fade-left">
          <img src={img2} alt="Worship" className="w-full h-[500px] object-cover shadow-2xl" />
          <div className="absolute -bottom-10 -left-10 hidden md:block w-64 h-64 border-[12px] border-white overflow-hidden shadow-xl" data-aos="fade-up-right" data-aos-delay="600">
            <img src={img1} alt="Community" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. MISSION CARDS */}
      <section className="bg-blue-800 py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <div key={index} className="p-8 space-y-6 bg-blue-900 border border-blue-700 hover:bg-white group transition-all duration-700" data-aos="fade-up" data-aos-delay={index * 300}>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-blue-600">{card.title}</h4>
              <p className="text-blue-100 text-sm leading-loose group-hover:text-zinc-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEW HERE / PLAN YOUR VISIT */}
      <section className="py-24 px-6 bg-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch border-4 border-black" data-aos="slide-up">
          <div className="flex-1 p-12 md:p-20 space-y-6 bg-white" data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">First Time <span className="text-red-600">Visiting?</span></h3>
            <p className="text-zinc-600 leading-relaxed">Walking into a new place can be overwhelming. We want to make it easy for you.</p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 font-bold text-xs tracking-[0.2em] uppercase">
                <div className="p-2 bg-blue-600 text-white rounded-full"><FaMapMarkerAlt /></div> Ample Parking Space
              </li>
              <li className="flex items-center gap-4 font-bold text-xs tracking-[0.2em] uppercase">
                <div className="p-2 bg-amber-600 text-white rounded-full"><FaCross /></div> Vibrant Children's Church
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-zinc-900 flex flex-col justify-center items-center p-12 text-center text-white space-y-6" data-aos="fade-left" data-aos-delay="600">
            <h4 className="text-xl font-bold uppercase tracking-widest">Expect a Warm Welcome</h4>
            <div className="h-px w-20 bg-gray-200/30"></div>
            <p className="text-zinc-100 text-sm italic">"A community where everybody is somebody."</p>
            <Link to="/contact" className="px-10 py-4 bg-gray-200 text-black font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              Contact an Usher
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICES */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          <img src={hero2} className="w-full h-full object-cover opacity-20" alt="background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-20" data-aos="fade-down">
            <h2 className="text-5xl font-black uppercase text-white tracking-tighter">Join Our <span className="text-amber-600">Gatherings</span></h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-gray-200/5 backdrop-blur-lg border border-white/10 hover:border-amber-600 transition-all group text-left" data-aos="zoom-in-up" data-aos-delay={index * 400}>
                <FaCross className="text-red-600 mb-6 text-xl" />
                <h4 className="text-white text-xl font-black uppercase mb-2 group-hover:text-blue-400">{service.title}</h4>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] tracking-widest mb-4"><FaClock /> {service.time}</div>
                <p className="text-zinc-100 text-sm italic">{service.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs group" data-aos="fade-up">
            <span className="border-b-2 border-red-600 pb-1 group-hover:border-amber-600 transition-colors">View All Service Details</span>
            <FaArrowRight className="text-amber-600 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 7. YOUTUBE VIDEO SECTION (Replaces Leadership) */}
      <section className="py-32 px-6 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
             <h4 className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase mb-4">Latest Sermon</h4>
             <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                The Battle <br /> <span className="text-amber-600 italic text-3xl md:text-5xl">of the Mind</span>
             </h2>
             <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg italic">
                "For as he thinketh in his heart, so is he." Join Bishop Peter Mungai as he explores the spiritual foundations of mental victory and divine transformation.
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <FaPlayCircle size={24} />
                </div>
                <div>
                    <p className="text-white font-bold uppercase text-sm">Now Streaming</p>
                    <p className="text-zinc-500 text-xs tracking-widest">Bishop Peter Mungai</p>
                </div>
             </div>
          </div>
          
          <div className="relative group" data-aos="zoom-in" data-aos-duration="2000">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video w-full shadow-2xl overflow-hidden border-4 border-zinc-800">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/9Ot2nCB2vmA?si=2s" 
                title="The Battle of the Mind || Bsp Peter Mungai" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img src={ctaBg} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gray-200/90 backdrop-blur-md"></div>
        <div className="relative z-10 text-center space-y-8" data-aos="zoom-out-up">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black">A Spiritual Family <br /> <span className="text-red-600">Since The Beginning.</span></h2>
          <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-all shadow-xl">Connect With Us</Link>
        </div>
      </section>

    </div>
  );
}

export default HomePage;