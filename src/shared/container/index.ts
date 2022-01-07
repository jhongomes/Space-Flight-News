import { container } from "tsyringe";
import { EventsRepository } from "../../modules/events/infra/typeorm/repositories/EventsRepository";
import { IEventsRepository } from "../../modules/events/repositories/IEventsRepository";

container.registerSingleton<IEventsRepository>(
    "EventsRepository",
    EventsRepository
)