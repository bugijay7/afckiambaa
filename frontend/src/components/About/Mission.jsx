import React from "react";
import missionImg from "../../assets/mission.jpeg";
import visionImg from "../../assets/vision.jpeg";

function Mission() {
  return (
    <section id="mission" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2  place-items-center">

        {/* Mission Card */}
        <div className="card bg-white w-full max-w-sm shadow-lg hover:shadow-xl transition">
          <figure className="px-6 pt-6">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full aspect-[4/5] object-cover rounded-lg"
            />
          </figure>
          <div className="card-body items-start text-left space-y-2">
            <h2 className="card-title text-amber-700 text-2xl">
              Church Mission
            </h2>
            <p>
              Our Mission is simple yet powerful:
              <br />
              To Win People,
              <br />
              To Build Believers,
              <br />
              & To Send Workers.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card bg-white w-full max-w-sm shadow-lg hover:shadow-xl transition">
          <figure className="px-6 pt-6">
            <img
              src={visionImg}
              alt="Vision"
              className="w-full aspect-[4/5] object-cover rounded-lg"
            />
          </figure>
          <div className="card-body items-start text-left space-y-2">
            <h2 className="card-title text-amber-700 text-2xl">
              Church Vision
            </h2>
            <p>
              Glorify the Living God,
            
              Proclaim His Kingdom,
              <br />
              Improve lives,
              <br />
              And promote fellowship
              <br />
              among church members.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Mission;
