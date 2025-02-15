import { Link } from "react-router-dom";
import React from "react";

function Process() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/team.jpg"
              alt="Team Collaboration"
              className="rounded-3xl shadow-lg w-full md:w-4/5 transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Our Strengths
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
              The qualities that drive our success.
            </p>
            <ul className="space-y-4 text-lg md:text-xl">
              {[
                "Digital Media Expertise",
                "Dedicated Team",
                "Cloud-Focused Approach",
                "Creative Designers",
                "24/7 Support Service",
                "Fastest Product Delivery",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 hover:text-orange-400 transition duration-300"
                >
                  <span className="text-orange-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none">
              Get a Free Consultation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
