import { Router } from "express";
import { createRoutes, getRoutes } from "../controllers/routes";

const router = Router();

router.post("/", createRoutes);
router.get("/", getRoutes);
router.patch("/:routeId");
router.delete("/:routeId");

export default router;
