import { EventsRepositoryInMemory } from "../../repositories/in-memory/EventsRepositoryInMemory";
import { CreateEventsUseCase } from "../create/createEventsUseCase";
import { UpdateEventsUseCase } from "./updateEventsUseCase";

let createEventsUseCase: CreateEventsUseCase;
let eventsRepositoryInMemory: EventsRepositoryInMemory;
let updateEventsUseCase: UpdateEventsUseCase;

describe("Update Event", () => {
    beforeEach(() => {
        eventsRepositoryInMemory = new EventsRepositoryInMemory();
        createEventsUseCase = new CreateEventsUseCase(eventsRepositoryInMemory);
        updateEventsUseCase = new UpdateEventsUseCase(eventsRepositoryInMemory);
    })

    it("Should be able to update one events", async () => {
        const event = await createEventsUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: 'provider name'
        })
        await eventsRepositoryInMemory.findById(event.id);

        const updateEvent = await updateEventsUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: 'provider name events'
        })
        expect(updateEvent.provider).toBe("provider name events")
    })
})
