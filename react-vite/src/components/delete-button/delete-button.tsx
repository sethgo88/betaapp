import { RxCross1 } from "react-icons/rx";

export const DeleteButton = ({ id, handleDelete }: { id: string; handleDelete: (id: string) => void }) => {
  return (
    <div className="grid rounded-sm border border-white p-2 py-3" onClick={() => handleDelete(id)}>
      <RxCross1 className="text-2xl text-emerald-950/50" />
    </div>
  );
};
