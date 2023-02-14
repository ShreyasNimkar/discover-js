import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
const AdminPanel = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex items-center justify-around">
        <div className="flex flex-col h-full w-full items-center justify-around">
          <div className="w-full h-[7%] font-bold text-3xl flex items-center justify-around">
            Customize your Projects !
          </div>
          <div className="w-full h-[93%] flex items-center justify-around">
            <div className="overflow-y-scroll h-[95%] w-[96%] flex flex-wrap justify-around items-center gap-[1rem] pt-[1rem]">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
