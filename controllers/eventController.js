import Event from "../models/eventModel.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// ✅ Cloudinary config (supports CLOUDINARY_URL or separate keys)
cloudinary.config({
  secure: true, // optional: forces https
});
// 🟩 CREATE EVENT
export const createEvent = async (req, res) => {
  try {
    const { title, date, description, location } = req.body;

    if (!title || !date || !description || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // CloudinaryStorage already uploaded the file, extract the URL and public_id
    const imageUrl = req.file.path;
    const publicId = req.file.filename;

    const newEvent = new Event({
      title,
      date,
      description,
      location,
      image: {
        url: imageUrl,
        public_id: publicId,
      },
    });

    const savedEvent = await newEvent.save();
    res.status(201).json({ message: "Event created successfully", event: savedEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: error.message });
  }
};

// 🟦 GET ALL EVENTS
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟨 GET SINGLE EVENT
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟧 UPDATE EVENT
export const updateEvent = async (req, res) => {
  try {
    const { title, date, description, location } = req.body;
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    // If user uploaded a new image
    if (req.file) {
      // Delete the old Cloudinary image
      if (event.image?.public_id) {
        await cloudinary.uploader.destroy(event.image.public_id);
      }

      // CloudinaryStorage already uploaded, extract URL and public_id
      event.image.url = req.file.path;
      event.image.public_id = req.file.filename;
    }

    // Update fields if provided, else keep existing
    event.title = title || event.title;
    event.date = date || event.date;
    event.description = description || event.description;
    if (location !== undefined) event.location = location;

    const updatedEvent = await event.save();
    res.json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: error.message });
  }
};

// 🟥 DELETE EVENT
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Delete Cloudinary image
    if (event.image?.public_id) {
      await cloudinary.uploader.destroy(event.image.public_id);
    }

    await event.deleteOne();

    res.json({ message: "Event and image deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: error.message });
  }
};
