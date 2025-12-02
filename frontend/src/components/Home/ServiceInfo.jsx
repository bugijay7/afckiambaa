import React from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPrayingHands,
  FaCalendarAlt
} from "react-icons/fa";

import serviceImg from "../../assets/pic6.jpeg"; // <-- your image here

export default function ServiceInfo() {

  const services = [
    {
      icon: <FaPrayingHands className="text-3xl mb-3 text-primary" />,
      title: "Sunday Service",
      time: "Every Sunday • 10:30 AM – 1:30 PM",
      desc: "A powerful time of worship, teaching, and fellowship where lives are transformed by God’s Word.",
    },
    {
      icon: <FaClock className="text-3xl mb-3 text-primary" />,
      title: "Midweek Fellowship",
      time: "Every Wednesday • 5:00 PM – 6:30 PM",
      desc: "Recharge your spirit midweek with prayer, study of the Word, and testimonies of faith.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl mb-3 text-primary" />,
      title: "Monthly Services",
      time: "Last Friday of Each Month • 9:00 PM – 4:00 AM",
      desc: "Join us for our all-night prayer and revival meetings as we seek a deeper encounter with God.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl mb-3 text-primary" />,
      title: "Location",
      time: "Apostolic Faith Church, Kiambaa",
      desc: "We’re located in Kiambaa — a welcoming home for all who seek to know Christ and grow in faith.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 font-montserrat">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img 
            src={serviceImg} 
            alt="Service Illustration" 
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div>

        {/* Right Cards */}
        <div className="md:w-1/2 flex flex-col gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 150}
              data-aos-duration="700"
              className="border border-accent-content p-5 text-left shadow-sm hover:shadow-lg transition-all duration-300 rounded-md bg-white"
            >
              {service.icon}

              <h3 className="text-sm font-semibold mb-2 text-base-content">
                {service.title}
              </h3>

              <p className="text-primary text-xs  mb-2">
                {service.time}
              </p>

              <p className="text-base-content/80 text-xs">
                {service.desc}
              </p>
            </div>
          ))}

         

        </div>

      </div>
       {/* CTA button */}
<div className="mt-16 text-center" data-aos="zoom-in" data-aos-delay="700">
  <Link
    to="/services"
    className="btn btn-primary px-8 text-white w-full md:w-auto mx-auto"
  >
    View Full Schedule
  </Link>
</div>

    </section>
  );
}
