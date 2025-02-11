import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    const response = await fetch("https://formspree.io/f/xkgovjdz", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="border-gray-700 min-h-screen bg-[url('./assets/bg1.jpg')] text-gray-300 flex flex-col items-center justify-center px-6 py-12" id="contact">
      <hr className="w-full border-gray-700 my-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
      <p className="text-gray-400 mb-8 text-center">
        Feel free to reach out for collaborations, projects, or just a chat!
      </p>

      <div className="w-full max-w-3xl bg-black p-8 rounded-lg shadow-lg border-gray-700">
        {submitted ? (
          <p className="text-green-400 text-center font-semibold">
            ✅ Message sent! I'll get back to you soon.
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input 
                type="email"
                name="email"
                placeholder="Enter your email" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea 
                name="message"
                placeholder="Write your message here..." 
                rows="5" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-8">
        <a href="mailto:ahqafaliofficial@gmail.com" className="text-gray-400 hover:text-gray-200">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/AhqafCoder" target="_blank" className="text-gray-400 hover:text-gray-200">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="text-gray-400 hover:text-gray-200">
          <FaLinkedin size={24} />
        </a>
        <a href="tel:+917084089921" className="text-gray-400 hover:text-gray-200">
          <FaPhone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
