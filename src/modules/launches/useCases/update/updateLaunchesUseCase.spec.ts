import { LaunchesRepositoryInMemory } from "../../repositories/in-memory/LaunchesRepositoryInMemory";
import { CreateLaunchesUseCase } from "../create/createLaunchesUseCase";
import { UpdateLaunchesUseCase } from "./updateEventsUseCase";

let createLaunchesUseCase: CreateLaunchesUseCase;
let launchesRepositoryInMemory: LaunchesRepositoryInMemory;
let updateLaunchesUseCase: UpdateLaunchesUseCase;

describe("Update Launche", () => {
    beforeEach(() => {
        launchesRepositoryInMemory = new LaunchesRepositoryInMemory();
        createLaunchesUseCase = new CreateLaunchesUseCase(launchesRepositoryInMemory);
        updateLaunchesUseCase = new UpdateLaunchesUseCase(launchesRepositoryInMemory);
    })

    it("Should be able to update one launche", async () => {
        const launche = await createLaunchesUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: 'provider name'
        })
        await launchesRepositoryInMemory.findById(launche.id);

        const updateLaunche = await updateLaunchesUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: 'provider name events'
        })
        expect(updateLaunche.provider).toBe("provider name events")
    })
})