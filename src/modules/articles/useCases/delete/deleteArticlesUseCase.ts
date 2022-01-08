import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

@injectable()
class DeleteArticlesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository) { }

    async execute(id: string): Promise<void> {
        const article = await this.articlesRepository.findById(id);

        if (!article) throw new AppError("Article does not exists!")

        await this.articlesRepository.Delete(article);
    }
}
export { DeleteArticlesUseCase }