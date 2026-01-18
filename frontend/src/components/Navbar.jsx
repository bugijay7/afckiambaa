import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../assets/logo1.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsDropdownOpen(false);

  const navLinks = [
    { name: "Projects", path: "/project" },
    { name: "Services", path: "/services" },
    { name: "Ministries", path: "/ministries" },
    { name: "Campuses", path: "/campuses" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutLinks = [
    { name: "Our Story", hash: "#story" },
    { name: "Mission & Vision", hash: "#mission" },
    { name: "Statement of Faith", hash: "#faith" },
    { name: "Our Leadership", hash: "#leadership" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      {/* --- TOP CONTACT BAR --- */}
      <div className={`bg-blue-900 border-b border-white/10 transition-all duration-500 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-6 h-full flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-white">
          <div className="flex gap-6">
            <a href="mailto:kiambaaafc@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <MdEmail className="text-amber-400 text-sm" /> KIAMBAAAFC@GMAIL.COM
            </a>
            <a href="tel:+254722850169" className="hidden md:flex items-center gap-2 hover:text-amber-400 transition-colors">
              <MdPhone className="text-amber-400 text-sm" /> +254 722 850 169
            </a>
          </div>
          <div className="hidden md:block text-blue-200">APOSTOLIC FAITH CHURCH</div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className={`transition-all duration-500 ${scrolled ? 'bg-blue-950 py-3 shadow-xl' : 'bg-blue-950/20 py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-bold tracking-tighter text-white uppercase leading-none">Apostolic Faith</span>
              <span className="text-[10px] font-black tracking-[0.3em] text-red-500 uppercase leading-none mt-1">Kiambaa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {/* About Dropdown (No Italics) */}
            <li className="relative group">
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-100 group-hover:text-red-500 transition-colors py-2">
                About <FaChevronDown className="text-[8px] group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-52 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="bg-white border-t-4 border-red-600 shadow-2xl py-2">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={`/about${link.hash}`} 
                        className="block px-6 py-3 text-[10px] font-black uppercase tracking-widest text-blue-950 hover:bg-zinc-50 hover:text-red-600 transition-all border-b border-zinc-100 last:border-0"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${location.pathname === link.path ? 'text-red-500' : 'text-zinc-100 hover:text-red-500'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Giving Button & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link to="/giving" className="hidden md:block px-8 py-3 bg-red-600 hover:bg-white hover:text-blue-950 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-lg shadow-red-600/20">
              Giving
            </Link>
            <button 
              className="lg:hidden text-white text-3xl p-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <HiOutlineMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-blue-950 z-[110] lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-white/5">
              <img src={Logo} alt="Logo" className="h-10" />
              <button onClick={() => setIsDropdownOpen(false)} className="text-white text-4xl"><HiOutlineX /></button>
            </div>

            <ul className="flex-1 flex flex-col justify-center items-center gap-8">
              {["Home", ...navLinks.map(l => l.name), "About", "Giving"].map((item) => (
                <li key={item}>
                  <Link 
                   to={
  item === "Home"
    ? "/"
    : item === "Projects"
    ? "/project"
    : `/${item.toLowerCase()}`
}
                    onClick={handleLinkClick} 
                    className="text-3xl font-black uppercase tracking-tighter text-white hover:text-red-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;