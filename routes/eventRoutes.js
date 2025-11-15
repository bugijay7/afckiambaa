import express from "express";
import upload from "../middleware/upload.js";

import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// 📌 Create event (with image upload)
router.post("/", upload.single("image"), createEvent);

// 📌 Get all events
router.get("/", getEvents);

// 📌 Get single event by ID
router.get("/:id", getEventById);

// 📌 Update event (with optional new image)
router.put("/:id", upload.single("image"), updateEvent);

// 📌 Delete event
router.delete("/:id", deleteEvent);

export default router;
