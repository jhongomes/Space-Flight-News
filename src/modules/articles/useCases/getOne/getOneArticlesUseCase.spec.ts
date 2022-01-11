import { ArticlesRepositoryInMemory } from "../../repositories/in-memory/ArticlesRepositoryInMemory";
import { CreateArticlesUseCase } from "../create/createArticlesUseCase";

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepositoryInMemory: ArticlesRepositoryInMemory;

describe("Create a articles", () => {
    beforeEach(() => {
        articlesRepositoryInMemory = new ArticlesRepositoryInMemory();
        createArticlesUseCase = new CreateArticlesUseCase(articlesRepositoryInMemory);
    });
    it("should be able to create a new article", async () => {
        const article = await createArticlesUseCase.execute({
            id: "29d2b86a-0679-11ec-9a03-0242ac130003",
            featured: false,
            url: "http://articlesexemple.com",
            newsSite: "newsSite exemple",
            summary: "summary exemple",
            publishedAt: "publishedAt exemple",
            launches_id: "123",
            events_id: "123"
        });
        const findId = await articlesRepositoryInMemory.findById(article.id);
        expect(findId.id).toBe('29d2b86a-0679-11ec-9a03-0242ac130003')
    });
})