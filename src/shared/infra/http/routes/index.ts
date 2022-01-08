import { Router } from "express"
import { articlesRoutes } from "./articles.routes";
import { eventsRoutes } from "./events.routes";
import { launchesRoutes } from "./launches.routes";

const router = Router();

router.use("/events", eventsRoutes)
router.use("/launches", launchesRoutes)
router.use("/articles", articlesRoutes)

export { router }