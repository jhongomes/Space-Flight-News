import { EventsRepositoryInMemory } from "../../../events/repositories/in-memory/EventsRepositoryInMemory";
import { CreateEventsUseCase } from "../../../events/useCases/create/createEventsUseCase";
import { LaunchesRepositoryInMemory } from "../../../launches/repositories/in-memory/LaunchesRepositoryInMemory";
import { CreateLaunchesUseCase } from "../../../launches/useCases/create/createLaunchesUseCase";
import { ArticlesRepositoryInMemory } from "../../repositories/in-memory/ArticlesRepositoryInMemory";
import { CreateArticlesUseCase } from "../create/createArticlesUseCase";
import { UpdateArticlesUseCase } from "./updateArticlesUseCase";

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepositoryInMemory: ArticlesRepositoryInMemory;
let createEventsUseCase: CreateEventsUseCase;
let createLaunchesUseCase: CreateLaunchesUseCase;
let eventsRepositoryInMemory: EventsRepositoryInMemory;
let launchesRepositoryInMemory: LaunchesRepositoryInMemory
let updateArticlesUseCase: UpdateArticlesUseCase;

describe("Delete a article", () => {
    beforeEach(() => {
        eventsRepositoryInMemory = new EventsRepositoryInMemory();
        launchesRepositoryInMemory = new LaunchesRepositoryInMemory();
        articlesRepositoryInMemory = new ArticlesRepositoryInMemory();
        createEventsUseCase = new CreateEventsUseCase(eventsRepositoryInMemory);
        createLaunchesUseCase = new CreateLaunchesUseCase(launchesRepositoryInMemory);
        createArticlesUseCase = new CreateArticlesUseCase(articlesRepositoryInMemory);
        updateArticlesUseCase = new UpdateArticlesUseCase(articlesRepositoryInMemory, eventsRepositoryInMemory, launchesRepositoryInMemory);
    });

    it("Should be able to update one  article", async () => {
        await createEventsUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: "provider name"
        })

        await createLaunchesUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            provider: "provider name sample"
        })

        await createArticlesUseCase.execute({
            id: "29d2b86a-0679-11ec-9a03-0242ac130003",
            featured: false,
            url: "http://articlesexemple.com",
            newsSite: "newsSite",
            summary: "summary exemple",
            publishedAt: "publishedAt exemple",
            launches_id: "29d2b86a-0679-11ec-9a03-0242ac130003",
            events_id: "29d2b86a-0679-11ec-9a03-0242ac130003"
        });

        const updateArticle = await updateArticlesUseCase.execute({
            id: "29d2b86a-0679-11ec-9a03-0242ac130003",
            featured: false,
            url: "http://articlesexemple.com",
            newsSite: "newsSite exemple",
            summary: "summary exemple",
            publishedAt: "publishedAt exemple",
            launches_id: "29d2b86a-0679-11ec-9a03-0242ac130003",
            events_id: "29d2b86a-0679-11ec-9a03-0242ac130003"
        })
        expect(updateArticle.newsSite).toBe("newsSite exemple")
        console.log(updateArticle)
    });
})