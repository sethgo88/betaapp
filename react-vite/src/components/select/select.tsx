type BaseSelectAttributes = React.ComponentPropsWithoutRef<"select">;

interface SelectProps extends BaseSelectAttributes {
  className?: string;
}

export const Select = (props: SelectProps) => {
  return <select className="rounded-md border border-b-zinc-200 p-2 outline-0" {...props} />;
};
