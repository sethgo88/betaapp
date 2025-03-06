import { Router } from "express";
import {
  createRoute,
  deleteRoute,
  getRoute,
  getRoutes,
  updateRoute,
} from "../controllers/route.controller";

const routeRoute = Router();

routeRoute.post("", createRoute);
routeRoute.get("", getRoutes);
routeRoute.get("/:routeid", getRoute);
routeRoute.delete("/:routeid", deleteRoute);
routeRoute.patch("/:routeid", updateRoute);

export default routeRoute;
