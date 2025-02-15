/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="group w-full md:w-80">
        {/* Main Card Container */}
        <div className="relative bg-white bg-opacity-80 border border-black backdrop-blur-md  rounded-2xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
          
          {/* Image Section */}
          <figure className="px-4 pt-4">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl object-cover w-full h-48"
            />
          </figure>

          {/* Content Section */}
          <div className="p-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              {item.title}
            </p>

            {/* Call-to-Action Button */}
            <Link to="/Contact" target="_blank">
              <button className="px-6 py-2 text-sm md:text-base  rounded-full border border-orange-500 bg-white text-black hover:bg-orange-500 hover:text-white transition duration-300">
                Let’s Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
