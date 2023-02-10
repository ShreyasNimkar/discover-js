import MessageForm from "@/components/MessageForm/MessageForm";
import React from "react";
import Image from "next/image";
const Message = () => {
  return (
    <>
      <div id="contact-us" className="relative z-10">
        <div className="custom-shape-divider-top-1676053791">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="#282828"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
              fill="#282828"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full h-[94vh] flex items-center justify-around bg-discoverBlue">
        <div className="flex h-full w-full items-center justify-around">
          <div className="w-2/3 h-full ">
            <div className="w-full h-full flex items-center justify-around">
              <MessageForm />
            </div>
          </div>
          <div className="w-1/3 h-full  flex items-center flex-col gap-4 justify-center">
            <p className="font-semibold  w-full py-4 text-4xl">Contact Us</p>
            <Image
              src="Mail.svg"
              className="h-2/5 w-full"
              height={1000}
              alt="ppl"
              width={1000}
            />
            <p className="text-md  w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, suscipit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
