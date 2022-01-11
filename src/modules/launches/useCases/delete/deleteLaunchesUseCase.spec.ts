import { LaunchesRepositoryInMemory } from "../../repositories/in-memory/LaunchesRepositoryInMemory";
import { CreateLaunchesUseCase } from "../create/createLaunchesUseCase";
import { DeleteLaunchesUseCase } from "./deleteLaunchesUseCase";

let createLaunchesUseCase: CreateLaunchesUseCase;
let launchesRepositoryInMemory: LaunchesRepositoryInMemory;
let deleteLaunchesUseCase: DeleteLaunchesUseCase;

describe("Delete a launche", () => {
    beforeEach(() => {
        launchesRepositoryInMemory = new LaunchesRepositoryInMemory();
        createLaunchesUseCase = new CreateLaunchesUseCase(launchesRepositoryInMemory);
        deleteLaunchesUseCase = new DeleteLaunchesUseCase(launchesRepositoryInMemory);
    })

    it("Should be able to exclude one launche", async () => {
        const launche = await createLaunchesUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: "provider name"
        });
        const findId = await deleteLaunchesUseCase.execute(launche.id);
        expect(findId).toBe(undefined)
    });
})

