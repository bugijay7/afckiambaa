import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle, FaSpinner, FaChevronDown, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

export default function MinistrySignup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ministry: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("ministry", formData.ministry);

      await fetch("https://script.google.com/macros/s/AKfycbyLdzcObHhR8Phr4GScFjufFxe_y46ilf_BNeWeVBIrhUw1mCwfcsKcSaFpllA_uttd/exec", {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setSubmitted(true);
      setFormData({ name: "", phone: "", ministry: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-blue-100 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-zinc-900 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-20 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-amber-500 uppercase text-xs font-black block mb-6"
          >
            Developing Winners
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Join the <br />
            <span className="text-blue-600 italic">Workforce.</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-4 border-red-600 pl-6">
            Discover your purpose and serve the community. At Apostolic Faith Church Kiambaa,
            we believe every gift is essential for the building of the Kingdom.
          </p>
        </div>
      </section>

      {/* 2. SCRIPTURE QUOTE */}
      <section className="py-20 bg-zinc-50 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto text-center relative">
          <FaQuoteLeft className="absolute -top-8 left-1/2 -translate-x-1/2 text-zinc-200 text-6xl" />
          <motion.div {...fadeUp}>
            <p className="text-2xl md:text-4xl font-serif italic text-zinc-800 leading-snug mb-6">
              "As each has received a gift, use it to serve one another, as good stewards of God's varied grace."
            </p>
            <span className="font-black text-blue-600 uppercase tracking-[0.3em] text-sm">1 Peter 4:10</span>
          </motion.div>
        </div>
      </section>

      {/* 3. MAIN FORM SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Information Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                Why serve with <span className="text-red-600">Us?</span>
              </h2>
              <div className="h-1 w-20 bg-zinc-900 mb-8"></div>
              <p className="text-zinc-600 text-lg leading-relaxed font-light">
                Serving in ministry is more than just volunteering; it is an act of worship.
                Whether you are gifted in technology, music, or caring for others,
                your hands help us reach more people for Christ.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-6 p-8 bg-zinc-50 border-l-4 border-blue-600 group hover:bg-blue-50 transition-colors duration-500">
                <FaHandsHelping className="text-blue-600 text-3xl shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tight text-lg">Kingdom Impact</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Touch lives and make an eternal difference in our community.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-zinc-50 border-l-4 border-amber-600 group hover:bg-amber-50 transition-colors duration-500">
                <FaPhoneAlt className="text-amber-600 text-2xl shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tight text-lg">Direct Connection</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Provide your details, and we'll guide you through orientation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            {...fadeUp}
            className="bg-white p-8 md:p-14 border-4 border-zinc-900 shadow-[20px_20px_0px_0px_rgba(37,99,235,1)]"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <FaCheckCircle className="text-green-500 text-7xl mx-auto animate-bounce" />
                <h3 className="text-3xl font-black uppercase tracking-tighter">Thank You!</h3>
                <p className="text-zinc-600 text-lg">Your signup has been received. Our team will contact you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-zinc-900 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all"
                >
                  Register Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3 tracking-widest">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-blue-600 outline-none transition-all font-medium placeholder:text-zinc-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3 tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0712 345 678"
                    className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-blue-600 outline-none transition-all font-medium placeholder:text-zinc-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3 tracking-widest">Ministry of Choice</label>
                  <div className="relative">
                    <select
                      name="ministry"
                      value={formData.ministry}
                      onChange={handleChange}
                      className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 focus:border-blue-600 outline-none transition-all font-medium appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a department</option>
                      {/* FIX: value now matches the label for all options */}
                      <option value="Praise & Worship">Praise &amp; Worship</option>
                      <option value="Youth Ministry">Youth Ministry</option>
                      <option value="Women's Ministry">Women's Ministry</option>
                      <option value="Men's Ministry">Men's Ministry</option>
                      <option value="Children's Ministry">Children's Ministry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <FaChevronDown size={12} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-zinc-900 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-blue-600 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Confirm Registration"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 4. FOOTER QUOTE */}
      <section className="py-24 bg-zinc-900 text-center px-6 border-t border-zinc-800">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic">"Here am I, Send me."</h3>
          <p className="text-blue-500 font-bold tracking-[0.5em] text-sm uppercase">Isaiah 6:8</p>
        </motion.div>
      </section>

    </div>
  );
}