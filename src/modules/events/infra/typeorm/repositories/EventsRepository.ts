import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepository";
import { IEventsRepository } from "../../../repositories/IEventsRepository";
import { Events } from "../entities/Events";

class EventsRepository extends BaseRepository<Events> implements IEventsRepository {
    constructor() {
        super(Events)
    }

    async All(): Promise<Events[]> {
        const all = await this.repository.find({
            relations: ["articlesId"],
            take: 10
        });

        return all;
    }

    async findById(id: string): Promise<Events> {
        const events = await this.repository.findOne({ id })

        return events;
    }

    async findByProvider(provider: string): Promise<Events> {
        const providers = await this.repository.findOne({ provider })
        return providers;
    }

}
export { EventsRepository }