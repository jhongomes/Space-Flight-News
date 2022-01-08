import { container } from "tsyringe";
import { ArticlesRepository } from "../../modules/articles/infra/typeorm/repositories/IArticlesRepository";
import { IArticlesRepository } from "../../modules/articles/repositories/IArticlesRepository";
import { EventsRepository } from "../../modules/events/infra/typeorm/repositories/EventsRepository";
import { IEventsRepository } from "../../modules/events/repositories/IEventsRepository";
import { LaunchesRepository } from "../../modules/launches/infra/typeorm/repositories/LaunchesRepository";
import { ILaunchesRepository } from "../../modules/launches/repositories/ILaunchesRepository";

container.registerSingleton<IEventsRepository>(
    "EventsRepository",
    EventsRepository
)

container.registerSingleton<ILaunchesRepository>(
    "LaunchesRepository",
    LaunchesRepository
)

container.registerSingleton<IArticlesRepository>(
    "ArticlesRepository",
    ArticlesRepository
)