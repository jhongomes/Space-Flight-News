import { Router } from "express";
import { CreateEventsController } from "../../../../modules/events/useCases/create/createEventsController";
import { DeleteEventsController } from "../../../../modules/events/useCases/delete/deleteEventsController";
import { ListEventsController } from "../../../../modules/events/useCases/list/listEventsController";
import { UpdateEventsController } from "../../../../modules/events/useCases/update/updateEventsController";

const eventsRoutes = Router();
const listEventsController = new ListEventsController();
const createEventsController = new CreateEventsController();
const updateEventsController = new UpdateEventsController();
const deleteEventsController = new DeleteEventsController();

eventsRoutes.get("/", listEventsController.handle);
eventsRoutes.post("/", createEventsController.handle);
eventsRoutes.put("/:id", updateEventsController.handle);
eventsRoutes.delete("/:id", deleteEventsController.handle);

export { eventsRoutes }