import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero02.jpg";
import hero3 from "../../assets/pic6.jpeg";

function Hero() {
  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Apostolic Faith Church Kiambaa",
      text: "A place where everybody is somebody in the eyes of God",
      button: "About Us",
      link: "/about",
    },
    {
      id: 2,
      image: hero2,
      title: "Worship With Us",
      text: "Experience uplifting music, heartfelt prayer, and inspiring messages every week.",
      button: "Plan Your Visit",
      link: "/services",
    },
    {
      id: 3,
      image: hero3,
      title: "Growing Together in Christ",
      text: "Discover how we build strong families and communities rooted in love and faith.",
      button: "Join Us",
      link: "/contact",
    },
  ];

  return (
    <div className="carousel w-full min-h-[80vh] relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image}) center/cover no-repeat`,
          }}
        >
          <div className="hero-content text-center text-neutral-content px-6 py-16 mx-auto">
            <div className="max-w-xl">
              <h1 className="mb-5 text-4xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mb-5 text-sm md:text-base leading-relaxed">{slide.text}</p>
              <Link to={slide.link} className="btn btn-primary">
                {slide.button}
              </Link>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slides.length ? 1 : index + 2}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❯
            </a>
          </div>
        </div>
      ))}

      {/* Bottom-left Events button */}
      <div className="absolute bottom-6 left-6 z-20">
        <Link
          to="/events"
          className="btn btn-outline btn-secondary text-white border-white hover:bg-white hover:text-black transition-all"
        >
          View Events
        </Link>
      </div>
    </div>
  );
}

export default Hero;
