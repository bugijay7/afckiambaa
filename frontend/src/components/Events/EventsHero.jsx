import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import HeroImg from "../../assets/hero3.jpeg"; // ✅ Import your local image

function EventsHero() {
  return (
    <div
      className="hero min-h-[70vh] relative"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue tint overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity/10"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center px-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCalendarAlt className="text-primary text-4xl" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-7xl font-bold mb-4 text-white">
          Gather • Grow • Serve
        </h2>

        {/* Intro paragraph */}
        <p className="text-white-- md:text-lg text-primary leading-relaxed mb-6 font-bold max-w-3xl mx-auto">
          At <span className="font-extrabold">Apostolic Faith Church Kiambaa</span>, our events are more than just gatherings—they are moments where hearts are renewed, faith is strengthened, and communities are built. Whether it’s worship, teaching, or fellowship, every event is designed to help you draw closer to Christ and connect with others in His love.
        </p>

        {/* Bible Verse */}
        <blockquote className="italic text-white-- md:text-lg text-primary font-medium">
          “And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together…” — <span className="font-semibold">Hebrews 10:24–25</span>
        </blockquote>
      </div>
    </div>
  );
}

export default EventsHero;
