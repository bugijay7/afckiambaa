import React from "react";

// ✅ Import local images (make sure these exist in /src/assets/)
import youthImg from "../assets/ministries/youth.webp";
import childrenImg from "../assets/ministries/children.webp";
import womenImg from "../assets/ministries/women.webp";
import menImg from "../assets/ministries/men.webp";
import worshipImg from "../assets/ministries/worship.webp";

function Ministries() {
  const ministries = [
    {
      title: "Youth Ministry",
      desc: "Empowering the next generation to live boldly for Christ through discipleship, mentorship, and vibrant fellowship activities that nurture spiritual growth and leadership.",
      img: youthImg,
    },
    {
      title: "Children’s Ministry",
      desc: "A safe and joyful environment where children learn about God’s love through Bible stories, songs, and interactive lessons designed to strengthen their faith foundation.",
      img: childrenImg,
    },
    {
      title: "Women’s Ministry",
      desc: "Bringing together women for prayer, fellowship, and service — encouraging each other to grow in faith and purpose while impacting families and communities.",
      img: womenImg,
    },
    {
      title: "Men’s Fellowship",
      desc: "Equipping men to lead in faith, family, and integrity through Bible study, mentorship, and practical outreach that strengthens their role as godly leaders.",
      img: menImg,
    },
    {
      title: "Praise & Worship Ministry",
      desc: "Leading the congregation into God’s presence through heartfelt praise and worship, nurturing musical gifts, and inspiring excellence in service to God.",
      img: worshipImg,
    },
  ];

  return (
    <div className="bg-base-100 font-montserrat">
      {/* 🔹 Hero Section */}
      <section className="text-left md:text-center px-6 md:px-20  pt-30 md:pt-40 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-5xl font-bold text-primary mb-2">
          Our Ministries
        </h1>
        <p className="text-base-content/70 max-w-2xl mx-auto text-sm md:text-sm ">
          At Apostolic Faith Church Kiambaa, we believe in serving God and His
          people through diverse ministries that nurture growth, unity, and
          purpose. Discover how each ministry plays a vital role in the body of
          Christ.
        </p>
      </section>

      {/* 🔹 Ministries List */}
      <div className=" bg-base-100 space-y-20 py-16 px-6 md:px-20 max-w-6xl mx-auto">
        {ministries.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-5 md:gap-10`}
          >
            {/* 🖼 Image */}
            <div className="md:w-1/2">
              <img
                src={m.img}
                alt={m.title}
                className="w-full h-80 object-cover  shadow-xl"
              />
            </div>

            {/* ✝️ Text */}
            <div className="md:w-1/2 text-left md:text-left">
              <h2 className="text-sm md:text-3xl font-bold text-primary md-1 md:mb-4">
                {m.title}
              </h2>
              <p className="text-base-content/80 leading-relaxed text-xs md:text-sm">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ministries;
