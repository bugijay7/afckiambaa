import React from "react";
import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="bg-base- text-white---content">
      <div className="max-w-[1200px] mx-auto py-12 md:py-20 text-left md:text-right px-6 md:px-10">
        <h2 className="text-xl md:text-5xl text-primary font-bold mb-6">
          Reaching Souls, Developing Winners
        </h2>

        <p className="text-white---content mb-6 md:max-w-[1000px] ml-auto leading-relaxed text-xs md:text-lg">
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
    </section>
  );
}

export default AboutPreview;
