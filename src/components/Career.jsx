import { FaBriefcase, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import CareerPic from "../../public/CareerPic.jpg";

function Career() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white mt-14">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={CareerPic}
          alt="Career at ArrayLogic"
          className="w-full h-[350px] md:h-[500px] lg:h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center text-white px-4 ">
          <h1 className="text-4xl md:text-6xl font-extrabold">Join Our Team</h1>
          <p className="text-lg md:text-2xl mt-4 max-w-2xl">
            We’re looking for passionate innovators ready to shape the future of technology.
          </p>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Why Work With Us?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          At <span className="font-semibold text-orange-600">ArrayLogic Softwares</span>, we believe in creativity, growth, and teamwork. Join us to build cutting-edge solutions in a dynamic environment.
        </p>

        {/* Career Benefits Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaBriefcase className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Career Growth</h3>
            <p className="text-gray-600 mt-2">Opportunities to learn, grow, and lead.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaBriefcase className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Exciting Projects</h3>
            <p className="text-gray-600 mt-2">Work on cutting-edge technology and real-world solutions.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <FaBriefcase className="text-5xl text-orange-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Collaborative Culture</h3>
            <p className="text-gray-600 mt-2">Innovate and grow in a supportive environment.</p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-lg mt-2">Reach out to our HR team directly.</p>

        <div className="mt-6 space-y-4">
          <p className="text-lg flex items-center justify-center">
            <FaEnvelope className="mr-2" /> hr.arraylogic@gmail.com
          </p>
          <p className="text-lg flex items-center justify-center">
            <FaPhoneAlt className="mr-2" /> +91 7620162336
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;
