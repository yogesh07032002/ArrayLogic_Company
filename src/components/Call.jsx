import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

import Connect from "../../public/Connect.jpg";
import ScrollToTop from "react-scroll-to-top";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceID = 'service_0a87jiv';
    const templateID = 'template_5w0j5jp';
    const publicKey = '3t8z3oCaATGyJCtmr';
  
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'LiftLogic Softwares Pvt. Ltd.',
      message: message,
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        toast.error('An error occurred. Please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block">
          <img src={Connect} alt="Connect with us" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center">Get in Touch</h1>
          <p className="text-gray-600 text-center mt-2">We’d love to hear from you!</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
}

export default Contact;
