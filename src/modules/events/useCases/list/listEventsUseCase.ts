import { inject, injectable } from "tsyringe";
import { Events } from "../../infra/typeorm/entities/Events";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class ListEventsUseCase {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository) { }

    async execute(): Promise<Events[]> {
        const events = await this.eventsRepository.All();

        return events;
    }
}
export { ListEventsUseCase }