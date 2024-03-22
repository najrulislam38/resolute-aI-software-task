import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="flex">
      <div className="w-[100px]">
        <Sidebar />
      </div>
      <div className="w-full h-screen grid grid-cols-12">
        <div className="col-span-9">
          {user ? (
            <div className=" px-10 pt-5 flex justify-between items-center">
              <div>
                <h1 className="font-medium text-2xl">Resolute AI</h1>
              </div>
              <div className="flex gap-5">
                <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
                <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <Outlet />
        </div>
        <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-5">
          {user ? (
            <div>
              <h1 className="text-xl">Members</h1>
              <div className="flex gap-3 mt-3">
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
