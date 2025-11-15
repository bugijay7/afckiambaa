import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import worshipImg from "../assets/services.jpeg"; // Background image

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const res = await fetch("https://afckiambaa.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback("✅ Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFeedback(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setFeedback("❌ Unable to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-base-content"
      style={{
        backgroundImage: `url(${worshipImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 min-h-screen w-full pt-32 pb-16 px-6 md:px-20 font-montserrat">
        <div className="max-w-6xl mx-auto">
          {/* 🕊 Title */}
          <div className="text-left mb-12 text-base-100">
            <h1 className="text-4xl md:text-5xl font-medium text-primary mb-3">
              Get in Touch
            </h1>
            <p className="text-white text-xs md:text-lg">
              We’d love to connect with you! Reach out to Apostolic Faith Church
              Kiambaa for inquiries, prayer requests, or fellowship opportunities.
              Our team is here to support you in your walk of faith.
            </p>
          </div>

          {/* 📞 Contact Info + Form */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 🏠 Contact Info */}
            <div className="space-y-6 text-base-100">
              <h2 className="text-sm md:text-2xl font-medium">Contact Information</h2>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary text-sm" />
                <p className="text-sm md:text-sm">Apostolic Faith Church, Kiambaa, Kiambu County</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary text-sm" />
                <a href="tel:+254722850169" className="hover:text-primary transition text-sm md:text-sm">
                  +254 722 850 169
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-sm" />
                <a href="mailto:kiambaaafc@gmail.com" className="hover:text-primary transition text-sm md:text-sm">
                  kiambaaafc@gmail.com
                </a>
              </div>

              {/* 🌐 Social Links */}
              <div className="pt-6">
                <h3 className="text-xs font-medium mb-2 uppercase tracking-wide">
                  Follow Us
                </h3>

                <div className="flex flex-col gap-3 text-sm">
                  <a href="https://www.facebook.com/Afckiambaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-focus transition">
                    <FaFacebookF className="text-lg" />
                    <span>Follow on Facebook</span>
                  </a>

                  <a href="https://www.instagram.com/afckiambaa_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-focus transition">
                    <FaInstagram className="text-lg" />
                    <span>Connect on Instagram</span>
                  </a>

                  <a href="https://www.tiktok.com/@afckiambaa_254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-focus transition">
                    <FaTiktok className="text-lg" />
                    <span>Watch on TikTok</span>
                  </a>

                  <a href="https://www.youtube.com/@a.f.c.kiambaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-focus transition">
                    <FaYoutube className="text-lg" />
                    <span>Subscribe on YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 📬 Contact Form */}
            <form onSubmit={handleSubmit} className=" shadow-xl rounded-2xl p-8 space-y-6 ">
              <div>
                <label className="block font-medium mb-2 text-white">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-white">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+254 712 345 678"
                  className="input input-bordered w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-white">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {feedback && (
                <p className={`text-center mt-2 ${feedback.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                  {feedback}
                </p>
              )}
            </form>
          </div>

          {/* 🗺️ Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-base-300">
            <iframe
              title="Apostolic Faith Church Kiambaa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0054136780144!2d36.65690507603846!3d-1.1971818358537587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f210e272bee79%3A0x76c761d88122943a!2sApostolic%20Faith%20Church%20Kiambaa!5e0!3m2!1sen!2ske!4v1698699500000!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
