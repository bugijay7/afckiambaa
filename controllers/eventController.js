import Event from "../models/eventModel.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// ✅ Cloudinary config (supports CLOUDINARY_URL or separate keys)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ⬆ If you prefer a single CLOUDINARY_URL, just keep:
// cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL });


// 📌 Helper function to upload from memory buffer
const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.end(fileBuffer);
  });
};


// 🟩 CREATE EVENT
export const createEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload image buffer to Cloudinary
    const uploadResult = await uploadToCloudinary(req.file.buffer, "events");

    const newEvent = new Event({
      title,
      date,
      description,
      image: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(400).json({ message: error.message });
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
    const { title, date, description } = req.body;
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    // If user uploaded a new image
    if (req.file) {
      // Delete the old Cloudinary image
      if (event.image?.public_id) {
        await cloudinary.uploader.destroy(event.image.public_id);
      }

      // Upload new image buffer
      const uploadResult = await uploadToCloudinary(req.file.buffer, "events");
      event.image.url = uploadResult.secure_url;
      event.image.public_id = uploadResult.public_id;
    }

    event.title = title || event.title;
    event.date = date || event.date;
    event.description = description || event.description;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};
