import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";

const getLocationBackMap = (location: string) => {
  const locationMap: { [key: string]: string } = {
    route: "/",
  };
  return locationMap[location];
};

export const TopNavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const backLocation = getLocationBackMap(location.pathname.split("/")[1]);
  return (
    <nav className="fixed top-0 flex w-full flex-col bg-emerald-950 text-white">
      <div className="flex h-16 flex-row-reverse items-center justify-between px-2.5">
        <div className="-translate-1/2 absolute left-1/2 top-1/2">
          <NavLink className="font-bold uppercase" to="/">
            Beta App
          </NavLink>
        </div>
        <div className="relative h-[37px] w-[37px] rounded-sm border border-white" onClick={() => setShowNav(!showNav)}>
          <div
            className={twMerge(
              "absolute left-2 top-2 w-5 origin-top-left border-b-2 border-white transition-all duration-100",
              showNav ? "w-[26px] rotate-45" : "w-5",
            )}
          ></div>
          <div
            className={twMerge("absolute left-2 top-[17px] w-5 border-b-2 border-white", showNav ? "hidden" : "")}
          ></div>
          <div
            className={twMerge(
              "absolute bottom-2 left-2 origin-bottom-left border-b-2 border-white transition-all duration-100",
              showNav ? "w-[26px] -rotate-45" : "w-5",
            )}
          ></div>
        </div>
        {backLocation && (
          <NavLink to="/">
            <div className="relative h-[37px] w-[37px] rounded-sm border border-white">
              <RxCaretLeft className="text-4xl" />
            </div>
          </NavLink>
        )}
      </div>
      <div className={twMerge("absolute bottom-0 w-full translate-y-full bg-emerald-900", showNav ? "" : "hidden")}>
        <ul>
          <li>
            <NavLink className="block p-2.5" to="/route/">
              Add New Route
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
