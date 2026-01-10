/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
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
      const res = await fetch("https://afckiambaa.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback("success:Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFeedback(`error:${data.message || "Something went wrong."}`);
      }
    } catch {
      setFeedback("error:Unable to send your message. Please try again later.");
    } finally {
      setLoading(false);
      // Clear feedback after 5 seconds
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-20 px-6 bg-blue-950 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110">
          <img src={worshipImg} alt="Background" className="w-full h-full object-cover blur-sm" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-red-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Connect with Us</span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-blue-100/70 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Reach out to Apostolic Faith Church Kiambaa for inquiries, prayer requests, 
            or fellowship opportunities. We are here to walk with you.
          </p>
        </motion.div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-2/5 bg-blue-950 p-10 lg:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-3xl font-serif font-bold mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-1">Our Location</h4>
                  <p className="text-blue-100/80 leading-relaxed">Apostolic Faith Church, Kiambaa, Kiambu County</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-1">Call Us</h4>
                  <a href="tel:+254722850169" className="text-xl font-medium hover:text-red-500 transition-colors">+254 722 850 169</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-red-500 mb-1">Email Us</h4>
                  <a href="mailto:kiambaaafc@gmail.com" className="text-blue-100/80 hover:text-red-500 transition-colors">kiambaaafc@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-white/40">Follow Our Journey</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FaFacebookF />, link: "https://www.facebook.com/Afckiambaa" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com/afckiambaa_" },
                  { icon: <FaTiktok />, link: "https://www.tiktok.com/@afckiambaa_254" },
                  { icon: <FaYoutube />, link: "https://www.youtube.com/@a.f.c.kiambaa" }
                ].map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noreferrer" 
                     className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-3/5 p-10 lg:p-16 bg-white">
            <h3 className="text-3xl font-serif font-bold text-blue-950 mb-2">Send a Message</h3>
            <p className="text-gray-400 mb-10 font-light">Fields marked with an asterisk (*) are required.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-blue-950">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-blue-950">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-blue-950">Message *</label>
                <textarea
                  name="message"
                  placeholder="How can we help or pray for you?"
                  rows="5"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-900 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full lg:w-auto px-12 py-5 bg-blue-900 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-red-600 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? "Sending..." : (
                  <>Send Message <FaPaperPlane className="text-xs" /></>
                )}
              </button>

              <AnimatePresence>
                {feedback && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-xl text-sm font-medium ${
                      feedback.startsWith('success') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                    }`}
                  >
                    {feedback.split(':')[1]}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP SECTION --- */}
      <section className="px-6 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe
            title="Apostolic Faith Church Kiambaa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.948259404222!2d36.67139267424683!3d-1.2034983355325883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2390f7572767%3A0x6a05e55720c78864!2sApostolic%20Faith%20Church%20Kiambaa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}