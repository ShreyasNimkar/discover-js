import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Link from "next/link";
import EditProjects from "./admin/EditProjects";
import ViewMessages from "./admin/ViewMessages";
import { useState } from "react";
const AdminPanel = () => {
  const [tabsValue, setTabsValue] = useState("projects");
  return (
    <div>
      <div className="w-[screen] h-[100vh] flex flex-col bg-black text-white items-center justify-around">
        <div class="w-full h-[10vh] text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="flex w-full -mb-px">
            <li class=" w-1/5">
              <Link
                href="/"
                class={
                  tabsValue == "backḥ"
                    ? `inline-block text-xl  p-4 w-full text-discoverPink border-b-2 border-discoverPink  active dark:text-discoverPink dark:border-discoverPink`
                    : "inline-block text-xl  w-full p-4 border-b-2 border-transparent  hover:text-gray-600 hover:border-discoverPink dark:hover:text-discoverPink"
                }
              >
                Projects
              </Link>
            </li>
            <li class="w-2/5">
              <button
                onClick={() => {
                  setTabsValue("projects");
                }}
                class={
                  tabsValue == "projects"
                    ? `inline-block text-xl p-4 w-full text-discoverBlue border-b-2 border-discoverBlue  active dark:text-discoverBlue dark:border-discoverBlue`
                    : "inline-block text-xl w-full p-4 border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Projects
              </button>
            </li>
            <li class="w-2/5">
              <button
                onClick={() => {
                  setTabsValue("messages");
                }}
                class={
                  tabsValue == "messages"
                    ? `inline-block text-xl p-4 w-full text-discoverBlue border-b-2 border-discoverBlue  active dark:text-discoverBlue dark:border-discoverBlue`
                    : "inline-block text-xl w-full p-4 border-b-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Messages
              </button>
            </li>
          </ul>
        </div>
        <div
          className={
            tabsValue == "projects" ? "block w-full h-[90vh]" : "hidden"
          }
        >
          <EditProjects />
        </div>
        <div
          className={
            tabsValue == "messages" ? "block w-full h-[90vh]" : "hidden"
          }
        >
          <ViewMessages />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
