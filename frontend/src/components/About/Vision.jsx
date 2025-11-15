import React from "react";
import { FaEye, FaHandsPraying } from "react-icons/fa6"; // ✅ React icons

function Vision() {
  return (
    <section id="vision" className="py-16 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* Chat Start - Church Vision */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
              <FaEye className="text-2xl" />
            </div>
          </div>
          <div className="chat-header font-semibold text-primary-content">
            AFCKiambaa Vision
            <time className="text-xs opacity-80 ml-2">Now</time>
          </div>
          <div className="chat-bubble">
            Our Vision is to reflect God’s glory and purpose.
          </div>
          <div className="chat-footer opacity-50">Shared with Purpose</div>
        </div>

        {/* Chat End - Believer Response */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-12 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
              <FaHandsPraying className="text-2xl" />
            </div>
          </div>
          <div className="chat-header font-semibold">
            Believer
            <time className="text-xs opacity-50 ml-2">Now</time>
          </div>
          <div className="chat-bubble text-lg leading-relaxed">
            Glorify the Living God, <br />
            proclaim His kingdom, <br />
            improve lives, <br />
            and promote fellowship among church members.
          </div>
          <div className="chat-footer opacity-50">Received with Vision</div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
