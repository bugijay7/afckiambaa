import React, { useState } from "react";
import axios from "axios";
import { FaMobileAlt, FaUniversity, FaHeart, FaPhoneAlt } from "react-icons/fa";

export default function Giving() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!phone || !amount) {
      setMessage("Please enter both phone number and amount.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://afckiambaa.onrender.com/api/mpesa/stkpush", // ✅ Local endpoint
        { phone, amount }
      );
      setMessage("✅ STK push sent! Please check your phone to complete the payment.");
    } catch (error) {
      console.error(error);
      setMessage("❌ Payment failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-base-100 pb-20 pt-32 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        {/* ❤️ Title Section */}
        <div className="text-center mb-12">
          <FaHeart className="text-primary text-5xl mx-auto" />
          <h1 className="text-xl md:text-7xl font-semibold text-white---content mt-4">
            Support the Ministry
          </h1>
          <p className="text-white---content/70 py-6 text-sm md:text-white-- max-w-2xl mx-auto">
            Your generous giving helps Apostolic Faith Church Kiambaa continue spreading
            the gospel, supporting the community, and building strong foundations of faith.
            Every gift—large or small—makes an eternal difference.
          </p>
        </div>

        {/* 💳 Giving Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 🏦 Bank Transfer */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <FaUniversity className="text-primary text-3xl mb-4" />
              <h2 className="card-title">Bank Transfer</h2>
              <p><span className="font-bold">Bank:</span> Equity Bank</p>
              <p><span className="font-bold">Account Number:</span> 1290 2609 40849</p>
              <p><span className="font-bold">Branch:</span> Kenyatta Avenue</p>
            </div>
          </div>

          {/* 📱 M-Pesa Giving */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <FaMobileAlt className="text-primary text-3xl mb-4" />
              <h2 className="card-title">M-Pesa Giving</h2>
              <p>Paybill: <span className="font-bold">202273</span></p>
              <p className="mb-4">Account: Offering / Tithe</p>

              {/* 💰 Interactive STK Push Form */}
              <div className="bg-base-100 p-6 d-lg border">
                <h3 className="text-lg font-semibold mb-4 text-white---content">
                  Donate via M-Pesa
                </h3>
                <input
                  type="text"
                  placeholder="Phone (2547XXXXXXXX)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered w-full mb-3"
                />
                <input
                  type="number"
                  placeholder="Amount (Ksh)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input input-bordered w-full mb-4"
                />
                <button
                  onClick={handlePay}
                  disabled={loading}
                  className="btn btn-primary w-full"
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
                {message && (
                  <p className="mt-4 text-sm text-center text-white---content">{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 🌍 Diaspora Giving & Helpline */}
        <div className="mt-16 bg-primary text-primary-content p-8 d-xl text-center shadow-lg">
          <FaPhoneAlt className="text-3xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Diaspora Giving & Helpline</h3>
          <p className="text-sm md:text-white-- mb-2">
            For those giving from outside Kenya or needing assistance, please contact us or
            send your gift directly via M-Pesa to:
          </p>
          <p className="text-lg md:text-xl font-bold tracking-wide">
            +254 722 850 169
          </p>
          <p className="text-sm mt-3 opacity-90">
            Thank you for supporting Apostolic Faith Church Kiambaa in advancing
            the Kingdom of God!
          </p>
        </div>
      </div>
    </div>
  );
}
