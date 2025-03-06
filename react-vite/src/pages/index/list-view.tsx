import { NavLink } from "react-router";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Route } from "@server/node_modules/.prisma/client";
import { ListItem } from "./components/list-item";
import { RxCross1, RxDropdownMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { Select } from "../../components/select/select";
import { Input } from "../../components/input/input";

export const HomeListView = () => {
  const [routes, setRoutes] = useState<Route[]>();
  const [showFilters, setShowFilters] = useState(true);
  const allRoutes = useRef([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/routes");
    if (response) {
      setRoutes(response.data.data);
      allRoutes.current = response.data.data;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await axios.delete(`http://localhost:5000/routes/${id}`);
    if (response) setRoutes(response.data.data);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toSearch: Route[] = allRoutes.current;
    if (!routes) return;
    const query = e.target.value.toLowerCase();
    if (query === "") {
      setRoutes(toSearch);
    } else {
      const searched = toSearch.filter((route) => {
        const name = route.name.toLowerCase();
        const grade = route.grade.toLowerCase();
        return name.includes(query) || grade.includes(query);
      });
      setRoutes(searched);
    }
  };

  if (!routes) {
    return <div>Loading</div>;
  }
  return (
    <ul className="m-auto max-w-sm text-yellow-950">
      <li className="border-b-2 border-emerald-950/50 py-2.5">
        <div className="flex justify-between text-lg">
          <span className="font-bold">Routes</span>{" "}
          <span className="cursor-pointer p-2" onClick={() => setShowFilters(!showFilters)}>
            <RxDropdownMenu />
          </span>
        </div>
        <div className={twMerge("flex flex-col gap-2", showFilters ? "" : "hidden")}>
          <Input name="routeSearch" placeholder="Search" onChange={(e) => handleSearch(e)} icon={<RxCross1 />} />
          <Select>
            <option value="alphaUp">A to Z ^</option>
            <option value="alphaDown">A to Z v</option>
            <option value="gradeUp">Grade ^</option>
            <option value="gradeDown">Grade v</option>
          </Select>
        </div>
      </li>
      {routes.map((route, i) => (
        <ListItem key={`${route}-${i}`} id={route.id} onDelete={() => handleDelete(route.id)}>
          <NavLink className="flex flex-1 justify-between py-2.5 text-lg" to={`routes/${route.id}`}>
            <span className="font-bold">{route.name}</span> <span>{route.grade}</span>
          </NavLink>
        </ListItem>
      ))}
    </ul>
  );
};
