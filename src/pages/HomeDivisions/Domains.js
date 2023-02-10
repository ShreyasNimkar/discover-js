import DomainTab from "@/components/DomainTab/DomainTab";
import React from "react";
import Image from "next/image";
const Domains = () => {
  const domains = [
    "Web Development",
    "Content Writing",
    "Management",
    "Hackathons",
    "Workshops",
    "Design",
    "Artificial Intelligence",
    "Machine Learning",
    "App Development",
    "Game Development",
    "Video",
    "Dev Ops",
    "Dev Tools",
  ];

  return (
    <>
      <div id="domains" className="relative z-10">
        <div className="custom-shape-divider-top-1676040676">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#60B3DC"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full h-[80vh] flex items-center justify-around text-white bg-lightBlack-200">
        <div className="flex h-full w-full items-center justify-around">
          <div className="w-1/3 h-full">
            <Image
              src="Working.svg"
              className="h-full w-full"
              height={1000}
              alt="ppl"
              width={1000}
            />
          </div>
          <div className="w-2/3 h-full flex items-center justify-center gap-5 flex-col px-9">
            <p className="font-semibold text-4xl w-full">What we Do ?</p>
            <div className="w-full flex flex-wrap gap-2">
              {/* buttons */}
              {domains.map((domain, index) => {
                return <DomainTab domain={domain} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
