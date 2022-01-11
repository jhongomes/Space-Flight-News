import { AppError } from "../../../../shared/errors/AppError";
import { EventsRepositoryInMemory } from "../../repositories/in-memory/EventsRepositoryInMemory";
import { CreateEventsUseCase } from "./createEventsUseCase";

let createEventsUseCase: CreateEventsUseCase;
let eventsRepositoryInMemory: EventsRepositoryInMemory;

describe("Create Event", () => {
    beforeEach(() => {
        eventsRepositoryInMemory = new EventsRepositoryInMemory();
        createEventsUseCase = new CreateEventsUseCase(eventsRepositoryInMemory)
    })

    it("should be able to create a new event", async () => {
        const event = await createEventsUseCase.execute({
            provider: "provider name"
        });
        expect(event).toHaveProperty("id")
    });

    it("should not be able to create a event with exists provider", async () => {
        expect(async () => {
            const event = await createEventsUseCase.execute({
                provider: "provider name"
            });
            await createEventsUseCase.execute(event);
            await createEventsUseCase.execute(event);

        }).rejects.toBeInstanceOf(AppError)
    });
})

