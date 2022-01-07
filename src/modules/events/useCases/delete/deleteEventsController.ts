import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEventsUseCase } from "./deleteEventsUseCase";

class DeleteEventsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteEventsUseCase = container.resolve(DeleteEventsUseCase)

        await deleteEventsUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteEventsController }