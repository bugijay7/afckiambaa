import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }

      // Attach user data to request
      req.user = decoded;
      next();
    });

  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Server error in authentication" });
  }
};
