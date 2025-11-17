import express from "express";
import { loginUser, logoutUser } from "../controllers/authContoller.js";

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Logout route
router.post("/logout", logoutUser);

export default router;
