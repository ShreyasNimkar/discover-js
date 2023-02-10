import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="relative z-10">
        <div class="custom-shape-divider-top-1676038953">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
              fill="#282828"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-[80vh] flex justify-around items-center bg-pink-300">
        <div className="flex items-center justify-around h-full w-full">
          <div className="w-2/3 h-full flex items-center flex-col gap-4 justify-around p-28">
            <p className="font-semibold  w-full py-4 text-4xl">About Us</p>
            <p className="text-md  w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo similique expedita, tenetur, praesentium sit deleniti
              deserunt est animi laboriosam labore veritatis accusantium illum
              magni atque non voluptatibus. Maiores voluptatum quas voluptate
              quae vitae eligendi pariatur, repudiandae expedita possimus
              recusandae esse explicabo et aut praesentium maxime saepe harum
              ratione a vel?
            </p>
            <p className="text-md  w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, suscipit.
            </p>
          </div>
          <div className="w-1/3 h-full"></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
