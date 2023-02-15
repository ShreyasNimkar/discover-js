import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useState } from "react";
const EditProjects = () => {
  const [modal, setModal] = useState("hidden");
  return (
    <>
      <div
        className={`bg-[rgba(0,0,0,0.7)] absolute z-30 top-0 left-0 flex items-center justify-around w-screen h-screen outline-none overflow-x-hidden overflow-y-auto ${modal}`}
      >
        <div className="modal-dialog bg-lightBlack-200 relative w-1/2 pointer-events-none">
          <div className="modal-content   border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-lightBlack-200  bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header  flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-white"
                id="exampleModalLabel"
              >
                Create Project
              </h5>
            </div>
            <div className="modal-body text-black relative p-4">
              <div className="form-group mb-6 flex items center justify-around">
                <input
                  type="text"
                  className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-white
    bg-lightBlack-100 bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    
    focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">{/*  */}</div>
              <div className="form-group mb-6">
                <textarea
                  className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-white
    bg-lightBlack-100 bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none
  "
                  id="exampleFormControlTextarea13"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group mb-6 flex items center justify-around">
                <input
                  type="text"
                  className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-white
    bg-lightBlack-100 bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
                  id="exampleInput7"
                  placeholder="Tags"
                />
              </div>
            </div>
            <div className="modal-footer gap-3 flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                onClick={() => {
                  setModal("hidden");
                }}
                className="px-6
      py-2.5
      bg-purple-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out
  "
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-around">
        <div className="w-full  h-[7%] font-bold text-3xl flex items-center justify-around">
          <p>Customize Your Projects !</p>
          <button
            onClick={() => {
              setModal("flex");
            }}
            className="inline-flex w-1/5 items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Create
          </button>
        </div>
        <div className="w-full h-[93%] flex items-center justify-around">
          <div className="border-[1px] overflow-y-scroll h-[98%] w-[98%] flex flex-wrap justify-around items-center gap-[1rem] pt-[1rem]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProjects;
