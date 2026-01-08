import React from "react";
import { motion } from "framer-motion";
import { Book, Users, Church, Clock, Calendar, PlayCircle, MapPin } from "lucide-react";
import worshipImg from "../assets/hero3.jpeg";

export default function Services() {
  const sundayServices = [
    { id: "01", title: "Youth Service", time: "8:30 AM – 9:30 AM", icon: <Church className="w-6 h-6" />, type: "Gathering" },
    { id: "02", title: "Morning Devotion", time: "9:30 AM – 10:00 AM", icon: <Church className="w-6 h-6" />, type: "Prayer" },
    { id: "03", title: "Discipleship Classes", time: "10:00 AM – 10:30 AM", icon: <Book className="w-6 h-6" />, type: "Teaching" },
    { id: "04", title: "Main Service", time: "10:30 AM – 1:00 PM", icon: <Users className="w-6 h-6" />, type: "Worship" },
  ];

  const weekdayServices = [
    { id: "01", title: "Morning Devotion", day: "Mon – Fri", time: "5:00 AM – 7:00 AM", icon: <Book /> },
    { id: "02", title: "Evening Fellowship", day: "Wednesday", time: "5:00 PM – 6:00 PM", icon: <Users /> },
    { id: "03", title: "Kesha (Night Vigil)", day: "Last Friday", time: "9:30 PM – 5:00 AM", icon: <Church /> },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-44 pb-24 px-6 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={worshipImg} alt="Worship" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950/80 to-blue-950" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Sacred Gatherings</span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8">Service Times</h1>
          <p className="text-blue-100/70 text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            At <span className="text-white font-medium">Apostolic Faith Church Kiambaa</span>, our services are 
            designed to bring believers together for worship, fellowship, and 
            transformation through the power of God’s Word.
          </p>
        </motion.div>
      </section>

      {/* --- SUNDAY SERVICES (Timeline Layout) --- */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-4">The Lord's Day</h2>
              <h3 className="text-4xl font-serif text-blue-950 font-bold mb-6">Sunday Worship Experience</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                Join us every Sunday for a sequential journey of faith, starting from youth empowerment to our powerful main congregational worship.
              </p>
              <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-4">
                <MapPin className="text-blue-900" />
                <span className="text-blue-900 font-bold text-sm uppercase tracking-wide">Main Sanctuary, Kiambaa</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {sundayServices.map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center gap-6 p-6 lg:p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-900/5 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl lg:text-5xl font-serif font-bold text-blue-900/10 group-hover:text-red-600/20 transition-colors">
                  {service.id}
                </div>
                <div className="w-14 h-14 shrink-0 bg-blue-50 text-blue-950 rounded-2xl flex items-center justify-center group-hover:bg-blue-950 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 mb-1 block">{service.type}</span>
                  <h4 className="text-xl lg:text-2xl font-bold text-blue-950">{service.title}</h4>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-2 text-blue-950 font-bold">
                    <Clock size={16} className="text-red-600" />
                    <span className="text-sm lg:text-base">{service.time.split(' – ')[0]}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-light italic">Starts Promptly</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WEEKDAY SERVICES (Grid Layout) --- */}
      <section className="py-24 bg-gray-50 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-blue-950 mb-4">Mid-Week & Special Services</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {weekdayServices.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                  {service.icon}
                </div>
                <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2">{service.day}</p>
                <h4 className="text-2xl font-bold text-blue-950 mb-4">{service.title}</h4>
                <div className="flex items-center gap-2 text-gray-500 font-medium">
                  <Clock size={16} />
                  <span>{service.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-blue-950 p-12 lg:p-20 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-serif font-bold mb-6">Stay Connected With Us</h3>
            <p className="text-blue-100/70 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join our online fellowship, follow our livestreams, or reach out for 
              prayers, inquiries, or spiritual support.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/live" 
                className="btn btn-lg bg-red-600 hover:bg-red-700 border-none text-white px-10 rounded-full shadow-xl flex items-center gap-2"
              >
                <PlayCircle size={20} /> Watch Livestream
              </a>
              <a 
                href="/contact" 
                className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-blue-950 px-10 rounded-full"
              >
                Plan Your Visit
              </a>
            </div>

            <div className="mt-12 flex justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2 text-sm"><Calendar size={16} /> Google Calendar</div>
                <div className="flex items-center gap-2 text-sm"><MapPin size={16} /> Get Directions</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}