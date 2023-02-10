import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "./HomeDivisions/Profile";
import AboutMe from "./HomeDivisions/AboutMe";

import Domains from "./HomeDivisions/Domains";
const HomePage = () => {
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <Profile />
      <AboutMe />
      <Domains />
    </div>
  );
};

export default HomePage;
