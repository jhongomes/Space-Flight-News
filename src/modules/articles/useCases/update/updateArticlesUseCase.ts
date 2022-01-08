import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateArticlesDTO } from "../../dtos/ICreateArticlesDTO";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class UpdateArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository) { }

    async execute({
        id,
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

        article.featured = featured;
        article.url = url;
        article.newsSite = newsSite;
        article.summary = summary;
        article.publishedAt = publishedAt;
        article.launches_id = launches_id;
        article.events_id = events_id;

        const updateArticle = await this.articlesRepository.Update(article);

        return updateArticle;
    }
}
export { UpdateArticlesUseCase }