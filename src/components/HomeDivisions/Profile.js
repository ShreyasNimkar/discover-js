import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div
      id="top"
      className="w-full h-[92vh] flex justify-around items-center text-white bg-black"
    >
      <div className="flex h-full w-[85%] items-center justify-around">
        <div className="h-full w-1/3 p-4 flex flex-col item-center justify-around">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="font-semibold text-3xl text-center mb-6">
              That&apos;s us !
            </div>
            <Image
              src="/CSIRound.png"
              alt="profile pic"
              width={1000}
              height={1000}
              className="h-auto w-11/12 mb-20"
            />
          </div>
        </div>
        <div className="h-full w-2/3 flex flex-col items-center justify-center gap-3">
          <div className="px-3 w-full text-5xl">Computer Society of India</div>
          <div className="px-3 w-full text-xl">
            Student&apos;s Tech Chapter based in VIT Vellore
          </div>
          <div className="px-3 w-full text-xl flex items-center justify-start gap-4">
            <Image
              src="/instagram.png"
              alt=""
              className="h-[6vh] w-[6vh] cursor-pointer rounded-full"
              height={100}
              width={100}
              href=""
            />

            <Image
              src="/facebook.png"
              alt=""
              className="h-[6vh] w-[6vh] cursor-pointer rounded-full"
              height={100}
              width={100}
            />
            <Image
              src="/twitter.png"
              alt=""
              className="h-[6vh] w-[6vh] cursor-pointer "
              height={100}
              width={100}
            />
            <Image
              src="/linkedin.png"
              alt=""
              className="h-[6vh] w-[6vh] cursor-pointer rounded-full"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
