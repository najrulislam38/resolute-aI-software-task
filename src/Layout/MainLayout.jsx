import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const MainLayout = () => {
  const user = false;
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
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
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
