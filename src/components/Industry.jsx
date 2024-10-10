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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  px-1 md:px-0  md:pb-20 bg-slate-100">
        <div className="mt-20 px-2 ">
          <img className="" src={IndustryPic} alt="Comming Soon"></img>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center mt-10 md:mt-15">
          Our Industry Expertise
          </h1>
          <p className="mt-5 px-5">
            LiftLogic Softwares Pvt. Ltd. is a forward-thinking IT company
            delivering innovative solutions across multiple industries. From
            cutting-edge software development and cloud computing to data
            analytics, artificial intelligence, and machine learning, we provide
            customized IT services that help businesses thrive in the digital
            age. Our expertise spans industries such as healthcare, finance,
            retail, education, and more, empowering organizations to streamline
            operations, enhance security, and drive growth through technology.
            Partner with us to leverage the power of IT in transforming your
            business and staying ahead in todays competitive market.
          </p>
        </div>
        <div>
        <div className="mt-10 ml-3 md:ml-20">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
            
        </div>
      </div>
    </>
  );
}

export default Industry;
