import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-zinc-100 pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* LOGO & BRANDING */}
          <div className="space-y-8">
            <img
              src={logo}
              alt="AFC Kiambaa Logo"
              className="h-16 w-auto" 
            />
            <div>
              <h4 className="text-xs font-bold text-red-600 tracking-[0.3em] uppercase mb-4">
                Apostolic Faith Church Kiambaa
              </h4>
              <p className="text-sm font-light text-amber-600 leading-relaxed italic font-serif">
                "Reaching Souls, Developing Winners."
              </p>
            </div>
            {/* SOCIALS */}
            <div className="flex gap-6 text-zinc-100">
               <a href="#" className="hover:text-red-600 transition-colors"><FaFacebookF size={20}/></a>
               <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube size={20}/></a>
               <a href="#" className="hover:text-red-600 transition-colors"><FaInstagram size={20}/></a>
               <a href="#" className="hover:text-red-600 transition-colors"><FaWhatsapp size={20}/></a>
            </div>
          </div>

          {/* SUNDAY SERVICES */}
          <div>
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mb-8">
              Sunday Services
            </h4>
            <ul className="space-y-4 text-xs tracking-widest font-light text-zinc-300">
              <li className="flex flex-col border-b border-zinc-900 pb-2">
                <span className="text-[10px] text-red-300 font-bold mb-1">YOUTH SERVICE</span>
                8:00 AM – 9:30 AM
              </li>
              <li className="flex flex-col border-b border-zinc-900 pb-2">
                <span className="text-[10px] text-red-300 font-bold mb-1">MORNING DEVOTION</span>
                9:30 AM – 10:00 AM
              </li>
              <li className="flex flex-col border-b border-zinc-900 pb-2">
                <span className="text-[10px] text-red-300 font-bold mb-1">MAIN SERVICE</span>
                10:30 AM – 1:00 PM
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mb-8">
              Connect
            </h4>
            <nav className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-tighter">
              <Link to="/about" className="hover:text-red-600 transition-all duration-300">About Us</Link>
              <Link to="/about#leadership" className="hover:text-red-600 transition-all duration-300">Leadership</Link>
              <Link to="/contact" className="hover:text-red-600 transition-all duration-300">Contact</Link>
              <Link to="/events" className="hover:text-red-600 transition-all duration-300">Events</Link>
            </nav>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mb-8">
              Resources
            </h4>
            <nav className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-tighter">
              <Link to="/services" className="hover:text-red-600 transition-all duration-300">Sundays</Link>
              <Link to="/giving" className="hover:text-red-600 transition-all duration-300">Give</Link>
              <Link to="/project" className="hover:text-red-600 transition-all duration-300">Projects</Link>
              <Link to="/contact" className="hover:text-red-600 transition-all duration-300">Location</Link>
            </nav>
          </div>
        </div>

       {/* BOTTOM BAR */}
<div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
  {/* Copyright */}
  <p className="text-[10px] tracking-[0.4em] font-bold text-zinc-100 uppercase order-2 md:order-1">
    © {new Date().getFullYear()} Apostolic Faith Church
  </p>

  {/* Decorative Line (Hidden on mobile for better spacing) */}
  <div className="h-[1px] flex-grow bg-zinc-900 mx-8 hidden lg:block order-2"></div>

  {/* Credits */}
  <div className="order-1 md:order-2">
    <a 
      href="https://yohanlabs.online" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[10px] tracking-[0.5em] font-black text-teal-600 uppercase hover:text-white transition-colors duration-500"
    >
      Architecture by <span className="italic">Yohan Labs</span>
    </a>
  </div>

  {/* Decorative Line (Hidden on mobile) */}
  <div className="h-[1px] flex-grow bg-zinc-900 mx-8 hidden lg:block order-2"></div>

  {/* Location */}
  <p className="text-[10px] tracking-[0.4em] font-bold text-zinc-100 uppercase order-3">
    Kiambaa, Kenya
  </p>
</div>
      </div>
    </footer>
  );
}

export default Footer;