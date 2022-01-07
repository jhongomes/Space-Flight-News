import { Router } from "express"
import { eventsRoutes } from "./events.routes";
import { launchesRoutes } from "./launches.routes";

const router = Router();
router.use("/events", eventsRoutes)
router.use("/launches", launchesRoutes)

export { router }