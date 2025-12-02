import React from "react";
import { Link } from "react-router-dom";
import ctaBg from "../../assets/hero3.jpeg";

export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${ctaBg})`,
      }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Join Us and Be Part of a Growing Family
        </h2>

        {/* Paragraph */}
        <p
          className="md:text-lg text-xs text-white/90 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Experience powerful worship, inspiring messages, and a community that
          walks together in faith and purpose. Let’s grow and serve together.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Link
            to="/services"
            className="btn bg-secondary border-none text-xs text-primary-content hover:bg-secondary-focus w-full sm:w-auto"
          >
            Plan Your Visit
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline border-secondary text-xs text-secondary hover:bg-white hover:text-primary w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </div>

      </div>

      {/* 🔹 Decorative glows (stay static) */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}
