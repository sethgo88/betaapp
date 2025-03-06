import { FaTrashCan } from "react-icons/fa6";

export type DeleteButtonProps = React.ComponentPropsWithoutRef<"button">;
export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <button
      className="grid cursor-pointer rounded-sm border border-white p-2 py-3"
      {...props}
      title="delete"
      type="submit"
    >
      <FaTrashCan className="text-2xl text-yellow-950/50 hover:text-yellow-950" />
    </button>
  );
};
