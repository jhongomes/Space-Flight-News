import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Articles } from "../../infra/typeorm/entities/Articles";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class GetOneArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository) { }

    async execute(id: string): Promise<Articles> {
        const articles = await this.articlesRepository.findById(id);

        if (!articles) throw new AppError("Article not found!")

        return articles;
    }
}
export { GetOneArticlesUseCase }