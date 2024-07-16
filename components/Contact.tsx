import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="mt-12 flex justify-center items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url('Rectangle 34.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="flex flex-col bg-white p-8 md:p-16 rounded-full"
        style={{
          width: "90%", // Use percentage for responsive width
          maxWidth: "700px", // Max width for large screens
          aspectRatio: "1", // Maintain aspect ratio to keep it a circle
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="pb-4 text-center text-4xl italic text-black mb-8 md:mb-16">
          Contact Me
        </div>
        <label htmlFor="fullname" className="text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="border-b border-gray-300 focus:border-black focus:outline-none py-1"
        />
        <label htmlFor="phone" className="mt-4 text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="border-b border-gray-300 focus:border-black focus:outline-none py-1"
        />

        <label htmlFor="email" className="mt-4 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-b border-gray-300 focus:border-black focus:outline-none py-1"
        />

        <label htmlFor="service" className="mt-4 text-sm font-medium">
          Service You Need
        </label>
        <textarea
          id="service"
          name="service"
          className="border border-gray-300 focus:border-black focus:outline-none p-2 mt-1"
          style={{ minHeight: "100px" }}
        />
        <button
          type="submit"
          className="mt-8 mx-auto px-10 py-2 text-sm font-medium border border-black bg-transparent hover:bg-black hover:text-white transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
