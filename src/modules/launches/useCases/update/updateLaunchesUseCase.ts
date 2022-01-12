import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Launches } from "../../infra/typeorm/entities/Launches";
import { ILaunchesRepository } from "../../repositories/ILaunchesRepository";

interface IRequest {
    id: string;
    provider: string;
}

@injectable()
class UpdateLaunchesUseCase {
    constructor(
        @inject("LaunchesRepository")
        private launchesRepository: ILaunchesRepository) { }

    async execute({ id, provider }: IRequest): Promise<Launches> {
        const launche = await this.launchesRepository.findById(id)

        if (!launche) throw new AppError("Event does not exists!")

        if (provider !== launche?.provider) {
            const providerAlredyExists = await this.launchesRepository.findByProvider(provider)

            if (providerAlredyExists) {
                throw new AppError("Provider Already exists!")
            }
        }

        launche.provider = provider;

        const updateLaunches = await this.launchesRepository.Update(launche);

        return updateLaunches;
    }
}
export { UpdateLaunchesUseCase }