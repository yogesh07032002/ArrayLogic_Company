import about from '../Abouts/about.png';

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white pt-0 mt-0">
        <div className="w-full md:w-1/2 mt-0 md:mt-0">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-orange-500 text-center md:mt-10 md:mr-10">
              About Us
            </h1>
          </div>
          <div className="mt-10 text-black">
            <p>
              At <b className="text-blue-600">ArrayLogic Softwares Pvt. Ltd.</b>{" "}
              our expert engineers are dedicated to guiding customers through
              their digital transformation journey. <br />
              <br />
              We are not just a software company; we offer profound technology
              expertise, excellent delivery capabilities, and in-depth domain
              knowledge across various sectors. This enables us to efficiently
              and successfully deliver solutions that drive customer success.{" "}
              <br />
              <br />
              We specialize in building custom applications tailored to your
              specific business needs in a cost-effective manner. Our commitment
              is to help you achieve growth and success with innovative
              technology solutions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-0 mt-0 md:mt-0 md:ml-24">
          <img
            src={about}
            className="w-92 h-92"
            alt="Hey We Are ArrayLogic"
          />
        </div>
      </div>
    </>
  );
}

export default About;
