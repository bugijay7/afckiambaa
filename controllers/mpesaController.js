import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

/**
 * STK Push Controller
 * Handles M-Pesa Express (Lipa na M-Pesa Online) Payment Requests
 */
export const stkPush = async (req, res) => {
  try {
    const { phone, amount } = req.body;

    // Validate request
    if (!phone || !amount) {
      return res.status(400).json({ message: "Phone and amount are required" });
    }

    // 🔐 Step 1: Generate access token
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 🔑 Step 2: Prepare password
    const timestamp = new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .slice(0, 14);

    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    // 🧾 Step 3: STK push request body
    const stkRequest = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: "AFC_Kiambaa",
      TransactionDesc: "Church Donation",
    };

    // 📨 Step 4: Send STK Push
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkRequest,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // ✅ Success
    res.status(200).json({
      message: "STK Push sent successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("M-Pesa STK Push Error:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed to initiate STK Push",
      error: error.response?.data || error.message,
    });
  }
};
