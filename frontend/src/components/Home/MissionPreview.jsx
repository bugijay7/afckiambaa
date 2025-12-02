import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaHandsHelping, FaHeart } from "react-icons/fa";

function MissionPreview() {

  const missionCards = [
    {
      icon: <FaUsers className="text-primary text-4xl mb-4" />,
      title: "Team Work",
      text: "Embrace fellowship of the Holy Spirit and the proper use of gifts and talents.",
    },

    {
      icon: <FaHandsHelping className="text-primary text-4xl mb-4" />,
      title: "Improve Lives",
      text: "To improve lives through training, equipping, and establishing members in their gifts and purpose.",
    },

    {
      icon: <FaHeart className="text-primary text-4xl mb-4" />,
      title: "Strong Fellowship",
      text: "To promote strong fellowship among members as one body in Christ, in accordance with Scripture.",
    },
  ];

  return (
    <div className="bg-white">

      <section 
        className="py-16 px-6 max-w-[1200px] mx-auto font-montserrat"
        data-aos="fade-up"
      >

        {/* Header */}
        <div className="text-left mb-10" data-aos="fade-right">
          <h2 className="text-xl md:text-5xl font-bold text-primary mb-3">
            Our Mission
          </h2>
          <p className="text-white---content/70 text-xs md:text-lg max-w-3xl">
            We are dedicated to building a strong, Spirit-led community where
            every believer thrives through teamwork, growth, and fellowship.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {missionCards.map((card, index) => (

            <div
              key={index}

              data-aos="fade-up"
              data-aos-delay={index * 150}   // ⭐ STAGGER MAGIC
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"

              className="bg-secondary-content rounded-sm shadow-md p-6 text-left hover:shadow-xl hover:scale-105 transition-all duration-300"
            >

              {card.icon}

              <h3 className="text-sm md:text-xl font-semibold mb-3 text-primary">
                {card.title}
              </h3>

              <p className="text-white---content/70 text-xs md:text-sm">
                {card.text}
              </p>

            </div>
          ))}

        </div>

        {/* Learn More Button */}
        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
          <Link
            to="/about"
            className="btn btn-primary d-full px-8 text-xs md:text-lg"
          >
            Learn More
          </Link>
        </div>

      </section>

    </div>
  );
}

export default MissionPreview;
