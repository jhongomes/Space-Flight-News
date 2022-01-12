import { ICreateEventsDTO } from "../../dtos/ICreateEventsDTO";
import { Events } from "../../infra/typeorm/entities/Events";
import { IEventsRepository } from "../IEventsRepository";

class EventsRepositoryInMemory implements IEventsRepository {
    events: Events[] = [];

    async All(): Promise<Events[]> {
        const all = this.events;
        return all
    }

    async findById(id: string): Promise<Events> {
        const events = this.events.find((events) => events.id === id)
        return events
    }

    async findByProvider(provider: string): Promise<Events> {
        const events = this.events.find((events) => events.provider === provider)
        return events
    }

    async Create({
        id,
        provider
    }: ICreateEventsDTO): Promise<Events> {
        const events = new Events();

        Object.assign(events, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider
        })
        this.events.push(events);

        return events;
    }

    async Update(events: Events): Promise<Events> {
        this.events.push(events);
        return events;
    }

    async Delete(events: Events): Promise<void> {
        const findIndex = this.events.findIndex(events => events === events)

        this.events.splice(findIndex, 1)
    }

}
export { EventsRepositoryInMemory }