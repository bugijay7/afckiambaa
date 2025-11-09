import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa";

export default function EventShare({ eventTitle, eventUrl }) {
  const currentUrl =
    eventUrl || (typeof window !== "undefined" ? window.location.href : "");

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(eventTitle || "Check out this event!");

  const shareLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "text-blue-600 hover:bg-base-600 hover:text-white",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "text-sky-500 hover:bg-sky-500 hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "text-green-500 hover:bg-green-500 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "text-blue-700 hover:bg-base-700 hover:text-white",
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("🔗 Event link copied to clipboard!");
  };

  return (
    <section className="py-10 text-center bg-base-100">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-white---content">
        Share this event with friends
      </h3>

      <div className="flex justify-center gap-4 flex-wrap">
        {shareLinks.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-circle btn-outline text-xl transition ${platform.color}`}
            aria-label={`Share on ${platform.name}`}
          >
            {platform.icon}
          </a>
        ))}

        {/* Copy link button */}
        <button
          onClick={copyLink}
          className="btn btn-circle btn-outline text-xl transition text-gray-500 hover:bg-gray-500 hover:text-white"
          aria-label="Copy link"
        >
          <FaLink />
        </button>
      </div>
    </section>
  );
}
