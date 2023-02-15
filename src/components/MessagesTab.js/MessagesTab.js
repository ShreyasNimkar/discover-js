import React from "react";

const MessagesTab = () => {
  return (
    <div className="w-full h-64 flex flex-wrap items-center justify-around mb-3 box-border border-[1px] hover:border-discoverYellow ease-in-out border-white bg-lightBlack-200">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col ">
          <div className="h-1/6">
            <p className="w-full  h-full text-4xl font-bold px-2  border-l-2 text-discoverBlue border-b-2 border-white">
              Name
            </p>
          </div>
          <div className="h-4/6">
            <p className="w-full text-white h-full px-2 border-b-2 border-l-2 border-white">
              project description
            </p>
          </div>
          <div className="h-1/6 flex items-center justify-start">
            <button className="inline-flex w-1/5 items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center hover:text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2  hover:border-white border-solid  cursor-pointer select-none text-discoverPink border-discoverPink hover:border-2 focus:shadow-xs focus:no-underline">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesTab;
