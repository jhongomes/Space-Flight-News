import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Events } from "../../infra/typeorm/entities/Events";
import { IEventsRepository } from "../../repositories/IEventsRepository";

interface IRequest {
    id?: string;
    provider: string;
}

@injectable()
class UpdateEventsUseCase {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository) { }

    async execute({ id, provider }: IRequest): Promise<Events> {
        const event = await this.eventsRepository.findById(id)

        if (!event) throw new AppError("Event does not exists!")

        if (provider !== event?.provider) {
            const providerAlredyExists = await this.eventsRepository.findByProvider(provider)

            if (providerAlredyExists) {
                throw new AppError("Provider Already exists!")
            }
        }

        event.provider = provider;

        const updateEvent = await this.eventsRepository.Update(event);

        return updateEvent;
    }
}
export { UpdateEventsUseCase }