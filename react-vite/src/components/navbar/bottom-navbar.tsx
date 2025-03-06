import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const BottomNavBar = ({ children }: { children: ReactNode[] }) => {
  const gridCols = ["grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4"];
  return (
    <div
      className={twMerge(
        "leading-12 fixed bottom-0 left-0 grid h-12 w-full cursor-pointer grid-cols-1 gap-px text-center font-bold uppercase text-white",
        `${gridCols[children.length - 1]}`,
      )}
    >
      {children.map((child, i) => (
        <div className="grid grid-cols-1" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};
