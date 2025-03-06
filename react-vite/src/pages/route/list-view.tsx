import { useEffect, useState } from "react";
import { Input } from "@components/input/input";
import { Select } from "@components/select/select";
import { useNavigate, useParams } from "react-router";
import { Route } from "@server/node_modules/.prisma/client";
import axios from "axios";
import { BottomNavBar } from "@components/navbar/bottom-navbar";
import { Modal } from "@components/modal/modal";

const routeTypes = ["sport", "boulder"] as const;
type routeTypes = (typeof routeTypes)[number];

const routeGrades = {
  sport: ["5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b"],
  boulder: ["v4", "v5", "v6", "v7", "v8", "v9", "v10"],
};

export const RouteListView = () => {
  const { routeId } = useParams();
  const navigate = useNavigate();

  const [asset, setAsset] = useState<Route>();
  const [showCancelModal, setShowCancelModal] = useState(false);

  if (!routeId) {
  } else {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/routes/${routeId}`);
      setAsset(response.data.data);
    };

    useEffect(() => {
      fetchData();
    }, []);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: any = {}; //fix any type
    for (let [key, value] of formData.entries()) {
      payload[key] = value;
    }
    const response = await axios.patch(`http://localhost:5000/routes/${routeId}`, payload);
    if (response) {
      console.log(response.data.message);
    }
  };

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:5000/routes/${routeId}`);
    if (response) {
      navigate("/");
    }
  };

  // const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     addMove();
  //   }
  // };

  // // const addMove = () => {
  // //   const id = new Date();
  // //   setData([...data, { type: "", id: id.getMilliseconds().toString(), text: "" }]);
  // // };
  // const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
  //   const index = data.findIndex((x) => x.id === id);
  //   const item = data[index];
  //   item.text = e.target.value;
  //   setData([...data.slice(0, index), item, ...data.slice(index + 1)]);
  // };

  // const handleDelete = (id: string) => {
  //   const filtered = data.filter((x) => x.id !== id);
  //   setData(filtered);
  // };
  if (!asset) {
    return <div>Loading</div>;
  }
  return (
    <>
      <section className="p-3 pb-12 text-yellow-950">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Route Name"
              value={asset.name}
              name="name"
              onChange={(e) => setAsset({ ...asset, name: e.target.value })}
            />

            <div className="flex gap-2">
              <Select
                name="type"
                onChange={(e) => {
                  setAsset({ ...asset, type: e.target.value });
                }}
                value={asset.type}
              >
                {routeTypes.map((type, i) => (
                  <option key={`${type}-${i}`} value={type}>
                    {type}
                  </option>
                ))}
              </Select>

              <Select name="grade" onChange={(e) => setAsset({ ...asset, grade: e.target.value })} value={asset.grade}>
                {asset.type === "sport"
                  ? routeGrades.sport.map((type, i) => (
                      <option key={`${type}-${i}`} value={type}>
                        {type}
                      </option>
                    ))
                  : routeGrades.boulder.map((type, i) => (
                      <option key={`${type}-${i}`} value={type}>
                        {type}
                      </option>
                    ))}
              </Select>
            </div>
          </div>
          <ul className="mt-3 border-t border-zinc-600 pt-2">
            {/* {moveList.map((move, index) => (
          <li className="flex flex-row items-center justify-between gap-2 py-0.5" key={`move-${index}`}>
            <Textarea
              handleOnChange={handleOnChange}
              handleOnKeyDown={handleOnKeyDown}
              value={move.text}
              id={move.id}
              className="border-l-2 border-zinc-600 pl-2"
            />
            <DeleteButton id={move.id} handleDelete={handleDelete} />
          </li>
        ))} */}
          </ul>
          <BottomNavBar
            children={[
              <button type="submit" className="bg-emerald-950">
                Save
              </button>,
              <button type="button" onClick={() => setShowCancelModal(true)} className="bg-emerald-950">
                Delete
              </button>,
            ]}
          ></BottomNavBar>
        </form>
      </section>
      {showCancelModal && (
        <Modal onContinue={handleDelete} onClose={setShowCancelModal}>
          Are you sure you want to delete this route beta?
        </Modal>
      )}
    </>
  );
};
