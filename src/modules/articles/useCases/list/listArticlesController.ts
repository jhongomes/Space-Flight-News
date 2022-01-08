import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListArticlesUseCase } from "./listArticlesUseCase";

class ListArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listArticlesUseCase = container.resolve(ListArticlesUseCase)

        const articles = await listArticlesUseCase.execute()

        return response.status(201).json(articles);
    }
}
export { ListArticlesController }