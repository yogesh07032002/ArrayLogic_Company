import CareerPic from "../../public/CareerPic.jpg";

function Career() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  px-1 md:px-0  md:pb-20 bg-white text-black">
        <div className="mt-20 ">
          <img src={CareerPic} alt="Comming Soon"></img>
        </div>
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-center mt-10 md:mt-15">
            Current Openings
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-center mt-3 md:mt-15 text-orange-600">
            ❤️Shape the future with us!👉
          </h2>
          <p className="  text-center mt-2 md:mt-10 ">
            At ArrayLogic Softwares Pvt. Ltd., we are always on the lookout for
            talented individuals ready to make a difference in the tech world.
            Whether you are a seasoned professional or a fresh graduate, we
            offer exciting career opportunities in software development, data
            science, cloud computing, and more. Join our dynamic, fast-paced
            environment where innovation thrives, and your skills can grow to
            new heights. Be a part of a team that shapes the future of
            technology. Apply today and help us build the next big thing!
          </p>
          <div>
            <p className="text-center text-2xl font-bold mt-5 md:mt-5 ">
              Send Your CV 👇<br></br>
            </p>
            <div className=" md:flex md:flex-row md:justify-between w-full md:px-40 md:mt-10">
              <div className="md:text-left mt-3 text-red-700 md:mt-0 font-bold text-center">
                📧&nbsp;hr@arraylogic.com
              </div>
              <div className="  md:text-right mt-3 md:mb-0 text-red-700 font-bold text-center pb-5 md:pb-0">
                📞+917620162336
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
