import AboutPic from "../../public/AboutPic.jpg";
import ScrollToTop from "react-scroll-to-top";

function AboutPage() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 py-12">
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={AboutPic} className="rounded-xl shadow-lg w-full" alt="About LiftLogic" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-extrabold text-orange-600 mb-4">Who We Are</h1>
              <p className="text-lg leading-relaxed mb-4">
                Welcome to <strong>ArrayLogic Softwares Pvt. Ltd.</strong>, your dedicated partner in cutting-edge software solutions. We are passionate about driving business growth and operational efficiency through innovative technology.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                With a team of highly skilled developers, designers, and strategists, we specialize in delivering robust, scalable, and customized digital solutions. From enterprise-level applications to cloud-based services, we empower businesses to thrive in an ever-evolving digital landscape.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our core values—<strong>innovation, integrity, and excellence</strong>—drive our approach. We believe in fostering long-term partnerships by delivering high-quality software products that enhance user experiences and streamline business operations.
              </p>
            </div>
          </section>

          <section className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Our Expertise</h2>
              <p>
                We offer a broad range of services, including software development, cloud solutions, data analytics, artificial intelligence, and machine learning. Our tailored solutions meet the unique demands of diverse industries such as healthcare, finance, retail, education, and manufacturing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Client-Centric Approach</h2>
              <p>
                At ArrayLogic, we believe in building strong partnerships. Our team of expert developers, designers, and strategists work closely with clients to transform ideas into impactful solutions that foster business growth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Innovation & Growth</h2>
              <p>
                We stay ahead of technological trends, ensuring our clients benefit from the latest advancements. Our commitment to continuous learning and innovation helps us deliver measurable outcomes that align with your business goals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-2">Join Us</h2>
              <p>
                Let <strong>LiftLogic Softwares Pvt. Ltd.</strong> be your guide in navigating the complexities of the digital world. Together, we'll unlock new opportunities and help your business achieve its full potential.
              </p>
            </div>
          </section>

          <div className="mt-12">
            <hr className="border-t-4 border-orange-600 w-1/2 mx-auto" />
          </div>
        </div>
      </div>

      <ScrollToTop
        smooth
        className="flex justify-center items-center"
        style={{
          backgroundColor: "#F97316",
          color: "black",
          width: "50px",
          height: "50px",
          borderRadius: "9999px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </>
  );
}

export default AboutPage;
