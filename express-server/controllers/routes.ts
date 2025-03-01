import { RequestHandler } from "express";
import { Route } from "../models/routes";

const ROUTES: Route[] = [];
export const createRoutes: RequestHandler = (req, res, next) => {
  const id = Math.random().toString();
  const name = (req.body.name as { text: string }).text;
  const type = (req.body.type as { text: string }).text;
  const grade = (req.body.grade as { text: string }).text;
  const newRoute = new Route(id, name, type, grade);
  ROUTES.push(newRoute);
  res
    .status(201)
    .json({ message: "Route created successfully", createdRoute: newRoute });
};

export const getRoutes: RequestHandler = (req, res, next) => {
  res.status(200).json({ routes: ROUTES });
};
