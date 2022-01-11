import { ArticlesRepositoryInMemory } from "../../repositories/in-memory/ArticlesRepositoryInMemory";
import { CreateArticlesUseCase } from "../create/createArticlesUseCase";
import { GetArticlesUseCase } from "./getArticlesUseCase";

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepositoryInMemory: ArticlesRepositoryInMemory;
let getArticlesUseCase: GetArticlesUseCase;

describe("List all articles", () => {
    beforeEach(() => {
        articlesRepositoryInMemory = new ArticlesRepositoryInMemory();
        createArticlesUseCase = new CreateArticlesUseCase(articlesRepositoryInMemory);
        getArticlesUseCase = new GetArticlesUseCase(articlesRepositoryInMemory);
    });
    it("Should be able to list all article", async () => {
        const article = await createArticlesUseCase.execute({
            featured: false,
            url: "http://articlesexemple.com",
            newsSite: "newsSite exemple",
            summary: "summary exemple",
            publishedAt: "publishedAt exemple",
            launches_id: "123",
            events_id: "123"
        });
        const all = await getArticlesUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });
})