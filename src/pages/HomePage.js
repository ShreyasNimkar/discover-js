import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "./HomeDivisions/Profile";
import AboutUs from "./HomeDivisions/AboutUs";

import Domains from "./HomeDivisions/Domains";
import Message from "./HomeDivisions/Message";
const HomePage = () => {
  return (
    <div className="overflow-x-hidden h-screen w-screen">
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <Profile />
      <AboutUs />
      <Domains />
      <Message />
    </div>
  );
};

export default HomePage;
