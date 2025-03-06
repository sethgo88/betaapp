import { Outlet } from "react-router";
import { TopNavBar } from "../components/navbar/top-navbar";

export const BaseLayout = () => {
  return (
    <main className="pt-14">
      <TopNavBar />
      <div className="p-2.5">
        <Outlet />
      </div>
    </main>
  );
};
