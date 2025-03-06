import { twMerge } from "tailwind-merge";

type BaseInputAttributes = React.ComponentPropsWithoutRef<"input">;

interface InputProps extends BaseInputAttributes {
  className?: string;
  icon?: React.ReactNode;
}

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        "rounded-lg border-b border-zinc-50 bg-amber-600/20 p-2 font-bold text-yellow-950 outline-0",
        className,
      )}
      {...rest}
    />
  );
};
