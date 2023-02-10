import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full h-[92vh] flex justify-around items-center text-white bg-lightBlack">
      <div className="flex h-full w-full items-center justify-around">
        <div className="h-full w-1/3 p-4 flex flex-col item-center justify-around">
          <div className="flex flex-col w-full h-full items-center justify-end">
            <div className="font-semibold text-3xl text-center mb-5">
              That&apos;s me !
            </div>
            <Image
              src="/goku.png"
              alt="profile pic"
              width={1000}
              height={1000}
              className="h-auto w-11/12"
            />
          </div>
        </div>
        <div className="h-full w-2/3"></div>
      </div>
    </div>
  );
};

export default Profile;
