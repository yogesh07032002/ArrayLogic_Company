import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";
import Slider from "react-slick";
import list from "../../public/list.json";

function Services() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-14 bg-gradient-to-br ">
      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-orange-600">
        Services
      </h1>

      {/* Slider Section */}
      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards  item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Services;
