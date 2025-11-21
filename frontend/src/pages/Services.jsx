import React from "react";
import { Book, Users, Church } from "lucide-react";
import worshipImg from "../assets/pic5.jpeg";

export default function Services() {
  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      style={{
        backgroundImage: `url(${worshipImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/50 min-h-screen w-full flex flex-col items-center py-16">
        {/* ✝️ INTRO SECTION */}
        <section className="max-w-2xl mx-auto py-16 text-left text-base-100">
          <p className="text-sm md:text-xl italic leading-relaxed mb-6 px-6">
            At <strong className="underline underline-offset-4 text-amber-800">Apostolic Faith Church Kiambaa</strong>, our services are designed to
            bring believers together for worship, fellowship, spiritual growth, and
            transformation through the power of God’s Word.
          </p>
        </section>

        {/* SERVICES LIST */}
        <section className="max-w-2xl w-full px-4 md:px-0 ">
          <ul className="list  rounded-box shadow-md text-white bg-amber-500/80">
            <li className="p-4 pb-2 text-xs md:text-lg tracking-wide  text-white font-bold">
              Sunday Services
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">01</div>
              <div><Church className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Youth Service</div>
                <div className="text-xs uppercase font-semibold">
                  8:00 AM – 9:00 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">02</div>
              <div><Church className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Morning Devotion</div>
                <div className="text-xs uppercase font-semibold ">
                  9:30 AM – 10:30 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">03</div>
              <div><Book className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Bible Study</div>
                <div className="text-xs uppercase font-semibold ">
                  10:00 AM – 10:30 PM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">04</div>
              <div><Users className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Main Service</div>
                <div className="text-xs uppercase font-semibold ">
                  10:30 AM – 100 PM
                </div>
              </div>
            </li>
          </ul>

          {/* Weekday Services */}
          <ul className="list  rounded-box shadow-md mt-8 text-white  bg-amber-500/80">
            <li className="p-4 pb-2 text-xs md:text-lg  tracking-wide text-white font-bold">
              Weekday Services
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">01</div>
              <div><Book className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Morning Devotion</div>
                <div className="text-xs uppercase font-semibold ">
                  Monday–Friday 5:00 AM – 7:00 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">02</div>
              <div><Users className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Evening Fellowship</div>
                <div className="text-xs uppercase font-semibold ">
                  Wednesday 5:00 PM – 6:00 PM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-primary/10 transition-colors rounded-md">
              <div className="text-4xl font-thin  tabular-nums">03</div>
              <div><Church className="w-10 h-10 text-primary" /></div>
              <div className="list-col-grow">
                <div>Kesha (Night Vigil)</div>
                <div className="text-xs uppercase font-semibold ">
                  Last Friday Overnight
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/* 🔹 Bottom CTA Section */}
<section className="max-w-2xl w-full px-4 md:px-0 mt-12 text-center text-base-100">
  <div className="bg-amber-500/80 p-8 rounded-xl backdrop-blur-md shadow-lg">
    <h3 className="text-xl md:text-2xl font-bold mb-4">
      Stay Connected With Us
    </h3>

    <p className="text-sm md:text-base leading-relaxed opacity-90 mb-6">
      Join our online fellowship, follow our livestreams, or reach out for
      prayers, inquiries, or spiritual support. We’re here to walk with you
      in your spiritual journey.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <a
        href="/live"
        className="btn btn-primary px-8 w-full md:w-auto"
      >
        Watch Livestream
      </a>

      <a
        href="/contact"
        className="btn btn-outline btn-primary px-8 w-full md:w-auto"
      >
      Plan Your Visit
      </a>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
