import AboutPic from "../../public/AboutPic.jpg";
import ScrollToTop from "react-scroll-to-top";

function AboutPage() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="text-2xl md:text-4xl font-bold text-center mt-20 ">
          <img src={AboutPic} className="" alt="Hey, we are LiftLogic" />
        </div>
        <div className="">
          <div className="space-y-6 mt-10 md:mt-15">
            <h1 className="text-xl md:text-4xl text-center font-bold">
              About Us
            </h1>
          </div>
          <div className="mt-8  px-10">
            <p>
              Welcome to LiftLogic Softwares Pvt. Ltd., your premier partner in
              innovative software solutions. Founded with a mission to empower
              businesses through technology, we are dedicated to delivering
              high-quality IT services that drive operational efficiency and
              foster growth. Our diverse portfolio includes software
              development, cloud computing, data analytics, artificial
              intelligence, and machine learning, enabling us to provide
              comprehensive solutions tailored to meet the unique needs of our
              clients. At LiftLogic, we pride ourselves on our client-centric
              approach. We understand that each organization has its challenges
              and goals, which is why we take the time to listen and collaborate
              closely with our clients. Our expert team of developers,
              designers, and strategists is committed to transforming your ideas
              into reality, providing you with the tools and insights needed to
              thrive in today’s fast-paced digital landscape. Our industry
              expertise spans various sectors, including healthcare, finance,
              retail, education, and manufacturing. By leveraging advanced
              technologies, we help organizations streamline their operations,
              enhance productivity, and improve customer experiences. Our
              solutions are not just about technology; they are about delivering
              measurable outcomes that align with your business objectives. In
              an ever-evolving technological environment, we are committed to
              continuous learning and innovation. Our team stays at the
              forefront of industry trends, ensuring that we can provide the
              latest solutions and insights to our clients. We believe that
              technology should be a catalyst for change, and we are here to
              guide you through that transformation. Join us on this exciting
              journey, and let LiftLogic Softwares Pvt. Ltd. be your trusted
              ally in navigating the complexities of the digital world.
              Together, we can unlock new opportunities for growth and success,
              helping your business achieve its full potential. Reach out to us
              today to discover how we can help you leverage technology to drive
              innovation and elevate your organization to new heights.
            </p>
          </div>
          <div>
            <hr className="border-2 border-orange-500 mt-14  " />
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        className=""
        style={{
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  );
}

export default AboutPage;
