import { useState } from "react";
import { Input } from "../../components/input/input";
import { Select } from "../../components/select/select";
import { DeleteButton } from "../../components/delete-button/delete-button";
import { Textarea } from "../../components/textarea/textarea";
import { useParams } from "react-router";
import { routeList } from "../../assets/mock-data";

const routeTypes = ["sport", "boulder"] as const;
type routeTypes = (typeof routeTypes)[number];

const routeGrades = {
  sport: ["5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b"],
  boulder: ["v4", "v5", "v6", "v7", "v8", "v9", "v10"],
};

export const RouteListView = () => {
  const { routeId } = useParams();
  const routeBeta = routeList.find((route) => route.id === routeId);
  const [data, setData] = useState(routeBeta!.moveList);
  const [asset, setAsset] = useState({
    name: "",
  });
  const [routeType, setRouteType] = useState("sport");
  const [routeGrade, setRouteGrade] = useState("");

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addMove();
    }
  };

  const addMove = () => {
    const id = new Date();
    setData([...data, { type: "", id: id.getMilliseconds().toString(), text: "" }]);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
    const index = data.findIndex((x) => x.id === id);
    const item = data[index];
    item.text = e.target.value;
    setData([...data.slice(0, index), item, ...data.slice(index + 1)]);
  };

  const handleDelete = (id: string) => {
    const filtered = data.filter((x) => x.id !== id);
    setData(filtered);
  };
  return (
    <section className="p-3 text-emerald-950">
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Route Name"
          value={asset.name}
          onChange={(e) => setAsset({ ...asset, name: e.target.value })}
        />

        <div className="flex gap-2">
          <Select
            className="outline-0"
            name="routeType"
            onChange={(e) => setRouteType(e.target.value)}
            value={routeType}
          >
            {routeTypes.map((type, i) => (
              <option key={`${type}-${i}`} value={type}>
                {type}
              </option>
            ))}
          </Select>

          <Select
            className="outline-0"
            name="routeGrade"
            onChange={(e) => setRouteGrade(e.target.value)}
            value={routeGrade}
          >
            {routeType === "sport"
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
        {data.map((move, index) => (
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
        ))}
      </ul>
    </section>
  );
};
