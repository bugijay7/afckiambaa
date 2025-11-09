import React from "react";
import story1 from "../../assets/hero3.jpeg";
import story2 from "../../assets/hero2.jpg";
import story3 from "../../assets/hero7.jpg";

function OurStory() {
  return (
    <section id="story" className="py-16 bg-base-100 md:pt-40">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-left pt-20 md:pt-5">
          <h1 className="md:text-7xl text-xl font-bold mb-4 text-primary">
           AFC Kiambaa
          </h1>
          <p className="text-xs md:text-sm leading-relaxed text-white---content max-w-[450px] mb-2 md:mb-6">
            The church was established according to the teachings of the Holy
            Scriptures. We believe it is God’s chosen instrument for spreading
            the truths of spiritual matters. Through the church, the Holy Spirit
            works to advance God’s kingdom and strengthen believers in His Word.
            It is within the church that the ministries, offices, and good works
            of the saints are organized and carried out.
          </p>
        </div>

        {/* Right Section - Carousel */}
        <div className="md:w-1/2">
          <div className="carousel w-full  shadow-lg overflow-hidden h-[300px] md:h-[400px] ">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={story1}
                className="w-full object-cover"
                alt="Church community worship"
              />
              <a
                href="#slide3"
                className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❯
              </a>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={story2}
                className="w-full object-cover"
                alt="AFC Kiambaa fellowship"
              />
              <a
                href="#slide1"
                className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❯
              </a>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={story3}
                className="w-full object-cover"
                alt="AFC Kiambaa service"
              />
              <a
                href="#slide2"
                className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
