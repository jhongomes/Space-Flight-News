import { AppError } from "../../../../shared/errors/AppError";
import { LaunchesRepositoryInMemory } from "../../repositories/in-memory/LaunchesRepositoryInMemory";
import { CreateLaunchesUseCase } from "./createLaunchesUseCase";

let createLaunchesUseCase: CreateLaunchesUseCase;
let launchesRepositoryInMemory: LaunchesRepositoryInMemory;

describe("Create Launches", () => {
    beforeEach(() => {
        launchesRepositoryInMemory = new LaunchesRepositoryInMemory();
        createLaunchesUseCase = new CreateLaunchesUseCase(launchesRepositoryInMemory);
    })

    it("should be able to create a new launche", async () => {
        const launche = await createLaunchesUseCase.execute({
            provider: "provider name"
        });
        expect(launche).toHaveProperty("id")
    });

    it("should not be able to create a launche with exists provider", async () => {
        expect(async () => {
            const launche = await createLaunchesUseCase.execute({
                provider: "provider name"
            });
            await createLaunchesUseCase.execute(launche);
            await createLaunchesUseCase.execute(launche);

        }).rejects.toBeInstanceOf(AppError)
    });
})
