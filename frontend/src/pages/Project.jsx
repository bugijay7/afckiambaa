import React from "react";
import { FaUniversity, FaMobileAlt } from "react-icons/fa";
import prayerCenter1 from "../assets/hero7.jpg";
import prayerCenter2 from "../assets/hero6.jpg";
import prayerCenter3 from "../assets/hero5.jpg";

function Project() {
  return (
    <section id="project" className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 🕊️ Header Section */}
        <div className="text-center mb-12 md:pt-30">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            The Kiambaa Prayer & Retreat Center
          </h2>
          <p className="text-white-- md:text-lg text-white---content/70 max-w-2xl mx-auto">
            Building a lasting place of prayer, renewal, and spiritual growth for generations to come.
          </p>
        </div>

        {/* 🖼️ Carousel Section */}
        <div className="carousel w-full d-2xl shadow-lg mb-16">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={prayerCenter1} className="w-full object-cover h-[450px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-sm">❮</a>
              <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={prayerCenter2} className="w-full object-cover h-[450px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-sm">❮</a>
              <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={prayerCenter3} className="w-full object-cover h-[450px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-sm">❮</a>
              <a href="#slide1" className="btn btn-circle btn-sm">❯</a>
            </div>
          </div>
        </div>

        {/* 📖 About Project Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16">
          {/* Left - About Text (2/3) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white---content">
              About the Project
            </h3>

            <p className="text-white-- md:text-lg leading-relaxed text-white---content/80">
              The <span className="font-semibold">Kiambaa Prayer & Retreat Center</span> is a visionary project by
              Apostolic Faith Church Kiambaa, created to provide a peaceful and sacred
              space where believers can seek God through prayer, fasting, and reflection.
            </p>

            <p className="text-white-- md:text-lg leading-relaxed text-white---content/80">
              Once complete, this center will host{" "}
              <span className="font-semibold">spiritual retreats, leadership training, youth and women conferences,</span>{" "}
              and serve as a refuge for all seeking deeper fellowship with God.
            </p>

            <p className="text-white-- md:text-lg leading-relaxed text-white---content/80">
              We invite you to be part of this transformative journey through{" "}
              <span className="font-semibold">prayer, giving, or contributing building materials</span>.
              Together, we can raise a sanctuary for generations to meet with God.
            </p>

            <a href="/giving" className="btn btn-primary mt-4">
              Support the Project
            </a>
          </div>

          {/* Right - Supporting Image */}
          <div className="w-full">
            <img
              src={prayerCenter1}
              alt="Prayer Center Progress"
              className="d-2xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* 💰 Giving Options Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 🏦 Bank Transfer */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <FaUniversity className="text-3xl text-primary mb-3" />
              <h4 className="card-title text-lg font-semibold">Bank Transfer</h4>
              <p><span className="font-semibold">Bank:</span> Equity Bank</p>
              <p><span className="font-semibold">Account Number:</span> 1290 2609 40849</p>
              <p><span className="font-semibold">Branch:</span> Kenyatta Avenue</p>
            </div>
          </div>

          {/* 📱 M-Pesa Giving */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <FaMobileAlt className="text-3xl text-primary mb-3" />
              <h4 className="card-title text-lg font-semibold">M-Pesa Giving</h4>
              <p><span className="font-semibold">Paybill:</span> 247247</p>
              <p><span className="font-semibold">Account:</span> 733227</p>
              <p><span className="font-semibold">Account Name:</span> APOSTOLIC FAICH CHURCH - DVPT</p>
              <p className="mt-2 text-white---content/70">
                Every contribution brings us closer to completing the Prayer Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
