import React from "react";
import { Link } from "react-router-dom";

function ConnectPreview() {
  return (
    <section className="bg-primary text-primary-content py-16 px-6 md:px-20 text-center font-montserrat">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Connect With Apostolic Faith Church Kiambaa
        </h2>
        <p className="opacity-90 mb-8">
          Grow deeper in your faith and experience the power of fellowship.  
          Join our church family at Apostolic Faith Church Kiambaa — a place where  
          hearts are transformed and lives are built upon the Word of God.
        </p>
        <Link
          to="/contact"
          className="btn bg-base-100 text-primary font-semibold d-full px-8 border-none hover:bg-base-200"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}

export default ConnectPreview;
