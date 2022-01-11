import { ArticlesRepositoryInMemory } from "../../repositories/in-memory/ArticlesRepositoryInMemory";
import { CreateArticlesUseCase } from "../create/createArticlesUseCase";
import { DeleteArticlesUseCase } from "./deleteArticlesUseCase";

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepositoryInMemory: ArticlesRepositoryInMemory;
let deleteArticlesUseCase: DeleteArticlesUseCase;

describe("Delete a article", () => {
    beforeEach(() => {
        articlesRepositoryInMemory = new ArticlesRepositoryInMemory();
        createArticlesUseCase = new CreateArticlesUseCase(articlesRepositoryInMemory);
        deleteArticlesUseCase = new DeleteArticlesUseCase(articlesRepositoryInMemory);
    });

    it("Should be able to exclude one article", async () => {
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
        const findId = await deleteArticlesUseCase.execute(article.id);

        expect(findId).toBe(undefined)
    });
})