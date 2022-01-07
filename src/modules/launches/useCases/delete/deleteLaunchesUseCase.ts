import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ILaunchesRepository } from "../../repositories/ILaunchesRepository";

@injectable()
class DeleteLaunchesUseCase {
    constructor(
        @inject("LaunchesRepository")
        private launchesRepository: ILaunchesRepository) { }

    async execute(id: string): Promise<void> {
        const launches = await this.launchesRepository.findById(id)

        if (!launches) throw new AppError("Launches does not exists!")

        await this.launchesRepository.Delete(launches);
    }
}
export { DeleteLaunchesUseCase }