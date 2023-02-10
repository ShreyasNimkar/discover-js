import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-2 ">
        <div className="flex items-center flex-shrink-0 text-white ml-4">
          <span className="font-semibold text-xl tracking-[0.75em]">
            Discover JS
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block justify-around flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow flex justify-end gap-16">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Projects
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Skills
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Skills
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
