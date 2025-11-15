import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ make sure logo.png exists in /src/assets/

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-white---content p-10">
      {/* 🕊️ Left Section - Logo + Info */}
      <aside className="flex flex-col items-start gap-3">
        <img
          src={logo}
          alt="Apostolic Faith Church Kiambaa Logo"
          className="w-16 h-16 object-contain"
        />
        <p>
          <span className="font-semibold text-lg">
            Apostolic Faith Church Kiambaa
          </span>
          <br />
          Reaching Souls Developing Winners.
          <br />
          © {new Date().getFullYear()} All rights reserved
        </p>
      </aside>

      {/* 🕊️ Worship Services */}
      <nav>
        <h6 className="footer-title">Sunday Services</h6>
        <a className="link link-hover">Youth Service - 8:30 AM - 9:30 AM</a>
        <a className="link link-hover">Morning Devotion - 9:30 AM - 10:00 AM</a>
        <a className="link link-hover">Discipleship Classes - 10:00 AM - 10:30 AM</a>
        <a className="link link-hover">Main Service - 10:30 AM - 1:00 PM</a>
      </nav>

      {/* 🕊️ Connect */}
      <nav>
        <h6 className="footer-title">Connect</h6>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/about#leadership" className="link link-hover">
          Leadership
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/events" className="link link-hover">
          Events
        </Link>
      </nav>

      {/* 🕊️ Resources */}
      <nav>
        <h6 className="footer-title">Resources</h6>
        <Link to="/services" className="link link-hover">
          Sundays
        </Link>
        <Link to="/giving" className="link link-hover">
          Give Online
        </Link>
        <Link to="/project" className="link link-hover">
         Projects
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
