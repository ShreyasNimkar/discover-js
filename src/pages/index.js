import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "./Profile";
import Projects from "./Projects";
import ProjectTab from "@/components/ProjectTab/ProjectTab";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Projects /> */}
      <Profile />
    </>
  );
}