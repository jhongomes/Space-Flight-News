import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadArticlesImagesUseCase } from "./uploadArticlesImagesUseCase";

class UploadArticlesImagesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const image_file = request.file.filename;

        const uploadArticlesImagesUseCase = container.resolve(UploadArticlesImagesUseCase)

        await uploadArticlesImagesUseCase.execute({ id, image_file })

        return response.status(204).send();
    }
}
export { UploadArticlesImagesController }