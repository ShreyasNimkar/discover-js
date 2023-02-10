import React from "react";

const ProjectTab = () => {
  return (
    <div className="w-full h-64 flex items-center justify-around">
      <div className="w-1/6 h-full">photo</div>
      <div className="w-5/6 h-full">
        <div className="w-full h-full flex flex-col ">
          <div className="h-1/6">
            <p className="w-full h-full text-4xl font-bold">project name</p>
          </div>
          <div className="h-4/6">
            <p className="w-full h-full">project description</p>
          </div>
          <div className="h-1/6">
            <p className="w-full h-full">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
