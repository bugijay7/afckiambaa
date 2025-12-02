import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/pic2.jpeg"; // top image
import img2 from "../../assets/hero3.jpeg"; // bottom image

function AboutPreview() {
  return (
    <section className="bg-white text-white---content">
      <div className="max-w-[1200px] mx-auto py-12 md:py-20 px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-left md:text-left">
          <h2 className="text-xl md:text-5xl text-primary font-bold mb-6">
            Reaching Souls, Developing Winners
          </h2>

          <p className="text-black mb-6 md:max-w-[1000px] ml-auto leading-relaxed text-xs md:text-lg">
            The purpose of our church is rooted in the Holy Scriptures. <br />
            We believe the church is God’s chosen vessel for sharing the truth
            about spiritual matters and advancing His kingdom. <br />
            It serves as the channel through which the Holy Spirit works to build
            up believers in the Word of God. <br />
            Within the church, the ministries and gifts of the saints are
            established and nurtured for God’s glory.
          </p>

          <Link
            to="/about"
            className="font-semibold text-primary hover:underline hover:text-primary/80 transition-colors duration-200"
          >
            About Us →
          </Link>
        </div>

        {/* IMAGES STACKED WITH OVERLAY PLACEMENT */}
        <div className="relative w-full h-[350px] md:h-[420px]">
          {/* Bottom Image */}
          <img
            src={img2}
            alt="Ministry"
            className="absolute top-0 right-0 w-[80%] h-[80%] object-cover  shadow-lg"
          />

          {/* Top Image (covering top-left corner of bottom) */}
          <img
            src={img1}
            alt="Church members"
            className="absolute bottom-0 left-0 w-[65%] h-[65%] object-cover  shadow-xl border-4 border-secondary-content"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;