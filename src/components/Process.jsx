import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { GiProcessor } from "react-icons/gi";

// import {motion} from 'framer-motion';

function Process() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 bg-slate-300">
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-center pt-5 text-orange-400">
            Process
          </h1>
        </div>

        <div className=" ">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-red-500 font-bold text-center">
                Requirement Gathering
               
                <p className="text-orange-500">
                  The initial phase where we work closely with the client to
                  gather detailed requirements. This involves understanding
                  business goals, user needs, and technical constraints to
                  define a clear and comprehensive vision for the project.
                  Through workshops, interviews, and research, we ensure all
                  stakeholders are aligned on the project objectives.
                </p>
                </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Planning & Analysis
                <p className="text-orange-500">
                  A critical phase where we create a strategic roadmap for the
                  project. We perform a thorough analysis of the project scope,
                  define deliverables, set timelines, and allocate resources.
                  This phase involves risk assessment, feasibility analysis, and
                  crafting a detailed plan that outlines how the project will be
                  executed and managed.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Design
                <p className="text-orange-500">
                  In the design phase, we transform ideas into wireframes and
                  prototypes that reflect the desired user experience and
                  functionality. Our team focuses on creating visually
                  appealing, user-friendly interfaces that are consistent with
                  the client’s brand. We ensure that both the aesthetic and
                  usability aspects are fully optimized for an engaging
                  experience.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Development
                <p className="text-orange-500">
                  This phase involves coding and building the software solution
                  based on the finalized design. Our development team uses
                  modern programming languages and frameworks to build scalable,
                  efficient, and secure applications. We ensure that the
                  development process is agile, allowing for adjustments based
                  on ongoing feedback.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Testing
                <p className="text-orange-500">
                  Rigorous testing is conducted to ensure that the product is
                  free of bugs, meets performance expectations, and adheres to
                  the specified requirements. This includes unit testing,
                  integration testing, security testing, and user acceptance
                  testing. Our goal is to deliver a flawless product that works
                  seamlessly across devices and platforms.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Deployment
                <p className="text-orange-500">
                  Once the product has passed all quality checks, it is deployed
                  to the live environment. We handle the transition smoothly,
                  ensuring minimal downtime and seamless integration with
                  existing systems. Our team prepares for any potential
                  challenges during deployment and conducts final checks to
                  ensure everything functions as expected.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Monitoring & Support
                <p className="text-orange-500">
                  After deployment, we continuously monitor the system to ensure
                  optimal performance. Our support team is available to address
                  any issues, provide troubleshooting, and respond to queries.
                  We proactively track performance metrics to prevent problems
                  before they impact the end user.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Maintenance & Updates
                <p className="text-orange-500">
                  Post-launch, we provide ongoing maintenance to ensure the
                  solution remains up-to-date, secure, and efficient. This
                  includes regular updates to accommodate new features,
                  improvements to performance, and adapting the system to
                  evolving technology standards. We ensure that the software
                  remains robust and reliable.
                </p>
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white font-bold text-center">
                Communication & Feedback
                <p className="text-orange-500">
                  Throughout the entire project lifecycle, we maintain open and
                  transparent communication with our clients. We gather feedback
                  at each stage to ensure that the product meets their
                  expectations and deliver ongoing improvements. Regular
                  feedback loops help us refine the solution to better suit the
                  client’s evolving needs.
                </p>
              </h2>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Process;
