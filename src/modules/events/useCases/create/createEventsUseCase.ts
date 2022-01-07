import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Events } from "../../infra/typeorm/entities/Events";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class CreateEventsUseCase {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository) { }

    async execute(provider: string): Promise<Events> {
        const events = new Events();

        if (provider == " ") throw new AppError("Fill in fields!");

        const providerAlredyExists = await this.eventsRepository.findByProvider(provider)

        if (providerAlredyExists) {
            throw new AppError("Provider Already Exists!")
        }

        Object.assign(events, {
            provider
        });

        const createEvents = await this.eventsRepository.Create(events);

        return createEvents;
    }
}
export { CreateEventsUseCase }