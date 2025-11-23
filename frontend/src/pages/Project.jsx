import React from "react";
import { FaUniversity, FaMobileAlt } from "react-icons/fa";
import prayerCenter1 from "../assets/pic20.jpeg";
import prayerCenter2 from "../assets/pic19.jpeg";
import prayerCenter3 from "../assets/pic18.jpeg";
import prayerCenter4 from "../assets/pic10.jpeg";


export default function Project() {
  const images = [
    prayerCenter1,
    prayerCenter2,
    prayerCenter3,
    prayerCenter4,

  ];

  return (
    <section id="project" className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-left md:text-center mb-12 pt-10 md:pt-30">
          <h2 className="text-xl md:text-5xl font-bold text-primary mb-4">
            The Kiambaa Apostolic Faith Church Prayer Center
          </h2>
          <p className="text-xs md:text-lg text-white---content/70 max-w-2xl mx-auto">
            Building a lasting place of prayer, renewal, and spiritual growth
            for generations to come.
          </p>
        </div>

        {/* Bokeh Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-1 mb-20">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Prayer Center ${idx + 1}`}
                className="w-full h-90 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
              {/* soft overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-10 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl text-primary font-bold">
              About the Project
            </h3>

            <p className="text-xs md:text-lg leading-relaxed text-white---content/80">
              The <span className="font-semibold">Kiambaa Prayer & Retreat Center</span>
              is a visionary project by Apostolic Faith Church Kiambaa, created
              to provide a peaceful and sacred space where believers can seek
              God through prayer, fasting, and reflection.
            </p>

            <p className="text-xs md:text-lg leading-relaxed text-white---content/80">
              Once complete, this center will host
              <span className="font-semibold">
                {" "}
                spiritual retreats, leadership training, youth and women
                conferences,
              </span>{" "}
              and serve as a refuge for all seeking deeper fellowship with God.
            </p>

            <p className="text-xs md:text-lg leading-relaxed text-white---content/80">
              We invite you to be part of this transformative journey through
              <span className="font-semibold">
                {" "}
                prayer, giving, or contributing building materials
              </span>
              . Together, we can raise a sanctuary for generations to meet with
              God.
            </p>
          </div>

          <div className="w-full">
            <img
              src={prayerCenter1}
              alt="Prayer Center Progress"
              className="shadow-lg w-[450px] h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Giving Options */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-primary/20 shadow-md">
            <div className="card-body">
              <FaUniversity className="text-3xl text-primary mb-3" />
              <h4 className="card-title text-sm md:text-lg font-semibold">
                Bank Transfer
              </h4>
              <p className="text-black">
                <span className="font-semibold text-primary">Bank:</span> Equity
                Bank
              </p>
              <p className="text-black">
                <span className="font-semibold text-primary">
                  Account Number:
                </span>{" "}
                1234 5678 91011
              </p>
              <p className="text-black">
                <span className="font-semibold text-primary">Branch:</span>
                Kikuyu Town
              </p>
            </div>
          </div>

          <div className="card bg-primary/20 shadow-md">
            <div className="card-body">
              <FaMobileAlt className="text-3xl text-primary mb-3" />
              <h4 className="card-title text-sm md:text-lg font-semibold">
                M-Pesa Giving
              </h4>
              <p className="text-black">
                <span className="font-semibold text-primary">Paybill:</span>
                247247
              </p>
              <p className="text-black">
                <span className="font-semibold text-primary">Account:</span>
                733227
              </p>
              <p className="text-black">
                <span className="font-semibold text-primary">
                  Account Name:
                </span>{" "}
                APOSTOLIC FAITH CHURCH - DVPT
              </p>
              <p className="mt-2 text-black">
                Every contribution brings us closer to completing the Prayer
                Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
