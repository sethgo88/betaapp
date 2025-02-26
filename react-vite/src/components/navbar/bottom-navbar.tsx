import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const BottomNavBar = ({ children }: { children: ReactNode[] }) => {
  const gridCols = ["grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4"];
  return (
    <div className={twMerge("fixed bottom-0 grid w-full grid-cols-1 gap-1", `${gridCols[children.length - 1]}`)}>
      {children.map((child, i) => (
        <div className="grid grid-cols-1" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};
