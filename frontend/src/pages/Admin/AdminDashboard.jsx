import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <section className="min-h-screen bg-base-200 flex flex-col items-center py-16 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-2 pt-20 md:pt-40">
          Admin Dashboard
        </h1>
        <p className="text-white---content/70">
          Manage events and oversee your church activities efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
        {/* Create Event Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-lg font-semibold">
              Create New Event
            </h2>
            <p>
              Add a new church event, upload images, and share upcoming
              activities with your congregation.
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/admin/create-event" className="btn btn-primary">
                Create Event
              </Link>
            </div>
          </div>
        </div>


         {/* Read Manage Message Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-lg font-semibold">
              Read and Manage Messages
            </h2>
            <p>
              View messages sent by visitors through the contact form. See
              inquiries and manage communications.
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/admin/messages" className="btn btn-primary">
                Check Messages
              </Link>
            </div>
          </div>
        </div>

        {/* Manage Events Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-lg font-semibold">
              Manage Events
            </h2>
            <p>
              View, update, or delete existing events. Keep your calendar
              organized and up to date.
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/admin/manage" className="btn btn-secondary">
                Manage Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
