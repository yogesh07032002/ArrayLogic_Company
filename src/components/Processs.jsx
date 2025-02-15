import CareerPic1 from "../../public/CareerPic1.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Processs() {
  const steps = [
    {
      title: "Step 1: Discovery",
      description:
        "We dive deep to understand your goals, gather insights, and define clear objectives.",
      icon: "🔍",
    },
    {
      title: "Step 2: Planning",
      description:
        "Our team crafts a roadmap, strategizing every detail for smooth execution.",
      icon: "🗂️",
    },
    {
      title: "Step 3: Design",
      description:
        "We create visually stunning, user-centric designs tailored to your needs.",
      icon: "🎨",
    },
    {
      title: "Step 4: Development",
      description:
        "Our developers build robust, scalable solutions using cutting-edge technology.",
      icon: "💻",
    },
    {
      title: "Step 5: Testing",
      description:
        "We rigorously test every feature to ensure functionality, security, and quality.",
      icon: "🛠️",
    },
    {
      title: "Step 6: Deployment & Support",
      description:
        "After a successful launch, we provide ongoing support for seamless operations.",
      icon: "🚀",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          src={CareerPic1}
          alt="Our Process"
          className="w-full h-auto md:h-[90vh] object-cover mt-14"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase">
            Our Process
          </h1>
        </div>
      </section>

      {/* About Process */}
      <section className="bg-gray-50 py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          How We Turn Ideas Into Reality
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At <span className="font-semibold">ArrayLogic Softwares Pvt. Ltd.</span>, we follow a structured process that
          combines creativity, technology, and strategy. Here's how we bring
          your vision to life:
        </p>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-orange-500"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
       
      {/* Call to Action */}
      <section className="bg-orange-400 py-12 text-black text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Bring Your Vision to Life?
        </h3>
        <p className="text-lg md:text-xl text-white mb-6">
          Contact us today to start your journey with a partner who truly cares
          about your success.
        </p>
        <Link to="/contact">
          <button className="bg-white text-orange-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-100 transition-colors">
            Get Started
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Processs;
