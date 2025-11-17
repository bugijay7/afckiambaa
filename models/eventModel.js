import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }, // ✅ Added
  image: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
}, { timestamps: true }); // optional: track createdAt & updatedAt

export default mongoose.model('Event', eventSchema);
