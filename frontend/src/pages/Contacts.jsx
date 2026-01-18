import React, { useState } from "react";
import { motion } from "framer-motion";
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

// Assets
import worshipImg from "../assets/services.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

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
        setFeedback("success:Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFeedback(`error:${data.message || "Something went wrong."}`);
      }
    } catch {
      setFeedback("error:Unable to send your message. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  return (
    <div className="bg-blue-950 text-zinc-100 font-sans antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={worshipImg} alt="Hero" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-blue-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="block text-xs font-bold text-red-600 uppercase mb-6"
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter"
          >
            GET IN <span className="italic font-serif text-amber-500">TOUCH.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* LEFT: INFO */}
          <motion.div {...fadeUp} className="space-y-12">
            <div>
              <h2 className="text-xs font-black tracking-[0.4em] uppercase text-red-600 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    <FaMapMarkerAlt className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-1">Location</h4>
                    <p className="text-zinc-300 font-light">Apostolic Faith Church Kiambaa,<br />Muguga, Kiambu County</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    <FaPhoneAlt className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-1">Phone</h4>
                    <a href="tel:+254722850169" className="text-zinc-300 font-light hover:text-white transition-colors">+254 722 850 169</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    <FaEnvelope className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-1">Email</h4>
                    <a href="mailto:kiambaaafc@gmail.com" className="text-zinc-300 font-light hover:text-white transition-colors">kiambaaafc@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-6">Digital Fellowship</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, link: "https://www.facebook.com/Afckiambaa" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com/afckiambaa_" },
                  { icon: <FaTiktok />, link: "https://www.tiktok.com/@afckiambaa_254" },
                  { icon: <FaYoutube />, link: "https://www.youtube.com/@a.f.c.kiambaa" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div {...fadeUp} className="bg-zinc-100 p-10 md:p-16 text-zinc-950">
            <h2 className="text-3xl font-light tracking-tighter mb-8 italic font-serif">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative border-b border-zinc-300 focus-within:border-red-600 transition-colors py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none py-2 text-blue-950 font-light"
                  required
                />
              </div>

              <div className="relative border-b border-zinc-300 focus-within:border-red-600 transition-colors py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none py-2 text-blue-950 font-light"
                  required
                />
              </div>

              <div className="relative border-b border-zinc-300 focus-within:border-red-600 transition-colors py-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Your Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none py-2 text-blue-950 font-light resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-6 bg-blue-950 text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-red-600 transition-all duration-700 flex items-center justify-center gap-4 disabled:bg-zinc-400"
              >
                {loading ? "Processing..." : (
                  <>
                    Send Message <FaPaperPlane className="text-[10px]" />
                  </>
                )}
              </button>

              {feedback && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className={`text-[10px] font-bold tracking-widest uppercase text-center mt-4 ${
                    feedback.startsWith("success") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback.split(":")[1]}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="grayscale hover:grayscale-0 transition-all duration-1000 border-t border-zinc-900">
        <iframe
          title="Apostolic Faith Church Kiambaa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.568471131758!2d36.643666!3d-1.23467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23cf0e972351%3A0xc3f9904975771f28!2sKiambaa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}




  