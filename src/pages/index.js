import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "../components/HomeDivisions/Profile";
import Projects from "./Projects";

// import Profile from "../components/HomeDivisions/Profile";
import AboutUs from "../components/HomeDivisions/AboutUs";

import Domains from "../components/HomeDivisions/Domains";
import Message from "../components/HomeDivisions/Message";
import ProjectTab from "@/components/ProjectTab/ProjectTab";
import HomePage from "./HomePage";
import Admin from "./admin";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen">
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>
        <Profile />
        <AboutUs />
        <Domains />
        <Message />
      </div>
    </>
  );
}
