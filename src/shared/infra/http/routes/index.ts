import { Router } from "express"
import { eventsRoutes } from "./events.routes";

const router = Router();
router.use("/events", eventsRoutes)

export { router }