import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateArticlesUseCase } from "./updateArticlesUseCase";

class UpdateArticlesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { title, featured, url, newsSite, summary, publishedAt, launches_id, events_id } = request.body;

        const updateArticlesUseCase = container.resolve(UpdateArticlesUseCase)

        const article = await updateArticlesUseCase.execute({
            id,
            title,
            featured,
            url,
            newsSite,
            summary,
            publishedAt,
            launches_id,
            events_id
        })

        return response.status(201).json(article);
    }
}
export { UpdateArticlesController }