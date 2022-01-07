import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Events } from "../../infra/typeorm/entities/Events";
import { IEventsRepository } from "../../repositories/IEventsRepository";

@injectable()
class DeleteEventsUseCase {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository) { }

    async execute(id: string): Promise<void> {
        const event = await this.eventsRepository.findById(id)

        if (!event) throw new AppError("Event does not exists!")

        await this.eventsRepository.Delete(event);
    }
}
export { DeleteEventsUseCase }