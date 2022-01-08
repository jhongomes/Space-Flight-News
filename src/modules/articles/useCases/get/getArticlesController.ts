import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetArticlesUseCase } from "./getArticlesUseCase";

class GetArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getArticlesUseCase = container.resolve(GetArticlesUseCase)

        const articles = await getArticlesUseCase.execute()

        return response.status(201).json(articles);
    }
}
export { GetArticlesController }