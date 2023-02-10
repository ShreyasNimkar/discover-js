import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ProjectTab from "@/components/ProjectTab/ProjectTab";
const Projects = () => {
  return (
    <div className="overflow-hidden  h-screen w-screen">
      <nav className="sticky z-50 top-0">
        <Navbar />
      </nav>
      <div className="w-full h-full top-0 absolute flex justify-around items-center bg-pink-300">
        <div className="flex flex-col h-full w-screen px-10">
          <div className="mt-10 py-10 w-full h-[10%] text-center text-4xl font-semibold flex justify-around items-center">
            <p>Check out my awesome projects below !</p>
          </div>
          <div className="p-3 overflow-y-scroll">
            <ProjectTab />
            <ProjectTab />
            <ProjectTab />
            <ProjectTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
