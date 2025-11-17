import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

// ❗ Validate environment variables
if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
  console.error("❌ Missing ADMIN_EMAIL, ADMIN_PASSWORD, or JWT_SECRET in env variables.");
  process.exit(1);
}

// Hash admin password once
const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10);

// 🔐 Admin Login Controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate request
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // 2️⃣ Check admin email
    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 3️⃣ Compare password
    const isMatch = bcrypt.compareSync(password, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 4️⃣ Generate JWT token
    const token = jwt.sign(
      { email: ADMIN_EMAIL, role: "admin" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// 🔐 Logout Controller
export const logoutUser = (req, res) => {
  try {
    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
