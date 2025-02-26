type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonAttributes {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return <button className="bg-zinc-400 p-2 text-white" type="button" {...props} />;
};
