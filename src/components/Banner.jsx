import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from "../../public/Banner1.jpg";
import banner2 from "../../public/Banner2.jpg";
import banner3 from "../../public/Banner3.jpg";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-5 md:px-10 bg-gradient-to-r from-orange-50 to-white rounded-3xl shadow-2xl mt-20 md:mt-24 h-[70vh] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-3xl shadow-xl h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-6 md:p-16 h-full bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-8 md:ml-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight text-center md:text-left drop-shadow-md">
                Accelerate your growth with
                <span className="text-orange-500"> ArrayLogic’s </span>
                innovative
                <span className="text-orange-500"> IT Commandos.</span>
              </h1>
              <p className="text-black text-lg md:text-2xl text-center md:text-left">
                At <b>ArrayLogic Softwares Pvt. Ltd.</b>, we deliver cutting-edge solutions for web, software, and application development. Streamline your digital presence with us.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-transform transform hover:scale-110 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=7620162336"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src={banner1}
                className="w-4/5 md:w-full  max-w-sm md:max-w-lg object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Accelerate Growth with ArrayLogic"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-6 md:p-16 h-full bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-8 md:ml-8">
              <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 leading-tight text-center md:text-left drop-shadow-md">
                Empowering Businesses with
                <span className="text-orange-500"> Custom IT Solutions</span>
              </h1>
              <p className="text-black text-lg md:text-2xl text-center md:text-left">
                From dynamic websites to complex applications, we ensure quality, scalability, and top-notch performance. Partner with <b>ArrayLogic Softwares Pvt. Ltd.</b> today!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-transform transform hover:scale-110 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=7620162336"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src={banner2}
                className="w-4/5 md:w-full max-w-sm md:max-w-lg object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Empowering Businesses"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-6 md:p-16 h-full bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-8 md:ml-8">
              <h1 className="text-3xl md:text-6xl font-extrabold text-black leading-tight text-center md:text-left drop-shadow-md">
                Transform Your Ideas into
                <span className="text-orange-500"> Digital Reality</span>
              </h1>
              <p className="text-black text-lg md:text-2xl text-center md:text-left">
                Leverage advanced technology and expert services to bring your projects to life. Collaborate with <b>ArrayLogic Softwares Pvt. Ltd.</b> for transformative results!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-transform transform hover:scale-110 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=7620162336"
                >
                  Let’s Collaborate
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src={banner3}
                className="w-4/5 md:w-full  max-w-sm md:max-w-lg object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Transform Your Ideas"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
