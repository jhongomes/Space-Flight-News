import { inject, injectable } from "tsyringe";
import { ICreateArticlesDTO } from "../../dtos/ICreateArticlesDTO";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class CreateArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository) { }

    async execute({
        title,
        featured,
        url,
        newsSite,
        summary,
        publishedAt,
        launches_id,
        events_id,
    }: ICreateArticlesDTO): Promise<Articles> {
        const articles = new Articles();

        Object.assign(articles, {
            title,
            featured,
            url,
            newsSite,
            summary,
            publishedAt,
            launches_id,
            events_id,
        });

        const createArticles = await this.articlesRepository.Create(articles);

        return createArticles;
    }
}
export { CreateArticlesUseCase }