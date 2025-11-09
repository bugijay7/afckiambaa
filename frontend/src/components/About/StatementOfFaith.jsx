import React from 'react'

function StatementOfFaith() {
  return (
    <section id="faith" className="py-16 bg-base-100 max-w-[900px] mx-auto mt-20 ">
      <div className="container mx-auto px-6 md:px-12 text-left space-y-6">
        {/* Heading */}
        <h2 className="text-lg md:text-4xl font-bold text-primary uppercase text-center mb-8">
          Statement of Faith
        </h2>

        {/* Paragraph 1 */}
        <p className="text-sm md:text-lg leading-relaxed text-white---content">
          In line with the mission of Christ, Apostolic Faith Church will do
          good everywhere; it claims the right, as it shall see fit, to
          undertake educational, medical, and charitable work for the benefit
          of all who desire its help, and declares its willingness to cooperate
          with government and other agencies in promoting the mental, physical,
          and moral welfare of the whole community.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm md:text-lg leading-relaxed text-white---content">
          The church will maintain the core commission of Jesus Christ in all
          projects and missions:{" "}
          <span className="italic">
            “Go ye and make disciples in all nations (Matthew 28:19–20).”
          </span>{" "}
          Discipleship and mentorship programs will accompany all our community
          work, church missions, and projects.
        </p>

        {/* Paragraph 3 */}
        <p className="text-sm md:text-lg leading-relaxed text-white---content">
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

        {/* Paragraph 4 */}
        <p className="text-sm md:text-lg leading-relaxed text-white---content">
          Apostolic Faith Church receives the Word of God contained in the
          Scriptures of the Old and New Testaments — the 66 books — as its
          supreme rule of faith and life. Our unity is derived from the oneness
          of our members with the Lord Jesus Christ as Savior and Lord,
          actualized in the hearts and lives of people, Christ being the sole
          King and Head of the Church.
        </p>
      </div>
    </section>
  )
}

export default StatementOfFaith