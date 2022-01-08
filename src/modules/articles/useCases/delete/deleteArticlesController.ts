import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteArticlesUseCase } from "./deleteArticlesUseCase";

class DeleteArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteArticlesUseCase = container.resolve(DeleteArticlesUseCase)

        await deleteArticlesUseCase.execute(id)

        return response.sendStatus(200)
    }
}
export { DeleteArticlesController }