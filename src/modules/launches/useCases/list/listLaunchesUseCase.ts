import { inject, injectable } from "tsyringe";
import { Launches } from "../../infra/typeorm/entities/Launches";
import { ILaunchesRepository } from "../../repositories/ILaunchesRepository";

@injectable()
class ListLaunchesUseCase {
    constructor(
        @inject("LaunchesRepository")
        private launchesRepository: ILaunchesRepository) { }

    async execute(): Promise<Launches[]> {
        const launches = await this.launchesRepository.All();

        return launches;
    }
}
export { ListLaunchesUseCase }