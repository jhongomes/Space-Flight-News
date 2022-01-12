import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEventsRepository } from "../../../events/repositories/IEventsRepository";
import { ILaunchesRepository } from "../../../launches/repositories/ILaunchesRepository";
import { ICreateArticlesDTO } from "../../dtos/ICreateArticlesDTO";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class UpdateArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository,
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository,
        @inject("LaunchesRepository")
        private launchesRepository: ILaunchesRepository) { }

    async execute({
        id,
        title,
        featured,
        url,
        newsSite,
        summary,
        publishedAt,
        launches_id,
        events_id,
    }: ICreateArticlesDTO): Promise<Articles> {
        const article = await this.articlesRepository.findById(id)

        if (!article) throw new AppError("Article does not exists!")

        const launchesId = await this.launchesRepository.findById(launches_id);

        if (!launchesId) throw new AppError("Launche does not exists!")

        const eventsId = await this.eventsRepository.findById(events_id);

        if (!eventsId) throw new AppError("Event does not exists!")

        article.title = title;
        article.featured = featured;
        article.url = url;
        article.newsSite = newsSite;
        article.summary = summary;
        article.publishedAt = publishedAt;
        article.launches_id = launches_id;
        article.events_id = events_id;

        const updateArticle = await this.articlesRepository.Update({
            ...article,
            eventsId,
            launchesId
        })

        return updateArticle;
    }
}
export { UpdateArticlesUseCase }