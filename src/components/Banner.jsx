import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-25 px-4 flex flex-col md:flex-row my-10 mt-15  md:mt-20">
        <div className="w-full md:w-1/2 mt-10 md:mt-10">
          <div className="space-y-6 mt-10 md:ml-12">
            <h1 className=" text-xl  md:text-4xl font-bold ">
              Accelerate your growth trajectory with{" "}
              <span className="text-orange-600">LiftLogic’s</span> innovative{" "}
              <span className="text-orange-600">IT Commandos.</span>
            </h1>
          </div>
          <div className="mt-5 md:ml-12">
            <p>
              At LiftLogic Softwares Pvt. Ltd., we specialize in delivering
              innovative and efficient solutions for web development, software
              development, and application development. Our team is dedicated to
              helping businesses streamline their digital presence and achieve
              success through cutting-edge technology and tailor-made services.
              From dynamic websites to complex software applications, we ensure
              quality, scalability, and performance in every project.
            </p>
          </div>
          <div className="mt-10 md:ml-12">
  
            <a
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=7620162336"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-0 mt-0 md:mt-0 md:ml-24 ">
          <img
            src={banner}
            className="w-92 h-92"
            alt="Hey WE Are LiftLogic"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
