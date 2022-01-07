import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEventsUseCase } from "./createEventsUseCase";

class CreateEventsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { provider } = request.body;

        const createEventsUseCase = container.resolve(CreateEventsUseCase)

        const event = await createEventsUseCase.execute(provider)

        return response.status(201).json(event);
    }
}

export { CreateEventsController }