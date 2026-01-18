import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://afckiambaa-4bt6.onrender.com/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        console.log("Fetched events:", data);
        setEvents(data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Unable to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading events...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-error">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f8f5f0] pt-30 py-16 px-4 md:px-20 font-montserrat">
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-lg uppercase tracking-wide text-gray-500">
          Upcoming Events
        </h1>
        <p className="text-gray-400 text-sm">
          {new Date().toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Event List */}
      <div className="max-w-6xl mx-auto space-y-10">
        {events.length > 0 ? (
          events.map((event) => {
            const date = new Date(event.date);
            const day = date.getDate().toString().padStart(2, "0");
            const month = date
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const year = date.getFullYear();

            return (
              <div
                key={event._id}
                className="flex flex-col md:flex-row rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300"
              >
                {/* Image */}
                <div className="md:w-[260px] md:h-[200px] w-full h-164 flex items-center justify-center bg-white border-r border-gray-200 p-2">
                  <img
                    src={event.image?.url || "/placeholder.png"}
                    alt={event.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col items-center justify-center px-6 py-4 bg-gray-50 border-r border-gray-200 min-w-[80px]">
                  <span className="text-xs text-gray-500">{month}</span>
                  <span className="text-3xl font-bold text-gray-800">{day}</span>
                  <span className="text-xs text-gray-400">{year}</span>
                </div>

                {/* Event Info */}
                <div className="flex-1 p-6 text-left bg-white">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 uppercase mb-3">
                    {event.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span>📍 {event.location || "Zoe Worship Centre"}</span>
                    <span className="text-gray-400">|</span>
                    <span>
                      {date.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No events available.</p>
        )}
      </div>
    </div>
  );
}
