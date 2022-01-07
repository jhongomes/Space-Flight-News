import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEventsUseCase } from "./updateEventsUseCase";

class UpdateEventsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { provider } = request.body;

        const updateEventsUseCase = container.resolve(UpdateEventsUseCase)

        const event = await updateEventsUseCase.execute({ id, provider })

        return response.status(201).json(event);
    }
}

export { UpdateEventsController }