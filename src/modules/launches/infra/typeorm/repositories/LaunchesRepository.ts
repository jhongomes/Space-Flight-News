import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepository";
import { ILaunchesRepository } from "../../../repositories/ILaunchesRepository";
import { Launches } from "../entities/Launches";

class LaunchesRepository extends BaseRepository<Launches> implements ILaunchesRepository {
    constructor() {
        super(Launches)
    }

    async All(): Promise<Launches[]> {
        const all = await this.repository.find({
            relations: ["articlesID"],
            take: 10,
        });
        return all;
    }

    async findById(id: string): Promise<Launches> {
        const events = await this.repository.findOne({ id })

        return events;
    }

    async findByProvider(provider: string): Promise<Launches> {
        const providers = await this.repository.findOne({ provider })
        return providers;
    }

}
export { LaunchesRepository }