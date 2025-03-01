import { NavLink } from "react-router";
import { routeList } from "../../assets/mock-data";

export const HomeListView = () => {
  return (
    <ul className="m-auto max-w-sm text-emerald-950">
      <li className="border-b-2 border-emerald-950/50">
        <div className="flex justify-between py-2.5 text-lg">
          <span className="font-bold">Route Name</span> <span>Grade</span>
        </div>
      </li>
      {routeList.map((route, i) => (
        <li key={`${route}-${i}`}>
          <NavLink
            className="flex justify-between border-b-2 border-emerald-950/10 py-2.5 text-lg"
            to={`route/${route.id}`}
          >
            <span className="font-bold">{route.name}</span> <span>{route.grade}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
