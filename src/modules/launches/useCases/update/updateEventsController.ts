import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLaunchesUseCase } from "./updateEventsUseCase";

class UpdateLaunchesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { provider } = request.body;

        const updateLaunchesUseCase = container.resolve(UpdateLaunchesUseCase)

        const launche = await updateLaunchesUseCase.execute({ id, provider })

        return response.status(201).json(launche);
    }
}

export { UpdateLaunchesController }