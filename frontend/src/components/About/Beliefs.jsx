import React from "react";

function Beliefs() {
  const beliefs = [
    {
      title: "The Bible",
      text: "We believe the Holy Bible is the inspired Word of God, our infallible guide for faith and daily living.",
    },
    {
      title: "Salvation",
      text: "We believe salvation comes only through repentance from sin and faith in the atoning blood of Jesus Christ.",
    },
    {
      title: "Sanctification",
      text: "We believe in a second, definite work of grace known as sanctification — a pure heart made holy through the power of the Holy Spirit.",
    },
    {
      title: "Baptism of the Holy Spirit",
      text: "We believe the baptism of the Holy Spirit endues believers with power for service and is evidenced by speaking in tongues as the Spirit gives utterance.",
    },
    {
      title: "Divine Healing",
      text: "We believe in divine healing through faith in the name of Jesus Christ and through the power of prayer.",
    },
    {
      title: "The Second Coming of Christ",
      text: "We believe Jesus Christ will return soon — first to take away His church, and later to reign on earth for a thousand years.",
    },
  ];

  return (
    <section id="beliefs" className="bg-gradient-to-b from-primary to-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 underline underline-offset-8 decoration-yellow-400">
          Our Beliefs
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          The Apostolic Faith Church Kiambaa stands on the unchanging Word of God. These foundational truths guide our faith, worship, and service to Christ.
        </p>

        {/* Beliefs Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-left"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-3">
                {belief.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {belief.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beliefs;
