import React from "react";

function ContactForm() {
  return (
    <div
      className="flex justify-start items-center min-h-screen bg-cover bg-center px-8"
      style={{ backgroundImage: "url('/bgimage.png')" }} // Replace with your image
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-2xl ml-12">
        <h2 className="text-center font-bold text-3xl mb-6 text-white">
          Get into the Conversation
        </h2>

        <form className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="2"
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black/70 border border-white rounded-lg text-white font-medium hover:bg-blue-600 transition  cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
