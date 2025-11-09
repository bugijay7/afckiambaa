import React from "react";
import { Link } from "react-router-dom";
import worshipImg from "../assets/hero1.jpg";

function Services() {
  return (
    <div className="bg-base-200 text-base-content">
      {/* 🌅 Hero Section */}
      <div
        className="hero md:min-h-[80vh] min-h-[60vh] flex items-center justify-center text-center px-6 md:px-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${worshipImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-base-100">
          <h1 className="text-xl md:text-6xl uppercase mb-4 font-bold">
            Our Services
          </h1>
          <p className="text-xs md:text-xl italic mb-8 max-w-2xl mx-auto leading-relaxed">
            “Let all things be done decently and in order.” — 1 Corinthians 14:40
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link to="/live" className="btn btn-primary">
              Watch Livestream
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Visit Us
            </Link>
          </div>
        </div>
      </div>

      {/* ✝️ Intro Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-left md:text-center">
        <p className="text-sm md:text-xl leading-relaxed">
          Our services at <strong>Apostolic Faith Church</strong> are
          conducted to inspire, empower, and transform lives through the
          Word of God. Each gathering is Christ-centered, purposeful, and
          designed to nurture spiritual growth and fellowship.
        </p>
      </section>

      {/* 🗓️ Weekly and Departmental Services */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 md:py-12 flex flex-col gap-12">
        {/* 🕊️ Weekly Services */}
        <div className="text-left md:text-left">
          <h2 className="text-xl md:text-3xl font-medium uppercase md:mb-6">
            Weekly Services
          </h2>
          <ul className="space-y-4 text-sm md:text-lg list-none">
            <li>
              <strong>Sunday Service:</strong> 
              <ul className="mt-1 text-xl">
                <li>Early Service — 8:00 AM – 9:00 AM</li>
                <li>Main Service — 9:30 AM – 11:00 AM</li>
                <li>Late Service — 11:30 AM – 1:00 PM</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 🌸 Departmental Fellowships */}
        <div className="text-left md:text-left">
          <h2 className="text-xl md:text-3xl font-medium uppercase mb-6">
            Weekly & Departmental Fellowships
          </h2>

          <ul className="space-y-4 text-sm md:text-lg leading-relaxed">
            <li>
              <strong>Morning Devotions:</strong> Every morning from 5:30 AM to 7:00 AM
            </li>
            <li>
              <strong>Tuesday Prayer Meeting:</strong> 6:30 PM to 7:30 PM
            </li>
            <li>
              <strong>Thursday Outreach:</strong> 3:00 PM to 4:00 PM
            </li>
            <li>
              <strong>Friday Vigil:</strong> 9:00 PM to midnight
            </li>
            <li>
              <strong>Departmental Fellowships:</strong> Timings vary according to each ministry.
            </li>
          </ul>
        </div>
      </section>

      {/* 🌅 Footer Accent */}
      <section className="bg-base-200 py-10 text-center">
        <h3 className="text-xl md:text-3xl font-medium mb-3">
          “The God kind of Life.”
        </h3>
        <p className="italic pb-20 text-xs md:text-lg">
          Join us this week and experience the life-transforming power of God.
        </p>
      </section>
    </div>
  );
}

export default Services;
