import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => setIsDropdownOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-base-200 text-white---content text-xs md:text-sm py-2 px-4 lg:px-8 flex justify-end items-center gap-4 md:gap-6">
        <div className="flex items-center gap-1">
          <MdEmail className="text-primary text-sm" />
          <a href="mailto:kiambaaafc@gmail.com" className="hover:text-primary">
            kiambaaafc@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <MdPhone className="text-primary text-sm" />
          <a href="tel:+254722850169" className="hover:text-primary">
            +254 722 850169
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
        <div className="navbar-start flex items-center">
       {/* Mobile Dropdown */}
<div className="md:hidden relative">
  <button
    type="button"
    className="btn btn-ghost"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    <HiOutlineMenu className="w-6 h-6" />
  </button>

  {isDropdownOpen && (
    <div className="absolute top-full left-0 w-screen bg-base-100 shadow-lg z-50">
      <ul className="menu p-4 w-full">
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/events" onClick={handleLinkClick}>Events</Link></li>
        
        {/* About Nested Menu */}
        <li tabIndex={0}>
          <details className="collapse collapse-arrow border-none bg-base-100">
            <summary className="collapse-title">About</summary>
            <ul className="collapse-content menu p-2">
              <li><a href="/about#mission" onClick={handleLinkClick}>Our Mission</a></li>
              <li><a href="/about#vision" onClick={handleLinkClick}>Our Vision</a></li>
              <li><a href="/about#faith" onClick={handleLinkClick}>Statement of Faith</a></li>
              <li><a href="/about#story" onClick={handleLinkClick}>Our Story</a></li>
              <li><a href="/about#beliefs" onClick={handleLinkClick}>Core Beliefs</a></li>
              <li><a href="/about#leadership" onClick={handleLinkClick}>Our Leadership</a></li>
            </ul>
          </details>
        </li>

        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/project" onClick={handleLinkClick}>Project</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        <li><Link to="/giving" onClick={handleLinkClick}>Give</Link></li>
        <li><Link to="/campuses" onClick={handleLinkClick}>AFC Near You</Link></li>
      </ul>
    </div>
  )}
</div>

          {/* Logo */}
         <Link
  to="/"
  className="flex items-center gap-2 md:gap-3 whitespace-nowrap"
>
  <img
    src={Logo}
    alt="AFC Kiambaa Logo"
    className="w-10 h-10 md:w-12 md:h-12 object-contain"
  />
  <span className="text-xs md:text-sm font-bold text-primary">
    Apostolic Faith Church - Kiambaa
  </span>
</Link>

        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary className="cursor-pointer">About</summary>
                <ul className="p-2 bg-base-200 text-white---content w-64 shadow-lg">
                  <li><a href="/about#mission">Our Mission</a></li>
                  <li><a href="/about#vision">Our Vision</a></li>
                  <li><a href="/about#faith">Statement of Faith</a></li>
                  <li><a href="/about#story">Our Story</a></li>
                  <li><a href="/about#beliefs">Core Beliefs</a></li>
                  <li><a href="/about#leadership">Our Leadership</a></li>
                </ul>
              </details>
            </li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/campuses">AFC near you</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Navbar End - Giving Button */}
        <div className="navbar-end hidden lg:flex gap-4">
          <Link to="/giving" className="btn btn-primary btn-sm">Giving</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
