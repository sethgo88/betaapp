import { twMerge } from "tailwind-merge";

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonAttributes {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return <button className={twMerge("bg-zinc-400 p-2 text-emerald-950", className)} type="button" {...rest} />;
};
