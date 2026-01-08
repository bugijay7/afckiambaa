import React from "react";
import faithImg1 from "../../assets/pic2.jpeg";
import faithImg2 from "../../assets/hero3.jpeg";

function StatementOfFaith() {
  return (
    <section id="faith" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Top Left - Image */}
        <div className="order-1 md:order-1">
          <img
            src={faithImg1}
            alt="Faith Illustration"
            className="rounded-xl shadow-lg w-full h-60 object-cover"
          />
        </div>

        {/* Top Right - First Text */}
        <div className="order-2 md:order-2 flex flex-col justify-start gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase mb-4 border-b-4 border-red -400 inline-block pb-2">
            Statement of Faith
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In line with the mission of Christ, Apostolic Faith Church will do
            good everywhere; it claims the right, as it shall see fit, to
            undertake educational, medical, and charitable work for the benefit
            of all who desire its help, and declares its willingness to co-operate
            with government and other agencies in promoting the mental, physical,
            and moral welfare of the whole community.
          </p>
        </div>

        {/* Bottom Left - Second Text */}
        <div className="order-3 md:order-3 flex flex-col justify-start gap-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The church will maintain the core commission of Jesus Christ in all
            projects and missions:{" "}
            <span className="italic">
              “Go ye and make disciples in all nations (Matthew 28:19–20).”
            </span>{" "}
            Discipleship and mentorship programs will accompany all our community
            work, church missions, and projects.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We worship God Almighty — All-wise and All-loving — in the Trinity of
            the Father, the Son, and the Holy Spirit; the same in substance, equal
            in power and glory. We adore the Father, infinite in majesty, of whom
            are all things; confess our Lord Jesus Christ, the Eternal Son, made
            very man for our salvation; glory in His cross and resurrection; and
            owe obedience to Him as the Head over all things in His church. We
            receive and trust the Holy Spirit and His gifts, so that He may
            accomplish the work of redemption in and through us — proclaiming the
            forgiveness of sins, acceptance by God through faith in Christ, and
            the gift of eternal life — laboring for the advancement of the Kingdom
            of God throughout the world.
          </p>
        </div>

        {/* Bottom Right - Third Text */}
        <div className="order-4 md:order-4 flex flex-col justify-start gap-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Apostolic Faith Church receives the Word of God contained in the
            Scriptures of the Old and New Testaments — the 66 books — as its
            supreme rule of faith and life. Our unity is derived from the oneness
            of our members with the Lord Jesus Christ as Savior and Lord,
            actualized in the hearts and lives of people, Christ being the sole
            King and Head of the Church.
          </p>
          <img
            src={faithImg2}
            alt="Faith Illustration 2"
            className="rounded-xl shadow-lg w-full h-60 object-cover mt-4"
          />
        </div>

      </div>
    </section>
  );
}

export default StatementOfFaith;
