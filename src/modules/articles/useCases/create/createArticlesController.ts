import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateArticlesUseCase } from "./createArticlesUseCase";

class CreateArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { featured, url, newsSite, summary, publishedAt, launches_id, events_id } = request.body;

        const createArticlesUseCase = container.resolve(CreateArticlesUseCase)

        const article = await createArticlesUseCase.execute({
            featured,
            url,
            newsSite,
            summary,
            publishedAt,
            launches_id,
            events_id,
        })

        return response.status(201).json(article);
    }
}

export { CreateArticlesController }