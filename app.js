import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";

import authRoutes from "./routes/authRoutes.js";
import mpesaRoutes from "./routes/mpesaRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import messageRoutes from "./routes/messageRoute.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Allow requests from your frontend
app.use(
  cors({
    origin: ["https://afckiambaa.vercel.app"],
    credentials: true,
  })
);

// ✅ Manual CORS headers for static assets
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

// ✅ Helmet with relaxed policies
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    contentSecurityPolicy: false,
  })
);

app.use(morgan("dev"));

// ✅ Serve uploads publicly
app.use("/uploads", express.static("uploads"));

// ✅ Root health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "AFC Kiambaa API is running 🚀" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/mpesa", mpesaRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
