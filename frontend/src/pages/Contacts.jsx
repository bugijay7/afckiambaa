import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Assets
import worshipImg from "../assets/services.jpeg";

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
      const res = await fetch("https://afckiambaa-4bt6.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback("Success! Your message has reached us.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFeedback(data.message || "Something went wrong.");
      }
    } catch {
      setFeedback("Unable to send. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  return (
    <div className="bg-white text-black selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <img
          src={worshipImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-500 uppercase tracking-[0.5em] text-xs font-black block mb-4">
            Connect With Us
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-blue-600 italic">Touch.</span>
          </h1>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">

          {/* LEFT SIDE: CONTACT INFO */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-10 text-red-600 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600"></span> Contact Information
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs mb-2">Location</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed uppercase">
                      Apostolic Faith Church Kiambaa,<br />
                      Muguga, Kiambu County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <FaPhoneAlt className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs mb-2">Phone</h4>
                    <a href="tel:+254722850169" className="text-xl font-light hover:text-red-600 transition-colors">
                      +254 722 850 169
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <FaEnvelope className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs mb-2">Email</h4>
                    <a href="mailto:kiambaaafc@gmail.com" className="text-xl font-light hover:text-red-600 transition-colors">
                      kiambaaafc@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-10 border-t border-zinc-100">
              <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-6">Digital Presence</h4>
              <div className="flex gap-6 text-2xl text-zinc-400">
                <a href="https://facebook.com/Afckiambaa" className="hover:text-blue-600 transition-all"><FaFacebookF /></a>
                <a href="https://instagram.com/afckiambaa_" className="hover:text-red-600 transition-all"><FaInstagram /></a>
                <a href="https://tiktok.com/@afckiambaa_254" className="hover:text-black transition-all"><FaTiktok /></a>
                <a href="https://youtube.com/@a.f.c.kiambaa" className="hover:text-red-600 transition-all"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-7 bg-amber-500 p-8 md:p-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">
              Send a <span className="text-amber-600">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b-2 border-zinc-200 focus-within:border-blue-600 transition-all">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-3 focus:outline-none text-lg font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative border-b-2 border-zinc-200 focus-within:border-blue-600 transition-all">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-3 focus:outline-none text-lg font-light"
                    placeholder="+254..."
                  />
                </div>
              </div>

              <div className="relative border-b-2 border-zinc-200 focus-within:border-blue-600 transition-all">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent py-3 focus:outline-none text-lg font-light"
                  placeholder="email@example.com"
                />
              </div>

              <div className="relative border-b-2 border-zinc-200 focus-within:border-blue-600 transition-all">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Your Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent py-3 focus:outline-none text-lg font-light resize-none"
                  placeholder="How can we help or pray for you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-6 font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 ${
                  loading ? "bg-zinc-400 cursor-not-allowed" : "bg-black text-white hover:bg-red-600"
                }`}
              >
                {loading ? "Processing Transmission..." : "Deliver Message"}
              </button>

              {feedback && (
                <div className={`text-center font-black uppercase tracking-widest text-[10px] p-4 ${feedback.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION (Full Width Editorial) */}
      <section className="grayscale hover:grayscale-0 transition-all duration-1000 border-t border-zinc-100">
        <iframe
          title="Apostolic Faith Church Kiambaa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9443572836263!2d36.65345637403233!3d-1.1991461987893122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2390f777f997%3A0xc348e3549f0a2027!2sApostolic%20Faith%20Church%20Kiambaa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}