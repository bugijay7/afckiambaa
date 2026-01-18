import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaEnvelope, FaRegCalendarAlt, FaSignOutAlt } from "react-icons/fa";

function AdminDashboard() {
  const adminActions = [
    {
      title: "Create New Event",
      desc: "Add a new church event, upload images, and share upcoming activities with your congregation.",
      link: "/admin/create-event",
      icon: <FaPlus />,
      label: "Announcements"
    },
    {
      title: "Read Messages",
      desc: "View messages sent by visitors through the contact form. See inquiries and manage communications.",
      link: "/admin/messages",
      icon: <FaEnvelope />,
      label: "Communication"
    },
    {
      title: "Manage Events",
      desc: "View, update, or delete existing events. Keep your calendar organized and up to date.",
      link: "/admin/manage",
      icon: <FaRegCalendarAlt />,
      label: "Archive"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-zinc-900 font-sans antialiased">
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="border-b border-zinc-400 px-6 py-4 flex justify-between items-center bg-gray-200 sticky top-0 z-50">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-700">
          AFC Kiambaa • Admin
        </span>
        <button 
          onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-red-700 transition-colors"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      <main className="container mx-auto px-6 py-20">
        {/* --- HEADER --- */}
        <header className="mb-20 border-l-8 border-red-700 pl-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            Management <br />
            <span className="italic font-serif text-red-800 normal-case tracking-normal">Dashboard</span>
          </motion.h1>
          <p className="mt-6 text-zinc-600 font-medium max-w-xl text-lg">
            Manage events and oversee your church activities efficiently through this central command center.
          </p>
        </header>

        {/* --- ACTION GRID --- */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-zinc-400">
          {adminActions.map((action, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 border-r border-b border-zinc-400 bg-gray-200 hover:bg-zinc-300 transition-all duration-500 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="text-red-700 text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {action.icon}
                </div>
                <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.3em] block mb-4">
                  {action.label}
                </span>
                <h2 className="text-2xl font-black tracking-tight text-zinc-900 mb-6 uppercase">
                  {action.title}
                </h2>
                <p className="text-zinc-700 leading-relaxed font-medium">
                  {action.desc}
                </p>
              </div>

              <div className="mt-12">
                <Link 
                  to={action.link} 
                  className="inline-block w-full text-center py-4 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg"
                >
                  Enter Section
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER STATS/NOTE --- */}
        <footer className="mt-20 pt-8 border-t border-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Logged in as Administrator • {new Date().toLocaleDateString()}
          </p>
          <div className="flex gap-8">
             <div className="text-center">
                <p className="text-xl font-black text-zinc-900">System</p>
                <p className="text-[9px] font-bold text-red-700 uppercase tracking-tighter">Active</p>
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default AdminDashboard;