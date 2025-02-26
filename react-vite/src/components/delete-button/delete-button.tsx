export const DeleteButton = ({ id, handleDelete }: { id: string; handleDelete: (id: string) => void }) => {
  return (
    <div className="grid rounded-sm border border-white p-2 py-3" onClick={() => handleDelete(id)}>
      <div className="col-start-1 row-start-1 w-5 rotate-45 border border-b-white"></div>
      <div className="col-start-1 row-start-1 w-5 -rotate-45 border border-b-white"></div>
    </div>
  );
};
