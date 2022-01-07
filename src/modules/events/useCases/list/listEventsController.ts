import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEventsUseCase } from "./listEventsUseCase";

class ListEventsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listEventsUseCase = container.resolve(ListEventsUseCase)

        const events = await listEventsUseCase.execute()

        return response.status(201).json(events);
    }
}
export { ListEventsController }