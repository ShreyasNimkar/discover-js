import React from "react";

const DomainTab = (props) => {
  return (
    <div className="inline-flex items-center justify-center h-10 px-10  text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor- select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
      {props.domain}
    </div>
  );
};

export default DomainTab;
