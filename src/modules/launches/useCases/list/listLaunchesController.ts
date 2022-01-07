import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLaunchesUseCase } from "./listLaunchesUseCase";

class ListLaunchesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLaunchesUseCase = container.resolve(ListLaunchesUseCase)

        const launches = await listLaunchesUseCase.execute()

        return response.status(201).json(launches);
    }
}
export { ListLaunchesController }