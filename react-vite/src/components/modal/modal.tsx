import { RxCross1 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { Button } from "../button/button";

export type ModalProps = {
  outerClassName?: string;
  innerClassName?: string;
  title?: string;
  children: React.ReactNode;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onContinue: () => void;
};

export const Modal = ({ children, outerClassName, innerClassName, title, onClose, onContinue }: ModalProps) => {
  return (
    <div
      className={twMerge(
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-zinc-800/75",
        outerClassName,
      )}
    >
      <div className={twMerge("flex w-[90%] flex-col gap-y-2.5 rounded-xl bg-amber-50 p-2.5", innerClassName)}>
        <div className="flex flex-row-reverse items-end justify-between">
          <RxCross1 className="cursor-pointer p-1 text-2xl" onClick={() => onClose(false)} />
          {title && <h2 className="text-xl">{title}</h2>}
        </div>
        {children}
        <div className="flex flex-row-reverse gap-x-2">
          <Button className="rounded-md bg-orange-700/40 font-bold text-amber-900" onClick={() => onContinue()}>
            Delete
          </Button>
          <Button className="rounded-md bg-zinc-700/40 font-bold text-zinc-700" onClick={() => onClose(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
