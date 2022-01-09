import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/storageProvider/IStorageProvider";
import { IArticlesRepository } from "../../repositories/IArticlesRepository";

interface IRequest {
    id: string;
    image_file: string;
}

@injectable()
class UploadArticlesImagesUseCase {
    constructor(
        @inject("ArticlesRepository")
        private articlesRepository: IArticlesRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider) { }

    async execute({ id, image_file }: IRequest): Promise<void> {
        const articles = await this.articlesRepository.findById(id);

        if (articles.imageUrl) {
            await this.storageProvider.delete(articles.imageUrl, "imageUrl");
        }
        await this.storageProvider.save(image_file, "imageUrl")

        articles.imageUrl = image_file;
        await this.articlesRepository.Create(articles);
    }
}
export { UploadArticlesImagesUseCase } 