import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaPrayingHands, FaCalendarAlt } from "react-icons/fa";

export default function ServiceInfo() {
  const services = [
    {
      icon: <FaPrayingHands className="text-3xl mb-3 text-primary" />,
      title: "Sunday Service",
      time: "Every Sunday • 10:00 AM – 12:30 PM",
      desc: "A powerful time of worship, teaching, and fellowship where lives are transformed by God’s Word.",
    },
    {
      icon: <FaClock className="text-3xl mb-3 text-primary" />,
      title: "Midweek Fellowship",
      time: "Every Wednesday • 6:00 PM – 8:00 PM",
      desc: "Recharge your spirit midweek with prayer, study of the Word, and testimonies of faith.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl mb-3 text-primary" />,
      title: "Monthly Services",
      time: "Last Friday of Each Month • 9:00 PM – 5:00 AM",
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
    <section className="bg-base-100 py-16 px-6 md:px-20 font-montserrat">
      <div className="text-left max-w-6xl mx-auto mb-12">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-primary">
          Service Information
        </h2>
        <p className="text-base-content/70 md:text-lg text-sm">
          Experience God’s presence with us every week through vibrant worship, powerful prayer, and sound teaching.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-accent-content p-5 text-left shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2 text-base-content">
              {service.title}
            </h3>
            <p className="text-primary text-xs md:text-xl mb-2">{service.time}</p>
            <p className="text-base-content/80 text-xs md:text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-12">
        <Link to="/services" className="btn btn-primary px-8 text-white">
          View Full Schedule
        </Link>
      </div>
    </section>
  );
}
