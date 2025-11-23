import React, { useState } from "react";
import story1 from "../../assets/hero3.jpeg";
import story2 from "../../assets/hero02.jpg";
import story3 from "../../assets/hero7.jpg";

function OurStory() {
  const slides = [story1, story2, story3];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

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

        {/* Right Section - New Non-Scrolling Carousel */}
        <div className="md:w-1/2">
          <div className="carousel w-full shadow-lg overflow-hidden h-[300px] md:h-[400px]">
            <div className="carousel-item relative w-full">
              <img
                src={slides[index]}
                className="w-full object-cover"
                alt="AFC Kiambaa slide"
              />

              <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❮
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OurStory;
