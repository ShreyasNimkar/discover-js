import React from "react";

const Domains = () => {
  return (
    <>
      <div className="relative z-10">
        <div class="custom-shape-divider-top-1676040676">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full h-[80vh] flex items-center justify-around text-white bg-lightBlack">
        <div className="flex h-full w-full items-center justify-around">
          <div className="w-1/3 h-full"></div>
          <div className="w-2/3 h-full flex items-center justify-around flex-col p-16">
            <p className="font-semibold text-4xl py-4 w-full">What we Do ?</p>
            <div className="w-full h-full flex items-center justify-start flex-wrap">
              {/* buttons */}
              <div class="inline-flex items-center justify-center h-10 px-10  text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Web Development
              </div>
              <div class="inline-flex items-center justify-center h-10 px-10 py-1 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Artificial Intelligence
              </div>
              <div class="inline-flex items-center justify-center h-10 px-10 py-1 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Machine Learning
              </div>
              <div class="inline-flex items-center justify-center h-10 px-10 py-1 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Management
              </div>
              <div class="inline-flex items-center justify-center h-10 px-10 py-1 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Web Development
              </div>
              <div class="inline-flex items-center justify-center h-10 px-10 py-1 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
                Web Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
