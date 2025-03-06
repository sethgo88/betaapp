import { twMerge } from "tailwind-merge";
import { DeleteButton } from "../../../components/delete-button/delete-button";
import axios from "axios";
import { useState } from "react";

export type ListItemProps = Omit<React.ComponentPropsWithoutRef<"li">, "id"> & {
  onDelete?: (id: number) => Promise<void>;
  id: number;
  className?: string;
};

export const ListItem = (props: ListItemProps) => {
  const { children, onDelete, id, className, ...rest } = props;
  const [showDelete, setShowDelete] = useState(false);

  return (
    <li
      className={twMerge(
        "relative flex overflow-hidden border-b-2 border-emerald-950/10 hover:border-emerald-950/50",
        className,
      )}
      {...rest}
    >
      {children}
      {onDelete && (
        <>
          <DeleteButton onClick={() => setShowDelete(true)} />
          <div
            className={twMerge(
              "absolute grid h-full w-full cursor-pointer grid-cols-2 bg-white text-center text-xl font-bold leading-[50px] transition-all duration-200",
              showDelete ? "left-0" : "left-full",
            )}
          >
            <div className="bg-orange-700/40 text-amber-900" onClick={() => onDelete(id)}>
              Delete
            </div>
            <div className="bg-zinc-700/40 text-zinc-700" onClick={() => setShowDelete(false)}>
              Cancel
            </div>
          </div>
        </>
      )}
    </li>
  );
};
