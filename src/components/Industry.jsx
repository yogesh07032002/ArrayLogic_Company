import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";
import IndustryPic from "../../public/IndustryPic.jpg";
import Slider from "react-slick";
import listindustry from "../../public/listindustry.json";

function Industry() {
  const filterData = listindustry.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: true, // Enables infinite scrolling
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Centers single card
          arrows: false, // Hides arrows for mobile
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 bg-gray-700 rounded-full opacity-80 hover:opacity-100 transition duration-300"></div>
    ),
  };

  return (
    <div className="max-w-screen-2xl container mx-auto mt-14 bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={IndustryPic}
          alt="Industry Expertise"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Industry Expertise
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Empowering businesses with cutting-edge IT solutions across multiple industries.
          </p>
        </div>
      </div>

      {/* About Industry Section */}
      <div className="text-center px-8 py-12 md:py-20 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-6">
          Transforming Industries with Technology
        </h2>
        <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed tracking-wide">
          At <span className="font-semibold text-orange-600">ArrayLogic Softwares Pvt. Ltd.</span>, we lead technological innovation,  
          delivering industry-specific solutions in <span className="font-semibold">healthcare, finance, retail, education, and more.</span>  
          We empower businesses with AI, machine learning, cloud computing, and software development, ensuring streamlined  
          operations, enhanced security, and sustainable growth.
        </p>
      </div>

      {/* Industry Cards Slider */}
      <div className="px-4 md:px-10 py-8">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div
              className="px-4 py-6 hover:scale-105 transition-transform duration-300 w-full md:w-auto"
              key={item.id}
            >
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Industry;
