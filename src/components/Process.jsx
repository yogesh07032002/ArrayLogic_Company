import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { GiProcessor } from "react-icons/gi";

function Process() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 bg-slate-200">
        <div>
        <h1 className="text-xl md:text-4xl font-bold text-center pt-5">Process</h1>
        </div>

        <div className=" ">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "cyan", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Requirement Gathering
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Planning & Analysis
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Design
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Development
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Testing
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Deployment
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Monitoring & Support
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "gray", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid gray" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Maintenance & Updates
              </h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "white" }}
              contentArrowStyle={{ borderRight: "20px solid white" }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<GiProcessor />}
            >
              <h2 className="vertical-timeline-element-title text-white">
                Communication & Feedback
              </h2>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Process;
