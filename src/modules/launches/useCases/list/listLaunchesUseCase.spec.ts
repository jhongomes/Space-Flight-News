import { LaunchesRepositoryInMemory } from "../../repositories/in-memory/LaunchesRepositoryInMemory";
import { CreateLaunchesUseCase } from "../create/createLaunchesUseCase";
import { ListLaunchesUseCase } from "./listLaunchesUseCase";

let createLaunchesUseCase: CreateLaunchesUseCase;
let launchesRepositoryInMemory: LaunchesRepositoryInMemory;
let listLaunchesUseCase: ListLaunchesUseCase;

describe("List Launches", () => {
    beforeEach(() => {
        launchesRepositoryInMemory = new LaunchesRepositoryInMemory();
        createLaunchesUseCase = new CreateLaunchesUseCase(launchesRepositoryInMemory);
        listLaunchesUseCase = new ListLaunchesUseCase(launchesRepositoryInMemory);
    })

    it("Should be able to list all launche", async () => {
        await createLaunchesUseCase.execute({
            provider: "provider name"
        });
        const all = await listLaunchesUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });
})