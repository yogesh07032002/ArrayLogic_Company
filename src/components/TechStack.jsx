import { FaAws, FaCloud, FaCss3Alt, FaDocker, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { SiAngular, SiExpress, SiKubernetes, SiMongodb, SiMysql, SiOracle, SiScikitlearn, SiTensorflow } from "react-icons/si";

const TechStackSlider = () => {
  const techStack = [
    { icon: <FaReact className="text-blue-500 text-7xl" /> },
    { icon: <FaNodeJs className="text-green-600 text-7xl" /> },
    { icon: <SiMongodb className="text-green-700 text-7xl" /> },
    { icon: <SiExpress className="text-gray-800 text-7xl" /> },
    { icon: <SiAngular className="text-red-600 text-7xl" /> },
    { icon: <FaJava className="text-red-500 text-7xl" /> },
    { icon: <FaPython className="text-yellow-500 text-7xl" /> },
    { icon: <FaAws className="text-orange-500 text-7xl" /> },
    { icon: <FaDocker className="text-blue-500 text-7xl" /> },
    { icon: <SiKubernetes className="text-blue-700 text-7xl" /> },
    { icon: <SiTensorflow className="text-orange-500 text-7xl" /> },
    { icon: <SiScikitlearn className="text-green-700 text-7xl" /> },
    { icon: <SiMysql className="text-blue-500 text-7xl" /> },
    { icon: <FaCloud className="text-blue-600 text-7xl" /> },
    { icon: <SiOracle className="text-red-600 text-7xl" /> },
    { icon: <FaHtml5 className="text-orange-600 text-7xl" /> },
    { icon: <FaCss3Alt className="text-blue-500 text-7xl" /> },
    { icon: <FaJsSquare className="text-yellow-500 text-7xl" /> },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [techStack.length]);

  return (
    <>
      <div className="text-5xl font-bold text-center text-orange-600 mt-10">Our TechStack</div>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 240}px)` }}
        >
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 h-48 mx-4 flex justify-center items-center"
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStackSlider;
