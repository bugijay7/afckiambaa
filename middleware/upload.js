import multer from "multer";

// Store files in memory (buffer) to send to Cloudinary
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // optional: limit 5MB
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

export default upload;
