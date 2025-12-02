import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js"; 
import upload from "../middleware/upload.js";

import {createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

// 📌 Create event (authenticated + with image upload)
router.post("/", authMiddleware, upload.single("image"), createEvent);

// 📌 Get all events
router.get("/", getEvents);

// 📌 Get single event by ID
router.get("/:id", getEventById);

// 📌 Update event (authenticated + new image optional)
router.put("/:id", authMiddleware, upload.single("image"), updateEvent);

// 📌 Delete event (authenticated)
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
