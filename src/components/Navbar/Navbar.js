import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center pr-1 justify-between flex-wrap border-b-[1px] bg-black h-[8vh] z-50">
        <div className="flex items-center flex-shrink-0 text-white ml-4">
          <Link
            className="font-semibold hover:underline text-xl tracking-[0.4em]"
            href="/#top"
          >
            <Image
              src="/whatsnext.png"
              alt="logo"
              className="h-1/6 w-1/2 pt-3"
              width={1000}
              height={1000}
            />
          </Link>
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
          <div className="text-md lg:flex-grow flex justify-end gap-7 mr-10">
            <Link
              href="/#about-us"
              className="block hover:underline mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              About Us
            </Link>
            <Link
              href="/#domains"
              className="block hover:underline mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Domains
            </Link>
            <Link
              href="/#contact-us"
              className="block mt-4 hover:underline lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Message
            </Link>
            <Link
              href="/Projects"
              className="block mt-4 hover:underline lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
