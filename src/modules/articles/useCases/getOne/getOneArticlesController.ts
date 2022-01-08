import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetOneArticlesUseCase } from "./getOneArticlesUseCase";

class GetOneArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getOneArticlesUseCase = container.resolve(GetOneArticlesUseCase)

        const articles = await getOneArticlesUseCase.execute(id)

        return response.status(201).json(articles);
    }
}
export { GetOneArticlesController }