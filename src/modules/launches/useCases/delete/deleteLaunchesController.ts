import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteLaunchesUseCase } from "./deleteLaunchesUseCase";

class DeleteLaunchesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteLaunchesUseCase = container.resolve(DeleteLaunchesUseCase)

        await deleteLaunchesUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteLaunchesController }