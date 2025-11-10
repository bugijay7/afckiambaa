import React, { useState } from "react";
import axios from "axios";

function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "", // ✅ Added location field
    description: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !eventData.title ||
      !eventData.date ||
      !eventData.location ||
      !eventData.description ||
      !image
    ) {
      setMessage("⚠️ Please fill in all fields and select an image.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ Unauthorized. Please log in first.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("title", eventData.title);
      formData.append("date", eventData.date);
      formData.append("location", eventData.location); // ✅ Added
      formData.append("description", eventData.description);
      formData.append("image", image);

      // ✅ Correct API endpoint
      await axios.post("https://afckiambaa.onrender.com/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Event created successfully!");
      setEventData({ title: "", date: "", location: "", description: "" });
      setImage(null);
    } catch (error) {
      console.error("Error creating event:", error);
      setMessage("❌ Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 p-6">
      <div className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
          Create New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Event Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Event Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Event Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Event Date</span>
            </label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Event Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Location</span>
            </label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Event Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Enter a short event description"
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Event Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Event Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
          >
            {loading ? "Uploading..." : "Create Event"}
          </button>

          {/* Message */}
          {message && (
            <p
              className={`text-center text-sm mt-3 ${
                message.startsWith("✅")
                  ? "text-success"
                  : message.startsWith("⚠️")
                  ? "text-warning"
                  : "text-error"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
