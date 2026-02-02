import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaQuoteLeft, FaBible, FaPray, FaHandsHelping, FaDove } from "react-icons/fa";

// Assets
import missionImg from "../assets/mission.jpeg";
import visionImg from "../assets/vision.jpeg";
import leadership1 from "../assets/pastor.jpg";
import leadership2 from "../assets/elders.jpg";
import leadership3 from "../assets/secretarys.jpg";
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
    { name: "PST. LOREM IPSUM", title: "ASSISTANT PASTOR", img: leadership1, bio: "Committed to teaching the Word with clarity and power." },
    { name: "BRO. LOREN IPSUME", title: "YOUTH COORDINATOR", img: leadership2, bio: "Empowering the next generation to walk in divine purpose." },
    { name: "ELDER LOREN IPSUM", title: "CHURCH SECRETARY", img: leadership3, bio: "Ensuring the house of God operates with excellence." },
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
    <div className="bg-white text-black selection:bg-red-100">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 uppercase tracking-[0.4em] text-xs font-black block mb-6">
            Apostolic Faith Church
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
            Identity & <br /> <span className="text-red-600">Purpose.</span>
          </h1>
        </div>
      </section>

      {/* 2. STATEMENT OF FAITH (Text-Heavy Editorial) */}
      <section id="faith" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black tracking-tighter uppercase sticky top-32">
            Statement <br /> of <span className="text-amber-600 text-6xl block">Faith</span>
          </h2>
        </div>
        
        <div className="lg:col-span-8 space-y-20">
          <div className="border-l-2 border-blue-600 pl-8">
            <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-blue-600">Social Mission</h3>
            <p className="text-xl leading-relaxed text-zinc-700">
              In line with the mission of Christ, Apostolic Faith Church will do good everywhere;
              it claims the right to undertake educational, medical, and charitable work for the
              benefit of all.
            </p>
          </div>

          <div className="bg-zinc-50 p-12 relative overflow-hidden">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-zinc-200 text-8xl" />
            <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-6 text-red-600">The Core Commission</h3>
            <p className="text-3xl font-black tracking-tight italic mb-6">
              “Go ye and make disciples in all nations.” 
            </p>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">— Matthew 28:19–20</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-blue-600">Supreme Rule</h3>
              <p className="text-sm text-zinc-600 leading-loose">
                Apostolic Faith Church receives the Word of God contained in the 66 books of the 
                Old and New Testaments as its supreme rule of faith.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-[0.3em] uppercase mb-4 text-red-600">The Triune God</h3>
              <p className="text-sm text-zinc-600 leading-loose">
                We worship God Almighty in the Trinity of the Father, the Son, and the Holy Spirit;
                equal in power and glory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Split Visuals) */}
      <section id="mission" className="grid md:grid-cols-2">
        <div className="group relative h-[600px] overflow-hidden bg-black flex items-center justify-center">
          <img src={missionImg} alt="Mission" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10 text-center px-10">
            <h2 className="text-amber-600 text-xs font-black tracking-[0.5em] uppercase mb-4">The Mission</h2>
            <p className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              To Win People, <br /> Build Believers, <br /> & Send Workers.
            </p>
          </div>
        </div>
        <div className="group relative h-[600px] overflow-hidden bg-blue-900 flex items-center justify-center border-l border-white/10">
          <img src={visionImg} alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10 text-center px-10">
            <h2 className="text-red-500 text-xs font-black tracking-[0.5em] uppercase mb-4">The Vision</h2>
            <p className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Glorify God, <br /> Proclaim His Kingdom, <br /> & Improve Lives.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BELIEFS (Bento Grid Style) */}
      <section id="beliefs" className="py-32 px-6 bg-amber-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter text-white uppercase mb-16">
            Core <span className="text-amber-600 italic">Beliefs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div key={index} className="p-10 border border-white/10 hover:bg-white hover:text-black transition-all group">
                <div className="text-blue-600 text-2xl mb-6 group-hover:text-red-600 transition-colors">
                  {belief.icon}
                </div>
                <h3 className="font-black tracking-widest uppercase text-sm mb-4">{belief.title}</h3>
                <p className="text-zinc-400 group-hover:text-zinc-600 text-sm leading-relaxed">
                  {belief.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP (Clean & Architectural) */}
      <section id="leadership" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
          <div className="w-full md:w-1/2">
             <div className="relative border-r-[20px] border-amber-600 pr-4">
                <img src={rev} alt="Bishop Peter Mungai" className="w-full grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="px-4 py-1 bg-red-600 text-white text-[10px] font-black tracking-widest uppercase">The Bishop</span>
            <h3 className="text-6xl font-black tracking-tighter uppercase leading-none">Bishop <br /> <span className="text-blue-600">Peter Mungai</span></h3>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              Dedicated to spiritual excellence and the transformation of lives through the Apostolic faith. He serves as our spiritual father and guide.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="space-y-6">
              <img src={leader.img} alt={leader.name} className="w-full h-80 object-cover filter contrast-125" />
              <div>
                <h4 className="text-xl font-black tracking-tight uppercase mb-1">{leader.name}</h4>
                <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">{leader.title}</p>
                <p className="text-sm text-zinc-500 italic">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;