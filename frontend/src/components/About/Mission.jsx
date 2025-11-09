import React from "react";
import { FaChurch, FaUser } from "react-icons/fa6"; // ✅ Using react-icons

function Mission() {
  return (
    <section id="mission" className="py-16 bg-base-200">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* Chat Start - Church */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
              <FaChurch className="text-2xl" />
            </div>
          </div>
          <div className="chat-header font-semibold">
            Church Vision
            <time className="text-xs opacity-50 ml-2">Now</time>
          </div>
          <div className="chat-bubble">
            Our Mission is simple yet powerful.
          </div>
          <div className="chat-footer opacity-50">Inspired Message</div>
        </div>

        {/* Chat End - Believer */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-12 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
              <FaUser className="text-2xl" />
            </div>
          </div>
          <div className="chat-header font-semibold">
            Believer
            <time className="text-xs opacity-50 ml-2">Now</time>
          </div>
          <div className="chat-bubble text-lg leading-relaxed">
            To Win People, <br />
            To Build Believers, <br />
            & To Send Workers.
          </div>
          <div className="chat-footer opacity-50">Received with Faith</div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
