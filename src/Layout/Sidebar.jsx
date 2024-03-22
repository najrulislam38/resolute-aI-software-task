import {
  UserCircleIcon,
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user } = useAuth();
  // console.log(isOpen);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Log Out!");
        setIsOpen(false);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        setIsOpen(false);
      });
  };
  return (
    <div className="h-screen top-0 border-r-2 border-secondary/20 fixed">
      <div className="flex flex-col items-center gap-5 h-full py-5 px-4 ">
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
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/80 cursor-pointer transition-all"
          }
        >
          <HomeIcon className="h-7 w-7 group-hover:text-white" />
        </NavLink>
        <NavLink
          to="/add-application"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/80 cursor-pointer transition-all"
          }
        >
          <PlusCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/application-list"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/80 cursor-pointer transition-all"
          }
        >
          <ClipboardDocumentListIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/80 cursor-pointer transition-all"
          }
        >
          <UserGroupIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/video-applications"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-primary text-secondary/80 cursor-pointer transition-all"
          }
        >
          <VideoCameraIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        {isOpen ? (
          <button
            onClick={handleLogOut}
            className={
              "px-2 py-1 rounded-2xl border border-primary hover:bg-primary text-secondary hover:text-white cursor-pointer  absolute bottom-16"
            }
          >
            Log Out{" "}
          </button>
        ) : (
          ""
        )}
        {user ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={
              "p-2 rounded-2xl hover:bg-primary text-secondary/80 hover:text-white cursor-pointer mt-auto"
            }
          >
            <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              className={
                "px-2 py-1 rounded-2xl bg-secondary/80 border border-primary hover:bg-primary  text-white cursor-pointer"
              }
            >
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
