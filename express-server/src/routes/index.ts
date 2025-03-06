import { Router } from "express";
import routeRoute from "./route.route";
// Index
const indexRoute = Router();
indexRoute.get("", async (req, res) => {
  res.json({ message: "Welcome User" });
});
indexRoute.use("/users", routeRoute);
export default indexRoute;
