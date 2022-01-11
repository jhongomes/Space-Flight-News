import { EventsRepositoryInMemory } from "../../repositories/in-memory/EventsRepositoryInMemory";
import { CreateEventsUseCase } from "../create/createEventsUseCase";
import { ListEventsUseCase } from "./listEventsUseCase";

let createEventsUseCase: CreateEventsUseCase;
let eventsRepositoryInMemory: EventsRepositoryInMemory;
let listEventsUseCase: ListEventsUseCase;

describe("Create Event", () => {
    beforeEach(() => {
        eventsRepositoryInMemory = new EventsRepositoryInMemory();
        createEventsUseCase = new CreateEventsUseCase(eventsRepositoryInMemory);
        listEventsUseCase = new ListEventsUseCase(eventsRepositoryInMemory);
    })

    it("Should be able to list all events", async () => {
        await createEventsUseCase.execute({
            provider: 'Backend'
        })
        const all = await listEventsUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

})

