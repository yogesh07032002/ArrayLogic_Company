import React from "react";
import { TechstackList } from "../utils/TechStack";

function TechStack() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 ">
        <div>
        <h1 className="text-xl md:text-4xl font-bold text-center pt-5">Technologies Stack</h1>
        <p className="text-clip mt-4"> 👉 Including Programming Languages, Frameworks, Databases, Frontend, Backend, Cloud, Hostings Platforms, Tools and APIs</p>
        </div>
        <div className=" ">
          {TechstackList.map(tech=>(
            <h1>{tech.name}</h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
