import { Request, Response } from "express";
import prisma from "../client";
import { logger } from "../logs/logger";
// Creating a route
export async function createRoute(req: Request, res: Response) {
  try {
    const route = await prisma.route.create({
      data: req.body,
    });
    res.status(201).json({
      status: true,
      message: "Route Successfully Created",
      data: route,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
}
// Get all routes
export async function getRoutes(req: Request, res: Response) {
  const routes = await prisma.route.findMany();

  res.json({
    status: true,
    message: "Routes successfully fetched",
    data: routes,
  });
}
// Get route by id
export async function getRoute(req: Request, res: Response) {
  const params = req.params;
  if (!params.routeid) {
    res.json({
      status: false,
      message: "Route id is required",
    });
  }
  const route = await prisma.route.findFirst({
    where: {
      id: parseInt(params.routeid),
    },
  });

  res.json({
    status: true,
    message: "Route successfully fetched",
    data: route,
  });
}

// update single route
export async function updateRoute(req: Request, res: Response) {
  try {
    const params = req.params;
    if (!params.routeid) {
      res.json({
        status: false,
        message: "Route id is required",
      });
    }
    const route = await prisma.route.findFirst({
      where: {
        id: parseInt(params.routeid),
      },
    });

    if (!route) {
      res.status(401).json({
        status: false,
        message: "route not found",
      });
    }

    const updatedRoute = await prisma.route.update({
      where: {
        id: parseInt(params.routeid),
      },
      data: req.body,
    });

    res.json({
      status: true,
      message: "Route successfully updated",
      data: updatedRoute,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
}

// delete route
export async function deleteRoute(req: Request, res: Response) {
  const { routeid } = req.params;

  try {
    const route = await prisma.route.findFirst({
      where: {
        id: parseInt(routeid),
      },
    });

    if (!route) {
      res.status(401).json({
        status: false,
        message: "Route not found",
      });
    }

    await prisma.route.delete({
      where: {
        id: parseInt(routeid),
      },
    });
    const routes = await prisma.route.findMany();
    res.json({
      status: true,
      message: "Route successfully deleted",
      data: routes,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "server error",
    });
  }
}
