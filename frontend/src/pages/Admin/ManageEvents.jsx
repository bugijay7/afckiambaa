import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://afckiambaa-4bt6.onrender.com/api/events");
      console.log("Events fetched:", res.data);

      // Backend returns an array, not {events: []}
      setEvents(res.data || []);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    const token = localStorage.getItem("token"); // MUST include token

    if (!token) {
      alert("You must be logged in to delete events.");
      return;
    }

    try {
      await axios.delete(
        `https://afckiambaa-4bt6.onrender.com/api/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // REQUIRED
          },
        }
      );

      // Remove deleted event from UI
      setEvents(events.filter((event) => event._id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-medium text-center text-primary mb-10">
        Manage Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex flex-col md:flex-row items-center justify-between bg-base-100 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    event.image?.url
                      ? event.image.url
                      : "https://via.placeholder.com/150"
                  }
                  alt={event.title || "Event"}
                  className="w-28 h-20 object-cover rounded-md"
                />

                <div>
                  <h3 className="font-medium text-lg text-base-content">
                    {event.title || "Untitled Event"}
                  </h3>

                  <p className="text-sm opacity-70">
                    {event.date
                      ? new Date(event.date).toLocaleDateString()
                      : "Date not set"}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => handleDelete(event._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageEvents;
