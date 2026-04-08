import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaQuoteLeft, FaBible, FaPray, FaHandsHelping, FaDove, FaPlaceOfWorship } from "react-icons/fa";

// Assets
import missionImg from "../assets/mission.jpeg";
import visionImg from "../assets/vision.jpeg";
import leadership1 from "../assets/pastor.jpg";
import leadership2 from "../assets/elder1.jpg";
import leadership3 from "../assets/secretarys.jpg";
import historyImg from "../assets/heronew2.jpeg"; 
import rev from "../assets/bishops.jpg";

function About() {
  const location = useLocation();

  const beliefs = [
    { title: "THE BIBLE", text: "The inspired Word of God, our infallible guide for faith and daily living.", icon: <FaBible /> },
    { title: "SALVATION", text: "Comes only through repentance from sin and faith in the atoning blood of Jesus Christ.", icon: <FaHandsHelping /> },
    { title: "SANCTIFICATION", text: "A second, definite work of grace known as sanctification — a pure heart made holy.", icon: <FaDove /> },
    { title: "HOLY SPIRIT", text: "Endues believers with power for service, evidenced by biblical tongues.", icon: <FaPray /> },
    { title: "DIVINE HEALING", text: "Healing through faith in the name of Jesus Christ and the power of prayer.", icon: <FaHandsHelping /> },
    { title: "SECOND COMING", text: "Jesus Christ will return soon — first for His church, then to reign on earth.", icon: <FaBible /> },
  ];

  const leaders = [
    { name: "PST. JOHN NJ'UNGE", title: "ASSISTANT PASTOR", img: leadership1, bio: "Committed to teaching the Word with clarity and power." },
    { name: "ELDER ANDREW NJENGA", title: "CHURCH ELDER", img: leadership2, bio: "Empowering the next generation to walk in divine purpose." },
    { name: "ELDER SAMUEL MWANIKI", title: "CHURCH SECRETARY", img: leadership3, bio: "Ensuring the house of God operates with excellence." },
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
    <div className="bg-gray-200 text-black selection:bg-red-100">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-48 pb-24 px-6 bg-gray-200 ">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 uppercase tracking-[0.4em] text-xs font-black block mb-6">
            Apostolic Faith Church
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
            Identity & <br /> <span className="text-blue-600">Purpose.</span>
          </h1>
        </div>
      </section>

      {/* 2. STATEMENT OF FAITH */}
      <section id="faith" className="py-32 px-6 md:px-12 lg:px-24 bg-gray-200 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase sticky top-32">
              Statement <br /> of <span className="text-amber-600 text-6xl block">Faith</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-20">
            <div className="border-l-8 border-red-600 pl-8">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-blue-600">Social Mission</h3>
              <p className="text-2xl leading-tight font-bold text-zinc-900">
                In line with the mission of Christ, Apostolic Faith Church will do good everywhere;
                it claims the right to undertake educational, medical, and charitable work.
              </p>
            </div>

            <div className="bg-blue-900 p-16 relative overflow-hidden rounded-none text-white shadow-2xl">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-white opacity-10 text-9xl" />
              <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-6 text-amber-500">The Core Commission</h3>
              <p className="text-4xl font-black tracking-tight italic mb-6 leading-none">
                “Go ye and make disciples in all nations.” 
              </p>
              <span className="text-white border-b-2 border-red-600 pb-1 font-bold uppercase tracking-widest text-xs">— Matthew 28:19–20</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-gray-200 border border-zinc-200 shadow-sm">
                <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-blue-600">Supreme Rule</h3>
                <p className="text-sm text-zinc-600 leading-loose">
                  Apostolic Faith Church receives the Word of God contained in the 66 books of the 
                  Old and New Testaments as its supreme rule of faith.
                </p>
              </div>
              <div className="p-8 bg-gray-200 border border-zinc-200 shadow-sm">
                <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-red-600">The Triune God</h3>
                <p className="text-sm text-zinc-600 leading-loose">
                  We worship God Almighty in the Trinity of the Father, the Son, and the Holy Spirit;
                  equal in power and glory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHURCH HISTORY - DYNAMIC EDITORIAL UPDATE */}
      <section id="history" className="py-32 bg-[#0a192f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-24 text-center lg:text-left">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-4">
              Our <span className="text-red-600 block lg:inline italic">History</span>
            </h2>
            <div className="h-2 w-32 bg-amber-500 mx-auto lg:mx-0"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Visuals */}
            <div className="lg:col-span-5 space-y-12">
              <div className="relative border-r-[20px] border-blue-600 pr-6 group">
                <img src={historyImg} alt="History" className="w-full  group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute -bottom-6 -left-6 bg-red-600 p-8 hidden md:block">
                    <span className="text-5xl font-black italic">EST. 1980s</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Full Narrative */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* Part 1: Origins */}
              <div className="space-y-6">
                <h3 className="text-amber-500 font-black tracking-[0.4em] uppercase text-sm flex items-center gap-4">
                  <span className="h-px w-8 bg-amber-500"></span> How the Church Started
                </h3>
                <p className="text-3xl font-bold leading-tight">
                  The church began as a small fellowship at (Ika-Imwe), in the home of the late Rachael Wangari Njoroge, who was my mother-in-law.
                </p>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Later, in the early 1980s, the church relocated to Kiambaa Village, and subsequently moved to Kiambaa Shopping Centre (Gwa Thugi).
                </p>
              </div>

              {/* Part 2: Leadership Transfer */}
              <div className="bg-gray-200/5 border border-white/10 p-10 relative">
                <div className="text-6xl font-black text-white/10 absolute top-4 right-4">1984</div>
                <p className="text-2xl font-black text-blue-400 tracking-tight leading-none uppercase">
                  I joined the church and later took over its leadership in 1984
                </p>
              </div>

              {/* Part 3: Memorial Section (MEN OF GOD) */}
              <div className="bg-gray-200 text-black p-12 shadow-[15px_15px_0px_0px_rgba(220,38,38,1)]">
                <h3 className="text-xs font-black tracking-[0.5em] uppercase mb-8 border-b-2 border-black pb-2 inline-block">MEN OF GOD TO BE REMEMBERED</h3>
                <p className="text-lg font-medium leading-relaxed mb-10">
                  We honor the following men of God who played a significant role in nurturing and supporting the church during its early stages of growth:
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                   {["Bishop Abraham", "Bishop Moses Ndungu", "Pastor John Gicheru"].map((name) => (
                      <div key={name} className="flex items-center gap-4 group">
                         <div className="h-10 w-1 bg-red-600 group-hover:h-full transition-all"></div>
                         <span className="font-black uppercase tracking-tighter text-sm">{name}</span>
                      </div>
                   ))}
                </div>
              </div>

              {/* Part 4: Growth & Plots */}
              <div className="space-y-8 text-zinc-300">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="bg-blue-600 p-8 flex-shrink-0 flex items-center justify-center">
                      <span className="text-4xl font-black">1992</span>
                   </div>
                   <p className="text-lg leading-relaxed pt-2">
                    In 1992, by the grace of God, we were able to acquire this plot where we built our first semi-permanent church.
                   </p>
                </div>

                <p className="text-xl text-white font-light leading-relaxed border-l-2 border-amber-500 pl-8">
                  From these humble beginnings, the church expanded and planted other branches, including Nduma and Thamanda, which later formed the current Muguga Parish. The Parish continued to grow, opening churches in Gitaru, Nderi, Tehilla, and more recently, Limuru Church.
                </p>

                <p className="leading-relaxed">
                  As the church continued to expand, we were able to acquire an adjacent plot for future development. This is where we have now built our new offices.
                </p>
                
                <div className="bg-gray-200/5 p-10 border-l-8 border-blue-500">
                   <p className="text-lg italic text-zinc-100">
                    The building is designed to extend up to the fourth floor, with the upper floors purposed to serve as prayer hostels for the surrounding community and beyond.
                   </p>
                </div>
              </div>

              {/* Part 5: Scriptural Anchor */}
              <div className="bg-amber-600 p-12 text-white">
                <h3 className="text-xs font-black tracking-[0.4em] uppercase mb-6 opacity-70">The Visionary Anchor</h3>
                <p className="text-xl font-bold mb-8">
                  Our vision is anchored in the Word of God, as written in 2 Corinthians 10:3:
                </p>
                <p className="text-4xl font-black tracking-tighter italic leading-[0.9]">
                  "For though we live in the world, we do not wage war as the world does. The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds."
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section id="mission" className="grid md:grid-cols-2 bg-black">
        <div className="group relative h-[700px] overflow-hidden flex items-center justify-center border-r border-white/10">
          <img src={missionImg} alt="Mission" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 text-center px-10">
            <h2 className="text-amber-500 text-xs font-black tracking-[0.5em] uppercase mb-4">The Mission</h2>
            <p className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              To Win People, <br /> Build Believers, <br /> & Send Workers.
            </p>
          </div>
        </div>
        <div className="group relative h-[700px] overflow-hidden flex items-center justify-center">
          <img src={visionImg} alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 text-center px-10">
            <h2 className="text-red-500 text-xs font-black tracking-[0.5em] uppercase mb-4">The Vision</h2>
            <p className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Glorify God, <br /> Proclaim His Kingdom, <br /> & Improve Lives.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BELIEFS */}
      <section id="beliefs" className="py-32 px-6 bg-zinc-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase">
              Core <span className="text-red-600 italic">Beliefs</span>
            </h2>
            <div className="flex-1 h-px bg-gray-200/20"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {beliefs.map((belief, index) => (
              <div key={index} className="p-12 border border-white/10 bg-transparent hover:bg-gray-200 hover:text-black transition-all group">
                <div className="text-amber-500 text-3xl mb-8 group-hover:text-blue-600 transition-colors">
                  {belief.icon}
                </div>
                <h3 className="font-black tracking-widest uppercase text-sm mb-4">{belief.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-800 text-sm leading-relaxed">
                  {belief.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP */}
      <section id="leadership" className="py-32 px-6 bg-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center mb-40">
            <div className="w-full md:w-1/2">
               <div className="relative border-l-[32px] border-blue-600 pl-0 shadow-2xl">
                  <img src={rev} alt="Bishop Peter Mungai" className="w-full" />
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-block px-6 py-2 bg-red-600 text-white text-xs font-black tracking-widest uppercase">Spiritual Authority</span>
              <h3 className="text-7xl font-black tracking-tighter uppercase leading-none text-zinc-900">Bishop <br /> <span className="text-blue-600">Peter Mungai</span></h3>
              <p className="text-zinc-700 text-xl font-light leading-relaxed">
                A visionary leader dedicated to the transformation of lives through the Apostolic faith and spiritual excellence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="space-y-8 bg-gray-200 p-8 border-b-4 border-red-600 shadow-lg">
                <img src={leader.img} alt={leader.name} className="w-full h-[400px] object-cover" />
                <div>
                  <h4 className="text-2xl font-black tracking-tight uppercase mb-2">{leader.name}</h4>
                  <p className="text-blue-600 text-xs font-black tracking-widest uppercase mb-6">{leader.title}</p>
                  <p className="text-sm text-zinc-500 italic leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;