import { BadgeCheck, Code, Layers } from "lucide-react";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-14 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-600 ">
          About Us
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mt-4 leading-relaxed">
          Discover how <b className="text-blue-600">ArrayLogic Softwares Pvt. Ltd.</b> drives digital innovation with cutting-edge technology solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative rounded-3xl border border-orange-300 bg-white shadow-lg hover:shadow-2xl hover:border-orange-500 transition-transform transform hover:scale-105 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-20 rounded-3xl"></div>
          <div className="relative flex flex-col items-center text-center space-y-5">
            <BadgeCheck className="text-orange-500 w-14 h-14 drop-shadow-lg" />
            <h2 className="text-2xl font-extrabold text-gray-800">Expert Guidance</h2>
            <p className="text-gray-600 text-base">
              Our skilled engineers guide you through every step of your digital transformation journey.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-3xl border border-purple-300 bg-white shadow-lg hover:shadow-2xl hover:border-purple-500 transition-transform transform hover:scale-105 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-20 rounded-3xl"></div>
          <div className="relative flex flex-col items-center text-center space-y-5">
            <Code className="text-purple-500 w-14 h-14 drop-shadow-lg" />
            <h2 className="text-2xl font-extrabold text-gray-800">Custom Solutions</h2>
            <p className="text-gray-600 text-base">
              We specialize in creating tailored applications that meet your unique business needs cost-effectively.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-3xl border border-blue-300 bg-white shadow-lg hover:shadow-2xl hover:border-blue-500 transition-transform transform hover:scale-105 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-20 rounded-3xl"></div>
          <div className="relative flex flex-col items-center text-center space-y-5">
            <Layers className="text-blue-500 w-14 h-14 drop-shadow-lg" />
            <h2 className="text-2xl font-extrabold text-gray-800">Proven Expertise</h2>
            <p className="text-gray-600 text-base">
              With domain knowledge across sectors, we deliver solutions that ensure your success and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
