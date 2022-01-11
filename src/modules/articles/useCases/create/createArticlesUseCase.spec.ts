import { ArticlesRepositoryInMemory } from "../../repositories/in-memory/ArticlesRepositoryInMemory";
import { CreateArticlesUseCase } from "./createArticlesUseCase";

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepositoryInMemory: ArticlesRepositoryInMemory;

describe("Create a articles", () => {
    beforeEach(() => {
        articlesRepositoryInMemory = new ArticlesRepositoryInMemory();
        createArticlesUseCase = new CreateArticlesUseCase(articlesRepositoryInMemory);
    });
    it("should be able to create a new article", async () => {
        const article = await createArticlesUseCase.execute({
            featured: false,
            url: "http://articlesexemple.com",
            newsSite: "newsSite exemple",
            summary: "summary exemple",
            publishedAt: "publishedAt exemple",
            launches_id: "123",
            events_id: "123"
        });
        expect(article).toHaveProperty("id")
    });
})