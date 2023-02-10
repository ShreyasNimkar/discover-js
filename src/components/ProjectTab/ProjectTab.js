import React from "react";
import Image from "next/image";
const ProjectTab = () => {
  return (
    <div className="w-full h-64 flex flex-wrap items-center justify-around mb-3 box-border border-[1px] hover:border-discoverYellow ease-in-out border-white bg-lightBlack-200">
      <div className="w-1/6 h-full flex justify-around items-center">
        <Image src="/twitter.png" alt="project" width={100} height={100} />
      </div>
      <div className="w-5/6 h-full">
        <div className="w-full h-full flex flex-col ">
          <div className="h-1/6">
            <p className="w-full h-full text-4xl font-bold px-2  border-l-2 text-discoverBlue border-b-2 border-white">
              Project name
            </p>
          </div>
          <div className="h-4/6">
            <p className="w-full h-full px-2 border-b-2 border-l-2 border-white">
              project description
            </p>
          </div>
          <div className="h-1/6">
            <p className="w-full h-full px-2  border-l-2">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
