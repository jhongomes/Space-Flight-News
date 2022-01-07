import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Launches } from "../../infra/typeorm/entities/Launches";
import { ILaunchesRepository } from "../../repositories/ILaunchesRepository";

@injectable()
class CreateLaunchesUseCase {
    constructor(
        @inject("LaunchesRepository")
        private launchesRepository: ILaunchesRepository) { }

    async execute(provider: string): Promise<Launches> {
        const launches = new Launches();

        if (provider == " ") throw new AppError("Fill in fields!");

        const providerAlredyExists = await this.launchesRepository.findByProvider(provider)

        if (providerAlredyExists) {
            throw new AppError("Provider Already Exists!")
        }

        Object.assign(launches, {
            provider
        });

        const createLaunches = await this.launchesRepository.Create(launches);

        return createLaunches;
    }
}
export { CreateLaunchesUseCase }