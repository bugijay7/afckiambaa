import React, { useState } from "react";

export default function MinistrySignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    ministry: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phoneNumber" ? value.replace(/\D/g, "") : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("fullName", formData.fullName);
      params.append("phoneNumber", formData.phoneNumber);
      params.append("ministry", formData.ministry);

      await fetch("https://script.google.com/macros/s/AKfycbx8DaYT3vQLPCOTtNscQoOFKv4bxsR4ImhzxkR3RD6f6HlLCf6KHajr8K7rVZuzLD1v/exec", {
        method: "POST",
        mode: "no-cors",
        body: params
      });

      setSubmitted(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        ministry: ""
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section>
        <span>Developing Winners</span>
        <h1>Join the Workforce</h1>
        <p>Discover your purpose and serve the community.</p>
      </section>

      {/* SCRIPTURE */}
      <section>
        <blockquote>
          <p>"As each has received a gift, use it to serve one another."</p>
          <cite>1 Peter 4:10</cite>
        </blockquote>
      </section>

      {/* MAIN */}
      <section>
        <div>
          <h2>Why serve with Us?</h2>
          <div>
            <div>
              <h4>Impact</h4>
              <p>Touch lives and make a difference.</p>
            </div>
            <div>
              <h4>Connection</h4>
              <p>We’ll guide you through orientation.</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div>
          {submitted ? (
            <div>
              <h3>Thank You!</h3>
              <p>Our team will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)}>
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

              <select
                name="ministry"
                value={formData.ministry}
                onChange={handleChange}
                required
              >
                <option value="">Select ministry</option>
                <option value="Praise & Worship">Praise & Worship</option>
                <option value="Mens Ministry">Mens Ministry</option>
                <option value="Children's Ministry">Children's Ministry</option>
                <option value="Womens Ministry">Womens Ministry</option>
                <option value="Youth Ministry">Youth Ministry</option>
              </select>

              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}