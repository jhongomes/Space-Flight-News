import { inject, injectable } from "tsyringe";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class ListArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository) { }

    async execute(): Promise<Articles[]> {
        const articles = await this.articlesRepository.All();

        return articles;
    }
}
export { ListArticlesUseCase }