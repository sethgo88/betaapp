import { twMerge } from "tailwind-merge";

type BaseSelectAttributes = React.ComponentProps<"select">;

interface SelectProps extends BaseSelectAttributes {
  className?: string;
}

export const Select = (props: SelectProps) => {
  const { className, ...rest } = props;
  return <select className={twMerge("rounded-md bg-amber-600/20 p-2 outline-0", className)} {...rest} />;
};
