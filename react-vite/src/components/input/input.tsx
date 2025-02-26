import { twMerge } from "tailwind-merge";

type BaseInputAttributes = React.ComponentPropsWithoutRef<"input">;

interface InputProps extends BaseInputAttributes {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return <input className={twMerge("border-b border-zinc-50 pt-2 outline-0", className)} {...rest} />;
};
