import { EventsRepositoryInMemory } from "../../repositories/in-memory/EventsRepositoryInMemory";
import { CreateEventsUseCase } from "../create/createEventsUseCase";
import { DeleteEventsUseCase } from "./deleteEventsUseCase";

let createEventsUseCase: CreateEventsUseCase;
let eventsRepositoryInMemory: EventsRepositoryInMemory;
let deleteEventsUseCase: DeleteEventsUseCase;

describe("Delete a Event", () => {
    beforeEach(() => {
        eventsRepositoryInMemory = new EventsRepositoryInMemory();
        createEventsUseCase = new CreateEventsUseCase(eventsRepositoryInMemory);
        deleteEventsUseCase = new DeleteEventsUseCase(eventsRepositoryInMemory);
    })

    it("Should be able to exclude one event", async () => {
        const event = await createEventsUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: "provider name"
        });
        const findId = await deleteEventsUseCase.execute(event.id);
        expect(findId).toBe(undefined)
    });
})

