import {
  UserCircleIcon,
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <img
          src={logo}
          alt="logo"
          className="rounded-full  border-2 border-primary"
        />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <HomeIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <UserGroupIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/video-applications"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/40 cursor-pointer transition-all"
          }
        >
          <VideoCameraIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        {isOpen ? (
          <button
            className={
              "px-2 py-1 rounded-2xl border border-primary hover:bg-primary text-secondary hover:text-white cursor-pointer  absolute bottom-16"
            }
          >
            Log Out{" "}
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            "p-2 rounded-2xl hover:bg-primary text-secondary/40 hover:text-white cursor-pointer mt-auto"
          }
        >
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
