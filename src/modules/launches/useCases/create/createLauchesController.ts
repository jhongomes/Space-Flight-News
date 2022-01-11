import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLaunchesUseCase } from "./createLaunchesUseCase";

class CreateLaunchesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { provider } = request.body;

        const createLaunchesUseCase = container.resolve(CreateLaunchesUseCase)

        const launches = await createLaunchesUseCase.execute({ provider })

        return response.status(201).json(launches);
    }
}

export { CreateLaunchesController }