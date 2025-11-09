import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Admin/AdminDashboard";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Giving from "./pages/Giving";
import Project from "./pages/Project";
import ManageEvent from "./pages/Admin/ManageEvents";
import CreateEvent from "./pages/Admin/CreateEvents";
import Livestream from "./pages/LiveStream";
import EventsDetails from "./pages/events/EventDetail";
import Campuses from "./pages/Campuses";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Resources from "./pages/Resources";
import Messages from "./pages/Admin/Messages";
import Ministries from "./pages/Ministries";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* 🌍 Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ministries" element={ <Ministries />} />
        <Route path="/live" element={<Livestream />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/resources" element={ <Resources /> } />
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/services" element={ <Services />} />

        {/* 🔐 Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/manage"
          element={
            <PrivateRoute>
              <ManageEvent />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create-event"
          element={
            <PrivateRoute>
              <CreateEvent />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
