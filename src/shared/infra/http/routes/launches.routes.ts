import { Router } from "express";
import { CreateLaunchesController } from "../../../../modules/launches/useCases/create/createLauchesController";
import { DeleteLaunchesController } from "../../../../modules/launches/useCases/delete/deleteLaunchesController";
import { ListLaunchesController } from "../../../../modules/launches/useCases/list/listLaunchesController";
import { UpdateLaunchesController } from "../../../../modules/launches/useCases/update/updateEventsController";

const launchesRoutes = Router();
const listLaunchesController = new ListLaunchesController();
const createLaunchesController = new CreateLaunchesController();
const updateLaunchesController = new UpdateLaunchesController();
const deleteLaunchesController = new DeleteLaunchesController();

launchesRoutes.get("/", listLaunchesController.handle);
launchesRoutes.post("/", createLaunchesController.handle);
launchesRoutes.put("/:id", updateLaunchesController.handle);
launchesRoutes.delete("/:id", deleteLaunchesController.handle);

export { launchesRoutes }