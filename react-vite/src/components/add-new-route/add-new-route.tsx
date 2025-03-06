import axios from "axios";
import { BrowserRouter, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";

export type AddNewRouteProps = {
  children: React.ReactNode;
  className?: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AddNewRoute = ({ children, className, onClose }: AddNewRouteProps) => {
  const navigate = useNavigate();
  const handleAddNew = async () => {
    const response = await axios.post("http://localhost:5000/routes", { name: "New Route", type: "", grade: "" });
    if (response) {
      onClose(false);
      navigate(`/routes/${response.data.data.id}`);
    }
  };
  return (
    <div onClick={handleAddNew} className={twMerge("cursor-pointer", className)}>
      {children}
    </div>
  );
};
